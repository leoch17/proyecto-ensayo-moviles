import {Request, Response} from 'express'
import User, {IUser} from '../models/user'

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({mensaje: 'Por favor, envia tu correo y contraseña'})
    }
    const user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({mensaje: 'El usuario ya existe'});
    }

    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser);
}

export const signIn = (req: Request, res: Response) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({mensaje: 'Por favor, envia tu correo y contraseña'})
}
