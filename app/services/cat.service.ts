import {Injectable} from 'angular2/core';
import {Cat} from '../cat'
import {CATS} from './mock-cats';

@Injectable()
export class CatService{

  getCats(){
    //return CATS;
    return Promise.resolve(CATS)
  }

  getCat(id){
    return Promise.resolve(CATS).then(
      cats => cats.filter(cat => cat.id === id)[0]
    );
  }

}
