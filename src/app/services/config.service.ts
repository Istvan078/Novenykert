import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  oszlopokNoveny = [
    "megnevezes", "kepUrl", "ar" 
  ]
  constructor() { }

  getNovenyOszlopok(){
    return this.oszlopokNoveny
  }
}
