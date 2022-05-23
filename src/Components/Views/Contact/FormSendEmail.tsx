import * as React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchemaEmail } from "../../Utils/YupForm/ValidationSchemaEmail";
import FormHelperText from "@mui/material/FormHelperText";
import Alert, { AlertColor } from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ButtonMenuStyle } from "../../Portables/Styles/ButtonStyle";
import CircularProgress from "@mui/material/CircularProgress";
import { IEmailAlert, IEmailForm } from "./Contact";
import {
  FormTextHelperStyle,
  FormAlertStyle,
  FormTextfield,
  FormControlStyle,
} from "../../Portables/Styles/FormTextfieldStyle";
import useAppTranslation from "../../../Hooks/useAppTranslation";

export interface IFormSendEmailProps {
  sendEmail: (
    data: IEmailForm,
    setResponseEmail: (emailData: IEmailAlert | undefined) => void,
    setIsSendingEmail: (bool: boolean) => void,
    setCounterEmail: (counter: number) => void,
    counterEmail: number
  ) => void;
}

export function FormSendEmail(props: IFormSendEmailProps) {
  const { sendEmail } = props;
  const translationState = useAppTranslation();
  const [counterEmail, setCounterEmail] = React.useState(0);
  const [responseEmail, setResponseEmail] = React.useState<
    IEmailAlert | undefined
  >(undefined);
  const [isSendingEmail, setIsSendingEmail] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmailForm>({ resolver: yupResolver(validationSchemaEmail) });

  return (
    <FormControl fullWidth sx={FormControlStyle}>
      <FormHelperText sx={FormTextHelperStyle}>
        {translationState.translation["Write me a message"]}
      </FormHelperText>
      {responseEmail && (
        <Alert
          severity={responseEmail.severity as AlertColor | undefined}
          variant="filled"
          sx={FormAlertStyle}
        >
          {responseEmail.message}
        </Alert>
      )}
      <TextField
        label="Email"
        id="email"
        size="medium"
        sx={FormTextfield}
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email && errors.email?.message}
        disabled={isSendingEmail}
      />

      <TextField
        label={translationState.translation["message"]}
        id="message"
        size="medium"
        multiline
        rows={2}
        sx={FormTextfield}
        {...register("message")}
        error={!!errors.message}
        helperText={errors.message && errors.message?.message}
        disabled={isSendingEmail}
      />

      <Button
        sx={ButtonMenuStyle}
        disableRipple
        color="inherit"
        type="submit"
        onClick={handleSubmit((data) =>
          sendEmail(
            data,
            setResponseEmail,
            setIsSendingEmail,
            setCounterEmail,
            counterEmail
          )
        )}
        disabled={isSendingEmail}
      >
        {isSendingEmail ? (
          <CircularProgress color="inherit" />
        ) : (
          translationState.translation["send email"]
        )}
      </Button>
    </FormControl>
  );
}
