import * as axios from "axios";// library/node module/package to make rest api calls
import { User } from "./User";

export class GithubApiService{
    static getUserInfo(userName: string){
        axios.default.get('https://api.github.com/users/'+userName)
        .then(function (response) {
          // handle success
          let user = new User(response.data);
          console.log(user);
        })
        .catch(function (error) {
          // handle error
          console.log("Something went wrong");
          // console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
}
