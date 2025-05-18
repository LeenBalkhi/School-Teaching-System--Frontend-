import PostService from "../services/post.service";

export const create=
  (title, body, hoursPerWeek, gender, experienceNumOfYears,token,schoolId) => (dispatch) => {
    let hasExperience = false;

    if (experienceNumOfYears > 0) hasExperience = true;
    return PostService.create(
      title,
      body,
      hoursPerWeek+"",
      gender,
      experienceNumOfYears,
      hasExperience+"",token
    ).then(
      (jobId) => {
        console.log(" koko user 200",jobId);
        PostService.createPost(schoolId,jobId,token).then(
            (data)=>{
                console.log("job data",data)
            }
            ,
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(error);
        console.log(message);

      //  dispatch(authActions.registerFail());
        /*
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });*/

        return Promise.reject();
      }
        )

        //dispatch(authActions.registerSuccess({ user: user }));

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(error);
        console.log(message);

      //  dispatch(authActions.registerFail());
        /*
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });*/

        return Promise.reject();
      }
    )
    ;
  };
