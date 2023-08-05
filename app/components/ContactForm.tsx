"use client";
import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../utils/validations";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    try {
      setIsLoading(true);
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      resetForm();

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setSubmitting(false);
      toast.success("Form submitted successfully!");
      setShowConfetti(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="rounded-md dark:text-gray-800"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500/70 text-xs pt-1"
          />

          <label htmlFor="email" className="mt-3">
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="rounded-md dark:text-gray-800"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500/70 text-xs pt-1"
          />

          <label htmlFor="message" className="mt-3">
            Message
          </label>
          <Field
            as="textarea"
            id="message"
            name="message"
            cols={30}
            rows={5}
            className="rounded-md dark:text-gray-800"
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-red-500/70 text-xs pt-1"
          />
          <button
            disabled={isLoading}
            className="flex mx-auto text-white mt-4 bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg"
          >
            Kirim
          </button>
        </Form>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}
    </>
  );
}
