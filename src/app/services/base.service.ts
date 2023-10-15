import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { Noveny } from '../Model/noveny';
import { Rendeles } from '../Model/rendeles';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refNovenyek: AngularFireList<Noveny>
  refRendelesek: AngularFireList<Rendeles>

  constructor(private database:AngularFireDatabase) {
    this.refNovenyek = this.database.list('/novenyek')
    this.refRendelesek = this.database.list('/rendelesek')
  }

  getNovenyek(){
    return this.refNovenyek
  }

  getRendelesek(){
    return this.refRendelesek
  }

  newTetel(body:any){
    return this.refRendelesek.push(body)
  }

  deleteTetel(key:any){
    return this.refRendelesek.remove(key)
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
