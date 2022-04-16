import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kategorifilter'
})
export class KategorifilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
