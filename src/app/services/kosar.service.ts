import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
  tetelek:any=[]
  constructor() { }

  getTetelek(){
    return this.tetelek
  }

  addTetel(novenyKey:any, db:number){
    let body:any = {}
    body.novenyKey =  novenyKey
    body.db = db
    let i = this.tetelek.findIndex(
      (tl:any)=>tl.novenyKey == novenyKey
    )
    console.log("index:", i)

    if(i==-1)
    this.tetelek.push(body)
    else this.tetelek[i].db = db
    
    console.log(this.tetelek)
  }

  deleteTetel(tetel:any){
    this.tetelek = this.tetelek.filter(
      (tl:any)=> tl != tetel
    )
  }
}
