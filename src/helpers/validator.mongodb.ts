import * as yup from "yup";

export async function validateClientData(
  clientName: string,
  clientEmail: string,
  description: string,
) {
  const schema = yup.object().shape({
    clientName: yup.string().required(),
    clientEmail: yup.string().email().required(),
    description: yup.string().required(),
  });

  try {
    await schema.validate({ clientEmail, clientName, description });
    return {
      status: 200,
      message: "Validation pass",
    };
  } catch (validationError) {
    if (validationError instanceof yup.ValidationError) {
      return {
        status: 400,
        error: "Validation failed",
        message: validationError.message,
        errorValue: validationError.value,
      };
    }
    throw validationError;
  }
}
