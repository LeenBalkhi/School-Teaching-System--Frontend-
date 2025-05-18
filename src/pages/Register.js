import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik, FormikConsumer } from 'formik';
import { useSelector, useDispatch } from "react-redux";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { Navigate } from "react-router-dom";
import { register } from "../actions/auth";


const Register = () => {
  const dispatch = useDispatch();
  const isLogedin = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  if (isLogedin) {
   return <Navigate to="/app/account" />
  }

  const ons=false;
  const on=()=>{
    console.log(Formik.isValid);
    console.log(Formik.dirty);
    console.log(FormikConsumer.isValid);

  }
  const registerHandler = (authData) => {
    console.log("koko");

    dispatch(register(authData.name,authData.address,authData.email, authData.password, authData.phone))
      .then(() => {
        console.log(isLogedin);

        navigate("/registerSchool", { replace: true });
        //   window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  return (
    <>
      <Helmet>
        <title>Register | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              name: '',
              address: '',
              password: '',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('البريد الإلكتروني غير صالح').max(255).required('البريد الإلكتروني مطلوب'),
                name: Yup.string().max(255).required('الأسم مطلوب'),
                address: Yup.string().max(255).required('العنوان مطلوب'),
                password: Yup.string().max(255).required('كلمة السر مطلوبة'),
                phone: Yup.string().max(255).required('رقم الهاتف مطلوب'),

                policy: Yup.boolean().oneOf([true], 'يجب الموافقة على معايير لخصوصية')
              })
            }
            onSubmit={(e,values) => {
              registerHandler(e, values);
              console.log(values);
           //   navigate('/login', { replace: true });
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
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    إنشاء حساب جديد
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    إستخدم بريدك الإلكتروني لإنشاء حساب جديد
                  </Typography>
                 

                </Box>
                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="الاسم"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.address && errors.address)}
                  fullWidth
                  helperText={touched.address && errors.address}
                  label="العنوان"
                  margin="normal"
                  name="address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  variant="outlined"
                  onClick={on}
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="عنوان البريد الإلكتروني"
                  margin="normal"
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
                  label="كلمة المرور"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.phone && errors.phone)}
                  fullWidth
                  helperText={touched.phone && errors.phone}
                  label="رقم الهاتف"
                  margin="normal"
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                  variant="outlined"
                  anchor="lift"
                  dir="ltr"
                />
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1
                  }}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    أوافق على
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      الأحكام والشروط 
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
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
                    Sign up now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
