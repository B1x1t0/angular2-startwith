import {Component, OnInit} from 'angular2/core';
import {Cat} from './cat';
import {CatService} from './services/cat.service';
import { Router } from 'angular2/router';



@Component({
  selector: 'my-dashboard',
  providers: [CatService],
  templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  cats: Cat[] = [];

  constructor(private _catService: CatService, private _router: Router){

  }

  ngOnInit(){
    this._catService.getCats()
      .then(cats => this.cats = cats.slice(1, 5));
  }

  gotoDetail(cat: Cat) {
    let link = ['CatDetail', { id: cat.id }];
    this._router.navigate(link);
  }

}