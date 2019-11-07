const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'baijin2011@gmail.com',
        subject: 'Thanks for joinning in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'baijin2011@gmail.com',
        subject: 'Thanks for being with us and we hope we will be with you in future.',
        text: `I am sad to hear that ${name} would like to opt out of the app, would you like to let us know why you are leaving?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}