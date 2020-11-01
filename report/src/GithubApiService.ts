import * as axios from "axios";// library/node module/package to make rest api calls

export class GithubApiService{
    static getUserInfo(userName: string){
        axios.default.get('https://api.github.com/users/'+userName)
        .then(function (response) {
          // handle success
          console.log("Ok");
          console.log(response.data);
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
