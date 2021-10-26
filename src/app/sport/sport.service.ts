import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data } from "../model/Data";

@Injectable({
    providedIn: 'root'
})

export class SportService {
    constructor(private http:HttpClient) {}

    url:string = "http://localhost:3001/Data";

    getSportArticles(){
        return this.http.get<Data[]>(this.url);
    }

    // getSport(){
    //     return this.http.get('http://api.mediastack.com/v1/news?access_key=0035ee4cd4a565f2e4072e8d6612cd5e');
    // }
}