const responseHelper = require('../../helpers/ResponseHelper');
const { PrismaClient } = require("@prisma/client");
const sendApplicationSubmissionEmail = require('../../mail/SendApplicationSubmissionEmail');
const prisma = new PrismaClient();

class JobApplicationController {

  async myApplications(req, res) {

  }

  async submit(req, res) {
    try {
      const { path } = req.files.resume[0];
      const jobId = parseInt(req.params.id);

      const application = await prisma.jobApplication.create({
        data: {
          userId: 2, // TODO: Should fetch from req
          jobId: jobId,
          resume: path,
          relevancyScore: 10 // TODO: calculate score
        }
      });

      if (application) {
        // send application submission email to user and admin
        const newApplication = await prisma.jobApplication.findFirst({
          where: {
            id: application.id
          },
          include: {
            user: true,
            job: { 
              include: { admin: true }
            }
          }
        });
        sendApplicationSubmissionEmail(newApplication);

        return responseHelper.success(res, 'Job application submitted successfully', application);
      }

      return responseHelper.error(res, 'Failed to submit an application', 500);
    }
    catch (err) {
      console.log(err.message);
      return responseHelper.error(res, 'Something went wrong', 500);
    }
  }
  
}

module.exports = new JobApplicationController();