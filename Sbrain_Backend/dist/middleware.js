"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const UserMiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    const decoded = jsonwebtoken_1.default.verify(header, config_1.JWT_PASSWORD);
    try {
        if (decoded) {
            //@ts-ignore
            req.userId = decoded.id;
            next();
        }
        else {
            res.status(403).json({ message: "You are not logged in" });
        }
    }
    catch (error) {
        res.json({ message: "Middlware problem" });
    }
};
exports.UserMiddleware = UserMiddleware;
