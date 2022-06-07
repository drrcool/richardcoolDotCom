import express, { Request, Response } from "express";
import MailerSend from "mailersend";
import { fileURLToPath } from "url";

interface FormItem {
  name: string;
  email: string;
  message: string;
  subject: string;
}

async function sendMail({ formData }: { formData: FormItem }) {
  const { Recipient, EmailParams } = require("mailersend");
  const MailerSend = require("mailersend");

  console.log(process.env.MAILERSEND_APIKEY);
  const mailersend = new MailerSend({
    api_key: process.env.MAILERSEND_APIKEY,
  });

  const recipients = [new Recipient(formData.email, formData.name)];

  const personalization = [
    {
      email: formData.email,
      data: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: formData.subject,
        account_alias: "Richard",
      },
    },
  ];

  const emailParams = new EmailParams()
    .setFrom("richard@richardcool.com")
    .setFromName("Richard Cool")
    .setRecipients(recipients)
    .setSubject("Subject")
    .setTemplateId("3yxj6lj9v3q4do2r")
    .setPersonalization(personalization);

  const response = await mailersend.send(emailParams);
  console.log(response);
}

export default function handler(req: Request, res: Response) {
  // Get the request body
  const { body } = req;

  // Check for required fields
  if (!body.name || !body.email || !body.subject || !body.message) {
    // Set and bad request status code
    return res.status(400).json({
      data: {
        message:
          "Missing required fields: Name, Email, Subject, and Message are all required",
      },
    });
  }

  // Send the email
  const formData = {
    name: body.name,
    email: body.email,
    message: body.message,
    subject: body.subject,
  };
  sendMail({ formData });

  res.status(200).json({
    data: `Dr ${body.name}, your messaged Re:${body.subject} has been sent.\n\nFrom: ${body.email}\n\n${body.message}`,
  });
}
