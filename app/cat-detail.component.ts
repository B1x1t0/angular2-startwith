import {Component, Input} from 'angular2/core';
import {Cat} from './cat';


@Component({
  selector: 'my-cat-detail',
  template: `<div *ngIf="cat">
            <h2>{{cat.name}} details!</h2>
            <div><label>id: </label>{{cat.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="cat.name" placeholder="name">
            </div>
            </div>`
})



export class CatDetailComponent {
  @Input() cat: Cat;
}