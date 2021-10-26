import { Component, OnInit } from '@angular/core';
import { Data } from '../model/Data';
import { TechnologyService } from './technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technologies:Data[] = [];
  searchValue: any;
  p:number = 1;

  constructor(public ts:TechnologyService){}
  
  ngOnInit(): void {
    this.ts.getTechnologyArticles().subscribe((response) => {
      this.technologies = response;
    });
   }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  openNewTab(): void {
    window.open('/link')
  }
}
