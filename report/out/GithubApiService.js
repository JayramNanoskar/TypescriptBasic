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
exports.GithubApiService = void 0;
var axios = __importStar(require("axios")); // library/node module/package to make rest api calls
var User_1 = require("./User");
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.getUserInfo = function (userName, cb) {
        // creating callback function with signature as parameter to getUserInfo() 
        axios.default.get('https://api.github.com/users/' + userName)
            .then(function (response) {
            // handle success
            var user = new User_1.User(response.data);
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
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
