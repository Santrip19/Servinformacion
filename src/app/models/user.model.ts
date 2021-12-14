export interface User{
    login?: string;
    avatar?: string;
    location?:string;
    public_repos?:string;

}

export interface userResponse{
    incomplete_results? : boolean,
    items?:[]
}