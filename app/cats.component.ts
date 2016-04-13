import {Component, OnInit} from 'angular2/core';
import {Cat} from './cat';
import {CatDetailComponent} from './cat-detail.component';
import {CatService} from './services/cat.service';


@Component({
  selector: 'my-cats',
  providers: [CatService],
  directives: [CatDetailComponent],
  template: `<h1>{{title}}</h1>
              <h2>My cats</h2>
            <ul class="cats">
              <li *ngFor="#cat of cats" (click)="onSelect(cat)" [class.selected]="cat === selectedCat">
                <span class="badge">{{cat.id}}</span> {{cat.name}}
              </li>
            </ul>
            <!--<div *ngIf="selectedCat">
            <h2>{{selectedCat.name}} details!</h2>
            <div><label>id: </label>{{selectedCat.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedCat.name" placeholder="name">
            </div>
            </div>-->
            <my-cat-detail [cat]="selectedCat"></my-cat-detail>`,

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

export class CatsComponent implements OnInit {
  cats;
  title = 'Cats App';
  selectedCat: Cat;

  constructor(private _catService: CatService){
  }

  ngOnInit() {
    this.getCats();
  }

  getCats() {
    console.log("get cats");
    //this.cats = this._catService.getCats();
    this._catService.getCats().then(inputGatitos => this.cats = inputGatitos);

  }


  onSelect(cat: Cat) { 
    this.selectedCat = cat;
  }

}