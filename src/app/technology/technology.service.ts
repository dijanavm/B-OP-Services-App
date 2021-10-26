import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data } from "../model/Data";

@Injectable({
    providedIn: 'root'
})

export class TechnologyService {
    constructor(private http:HttpClient) {}

    url:string = "http://localhost:3001/Data";

    getTechnologyArticles(){
        return this.http.get<Data[]>(this.url);
    }
}