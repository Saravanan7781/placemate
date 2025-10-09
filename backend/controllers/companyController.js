const addCompany = async (req, res) => {
    const { name, logo, desc, location, roles_offered, website } = req.body;
    if(!name || !logo || !desc || !location || !roles_offered || !website) {
        return res.status(400).json({ message: 'All fields are required' });
    }
  res.status(200).json({ message: 'Company added successfully' });
};

const getAllCompanies = async (req, res) => {
  res.status(200).json({
    message: 'Fetched all companies successfully',
  });
};

module.exports = { addCompany, getAllCompanies };
