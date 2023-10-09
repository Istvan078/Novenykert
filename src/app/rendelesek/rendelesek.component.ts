import { Component } from '@angular/core';
import { BaseService } from '../services/base.service';
import { KosarService } from '../services/kosar.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-rendelesek',
  templateUrl: './rendelesek.component.html',
  styleUrls: ['./rendelesek.component.css']
})
export class RendelesekComponent {
  novenyek: any = [];
  tetelek: any = [];

  constructor(private base: BaseService,
    private kosar: KosarService){
    this.base.getNovenyek().snapshotChanges().pipe(
      map((changes) => changes.map(
        (c) => ({key:c.payload.key, ...c.payload.val()})
      ))
    ).subscribe(adatok => this.novenyek = adatok)

    this.tetelek = this.kosar.getTetelek()
  }

  keresNoveny(key:any){
    return this.novenyek.find(
      (t:any) => t.key == key
    )
  }

}
