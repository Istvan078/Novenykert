import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { Noveny } from '../Model/noveny';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refNovenyek: AngularFireList<Noveny>

  constructor(private database:AngularFireDatabase) {
    this.refNovenyek = this.database.list('/novenyek')
  }

  getNovenyek(){
    return this.refNovenyek
  }

  updateNoveny(key:any, body: any){
    return this.refNovenyek.update(key, body)//key:melyik növényt akarom update-elni, body:új adatok, amivel update-elni akarom//
  }

  deleteNoveny(key:any){
    return this.refNovenyek.remove(key)
  }

  newNoveny(body:any){
    return this.refNovenyek.push(body)
  }

}
