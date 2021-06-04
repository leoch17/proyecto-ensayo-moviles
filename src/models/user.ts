import {Schema, model, Document} from 'mongoose'
import bcrypt from 'bcrypt'
import passport, { Passport } from 'passport';

export interface IUser extends Document{
    email: string,
    password: string,
    comparePassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        
    }
});

userSchema.pre<IUser>('save', async function(next){
    const user = this;
    if(!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

userSchema.methods.comparePassword = async function(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

export default model<IUser>('User', userSchema);