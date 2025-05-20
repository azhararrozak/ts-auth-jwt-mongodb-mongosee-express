import { Request, Response } from 'express';
import User from '../models/user.model';
import { clearToken, generateToken } from '../utils/auth.util';


const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  if(user) {
    generateToken(res, String(user._id));
    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
}

const authenticate = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.comparePassword(password)) {
    generateToken(res, String(user._id));

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  }

  else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
}

const logout = (req: Request, res: Response) => {
  clearToken(res);
  res.status(200).json({ message: 'Logged out successfully' });
}

export { registerUser, authenticate, logout };
