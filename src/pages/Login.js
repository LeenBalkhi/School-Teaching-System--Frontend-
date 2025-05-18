import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";


import { login } from "../actions/auth";

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider,  createMuiTheme

} from '@material-ui/core/styles';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


const rtlTheme = createMuiTheme({ direction: "rtl" });


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogedin = useSelector((state) => state.auth.isLoggedIn);
  const [isRtl, setIsRtl] = React.useState(true);
  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", isRtl ? "rtl" : "ltr");
  }, [isRtl]);
  console.log(isLogedin+"   koko");

  if (isLogedin) {

    return<>
    {
      <Navigate to="/app/account" />
         // navigate('/app/account', { replace: true })

    }
    </>;
  // return <Navigate to="/app/account" />
  }

  const loginHandler = (authData) => {
    console.log("koko");

    dispatch(login(authData.email, authData.password))
      .then(() => {
        console.log("isLogedin");

        console.log(isLogedin);

        navigate("/app/account", { replace: true });
        //   window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    /*
    fetch('http://127.0.0.1:8000/api/schoolLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
      })
      .catch(err => {
        console.log(err);
      });*/
  };
 
  return (
    <StylesProvider jss={jss}>

<ThemeProvider theme={  rtlTheme }>

      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("البريد الإلكتروني مطلوب"),
              password: Yup.string().max(255).required("Password is required"),
            })}
            onSubmit={(e, values) => {
              loginHandler(e, values);
              console.log(values);
              navigate("/app/account", { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
              dirty,
              isValid,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    تسجيل الدخول
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3,
                  }}
                ></Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label={isRtl ? "بريد الكتروني او هاتف" : "Email or Phone"}                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                  anchor="lift"
                  dir="ltr"

                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={!isValid||!dirty}
                  >
                    تسجيل الدخول
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                 ليس لديك حساب ؟{" "}
                  <Link component={RouterLink} to="/register" variant="h6">
                    إنشاء حساب
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
      </ThemeProvider>
    </StylesProvider>

  );
};

export default Login;
