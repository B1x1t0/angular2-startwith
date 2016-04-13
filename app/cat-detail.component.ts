import {Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {Cat} from './cat';
import {CatService} from './services/cat.service';



@Component({
  selector: 'my-cat-detail',
  providers: [CatService],
  template: `<div *ngIf="cat">
            <h2>{{cat.name}} details!</h2>
            <div><label>id: </label>{{cat.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="cat.name" placeholder="name">
            </div>
            <button (click)="goBack()">Back</button>
            </div>`
})



export class CatDetailComponent implements OnInit {
  @Input() cat: Cat;

  constructor(
    private _catService: CatService,
    private _routeParams: RouteParams) {
  }

  ngOnInit(){
    let id = +this._routeParams.get('id');
    this._catService.getCat(id)
      .then(cat => this.cat = cat);
  }

  goBack(){
    window.history.back();
  }
}