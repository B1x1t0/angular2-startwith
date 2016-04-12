import {Component, Input} from 'angular2/core';
import {Cat} from './cat';

@Component({
  selector: 'my-cat-detail',
  template: `<div *ngIf="cat">
            <h2>{{selectedCat.name}} details!</h2>
            <div><label>id: </label>{{selectedCat.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedCat.name" placeholder="name">
            </div>
            </div>`
})



export class CatDetailComponent {
  @Input() cat: Cat;
}