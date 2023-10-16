import { Component } from '@angular/core';
import { BaseService } from '../services/base.service';
import { ConfigService } from '../services/config.service';
import { map } from 'rxjs';
import { KosarService } from '../services/kosar.service';

@Component({
  selector: 'app-novenyek-list',
  templateUrl: './novenyek-list.component.html',
  styleUrls: ['./novenyek-list.component.css']
})
export class NovenyekListComponent {
  novenyek: any;
  oszlopok: any;
  tetelek: any;
  keresoSzo = ""

  constructor(private base: BaseService, 
    private config: ConfigService,
    private kosar: KosarService){
    this.base.getNovenyek().snapshotChanges().pipe(
      map((changes) => changes.map(
        (c) => ({key:c.payload.key, ...c.payload.val()})
      ))
    ).subscribe(adatok => this.novenyek = adatok)

    this.oszlopok = this.config.getNovenyOszlopok();
    this.tetelek = this.kosar.getTetelek()
  }

  ment(novenykey:any, db:any){
    this.kosar.addTetel(novenykey,Number(db))
    this.tetelek = this.kosar.getTetelek()
  }
  rendeltunkE(novenyKey:any){
    let i = this.tetelek.findIndex(
      (tl:any)=>tl.novenyKey == novenyKey
    )
    return (i==-1) 
  }
}
