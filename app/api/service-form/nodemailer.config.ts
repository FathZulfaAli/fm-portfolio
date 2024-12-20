import nodemailer from "nodemailer";
import "dotenv/config";

const user = process.env.SMTP_USER?.toString();
const pass = process.env.SMTP_PASSWORD?.toString();

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: user, // Gmail email address
    pass: pass, // Gmail app password
  },
});
