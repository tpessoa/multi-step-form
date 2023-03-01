"use client";

import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React, { useContext } from "react";
import Input from "./Input";
import * as Yup from "yup";
import { PersonalStepForm } from "../types/type";
import { StoreContext } from "../utils/store";
import FormButton from "./FormButton";

const SchemaValidator = Yup.object().shape({
  name: Yup.string()
    .min(0, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.number().required("Required"),
});

const Personal = () => {
  const {
    personalStepState: { value: personalStep, setter: setPersonalStep },
  } = useContext(StoreContext);

  return (
    <div className="relative h-full">
      <div className="space-y-2">
        <div className="text-3xl font-extrabold text-blue-900 tracking-wide">
          Personal info
        </div>
        <div className="text-sm text-gray-400/80">
          Please provide your name, email address, and phone number.
        </div>
      </div>
      <div className="mt-8">
        <Formik
          initialValues={{
            name: personalStep.name,
            email: personalStep.email,
            phoneNumber: personalStep.phoneNumber,
          }}
          validationSchema={SchemaValidator}
          onSubmit={(
            values: PersonalStepForm,
            { setSubmitting }: FormikHelpers<PersonalStepForm>
          ) => {
            console.log(values);
            setPersonalStep(values);
          }}
        >
          {(props: FormikProps<PersonalStepForm>) => (
            <Form className="space-y-5">
              <Input label="Name" name="name" />
              <Input label="Email Address" name="email" />
              <Input label="Phone Number" name="phoneNumber" />

              <FormButton />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Personal;
