import React from "react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import StyledButton from "../ui/StyledButton";
import { motion } from "framer-motion";

interface Values {
  name: string;
  email: string;
  description: string;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  // TODO make it more friendly
  description: Yup.string().required("Please give me context"),
});

function CollabForm() {
  return (
    <div className="flex h-screen flex-row items-center justify-center py-20">
      <div className="flex h-5/6 w-1/2 flex-col items-start justify-between">
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
        <div className="flex flex-col">
          <h2>Email me at</h2>
          <StyledButton
            color="lime"
            text="f.zulfaali@gmail.com"
            className="px-3"
          />
          <sup className="mt-4">*I&apos;ll response as soon as possible</sup>
        </div>
      </div>

      <div className="flex h-5/6 items-start justify-start">
        <Formik
          initialValues={{
            name: "",
            email: "",
            description: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>,
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
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
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-56 rounded-xl border-none px-3 py-2 outline-none"
                  />
                </motion.div>
                <ErrorMessage
                  name="name"
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
                    id="email"
                    name="email"
                    placeholder=" Email"
                    className="w-56 rounded-xl border-none px-3 py-2 outline-none"
                  />
                </motion.div>
                <ErrorMessage
                  name="email"
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
    </div>
  );
}

export default CollabForm;
