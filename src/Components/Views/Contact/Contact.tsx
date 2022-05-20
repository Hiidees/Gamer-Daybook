import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { AppbarGoBack } from "../../Utils/Appbar/AppbarGoBack";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchemaEmail } from "../../Utils/YupForm/ValidationSchemaEmail";
import Alert, { AlertColor } from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonMenuStyle } from "../../Portables/Styles/ButtonStyle";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FormHelperText from "@mui/material/FormHelperText";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export interface IContactProps {
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
  sendEmail: (
    data: IEmailForm,
    setResponseEmail: (emailData: IEmailAlert | undefined) => void,
    setIsSendingEmail: (bool: boolean) => void,
    setCounterEmail: (counter: number) => void,
    counterEmail: number
  ) => void;
}

interface IEmailForm {
  email: string;
  message: string;
}

export interface IEmailAlert {
  severity: string;
  message: string;
}
export function Contact(props: IContactProps) {
  const { resizeListener, sendEmail } = props;

  const [height, setHeight] = React.useState(window.innerHeight);
  const [counterEmail, setCounterEmail] = React.useState(0);
  const [responseEmail, setResponseEmail] = React.useState<
    IEmailAlert | undefined
  >(undefined);
  const [isSendingEmail, setIsSendingEmail] = React.useState(false);
  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmailForm>({ resolver: yupResolver(validationSchemaEmail) });

  return (
    <React.Fragment>
      <AppbarGoBack />
      <Container maxWidth="md">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: height - 100 }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              display={{ xs: "block", sm: "block", md: "block" }}
              xs={12}
              sm={6}
              md={6}
            >
              <Card
                sx={{
                  background: "transparent",
                  marginBottom: { xs: 0, sm: 8, md: 13 },
                }}
                elevation={0}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "30%", margin: "0px auto" }}
                  image="/icon.png"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"center"}
                  >
                    My Contacts:
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Stack direction={"row"} spacing={1}>
                    <IconButton
                      aria-label="github"
                      disableRipple
                      sx={{
                        "&:hover": {
                          color: "#ffda00",
                        },
                      }}
                      size="medium"
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      disableRipple
                      aria-label="instagram"
                      sx={{
                        "&:hover": {
                          color: "#d70078",
                        },
                      }}
                      size="medium"
                    >
                      <InstagramIcon />
                    </IconButton>
                    <IconButton
                      aria-label="facebook"
                      disableRipple
                      sx={{
                        "&:hover": {
                          color: "#004dd7",
                        },
                      }}
                      size="medium"
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      aria-label="gmail"
                      disableRipple
                      sx={{
                        "&:hover": {
                          color: "rgba(251,52,52,0.84)",
                        },
                      }}
                      size="medium"
                    >
                      <EmailIcon />
                    </IconButton>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth>
                <FormHelperText sx={{ textAlign: "center", marginBottom: 1 }}>
                  Write me a message!
                </FormHelperText>
                {responseEmail && (
                  <Alert
                    severity={responseEmail.severity as AlertColor | undefined}
                    variant="filled"
                    sx={{ fontSize: "15px", marginBottom: 2 }}
                  >
                    {responseEmail.message}
                  </Alert>
                )}
                <TextField
                  label="Email"
                  id="email"
                  size="medium"
                  sx={{ marginBottom: 2 }}
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email && errors.email?.message}
                  disabled={isSendingEmail}
                />

                <TextField
                  label="message"
                  id="message"
                  size="medium"
                  multiline
                  rows={2}
                  sx={{ marginBottom: 2 }}
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
                    "Send Email"
                  )}
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
