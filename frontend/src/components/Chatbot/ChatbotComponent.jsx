import React, { useState, useRef, useEffect } from 'react';
import '../Chatbot/ChatbotComponent.css';
import { SendHorizontal,Bot } from 'lucide-react';
import axios from 'axios';

function Chatbot() {
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  const handleClickToTrue = () => {
    setIsUserClicked(true);
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: 'user', text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/chatbot',
        {
          userPrompt: userInput,
        }
      );

      const botReply =
        response.data.response || "Sorry, I couldn't find an answer.";
      const botMessage = { sender: 'bot', text: botReply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = {
        sender: 'bot',
        text: 'Something went wrong. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setUserInput('');
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div
      className={`chatbotLogo ${isUserClicked ? 'mainChatbotComponent' : ''}`}
      onClick={!isUserClicked ? handleClickToTrue : undefined}
    >
      

      {isUserClicked ? (
        <>
          <div className="mainChatbotComponentHeading">
            <p>PlaceMate</p>
          </div>
          <div className="mainChatbotComponentBody">
            <div className="mainChatbotComponentConversation">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chatMessage ${
                    msg.sender === 'user' ? 'userMessage' : 'botMessage'
                  }`}
                >
                  {msg.sender === 'bot' ? (
                    <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                  ) : (
                    msg.text
                  )}
                </div>
              ))}

              <div ref={chatEndRef} />
            </div>
            <div className="mainChatbotComponentInput">
              <textarea
                
                placeholder="Type Here..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleInputKeyPress}
              />
              <button
                className="mainChatbotComponentSendButton"
                onClick={handleSend}
              >
                <SendHorizontal />
              </button>
            </div>
          </div>
        </>
      ) :
        <Bot size={ 42} />
      }
    </div>
  );
}

export default Chatbot;
