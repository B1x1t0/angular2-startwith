import {Component} from 'angular2/core';

export class Cat {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{title}}</h1>
            <h2>{{cat.name}} details!</h2>
            <div><label>id: </label>{{cat.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="cat.name" placeholder="name">
            </div>`
})

export class AppComponent {
  title = 'Cats App';

  cat: Cat = {
    id: 1,
    name: 'Lolo'
  }
}