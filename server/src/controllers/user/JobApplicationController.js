const responseHelper = require('../../helpers/ResponseHelper');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');

class JobApplicationController {

  async myApplications(req, res) {

  }

  async submit(req, res) {
    try {
      // const __dirname = path.resolve();
      // const uploadFolder = path.join(__dirname, 'uploads');
      
      const { buffer, originalname } = req.files.resume[0];
      
      // console.log(`/${uploadFolder}/${originalname}`)
      // console.log(fs.writeFileSync(`\\${uploadFolder}\\${originalname}`, buffer));

      const application = await prisma.jobApplication.create({
        data: {
          userId: 1,
          jobId: parseInt(req.params.id),
          resume: buffer
        }
      });

      if (application) {
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