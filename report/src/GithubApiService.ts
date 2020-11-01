import * as axios from "axios";// library/node module/package to make rest api calls
import { Repo } from "./Repo";
import { User } from "./User";

export class GithubApiService{
    static getUserInfo(userName: string, cb: (user: User) => any){//specifying type information for callback
                                                                  // creating callback function with signature as parameter to getUserInfo() 
        axios.default.get('https://api.github.com/users/'+userName)
        .then(function (response) {
          // handle success
          let user = new User(response.data);
          // console.log(user);
          cb(user); //executing the callback
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

    getRepos(userName: string, cb: (resp: Repo[]) => any){
      axios.default.get('https://api.github.com/users/'+userName+'/repos')
      .then(function (response) {
        // handle success
        let repos = response.data;
        let resp = repos.map((repo: Repo) => (new Repo(repo)));
        cb(resp); //executing the callback
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
