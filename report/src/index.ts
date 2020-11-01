import * as _ from "lodash";// library/node module/package to work/manage with js objects
import { GithubApiService } from "./GithubApiService";
import { Repo } from "./Repo";
import { User } from "./User";

GithubApiService.getUserInfo("jayramnanoskar", (user:  User) => {//accepting the callback
    //console.log(user);
    new GithubApiService().getRepos("jayramnanoskar", (repos: Repo[]) => {
        user.repos = repos;
        console.log(user);
    });
});
