const nodemailer = require('nodemailer')

const transport = {
	host : 'smtp.gmail.com', // replace with the SMTP host of your provider
	port : 587,
	auth : {
		user : process.env.USER,
		pass : process.env.PASS
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
