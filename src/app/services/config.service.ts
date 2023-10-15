import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  oszlopokNoveny = [
    "megnevezes", "kepUrl", "ar" 
  ]

  rendelesNoveny = [
    "Megnevezés", "Ár", "Db"
  ]
  constructor() { }

  getNovenyOszlopok(){
    return this.oszlopokNoveny
  }
  getRendelesOszlopok(){
    return this.rendelesNoveny
  }
}
