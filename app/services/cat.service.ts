import {Injectable} from 'angular2/core';
import {Cat} from '../cat'
import {CATS} from './mock-cats';

@Injectable()
export class CatService{

  getCats(){
    //return CATS;
    return Promise.resolve(CATS)
  }

}
