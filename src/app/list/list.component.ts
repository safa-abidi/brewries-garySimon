import { HttpService } from './../http.service'; //service
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  brews: Object;

  constructor(private _http: HttpService) {
    //we referance the service thru dependancy injection
  }

  ngOnInit(): void {
    //ngOnInit is a life cycle hook
    //code inside it runs whenever the component is loaded kinda

    //it returns an observable so we subscribe to it
    this._http.getBeer().subscribe((data) => {
      this.brews = data;
      console.log(this.brews);
    });
  }
}
