import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  Typography,
  TextField,
} from "@material-ui/core";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { create } from "../../actions/post";

const states = [
  {
    value: "alabama",
    label: "الميدان",
  },
  {
    value: "new-york",
    label: "دمشق القديمة",
  },
  {
    value: "san-francisco",
    label: "ببيلا",
  },
  {
    value: "san-francisco",
    label: "طريق المطار",
  },
  {
    value: "san-francisco",
    label: "المزة",
  },
  {
    value: "san-francisco",
    label: "التل",
  },
  {
    value: "san-francisco",
    label: "البرامكة",
  },
  {
    value: "san-francisco",
    label: "المالكي",
  },
  {
    value: "san-francisco",
    label: "ابو رمانة",
  },
  {
    value: "san-francisco",
    label: "الروضة",
  },
  {
    value: "san-francisco",
    label: "غير ذلك",
  },
  {
    value: "san-francisco",
    label: "المزة",
  },
  {
    value: "san-francisco",
    label: "التل",
  },
  {
    value: "san-francisco",
    label: "البرامكة",
  },
  {
    value: "san-francisco",
    label: "المالكي",
  },
  {
    value: "san-francisco",
    label: "ابو رمانة",
  },
  {
    value: "san-francisco",
    label: "الروضة",
  },
  {
    value: "san-francisco",
    label: "غير ذلك",
  },
  {
    value: "san-francisco",
    label: "المزة",
  },
  {
    value: "san-francisco",
    label: "التل",
  },
  {
    value: "san-francisco",
    label: "البرامكة",
  },
  {
    value: "san-francisco",
    label: "المالكي",
  },
  {
    value: "san-francisco",
    label: "ابو رمانة",
  },
  {
    value: "san-francisco",
    label: "الروضة",
  },
  {
    value: "san-francisco",
    label: "غير ذلك",
  },
];
const gender = [
  {
    value: "MALE",
    label: "ذكر",
  },
  {
    value: "FEMALE",
    label: "انثى",
  },
  {
    value: "MALE_FEMALE",
    label: "كلاهما",
  },
];

const subjects = [
  {
    value: "any",
    label: "غير ذلك",
  },
  {
    value: "arabic",
    label: "اللغة العربية",
  },
  {
    value: "english",
    label: "اللغة الإنكليزية",
  },
  {
    value: "french",
    label: "اللغة الفرنسية",
  },
  {
    value: "maths",
    label: "رياضيات",
  },
  {
    value: "sciences",
    label: "علم أحياء و الأرض",
  },
  {
    value: "physics",
    label: "الفيزياء",
  },
  {
    value: "arts",
    label: "فنون",
  },
  {
    value: "music",
    label: "موسيقا",
  },
  {
    value: "chemistry",
    label: "الكيمياء",
  },
  {
    value: "philosophy",
    label: "الفلسفة",
  },
  {
    value: "geography",
    label: "الجغرافية",
  },
  {
    value: "history",
    label: "التاريخ",
  },
  ,
  {
    value: "woo",
    label: "التربية الوطنية",
  },
  ,
  {
    value: "sport",
    label: "التربية الرياضية",
  },
];
const degree = [
  {
    value: "before graduation",
    label: "ما دون التخرج",
  },
  {
    value: "diploma",
    label: "دبلوم تأهيل تربوي",
  },
  {
    value: "master",
    label: "ماجستير",
  },
  {
    value: "graduate",
    label: "خريج",
  },
  {
    value: "Phd",
    label: "دكتوراة",
  },
  {
    value: "any",
    label: "غير ذلك",
  },
];
const teachingPhase = [
  {
    value: "primary",
    label: "التحضيري",
  },
  {
    value: "elementary",
    label: "الإبتدائي",
  },
  {
    value: "middle",
    label: "الأعدادي",
  },
  {
    value: "high",
    label: "الثانوي",
  },
  {
    value: "certificate",
    label: "شهادات",
  },
];
const jobs = [
  {
    value: "employee",
    label: "موظف",
  },
  {
    value: "teacher",
    label: "مدرس",
  },

  {
    value: "any",
    label: "اي مما سبق",
  },
  {
    value: "supervisor",
    label: "موجه",
  },
];

