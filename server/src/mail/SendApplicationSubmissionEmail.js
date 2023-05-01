const mailHelper = require("../helpers/MailHelper");

const sendApplicationSubmissionEmail = (user, job) => {
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
  mailHelper.to(job.admin.email)
    .subject("Job Application Submitted")
    .view("application-submission-admin")
    .context({
      user: user,
      job: job,
    })
    .send();
}

module.exports = sendApplicationSubmissionEmail;