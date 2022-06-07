import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import { useForm } from "react-hook-form";

const onSubmit = async (data: any) => {
  // Stop the normal behavior of submitting the form.

  const JSONdata = JSON.stringify(data);

  // API endpoint to send the form
  const endpoint = "/api/contactMeForm";

  // For the request for sending data to the server
  const options = {
    method: "POST",
    // Tell the server it's json
    headers: { "Content-Type": "application/json" },
    // And use our json as the body
    body: JSONdata,
  };

  const response = await fetch(endpoint, options);

  // Get the response and check if it's ok.
  const result = await response.json();
  alert(result.data);
};

const ContactMe: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { isDirty, isValid } = formState;
  console.log(isDirty, isValid);
  return (
    <Layout>
      <Head>
        <title>Paging Dr Cool...</title>
      </Head>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input
          defaultValue=""
          {...register("name", { required: true })}
          type="text"
          id="name"
        />
        {errors.name?.type === "required" && "Name is required"}

        <label htmlFor="email">Email:</label>
        <input
          {...register("email", {
            required: true,
            pattern: /[\w.]+@[\w]+.[\w.]+/g,
          })}
          type="email"
          id="email"
        />
        {errors.email?.type === "required" && "Email is required"}

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          {...register("subject", { required: true })}
          defaultValue=""
        />
        {errors.subject?.type === "required" && "Subject is required"}
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          defaultValue=""
          {...register("message", {
            required: true,
            maxLength: 10_000,
            minLength: 10,
          })}
        ></textarea>
        {errors.message?.type === "required" && "Message is required"}
        {errors.message?.type === "maxLength" && "Message is too long"}
        {errors.message?.type === "minLength" && "Message is too short"}

        <button type="submit" disabled={!isDirty || !isValid}>
          Submit
        </button>
      </form>
    </Layout>
  );
};
export default ContactMe;
