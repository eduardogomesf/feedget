import nodemailer from 'nodemailer'
import { MailConfig } from '../../config/mail-config';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: MailConfig.host,
    port: Number(MailConfig.port),
    auth: {
        user: MailConfig.user,
        pass: MailConfig.password
    }
});

export class NodemailerMailAdapter implements MailAdapter {

    async sendMail({ body, subject }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Eduardo Gomes <teste.email@feedget.com>',
            subject,
            html: body
        })
    }

}