import { useState } from "react";

interface YupValidationProp {
  schema: any;
  data: any;
}

const useYupValidation = (props: YupValidationProp) => {
  const { schema, data } = props;

  return schema.validate(data, { abortEarly: false }).catch((err: any) => {
    const { inner } = err;
    let errors: any = {};
    for (let i = 0; i < inner.length; i++) {
      if (inner[i]?.path in errors) {
        errors = {
          ...errors,
          [inner[i].path]: [...errors[inner[i].path], ...inner[i].errors],
        };
      } else {
        errors = { ...errors, [inner[i].path]: inner[i].errors };
      }
    }
    return { errors };
  });
};

export default useYupValidation;
