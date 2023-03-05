"use client";

import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React, { useContext, useRef } from "react";
import Input from "./Input";
import * as Yup from "yup";
import { PersonalStepForm } from "../../types/type";
import { StoreContext } from "../../utils/store";
import Title from "../Title";
import FormButton from "../FormButton";

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
  const first = useRef<FormikProps<PersonalStepForm>>(null);

  const actionBeforeChangingStep = async () => {
    await first.current?.submitForm();
    return first.current?.isValid;
  };

  return (
    <div className="mx-auto flex h-full w-[400px] flex-col items-stretch">
      <div className="flex-grow">
        <Title
          title="Personal info"
          subTitle="Please provide your name, email address, and phone number."
        />
        <Formik
          initialValues={{
            name: personalStep.name,
            email: personalStep.email,
            phoneNumber: personalStep.phoneNumber,
          }}
          validationSchema={SchemaValidator}
          onSubmit={(values: PersonalStepForm) => {
            setPersonalStep(values);
          }}
          innerRef={first}
        >
          {(props: FormikProps<PersonalStepForm>) => (
            <>
              <Form className="space-y-5">
                <Input label="Name" name="name" />
                <Input label="Email Address" name="email" />
                <Input label="Phone Number" name="phoneNumber" />
              </Form>
            </>
          )}
        </Formik>
      </div>
      <FormButton
        previous={false}
        next={true}
        beforeChangingStep={actionBeforeChangingStep}
      />
    </div>
  );
};

export default Personal;
