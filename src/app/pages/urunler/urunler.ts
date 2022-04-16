export class  Urunler{
    id:number;
    isim:string;
    fiyat:number
    silahturu:string;
    gorunus:string;
    imageUrl:string;
  constructor(id:number,isim:string,fiyat:number,categoryId:number,silahturu:string,gorunus:string,imageUrl:string) {
    this.id=id
    this.isim=isim
    this.fiyat=fiyat
    this.silahturu=silahturu
    this.gorunus=gorunus
    this.imageUrl=imageUrl

  }
}
