const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;

const client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);
client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

/**
 * @typedef MailOptions
 * @property {String} to
 * @property {String} subject
 * @property {String} body
 */

/**
 * @param {MailOptions} options
 */
async function sendMail(options) {
  if (!options) {
    throw new Error("No options provided.");
  }

  const accessToken = await client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GOOGLE_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken.token
    }
  });

  const info = await transporter.sendMail({
    from: `${process.env.GOOGLE_USERNAME} <${process.env.GOOGLE_USER}>`,
    to: options.to,
    subject: options.subject,
    html: options.body
  });
  transporter.close();

  return info;
}


module.exports = { sendMail }
