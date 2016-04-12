import {Component} from 'angular2/core';

export class Cat {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{title}}</h1>
              <h2>My cats</h2>
            <ul class="cats">
              <li *ngFor="#cat of cats" (click)="onSelect(cat)" [class.selected]="cat === selectedCat">
                <span class="badge">{{cat.id}}</span> {{cat.name}}
              </li>
            </ul>
            <div *ngIf="selectedCat">
            <h2>{{selectedCat.name}} details!</h2>
            <div><label>id: </label>{{selectedCat.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedCat.name" placeholder="name">
            </div>
            </div>`,

styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .cats {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .cats li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .cats li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .cats li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .cats .text {
    position: relative;
    top: -3px;
  }
  .cats .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
  public cats = CATS;
  title = 'Cats App';
  selectedCat: Cat;


  onSelect(cat: Cat) { 
    this.selectedCat = cat;
  }

}


let CATS: Cat[] = [
  { "id": 11, "name": "Mini11" },
  { "id": 12, "name": "Mini12" },
  { "id": 13, "name": "Mini13" },
  { "id": 14, "name": "Mini14" },
  { "id": 15, "name": "Mini15" },
  { "id": 16, "name": "Mini16" }
];