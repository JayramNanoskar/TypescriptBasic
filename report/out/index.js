"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
GithubApiService_1.GithubApiService.getUserInfo("jayramnanoskar", function (user) {
    console.log(user);
});
