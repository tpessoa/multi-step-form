"use client";

import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React from "react";
import Input from "./Input";
import * as Yup from "yup";

type FormType = {
  name: string;
  email: string;
  phoneNumber: string;
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(0, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.number().required("Required"),
});

const Personal = () => {
  return (
    <div className="relative flex-grow px-10 mx-auto my-8">
      <div className="space-y-2">
        <div className="text-3xl font-extrabold text-blue-900 tracking-wide">
          Personal info
        </div>
        <div className="text-sm text-gray-400/80">
          Please provide your name, email address, and phone number.
        </div>
      </div>
      <div className="mt-10">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
          }}
          validationSchema={FormSchema}
          onSubmit={(
            values: FormType,
            { setSubmitting }: FormikHelpers<FormType>
          ) => {
            console.log(values);
          }}
        >
          {(props: FormikProps<FormType>) => (
            <Form className="space-y-5">
              <Input label="Name" name="name" />
              <Input label="Email Address" name="email" />
              <Input label="Phone Number" name="phoneNumber" />

              <div className="w-full h-full flex justify-end items-end">
                <button className="absolute bottom-0 bg-blue-900 text-white px-5 py-2 rounded-lg">
                  Next step
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Personal;
