const nodemailer = require("nodemailer");
const { templateConfirm } = require("../utils/Templates");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ordazhoyos2001@gmail.com",
        pass: "hggg wsme vkww qqpo",
    },
});

const sendEmail = async (req, res) => {
    try {
        const info = await transporter.sendMail({
            from: 'IGNITE - Tienda en linea 👻" <maddison53@ethereal.email>',
            to: "u20201b873@upc.edu.pe",
            subject: "CONFIRMACIÓN DE PEDIDO ✔",
            text: "Hello world 2?",
            html: templateConfirm,
        });
        console.log("Message sent: %s", info.messageId);
        return res.status(200).send({ ok: 'Successful' });
    } catch (error) {
        return res.status(500).send({ error: 'Error on server' });
    }
}

module.exports = {
    sendEmail
}