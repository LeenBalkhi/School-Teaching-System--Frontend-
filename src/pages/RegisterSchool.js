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
import { register2 } from "../actions/auth";

const gender = [
  {
    value: 'MALE',
    label: 'ذكور'
  },
  {
    value: 'FEMALE',
    label: 'إناث'
  },
  {
    value: 'MALE_FEMALE',
    label: 'مختلط'
  }
];
const ageCategory = [
  {
    value: 'PRE_SCHOOL',
    label: 'تحضيري'
  },
  {
    value: 'ELEMENTARY_SCHOOL',
    label: 'إبتدائي'
  },
  {
    value: 'MIDDLE_SCHOOL',
    label: 'إعدادي'
  },
  {
    value: 'HIGH_SCHOOL',
    label: 'ثانوي'
  },{
    value: 'certificate',
    label: 'Certificate'
    
  }
];

const RegisterSchool = () => {
  const dispatch = useDispatch();
  const isLogedin = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const auth2 = useSelector((state) => state.auth);


  if (isLogedin&&auth2.user.studentsGender) {
   return <Navigate to="/app/account" />
  }

  const ons=false;
  const on=()=>{
    console.log(Formik.isValid);
    console.log(Formik.dirty);
    console.log(FormikConsumer.isValid);

  }
  const registerHandler = (authData) => {
    console.log("koko ",authData);
    console.log(auth2);
    const userId=auth2.user.id;
    const token=auth2.user.token;


    dispatch(register2(authData.ageCategory, authData.studentsGender,userId,token))
      .then(() => {
        console.log(isLogedin);

        navigate("/login", { replace: true });
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
              ageCategory: "MIDDLE_SCHOOL",
              studentsGender: 'FEMALE',
            
            }}
            validationSchema={
              Yup.object().shape({
                studentsGender: Yup.string().max(255).required(' مطلوب'),
           
              })
            }
            onSubmit={(e,values) => {
              registerHandler(e, values);
              console.log(values);
              navigate('/login', { replace: true });
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
                    تتمة المعلومات                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    إختيار المناسب
                  </Typography>
                 

                </Box>
                <TextField
                fullWidth
                label="Select teaching Phase"
                name="ageCategory"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.ageCategory}
                variant="outlined"
                margin="normal"
                 
              >
                {ageCategory.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            <TextField 
                     item
                     md={6}
                     xs={12}
               error={Boolean(touched.studentsGender && errors.studentsGender)}
               fullWidth
               helperText={touched.studentsGender && errors.studentsGender}
                label="أختر نوع الطلاب"
                name="studentsGender"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                margin="normal"
                 
                value={values.studentsGender}
                variant="outlined"
              >
                {gender.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
             <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    margin="normal"

                    size="large"
                    type="submit"
                    variant="contained"
                    
                  >
                    تسجيل
                  </Button>
                </Box>
                
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default RegisterSchool;
