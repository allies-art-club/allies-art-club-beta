import generateTransport from "../../../utils/nodemailer";

export async function POST(req, res) {
  try {
    console.log("oi");
    var email = req.body.email;
    var name = req.body.name;
    var message = req.body.message;
    var fromEmail = process.env.EMAIL;
    const transport = await generateTransport();
    console.log(transport);
    const companyEmail = process.env.EMAIL;

    await transport.sendMail({
      to: companyEmail,
      from: `"Allie's Art Club - Contact Us" <${fromEmail}>`,
      subject: `Message from ${name}`,
      html: `<p>MESSAGE: ${message}</p>,
                <p>Reply to this message at ${email}`,
    });
    console.log("oi");
    console.log(Response);
    return Response.json({ success: true });
  } catch (e) {
    console.log(e);
    const error = new Error("Email not sent", e);
    error.status = 500;
    e.input = req.body;
    Response.json({ success: false, error: e });
  }
}





