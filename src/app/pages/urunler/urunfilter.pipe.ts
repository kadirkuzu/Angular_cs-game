import {Pipe, PipeTransform} from '@angular/core';
import {Urunler} from "./urunler";

@Pipe({
  name: 'urunfilter'
})
export class UrunfilterPipe implements PipeTransform {

  transform(liste: Urunler[], filterTEXT?: string): Urunler[] {
    if (!filterTEXT) return liste;

    filterTEXT = filterTEXT.toLocaleLowerCase()

    return  liste.filter((urun: Urunler)=> urun.isim.toLocaleLowerCase().includes(filterTEXT!));
  }


}
