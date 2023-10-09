import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tomb:any[],keresoSzo:string): any {
    if(!keresoSzo) return tomb
    return tomb.filter(
      (e:any) => e.megnevezes.toLowerCase().includes(keresoSzo.toLowerCase())
    )
  }
  

}
