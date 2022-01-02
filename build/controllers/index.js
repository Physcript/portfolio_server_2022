"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
require('dotenv').config();
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../config"));
const sendMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    const transporter = nodemailer_1.default.createTransport({
        host: config_1.default.MAIL.HOST,
        port: config_1.default.MAIL.PORT,
        secure: false,
        requireTLS: true,
        auth: {
            user: `${config_1.default.MAIL.GMAIL_USER}`,
            pass: `${config_1.default.MAIL.GMAIL_PASS}`
        }
    });
    yield transporter.sendMail({
        from: 'Physcript@gmail.com',
        to: 'Physcript@gmail.com',
        subject: name,
        html: `<h1>Email: ${email} </h1>
			<p> ${message} </p>
		`
    }).then((val) => console.log(val))
        .catch((val) => console.log(val));
    res.status(200).json({
        data: 'send'
    });
});
exports.sendMail = sendMail;
