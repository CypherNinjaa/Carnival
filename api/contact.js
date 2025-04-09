import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	const { name, email, subject, message } = req.body;

	// Validate input
	if (!name || !email || !subject || !message) {
		return res.status(400).json({ message: "All fields are required" });
	}

	// Create a transporter
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_SERVER,
		port: process.env.SMTP_PORT,
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	// Email options
	const mailOptions = {
		from: process.env.SMTP_USER,
		to: process.env.SMTP_USER,
		subject: subject,
		text: `You have a new message from ${name} (${email}):\n\n${message}`,
	};

	// Send email
	try {
		await transporter.sendMail(mailOptions);
		return res.status(200).json({ message: "Message sent successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Error sending message" });
	}
}
