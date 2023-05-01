const mailHelper = require("../helpers/MailHelper");

const sendApplicationRejectedEmail = (application) => {
  mailHelper.to(application.user.email)
    .subject("Job Application Rejected")
    .view("application-rejected")
    .context({ application })
    .send();
}

module.exports = sendApplicationRejectedEmail;