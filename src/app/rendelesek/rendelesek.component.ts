import { Component } from '@angular/core';
import { BaseService } from '../services/base.service';
import { KosarService } from '../services/kosar.service';
import { map } from 'rxjs';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-rendelesek',
  templateUrl: './rendelesek.component.html',
  styleUrls: ['./rendelesek.component.css']
})
export class RendelesekComponent {
  novenyek: any = [];
  tetelek: any = [];
  rendelesek: any = [];
  oszlopok: any
  constructor(private base: BaseService,
    private kosar: KosarService, private config: ConfigService){
    this.base.getNovenyek().snapshotChanges().pipe(
      map((changes) => changes.map(
        (c) => ({key:c.payload.key, ...c.payload.val()})
      ))
    ).subscribe(adatok => this.novenyek = adatok)

    this.tetelek = this.kosar.getTetelek()

    this.base.getRendelesek().snapshotChanges().pipe(
      map((changes) => changes.map(((c)=>({
        key:c.payload.key, ...c.payload.val()}))))
    ).subscribe(adatok=>this.rendelesek = adatok)
    this.oszlopok= this.config.getRendelesOszlopok()
  }

  keresNoveny(key:any){
    return this.novenyek.find(
      (t:any) => t.key == key
    )
  }

  deleteTetel(key:any){
    this.base.deleteTetel(key)
  }

}
