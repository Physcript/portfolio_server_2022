

require('dotenv').config()

import { Request,Response } from 'express'
import nodemailer from 'nodemailer'
import config from '../config'



export const sendMail = async (req:Request,res:Response) => {
  const { name,email,message } = req.body

  const transporter = nodemailer.createTransport({
    host: config.MAIL.HOST,
    port: config.MAIL.PORT,
    secure: false,
    requireTLS: true,
    auth: {
      user: `${config.MAIL.GMAIL_USER}`,
      pass: `${config.MAIL.GMAIL_PASS}`
    }
  })


  await transporter.sendMail({
		from: 'Physcript@gmail.com',
		to: 'Physcript@gmail.com',
		subject: name,
		html: `<h1>Email: ${email} </h1>
			<p> ${message} </p>
		`
	}).then((val) => console.log(val))
	.catch((val) => console.log(val))


  res.status(200).json({
    data:'send'
  })

}
