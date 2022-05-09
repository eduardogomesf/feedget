import dotenv from  'dotenv'

dotenv.config()

export const MailConfig = {
    host: process.env.SMTP_HOST || "",
    port: process.env.SMTP_PORT || 2525,
    user: process.env.SMTP_USER || "",
    password: process.env.SMTP_PASSWORD || "",
}