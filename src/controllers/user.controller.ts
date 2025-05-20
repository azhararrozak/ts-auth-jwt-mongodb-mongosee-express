import { Request, Response } from 'express';
import User from '../models/user.model';

const getUser = async (req: Request, res: Response) => {
    
    const userId = req.user?._id;

    const user = await User.findById(userId, "username email");

    if(!user) {
        res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
};

export { getUser };