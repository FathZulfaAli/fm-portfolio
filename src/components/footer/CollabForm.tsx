import React from "react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import StyledButton from "../ui/StyledButton";
import { motion } from "framer-motion";
import axios from "axios";

interface Values {
  clientName: string;
  clientEmail: string;
  description: string;
}

const SignupSchema = Yup.object().shape({
  clientName: Yup.string().required("I’d love to know your name!"),
  clientEmail: Yup.string()
    .email("Hmm, that doesn't look like a valid email. Could you double-check?")
    .required("I need your email to stay in touch!"),
  description: Yup.string().required(
    "Please share a brief description to help me understand better.",
  ),
});

const handleSubmit = (
  values: Values,
  { setSubmitting }: FormikHelpers<Values>,
) => {
  setTimeout(() => {
    setSubmitting(true);

    axios
      .post("/api/service-form", values)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }, 500);
};

function CollabForm() {
  return (
    <section
      id={"collab-form"}
      className="mt-60 flex h-screen flex-col items-center justify-center py-20 lg:mt-0 lg:flex-row"
    >
      <div className="flex h-5/6 w-5/6 flex-col items-start justify-between lg:w-1/2">
        <h1 className="font-coolvetica text-5xl text-[#282825]">
          Bring Your Concept to Life
        </h1>
        <div className="space-y-3 text-lg">
          <h6 className="text-pretty">
            Got an idea for a website or mobile app?
          </h6>
          <h6 className="text-pretty">
            Let’s bring it to life! From a single landing page to powerful
            functionality app,
          </h6>
          <h6 className="text-pretty">
            I’m here to turn your vision into reality.
          </h6>
          <h6 className="text-pretty">
            Let’s create something amazing together!
          </h6>
        </div>
        <div className="mt-5 flex flex-col">
          <h2>Email me at</h2>
          <StyledButton
            color="lime"
            text="f.zulfaali@gmail.com"
            className="px-3"
          />
          <sup className="mt-4">*I&apos;ll response as soon as possible</sup>
        </div>
      </div>

      <div className="my-10 font-coolvetica text-3xl lg:my-0 lg:hidden">
        <h1>Or</h1>
        <h1>Fill up this form</h1>
      </div>

      <div className="mb-48 flex h-5/6 items-start justify-start lg:mb-0 lg:mt-10">
        <Formik
          initialValues={{
            clientName: "",
            clientEmail: "",
            description: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col space-y-10">
              <div className="relative">
                <motion.div
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #000",
                    color: "black",
                    boxShadow: "3.5px 3.5px 0px #000",
                  }}
                  initial={{ boxShadow: "3.5px 3.5px 0px #000" }}
                  whileHover={{
                    boxShadow: "7px 7px 0px #000",
                    x: "-3px",
                    y: "-3px",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="h-11 w-56 rounded-xl contain-content"
                >
                  <Field
                    id="clientName"
                    name="clientName"
                    placeholder="Name"
                    className="w-56 rounded-xl border-none px-3 py-2 outline-none"
                  />
                </motion.div>
                <ErrorMessage
                  name="clientName"
                  component="div"
                  className="absolute top-12 text-sm text-red-500"
                />
              </div>

              <div className="relative">
                <motion.div
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #000",
                    color: "black",
                    boxShadow: "3.5px 3.5px 0px #000",
                  }}
                  initial={{ boxShadow: "3.5px 3.5px 0px #000" }}
                  whileHover={{
                    boxShadow: "7px 7px 0px #000",
                    x: "-3px",
                    y: "-3px",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="h-11 w-56 rounded-xl contain-content"
                >
                  <Field
                    id="clientEmail"
                    name="clientEmail"
                    placeholder=" Email"
                    className="w-56 rounded-xl border-none px-3 py-2 outline-none"
                  />
                </motion.div>
                <ErrorMessage
                  name="clientEmail"
                  component="div"
                  className="absolute top-12 text-sm text-red-500"
                />
              </div>

              <div className="relative">
                <motion.div
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #000",
                    color: "black",
                    width: "fit-content",
                    boxShadow: "3.5px 3.5px 0px #000",
                  }}
                  initial={{ boxShadow: "3.5px 3.5px 0px #000" }}
                  whileHover={{
                    boxShadow: "7px 7px 0px #000",
                    x: "-3px",
                    y: "-3px",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="flex h-28 w-full rounded-xl contain-content"
                >
                  <Field
                    id="description"
                    as="textarea"
                    name="description"
                    placeholder="Description"
                    className="mr-2 w-96 resize-none self-start rounded-xl border-none px-3 py-2 outline-none"
                  />
                </motion.div>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="absolute top-[116px] text-sm text-red-500"
                />
              </div>

              <div className="self-end">
                <StyledButton
                  color="pink"
                  text={isSubmitting ? "Submitting..." : "Submit"}
                  type="submit"
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default CollabForm;
