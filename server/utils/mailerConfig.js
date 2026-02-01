const nodemailer = require('nodemailer')

// If SMTP credentials are not provided, export a safe stub transporter
// so the app can run locally without failing on missing secrets.
if (!process.env.USER || !process.env.PASS) {
  const stub = {
    verify: (cb) => {
      console.log('mailerConfig: running in DEV mode (no SMTP credentials)')
      if (typeof cb === 'function') cb(null, true)
    },
    sendMail: (mail, cb) => {
      // mimic nodemailer callback signature
      console.log('mailerConfig: simulated sendMail payload:\n', mail)
      if (typeof cb === 'function') cb(null, { response: '250 Message queued (simulated)' })
      return Promise.resolve({ response: '250 Message queued (simulated)' })
    }
  }

  module.exports = stub
} else {
  const transport = {
    host: 'smtp.gmail.com', // replace with the SMTP host of your provider
    port: 587,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  }

  const transporter = nodemailer.createTransport(transport)

  transporter.verify((error, success) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Server is ready to take messages')
    }
  })

  module.exports = transporter
}
