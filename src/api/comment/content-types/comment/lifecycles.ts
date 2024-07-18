export default {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;
        // console.log(result)

        try{
            await strapi.plugins['email'].services.email.send({
              to: 'justinejeraldbaliguat@gmail.com',
              from: 'builders@metrocondoliving.com', // e.g. single sender verification in SendGrid
            //   cc: 'valid email address',
            //   bcc: 'valid email address',
              replyTo: 'builders@metrocondoliving.com',
              subject: 'CDM Notification',
              text: '${comment}', // Replace with a valid field ID
              html: htmlTemplate, 
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}

const htmlTemplate = `
<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
  <title> Welcome to [Coded Mails] </title>
  <!--[if !mso]><!-- -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" type="text/css" />
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap);
  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
  <style type="text/css">
    a,
    span,
    td,
    th {
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale !important;
    }
  </style>
<style>#inspect-element-top-layer * { all: unset; }</style></head>

<body style="background-color:#f3f3f5;" data-new-gr-c-s-check-loaded="14.1187.0" data-gr-ext-installed="">
  <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> Preview - Welcome to Coded Mails </div>
  <div style="background-color:#f3f3f5;">
    <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody><tr>
                    <td style="font-size:0px;word-break:break-word;">
                      <!--[if mso | IE]>

        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="vertical-align:top;height:20px;">

    <![endif]-->
                      <div style="height:20px;">   </div>
                      <!--[if mso | IE]>

        </td></tr></table>

    <![endif]-->
                    </td>
                  </tr>
                </tbody></table>
              </div>
              <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">

        <v:rect  style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
        <v:fill  origin="0.5, 0" position="0.5, 0" src="https://www.transparenttextures.com/patterns/brushed-alum.png" color="#00AD55" type="tile" />
        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
      <![endif]-->
    <div style="background:#00AD55 url(https://www.transparenttextures.com/patterns/brushed-alum.png) top center / auto repeat;margin:0px auto;border-radius:4px 4px 0 0;max-width:600px;">
      <div style="line-height:0;font-size:0;">
        <table align="center" background="https://www.transparenttextures.com/patterns/brushed-alum.png" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#00AD55 url(https://www.transparenttextures.com/patterns/brushed-alum.png) top center / auto 
repeat;width:100%;border-radius:4px 4px 0 0;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody><tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:150px;">
                                <img height="auto" src="https://codedmails.com/images/logo-white.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:0px;word-break:break-word;">
                        <!--[if mso | IE]>

        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="vertical-align:top;height:20px;">

    <![endif]-->
                        <div style="height:20px;">   </div>
                        <!--[if mso | IE]>

        </td></tr></table>

    <![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:24px;font-weight:500;line-height:30px;text-align:center;color:#ffffff;">
                          <p style="margin: 0;">You have a new notification </p>
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
                </div>
                <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--[if mso | IE]>
        </v:textbox>
      </v:rect>

          </td>
        </tr>
      </table>

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:0 0 4px 4px;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:0 0 4px 4px;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:40px 10px 20px 10px;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:580px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody><tr>
                    <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:20px;font-weight:300;line-height:30px;text-align:left;color:#003366;">
                        <p style="margin: 0;"> So here are some of the notification you have received?</p>
                      </div>
                    </td>
                  </tr>
                </tbody></table>
              </div>
              <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:4px;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:4px;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

            <tr>
              <td
                 class="" width="600px"
              >

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:560px;" width="560"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">

        <v:rect  style="width:560px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
        <v:fill  origin="0.5, 0" position="0.5, 0" src="https://www.transparenttextures.com/patterns/brushed-alum.png" color="#8E1341" type="tile" />
        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
      <![endif]-->
              <div style="background:#8E1341 url(https://www.transparenttextures.com/patterns/brushed-alum.png) top center / auto repeat;margin:0px auto;border-radius:4px;max-width:560px;">
                <div style="line-height:0;font-size:0;">
                  <table align="center" background="https://www.transparenttextures.com/patterns/brushed-alum.png" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#8E1341 url(https://www.transparenttextures.com/patterns/brushed-alum.png) top center / auto 
repeat;width:100%;border-radius:4px;">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                          <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:560px;"
            >
          <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                              <tbody><tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:24px;font-weight:500;line-height:30px;text-align:left;color:#ffffff;">
                                    <p class="date" style="margin: 0; margin-bottom: 5px; font-size: 16px;">ALERT</p>
                                    <h2 style="margin: 0; font-size: 20px; font-weight: bold; line-height: 24px;">Delivery Cancelled</h2>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:20px;font-weight:300;line-height:30px;text-align:left;color:#ffffff;">
                                    <p style="margin: 0;">Your order could not be completed and has been cancelled. Your account has not been charged and we apologize for the inconvenience. </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                    <tbody><tr>
                                      <td align="center" bgcolor="#ffffff" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#ffffff;" valign="middle">
                                        <a href="https://google.com" style="word-break: normal; display: inline-block; background: #ffffff; color: #9E2E1F; font-family: Poppins, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: normal; line-height: 30px; margin: 0; text-decoration: none; 
text-transform: none; padding: 10px 25px; mso-padding-alt: 0px; border-radius: 3px;" target="_blank">
                                          <strong>Details</strong>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                </td>
                              </tr>
                            </tbody></table>
                          </div>
                          <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!--[if mso | IE]>
        </v:textbox>
      </v:rect>

          </td>
        </tr>
      </table>

              </td>
            </tr>

            <tr>
              <td
                 class="" width="600px"
              >

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:560px;" width="560"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
              <div style="margin:0px auto;max-width:560px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                        <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:560px;"
            >
          <![endif]-->
                        <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tbody><tr>
                              <td style="font-size:0px;word-break:break-word;">
                                <!--[if mso | IE]>

        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="vertical-align:top;height:20px;">

    <![endif]-->
                                <div style="height:20px;">   </div>
                                <!--[if mso | IE]>

        </td></tr></table>

    <![endif]-->
                              </td>
                            </tr>
                          </tbody></table>
                        </div>
                        <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
          </td>
        </tr>
      </table>

              </td>
            </tr>

            <tr>
              <td
                 class="" width="600px"
              >

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:560px;" width="560"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">

        <v:rect  style="width:560px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
        <v:fill  origin="0.5, 0" position="0.5, 0" src="https://www.transparenttextures.com/patterns/brushed-alum.png" color="#1D872B" type="tile" />
        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
      <![endif]-->
              <div style="background:#1D872B url(https://www.transparenttextures.com/patterns/brushed-alum.png) top center / auto repeat;margin:0px auto;border-radius:4px;max-width:560px;">
                <div style="line-height:0;font-size:0;">
                  <table align="center" background="https://www.transparenttextures.com/patterns/brushed-alum.png" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1D872B url(https://www.transparenttextures.com/patterns/brushed-alum.png) top center / auto 
repeat;width:100%;border-radius:4px;">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                          <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:560px;"
            >
          <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                              <tbody><tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:24px;font-weight:500;line-height:30px;text-align:left;color:#ffffff;">
                                    <p class="date" style="margin: 0; margin-bottom: 5px; font-size: 16px;">SUCCESS</p>
                                    <h2 style="margin: 0; font-size: 20px; font-weight: bold; line-height: 24px;">Delivery Complete</h2>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:20px;font-weight:300;line-height:30px;text-align:left;color:#ffffff;">
                                    <p style="margin: 0;">Your order has been delivered. If you have any question feel free to get in touch with us. We will be happy to assist you. </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                    <tbody><tr>
                                      <td align="center" bgcolor="#ffffff" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#ffffff;" valign="middle">
                                        <a href="https://google.com" style="word-break: normal; display: inline-block; background: #ffffff; color: #1D872B; font-family: Poppins, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: normal; line-height: 30px; margin: 0; text-decoration: none; 
text-transform: none; padding: 10px 25px; mso-padding-alt: 0px; border-radius: 3px;" target="_blank">
                                          <strong>Details</strong>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                </td>
                              </tr>
                            </tbody></table>
                          </div>
                          <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!--[if mso | IE]>
        </v:textbox>
      </v:rect>

          </td>
        </tr>
      </table>

              </td>
            </tr>

            <tr>
              <td
                 class="" width="600px"
              >

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:560px;" width="560"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
              <div style="margin:0px auto;max-width:560px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                        <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:560px;"
            >
          <![endif]-->
                        <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tbody><tr>
                              <td style="font-size:0px;word-break:break-word;">
                                <!--[if mso | IE]>

        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="vertical-align:top;height:20px;">

    <![endif]-->
                                <div style="height:20px;">   </div>
                                <!--[if mso | IE]>

        </td></tr></table>

    <![endif]-->
                              </td>
                            </tr>
                          </tbody></table>
                        </div>
                        <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
          </td>
        </tr>
      </table>

              </td>
            </tr>

            <tr>
              <td
                 class="" width="600px"
              >

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:560px;" width="560"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">

        <v:rect  style="width:560px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
        <v:fill  origin="0.5, 0" position="0.5, 0" src="https://www.transparenttextures.com/patterns/brushed-alum.png" color="#006E89" type="tile" />
        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
      <![endif]-->
              <div style="background:#006E89 url(https://www.transparenttextures.com/patterns/brushed-alum.png) top center / auto repeat;margin:0px auto;border-radius:4px;max-width:560px;">
                <div style="line-height:0;font-size:0;">
                  <table align="center" background="https://www.transparenttextures.com/patterns/brushed-alum.png" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#006E89 url(https://www.transparenttextures.com/patterns/brushed-alum.png) top center / auto 
repeat;width:100%;border-radius:4px;">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                          <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:560px;"
            >
          <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                              <tbody><tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:24px;font-weight:500;line-height:30px;text-align:left;color:#ffffff;">
                                    <p class="date" style="margin: 0; margin-bottom: 5px; font-size: 16px;">INFO</p>
                                    <h2 style="margin: 0; font-size: 20px; font-weight: bold; line-height: 24px;">Item Dispatched</h2>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:20px;font-weight:300;line-height:30px;text-align:left;color:#ffffff;">
                                    <p style="margin: 0;">Your item left our warehouse. You should receive it soon. </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                    <tbody><tr>
                                      <td align="center" bgcolor="#ffffff" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#ffffff;" valign="middle">
                                        <a href="https://google.com" style="word-break: normal; display: inline-block; background: #ffffff; color: #006E89; font-family: Poppins, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: normal; line-height: 30px; margin: 0; text-decoration: none; 
text-transform: none; padding: 10px 25px; mso-padding-alt: 0px; border-radius: 3px;" target="_blank">
                                          <strong>Details</strong>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                </td>
                              </tr>
                            </tbody></table>
                          </div>
                          <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!--[if mso | IE]>
        </v:textbox>
      </v:rect>

          </td>
        </tr>
      </table>

              </td>
            </tr>

            <tr>
              <td
                 class="" width="600px"
              >

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:560px;" width="560"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
              <div style="margin:0px auto;max-width:560px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                        <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:560px;"
            >
          <![endif]-->
                        <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tbody><tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:20px;font-weight:300;line-height:30px;text-align:left;color:#003366;">
                                  <p style="margin: 0;">If you have any questions simply reply to this email and we would be more than happy to reply. :)</p>
                                </div>
                              </td>
                            </tr>
                          </tbody></table>
                        </div>
                        <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
          </td>
        </tr>
      </table>

              </td>
            </tr>

                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:#d5d5d5;background-color:#d5d5d5;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#d5d5d5;background-color:#d5d5d5;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody><tr>
                    <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:20px;font-weight:300;line-height:30px;text-align:left;color:#003366;">
                        <h3 style="font-size: 16px; font-weight: 400; line-height: 20px;">We hope you find these resources helpful, and we’ll be in touch again next week with more updates. </h3>
                      </div>
                    </td>
                  </tr>
                </tbody></table>
              </div>
              <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:#043768;background-color:#043768;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#043768;background-color:#043768;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody><tr>
                    <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:16px;font-weight:500;line-height:30px;text-align:left;color:#ffffff;">
                        <p style="margin: 0;"> 123 Medalling Jr., Suite 100, Parrot Park, CA 12345 </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:16px;font-weight:500;line-height:30px;text-align:left;color:#ffffff;">
                        <p style="margin: 0;"> Copyright © 2029 Coded Mails<br /> All rights reserved.</p>
                      </div>
                    </td>
                  </tr>
                </tbody></table>
              </div>
              <!--[if mso | IE]>
            </td>

            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody><tr>
                    <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <!--[if mso | IE]>
      <table
         align="left" border="0" cellpadding="0" cellspacing="0" role="presentation"
      >
        <tr>

              <td>
            <![endif]-->
                      <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tbody><tr>
                          <td style="padding:4px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:18px;">
                              <tbody><tr>
                                <td style="font-size:0;height:18px;vertical-align:middle;width:18px;">
                                  <a href="#" target="_blank" style="color: #00AD55; text-decoration: none; word-break: normal;">
                                    <img alt="twitter-logo" height="18" src="https://codedmails.com/images/social/white/twitter-logo-transparent-white.png" style="border-radius:3px;display:block;" width="18" />
                                  </a>
                                </td>
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody></table>
                      <!--[if mso | IE]>
              </td>

              <td>
            <![endif]-->
                      <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tbody><tr>
                          <td style="padding:4px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:18px;">
                              <tbody><tr>
                                <td style="font-size:0;height:18px;vertical-align:middle;width:18px;">
                                  <a href="#" target="_blank" style="color: #00AD55; text-decoration: none; word-break: normal;">
                                    <img alt="facebook-logo" height="18" src="https://codedmails.com/images/social/white/facebook-logo-transparent-white.png" style="border-radius:3px;display:block;" width="18" />
                                  </a>
                                </td>
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody></table>
                      <!--[if mso | IE]>
              </td>

              <td>
            <![endif]-->
                      <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tbody><tr>
                          <td style="padding:4px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:18px;">
                              <tbody><tr>
                                <td style="font-size:0;height:18px;vertical-align:middle;width:18px;">
                                  <a href="#" target="_blank" style="color: #00AD55; text-decoration: none; word-break: normal;">
                                    <img alt="instagram-logo" height="18" src="https://codedmails.com/images/social/white/instagram-logo-transparent-white.png" style="border-radius:3px;display:block;" width="18" />
                                  </a>
                                </td>
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody></table>
                      <!--[if mso | IE]>
              </td>

              <td>
            <![endif]-->
                      <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tbody><tr>
                          <td style="padding:4px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:18px;">
                              <tbody><tr>
                                <td style="font-size:0;height:18px;vertical-align:middle;width:18px;">
                                  <a href="#" target="_blank" style="color: #00AD55; text-decoration: none; word-break: normal;">
                                    <img alt="youtube-logo" height="18" src="https://codedmails.com/images/social/white/youtube-logo-transparent-white.png" style="border-radius:3px;display:block;" width="18" />
                                  </a>
                                </td>
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody></table>
                      <!--[if mso | IE]>
              </td>

          </tr>
        </table>
      <![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:16px;font-weight:500;line-height:30px;text-align:left;color:#ffffff;">Update your <a class="footer-link" href="https://google.com" style="word-break: normal; color: #fff; text-decoration: underline;">email 
preferences</a> to choose the types of emails you receive, or you can <a class="footer-link" href="https://google.com" style="word-break: normal; color: #fff; text-decoration: underline;"> unsubscribe </a>from all future emails.</div>
                    </td>
                  </tr>
                </tbody></table>
              </div>
              <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>

      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">

        <tr>

            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody><tr>
                    <td style="font-size:0px;word-break:break-word;">
                      <!--[if mso | IE]>

        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="1" style="vertical-align:top;height:1px;">

    <![endif]-->
                      <div style="height:1px;">   </div>
                      <!--[if mso | IE]>

        </td></tr></table>

    <![endif]-->
                    </td>
                  </tr>
                </tbody></table>
              </div>
              <!--[if mso | IE]>
            </td>

        </tr>

                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
  </div>


<div id="inspect-element-top-layer" popover="auto" data-inspect-element="inspectElement" style="pointer-events: none; border: unset; padding: 0px;"></div></body><grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration></html>
`