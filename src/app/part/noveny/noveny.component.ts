import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-noveny',
  templateUrl: './noveny.component.html',
  styleUrls: ['./noveny.component.css']
})
export class NovenyComponent {
  novenyek: any;
  oszlopok: any;
  ujNoveny:any = {};

  constructor(private base: BaseService, private config: ConfigService){
    this.base.getNovenyek().snapshotChanges().pipe(
      map((changes) => changes.map(
        (c) => ({key:c.payload.key, ...c.payload.val()})
      ))
    ).subscribe(adatok => this.novenyek = adatok)

    this.oszlopok = this.config.getNovenyOszlopok();

  }

  updateNoveny(key:any,body:any){
    this.base.updateNoveny(key, body).then(
      ()=>console.log("Sikeres módosítás")
    ).catch(
      ()=>console.log("Hiba a módosításnál")
    )
  }

  deleteNoveny(key:any){
    this.base.deleteNoveny(key).then(
      ()=>console.log("Sikeres törlés!")
    ).catch(
      ()=>console.log("Hiba a törlésnél")
    )
  }

  newNoveny(){
    this.base.newNoveny(this.ujNoveny).then(
      ()=> this.ujNoveny = {}
    )
  }
}
