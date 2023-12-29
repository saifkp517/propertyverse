import { mailOptions, transporter } from '../../config/nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.handler);
    const data = req.body;
    if (!data[0] || !data[1] ) {
      return res.status(400).json({ message: 'Bad Request' });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Subject',
        html: `<h1>PropertyVerse</h1><p>User is interested in ${data[2]}</p> <br /> 
        <p>User Details</p> <br/>
        <p>Phone No:${data[0]}</p><br/>
        <p>Amount: ${data[1]}</p>
        `,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err, 'Contact JS?');
      return res.status(400).json({ message: err.message });
    }
  }
}
