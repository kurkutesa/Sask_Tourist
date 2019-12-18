import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  siteList: Observable<Site[]>;

  constructor(httpClient: HttpClient){
    this.siteList = httpClient.get<Site[]>("http://api.myjson.com/bins/xtgzy");
  }

}

export interface Site {
  id: number;
  name: string;
  image: string;
}