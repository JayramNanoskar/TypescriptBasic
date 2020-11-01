"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash")); // library/node module/package to work/manage with js objects
var GithubApiService_1 = require("./GithubApiService");
var userName = "";
if (process.argv.length < 3) {
    console.log("Please pass the username as an argument");
}
else {
    userName = process.argv[2];
}
GithubApiService_1.GithubApiService.getUserInfo(userName, function (user) {
    //console.log(user);
    new GithubApiService_1.GithubApiService().getRepos(userName, function (repos) {
        var sortedRepos = _.sortBy(repos, [function (repo) { return (repo.size) * -1; }]); // (-1) to reverse the default ascending order
        var filteredRepos = _.take(sortedRepos, 5);
        user.repos = filteredRepos;
        console.log(user);
    });
});
