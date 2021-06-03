import {Schema, model, Document} from 'mongoose'

export interface IUSER {
    email: string,
    password: string
}

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

export default model<IUSER>('User', userSchema);
