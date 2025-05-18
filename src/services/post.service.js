import axios from "axios";

const API_URL = "http://localhost:4430/";
const imageUrl = "https://image.flaticon.com/icons/png/512/149/149071.png";

class PostService {
  create(
    title,
    body,
    hoursPerWeek,
    gender,
    experienceNumOfYears,
    hasExperience,token
  ) {
    const headers = { 
      'Authorization': 'Bearer '+token
  };
  const status="new";
  /*console.log(axios
    .post(API_URL + "job", {
      title,
      body,
      hoursPerWeek,
      gender,
      experienceNumOfYears,
      hasExperience,
      token
    },
    { headers })
    .then((response) => {
      console.log("response");

      console.log(response);
      console.log("response.data.status.data.id");
      console.log(response.data.status.data.id);
      
      /*if (response.data.data.token) {
        console.log(response.data.data.token);
        response.data.data.user.token = response.data.data.token;
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        console.log(response.data.data.user);
      } else {
        throw new Error("not valid input");
      }
      const jobId= response.data.status.data.id;

      return jobId;
    }));*/
 
    return axios
      .post(API_URL + "job", {
        title,
        body,
        hoursPerWeek,
        gender,
        experienceNumOfYears,
        hasExperience,
        status,
        token
      },
      { headers })
      .then((response) => {
        console.log("response");

        console.log(response);
        console.log("response.data.data.id");
        console.log(response.data.data.id);
        
        /*if (response.data.data.token) {
          console.log(response.data.data.token);
          response.data.data.user.token = response.data.data.token;
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          console.log(response.data.data.user);
        } else {
          throw new Error("not valid input");
        }*/
        const jobId= response.data.data.id;

        return jobId;
      });
  }
  createPost(
    schoolId,
   jobId,token
  ) {
    const headers = { 
      'Authorization': 'Bearer '+token
  };console.log("createPost")

 console.log("schoolId",schoolId)
  console.log(axios
    .post(API_URL + "post", {
      schoolId,
      jobId
    },
    { headers })
    .then((response) => {
      console.log("response");

      console.log(response);
      console.log("response.data");
      console.log(response.data);
      
      /*if (response.data.data.token) {
        console.log(response.data.data.token);
        response.data.data.user.token = response.data.data.token;
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        console.log(response.data.data.user);
      } else {
        throw new Error("not valid input");
      }*/

      return response.data;
    }));
    return axios
      .post(API_URL + "post", {
        schoolId,
        jobId
      },
      { headers })
      .then((response) => {
        console.log("response");

        console.log(response);
        console.log("response.data");
        console.log(response.data);
        
        /*if (response.data.data.token) {
          console.log(response.data.data.token);
          response.data.data.user.token = response.data.data.token;
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          console.log(response.data.data.user);
        } else {
          throw new Error("not valid input");
        }*/

        return response.data;
      });
  }

  
}

export default new PostService();
