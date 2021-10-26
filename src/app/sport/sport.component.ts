import { Component, OnInit } from '@angular/core';
import { Data } from '../model/Data';
import { SportService } from './sport.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  sports:Data[] = [];
  searchValue: any;
  p:number = 1;

  constructor(public ss:SportService){}
  
   ngOnInit(): void {
    this.ss.getSportArticles().subscribe((response) => {
      this.sports = response;
    });
   }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}