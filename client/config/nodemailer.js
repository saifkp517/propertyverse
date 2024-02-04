import nodemailer from "nodemailer"

const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_PASS;

console.log(email, pass)

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    logger: true,
    debug: true,
    auth: {
        user: email,
        pass: pass,
    }
})

export const mailOptions = {
    from: email,
    to: email,
}
