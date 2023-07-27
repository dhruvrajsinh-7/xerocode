import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    if (emailType === "VERIFY") {
      console.log("come");
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
      console.log("User updated");
      var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "7eed1fbe6f4dd6",
          pass: "0974f2b7182207",
        },
      });

      const mailOptions = {
        from: "ddtony007@gmail.com",
        to: email,
        subject: "Verify your email",
        html: `<p>Click <a href="${process.env.DOMAIN}/confirmemail?token=${hashedToken}">here</a> to verify your email or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/confirmemail?token=${hashedToken}</p>`,
      };

      const mailresponse = await transport.sendMail(mailOptions);
      return mailresponse;
    } else if (emailType === "WISHLIST") {
      var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "7eed1fbe6f4dd6",
          pass: "0974f2b7182207",
        },
      });

      const mailOptions = {
        from: "ddtony007@gmail.com",
        to: email,
        subject: "Thank you for joining us!",
        html: "<p>Thank you for joining us! You are now added to the wishlist of Xerocode...</p>",
      };

      const mailresponse = await transport.sendMail(mailOptions);
      return mailresponse;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
