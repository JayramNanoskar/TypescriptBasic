import * as _ from "lodash";// library/node module/package to work/manage with js objects
import { GithubApiService } from "./GithubApiService";
import { Repo } from "./Repo";
import { User } from "./User";

let userName:string = "";
if(process.argv.length <3){
    console.log("Please pass the username as an argument");
}
else{
    userName = process.argv[2];
}

GithubApiService.getUserInfo(userName, (user:  User) => {//accepting the callback
    //console.log(user);
    new GithubApiService().getRepos(userName, (repos: Repo[]) => {
        let sortedRepos = _.sortBy(repos, [(repo: Repo) => (repo.size) * -1]);// (-1) to reverse the default ascending order
        let filteredRepos =  _.take(sortedRepos, 5);
        user.repos = filteredRepos;
        console.log(user);
    });
});
