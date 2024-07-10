import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { User } from '../models/user.js';
import HttpError from '../helpers/HttpError.js';
import { ctrlWrapper } from '../helpers/ctrlWrapper.js';

dotenv.config();

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, 'Invalid email or password. Please try again.');
  }
  const passwordCompare = await bcryptjs.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, 'Invalid email or password. Please try again.');
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: { email: user.email },
  });
};

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: '' });
  res.status(204).json();
};

const getCurrent = async (req, res) => {
  const { email } = req.user;
  res.json({ email });
};

export default {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrent: ctrlWrapper(getCurrent),
};
