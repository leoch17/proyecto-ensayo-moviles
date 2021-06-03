"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    movilesSecret: process.env.MOVILES_SECRET || 'movilsecrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/moviles',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
};
