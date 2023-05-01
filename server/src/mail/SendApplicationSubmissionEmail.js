const mailHelper = require("../helpers/MailHelper");

const sendApplicationSubmissionEmail = (application) => {
  const user = application.user;
  const admin = application.job.admin;
  const job = application.job;

  // send to user
  mailHelper.to(user.email)
    .subject("Job Application Submitted")
    .view("application-submission")
    .context({
      user: user,
      job: job,
    })
    .send();

  // send to admin
  mailHelper.to(admin.email)
    .subject("Job Application Submitted")
    .view("application-submission-admin")
    .context({
      user: user,
      job: job,
    })
    .send();
}

module.exports = sendApplicationSubmissionEmail;