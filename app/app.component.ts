import {Component} from 'angular2/core';
import {CatsComponent} from './cats.component';
import {CatDetailComponent} from './cat-detail.component';
import {DashboardComponent} from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';



@Component({
  selector: 'my-app',
  directives: [CatsComponent, DashboardComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Cats']">Cats</a>
      <a [routerLink]="['Dashboard']">Dashboard</a>
    </nav>  
    <router-outlet></router-outlet>
  `
})

@RouteConfig([
  {
    path: '/cats',
    name: 'Cats',
    component: CatsComponent
   },
  {
    path: '/detail/:id',
    name: 'CatDetail',
    component: CatDetailComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])

export class AppComponent {
  title = "My Cat App";
}