const NewPostDetails = (props) => {
  const dispatch = useDispatch();
  const auth2 = useSelector((state) => state.auth);

  const [values, setValues] = useState({
    firstName: "Katarina",
    lastName: "Smith",
    email: "demo@devias.io",
    phone: "",
    state: "Alabama",
    country: "USA",
  });
  const [teacher, setTeacher] = useState(true);
  const navigate = useNavigate();

  const handleChange1 = (event) => {
    console.log(event.target.value);

    if (event.target.value === "teacher") setTeacher(false);
    else setTeacher(true);

    /* setValues({
      ...values,
      [event.target.name]: event.target.value,
    });*/
  };
  const newPostHandler = (postData) => {
    console.log("kokopost");
    console.log("koko ", postData);
    console.log( postData.teacherGender,);
    const schoolId = auth2.user.profileId;
    console.log("schoolIdschoolId",auth2);
    const token = auth2.user.token;

    dispatch(
      create(
        postData.title,
        postData.body,
        postData.weeklyHoures,
        postData.teacherGender,
        postData.experienceNumOfYears,
        token,schoolId
      )
    )
      .then(() => {
        // console.log(isLogedin);

       navigate("/app/ShowPosts", { replace: true });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Formik
      initialValues={{
        experienceNumOfYears: 0,
        teacherGender:'FEMALE'
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().max(255).required("العنوان مطلوب"),
        body: Yup.string().max(255), //.required('title is required'),4
        teacherGender: Yup.string().max(255).required('العنوان مطلوب'),


        weeklyHoures: Yup.number()
          .max(30, "يجب ان تكون اقل من 30")
          .min(0, "يجب ان تكون اكبر من الصفر")
          .required("عدد ساعات العمل الأسبوعية مطلوب"),
        experienceNumOfYears: Yup.number().min(0, "يجب ان تكون اكبر من الصفر"),
        // teacherG: Yup.string().required('teacher gender is required'),
      })}
      onSubmit={(e, values) => {
        console.log("kokopost");

        console.log(values);
        newPostHandler(e, values);

       // navigate("/app/account", { replace: true });
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
          <Card>
            <CardHeader
              subheader="معلومات المنشور الجديد"
              title="منشور جديد"
              dir="rtl"
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12} hidden={false}>
                  <TextField
                    error={Boolean(touched.title && errors.title)}
                    fullWidth
                    helperText={touched.title && errors.title}
                    label="العنوان الوظيفي"
                    name="title"
                    required
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.title}
                    variant="outlined"
                    anchor="right"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="اختر العمل"
                    name="job"
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.job}
                    variant="outlined"
                    onChange={handleChange1}
                  >
                    {jobs.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.body && errors.body)}
                    fullWidth
                    helperText={touched.body && errors.body}
                    label="توصيف العمل"
                    name="body"
                    //   required
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.body}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.weeklyHoures && errors.weeklyHoures)}
                    fullWidth
                    helperText={touched.weeklyHoures && errors.weeklyHoures}
                    label="ساعات العمل الأسبوعية"
                    name="weeklyHoures"
                    required
                    min
                    max
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.weeklyHoures}
                    variant="outlined"
                    type="number"
                    value={values.weeklyHoures}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(
                      touched.experienceNumOfYears &&
                        errors.experienceNumOfYears
                    )}
                    fullWidth
                    helperText={
                      touched.experienceNumOfYears &&
                      errors.experienceNumOfYears
                    }
                    label=" سنوات الخبرة"
                    name="experienceNumOfYears"
                    required
                    min
                    max
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.experienceNumOfYears}
                    variant="outlined"
                    type="number"
                    value={values.experienceNumOfYears}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  
            <TextField 
                     item
                     md={6}
                     xs={12}
               error={Boolean(touched.teacherGender && errors.teacherGender)}
               fullWidth
               helperText={touched.teacherGender && errors.teacherGender}
                label="إختر المطلوب"
                name="teacherGender"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                margin="normal"
                 
                value={values.teacherGender}
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
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="مكان العمل"
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {states.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="الأختصاص"
                    name="subject"
                    hidden={teacher}
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.subject}
                    variant="outlined"
                  >
                    {subjects.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="المرحلة الدراسية"
                    name="teachingPhase"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.teachingPhase}
                    variant="outlined"
                  >
                    {teachingPhase.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="الدرجة العلميةالمطلوبة "
                    name="degree"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.degree}
                    variant="outlined"
                  >
                    {degree.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 2,
              }}
            >
              <Button
                disabled={!dirty || isSubmitting || !isValid}
                color="primary"
                variant="contained"
                type="submit"
              >
                إنشاء المنشور
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default NewPostDetails;
