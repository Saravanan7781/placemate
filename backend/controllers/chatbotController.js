const axios = require('axios');
const InterviewExperience = require('../models/interviewExperienceModels/interviewExperienceModel');
const Company = require('../models/companyModel/companyModel');
const mongoose = require('mongoose');
const GEMINI_API_KEY = process.env.GENAI_API_KEY;
const { marked } = require('marked');


function extractCompanyName(prompt) {
  const match = prompt.match(/(?:about|for)\s+([a-zA-Z]+)/i);
  return match ? match[1].toLowerCase() : null;
}

const postQueryToGemini = async (req, res) => {
  try {
    const { userPrompt } = req.body;
    const companyName = extractCompanyName(userPrompt) || 'presidio';


    const experiences = await InterviewExperience.find()
      .populate('company_id', 'name')
      .exec();

    // 2) Filter by the requested company name
    const filteredExperiences = experiences.filter(
      (exp) => exp.company_id.name.toLowerCase() === companyName
    );

    if (filteredExperiences.length === 0) {
      return res.json({ response: 'No experiences found for that company.' });
    }

    // 3) Build context text
    const contextText = filteredExperiences
      .map((doc, i) => `Person ${i + 1}: ${doc.interview_experience}`)
      .join('\n\n');

    // 4) Assemble prompt
    const fullPrompt = `
You are a student-friendly interview assistant. Use the following experiences to help answer:

${contextText}

User asked: "${userPrompt}"

Now summarize clearly. Highlight what rounds happened, what topics were asked, and give helpful tips.
`;

    // 5) Call Gemini
    const geminiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: fullPrompt }] }] },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const reply = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text;
    const htmlResponse = marked(reply)
    res.json({ response: htmlResponse || "Sorry, I couldn't find an answer." });
  } catch (error) {
    console.error('Error in postQueryToGemini:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { postQueryToGemini };
