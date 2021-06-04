"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const private_routes_1 = __importDefault(require("./routes/private.routes"));
//initalizations
const app = express_1.default();
//settings
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
//routes
app.get("/", (req, res) => {
    res.send(`La API esta en http://localhost:${app.get('port')}`);
});
app.use(auth_routes_1.default);
app.use(private_routes_1.default);
exports.default = app;
