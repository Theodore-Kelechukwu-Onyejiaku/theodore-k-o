const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const enailMessage = (email, fullName, message) => {
  return {
    to: [email, process.env.MY_EMAIL],
    from: process.env.MY_EMAIL,
    subject: "Theodore Kelechukwu Onyejiaku",
    html: `<!DOCTYPE html>
    <html>
    <head>
    
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Email Template Base</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
      /**
       * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
       */
      @media screen {
        @font-face {
          font-family: 'Source Sans Pro';
          font-style: normal;
          font-weight: 400;
          src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
        }
    
        @font-face {
          font-family: 'Source Sans Pro';
          font-style: normal;
          font-weight: 700;
          src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
        }
      }
    
      /**
       * Avoid browser level font resizing.
       * 1. Windows Mobile
       * 2. iOS / OSX
       */
      body,
      table,
      td,
      a {
        -ms-text-size-adjust: 100%; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
      }
    
      /**
       * Remove extra space added to tables and cells in Outlook.
       */
      table,
      td {
        mso-table-rspace: 0pt;
        mso-table-lspace: 0pt;
      }
    
      /**
       * Better fluid images in Internet Explorer.
       */
      img {
        -ms-interpolation-mode: bicubic;
      }
    
      /**
       * Remove blue links for iOS devices.
       */
      a[x-apple-data-detectors] {
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        color: inherit !important;
        text-decoration: none !important;
      }
    
      /**
       * Fix centering issues in Android 4.4.
       */
      div[style*="margin: 16px 0;"] {
        margin: 0 !important;
      }
    
      body {
        width: 100% !important;
        height: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
    
      /**
       * Collapse table borders to avoid space between cells.
       */
      table {
        border-collapse: collapse !important;
      }
    
      a {
        color: #1a82e2;
      }
    
      img {
        height: auto;
        line-height: 100%;
        text-decoration: none;
        border: 0;
        outline: none;
      }
      </style>
    
    </head>
    <body style="background-color: #e9ecef;">
    
      <!-- start preheader -->
      <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
        Subscription successful and plan activated.
      </div>
      <!-- end preheader -->
    
      <!-- start body -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
    
        <!-- start logo -->
        <tr>
          <td align="center" bgcolor="#e9ecef">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
              <tr>
                <td align="center" valign="top" style="padding: 36px 24px;">
                    <img src="https://lh3.googleusercontent.com/hkPOQBjOqwtlv7x9UBhvwqij-jA_BxhBCyIGlGidBzEntPaZ_yxG0juFWRnh89TS83WeT_x4RmD_po3VJ33ZpH1Af3yUcYRRvdAzcKH1S4ZonVLUlJeFTBnDa6TDLLdOQmyc8JL8EJxVH08pnyuqGT_8m00B09y9LIoMnP10haeHv0cR866wrAIrtISF0rsvSt44p9jBijWtYv2mLEEHbxhq-vVTkKH4R3hudd3gGd_lIoL42Ps0QT1Zhi1UYx6CCTAs6DWdvQ-4odeW3K-9lcgyCsmAw6aKZFCslHxDAH6-Qtt7AigURa1O2PA6-m01QpjEqv7NctxJjb340vlMcWXc9sq1QAdOFNo0H26gVzrzbS7CDdcIO9DVVBuBjGQBjcgjZi-sBuzTgA-IkoBY1Hj4x0ga9qKS5lYMJ9pqskYxnq9qDC67lyQp3UsOLjs4XaehAifmz8mBaob2Q_oCwSif1spb2b5Il0t7wnvOJ44UNmMFA4LYJfswLhRgdRq32hqXM5pnxfzYozLhz3SIJOK0fZ92VIlzj78kBsmjNiqUI_px7SGJ1ejqmjai2R4U3llVHVO438LgiSBvQQNYu_7lez1XvXmMmJubTBBeqF7R2xuYcowbaHSy0awQAytitajVidp3BZGYNKp6XqoOZcB19n2W2uDk7k67i33ktN89HInPns1P2cc3FLps2BA7ji9kmngsaum2v40eQYz8_0Ak1MPINgKaUQDwESd_YAIjr9R4HllvQ5tvBkL5oD42boS317E2EfmljJpX374OxV8efin-7icki8EdZ7zWlGX_pn--EFnzMo0fXY3_2jouKyayQ4LqoaK5yiIlIc-cP7eClYKAC3wO1f_ganH4IZZPBYT0ymah5BP6vk_uDo07VDjp9wNraDb3SNHAEWkx6NymJw7LBTKVvqP1zjzHIZKPiDvkjYounuKS9_KzP_YpRGkU-LL4o9D_cYcZldNQzW94QLu-G0FxCycNMRN7fTdIy9jUz8Jss6IMDcGIoH6AhVQncO0E_3LT0dYuQyzZGTS3MS-M=w1390-h1642-no?authuser=0" alt="Logo" border="0" width="100%" style="display: block; width: 100%; max-width: 100%; min-width: 100%;">
                  </a>
                </td>
              </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
          </td>
        </tr>
        <!-- end logo -->
    
        <!-- start hero -->
        <tr>
          <td align="center" bgcolor="#e9ecef">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
              <tr>
                <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                  <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Hurray!</h1>
                </td>
              </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
          </td>
        </tr>
        <!-- end hero -->
    
        <!-- start copy block -->
        <tr>
          <td align="center" bgcolor="#e9ecef">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
    
              <!-- start copy -->
              <tr>
              <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 20px; line-height: 24px;">
              <p style="margin: 0;">
                Hi ${fullName}, 
              </p>
            </td>
            </tr>
              <tr>
                <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                  <p style="margin: 0;">
                  Thanks for contacting Theodore!
                  </p>
                  <p style="margin: 0;">
                 <strong>Kindly note that this email has been delivered to him and he will reach out to you soon!</strong>  Thanks once again!
                  </p>
                </td>
              </tr>
              <tr>
                <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <p style="margin: 5px;">
                  <strong>Below is a copy of your message to him.</strong>
                </p>
                </td>
              </tr>
             
              <!-- end copy -->
    
              <!-- start button -->
              <tr>
                <td align="left" bgcolor="#ffffff">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                        <table border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                              <p style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">${message}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- end button -->
    
              <!-- start copy -->
              
              <!-- end copy -->
    
              <!-- start copy -->
              <tr>
                <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                  <p style="margin: 0;">Best,<br> Theodore Kelechukwu Onyejiaku</p>
                </td>
              </tr>
              <!-- end copy -->
    
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
          </td>
        </tr>
        <!-- end copy block -->
    
        <!-- start footer -->
        <tr>
          <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
    
              <!-- start permission -->
              <tr>
                <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                  <p style="margin: 0;">You received this email because we received a message for Theodore</p>
                  <p> If you didn't request this you can safely delete this email.</p>
                </td>
              </tr>
              <!-- end permission -->
    
              <!-- start unsubscribe -->
              <tr>
                <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                  <p style="margin: 0;">Fly way road, Moon, Milky Way Galaxy.</p>
                </td>
              </tr>
              <!-- end unsubscribe -->
    
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
          </td>
        </tr>
        <!-- end footer -->
    
      </table>
      <!-- end body -->
    
    </body>
    </html>`,
  };
};

exports.sendEmail = (email, fullname, message) => {
  return sgMail
    .sendMultiple(enailMessage(email, fullname, message))
    .then(() => {
      console.log("success")
      return { message: "Successful", error: null }
    })
    .catch((error) => {
      console.log(error)
      return { message: "Successful", error: "Something went wrong" }
    })
}