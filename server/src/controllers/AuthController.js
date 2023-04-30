const responseHelper = require('../helpers/ResponseHelper');
const genericHelper = require('../helpers/GenericHelper');
const userService = require('../services/UserService');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class AuthController {

  async register (req, res) {
    try {
      
      // get user input
      const { name, email, phone, password, role } = req.body;
      
      // check if user already exists
      if (await userService.findUserByEmail(email)) {
        return responseHelper.error(res, 'User already exists with this email!');
      }
  
      // encrypt password
      const encryptedPassword = await bcrypt.hash(password, 10);
  
      // create user in the database
      const user = await prisma.user.create({ 
        data: { name, email, phone, password: encryptedPassword, role }
      })
  
      if (user) {
        return responseHelper.success(res, 'User registered successfully');
      }
  
      return responseHelper.error(res, 'Failed to register user');
    }
    catch (err) {
      return responseHelper.error(res, err.message, 500);
    }
  }

  async login (req, res) {
    try {
      // get user input
      const { email, password } = req.body;

      const user = await userService.findUserByEmail(email);

      if (!user) {
        return responseHelper.error(res, 'User not found!');
      }

      if (await bcrypt.compare(password, user.password)) {
        // create token
        const token = jwt.sign(
          {
            userId: user.id,
            email: user.email
          },
          process.env.TOKEN_KEY,
          {
            expiresIn: 86400 // 24 hours
          }
        )

        return responseHelper.success(res, 'User logged in successfully', { user, token });
      }

      return responseHelper.error(res, 'Invalid credentials', 400);
    }
    catch (err) {
      return responseHelper.error(res, err.message, 500);
    }
  }

  async forgotPassword (req, res) {
    try {
      const { email } = req.body;
      
      const userExists = await userService.findUserByEmail(email);

      if (!userExists) {
        return responseHelper.error(res, 'User not found', 404);
      }

      // create random token
      const token = genericHelper.randomString(50);

      // create password reset request
      const resetRequest = await prisma.passwordResetRequest.upsert({
        where: { email },
        update: { token },
        create: { email, token } 
      });

      // TODO: send email to user with password reset link 

      if (resetRequest) {
        return responseHelper.success(res, 'Reset password link has been sent to your email');
      }
      
      return responseHelper.error(res, 'Something went wrong', 500);
    }
    catch (err) {
      return responseHelper.error(res, err.message, 500);
    }
  }

  async resetPassword (req, res) {
    try {
      const { password } = req.body;
      const token = req.params.token;

      // check for request by token
      const resetRequest = await prisma.passwordResetRequest.findFirst({
        where: { token }
      });

      if (!resetRequest) {
        return responseHelper.error(res, 'Password reset token is invalid');
      }

      // encrypt password
      const encryptedPassword = await bcrypt.hash(password, 10);

      // update password in the database
      const udpatePassword = await prisma.user.update({ 
        where: { email: resetRequest.email },
        data: { password: encryptedPassword }
      })

      // delete reset request
      await prisma.passwordResetRequest.deleteMany({
        where: { email: resetRequest.email }
      });

      if (udpatePassword) {
        return responseHelper.success(res, 'Password updated successfully. Please login with your new password.');
      }

      return responseHelper.error(res, 'Failed to update password');
    }
    catch (err) {
      return responseHelper.error(res, err.message, 500);
    }
  }

}

module.exports = new AuthController();