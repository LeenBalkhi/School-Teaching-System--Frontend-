import axios from "axios";

const API_URL = "http://localhost:4430/";
const imageUrl="https://image.flaticon.com/icons/png/512/149/149071.png";

class AuthService {
  login(email, password) {
    console.log('koko');

    return axios
      .post(API_URL + "auth/login", { email, password })
      .then((response) => {
        console.log("response");

        console.log(response);
        console.log("response.data");
        console.log(response.data);
        console.log(response.data.data.token);

        if (response.data.data.token) {
          console.log(response.data.data.token);
          response.data.data.user.token=response.data.data.token
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          console.log(response.data.data.user);

        }
        else{
          throw new Error("not valid input");
        }

        return response.data.data.user;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name,address, email, password,phone) {
    console.log(name,address, email, password,phone);
    console.log('koko');

    return axios
      .post( "http://localhost:4430/auth/signup", { name, email, password,address,imageUrl,phone})
      .then((response) => {
        console.log("response");

        console.log(response);
        console.log("response.data");
        console.log(response.data.data);

        if (response.data.data.token) {
          console.log(response.data.token);
          response.data.data.user.token=response.data.data.token

          localStorage.setItem("user", JSON.stringify(response.data));
        }
        

        return response.data.data.user;
      });
  }
  register2(ageCategory,studentsGender,userId,token) {
    console.log(ageCategory,studentsGender,userId);
    console.log('koko1000');
    const headers = { 
      'Authorization': 'Bearer '+token
  };
  console.log(    axios
    .post( "http://localhost:4430/school", {ageCategory,studentsGender, userId},{headers})
    .then((response) => {
      console.log("response");

      console.log(response);
      console.log("response.data");
      console.log(response.data);

      if (response.data.token) {
        console.log(response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    }));
    return axios
      .post( "http://localhost:4430/school", {ageCategory,studentsGender, userId},{headers})
      .then((response) => {
        console.log("response");

        console.log(response);
        console.log("response.data");
        console.log(response.data);

        if (response.data.token) {
          console.log(response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

}


export default new AuthService();