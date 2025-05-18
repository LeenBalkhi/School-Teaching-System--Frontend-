import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import NewPostDetails from '../components/post/NewPostDetails';
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const CreateNewPost = () => {
  const isLogedin = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLogedin);
  if (!isLogedin) {

    return <Navigate to="/login" />
   }
return(
  <>
    <Helmet>
      <title> منشور جديد </title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg" dir="rtl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <NewPostDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>);
};

export default CreateNewPost;
