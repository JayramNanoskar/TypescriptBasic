export class Repo{
    name: string = "";
    description: string = "";
    url: string = "";
    size: number = 0;
    forkCount: number = 0;

    constructor(userResponse: any){
        this.name = userResponse.name;
        this.description = userResponse.description;
        this.url = userResponse.html_url;
        this.size = userResponse.size;
        this.forkCount = userResponse.forks_count;
    }
}
