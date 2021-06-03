"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const user_controllers_1 = require("../controllers/user.controllers");
router.post('/signup', user_controllers_1.signUp);
router.post('/signin', user_controllers_1.signIn);
exports.default = router;
