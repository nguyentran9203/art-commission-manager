const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /signup
router.post('/signup', async (req, res) => {
  const { email, role } = req.body;

  if (!email || !role) {
    return res.status(400).json({ message: 'Email and role are required.' });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists.' });
    }

    const newUser = new User({ email, role });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully.', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
});

module.exports = router;
