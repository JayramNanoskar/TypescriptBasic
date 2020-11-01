"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(userResponse) {
        this.name = "";
        this.description = "";
        this.url = "";
        this.size = 0;
        this.forkCount = 0;
        this.name = userResponse.name;
        this.description = userResponse.description;
        this.url = userResponse.html_url;
        this.size = userResponse.size;
        this.forkCount = userResponse.forks_count;
    }
    return Repo;
}());
exports.Repo = Repo;
