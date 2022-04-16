import {Injectable} from '@angular/core';
import {Urunler} from "../pages/urunler/urunler";
import Swal from "sweetalert2";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UrunservisService {
  constructor(private http: HttpClient) {
  }
  private baseUrunler: Urunler[]=[]
  urunler: Urunler[] =[]

  aktifCategory = "TÜMÜ"

  async getProducts() {
    const res = await this.http.get('http://localhost:3000/urunler').toPromise();

    if (!res) {
      return;
    }

    this.baseUrunler = res as Urunler[];
    this.baseUrunler=this.baseUrunler.sort( (a:Urunler,b:Urunler) => (b.fiyat-a.fiyat))
    this.kategorifilter(this.aktifCategory)
  }

  kategorifilter(kategoryisim: string) {
    if (kategoryisim.toLowerCase() == "TÜMÜ".toLocaleLowerCase()) {
      this.urunler = this.baseUrunler
      this.aktifCategory = 'TÜMÜ'
      return
    }
    this.urunler = this.baseUrunler.filter((urun: Urunler) => urun.silahturu.toLowerCase() === kategoryisim.toLowerCase())
    this.aktifCategory = kategoryisim
  }

  aranacakUrunadresi:any=document.getElementById("aranacakUrun")

  urunAra(filterTEXT?: string): any {

    if (!filterTEXT){ this.urunler=this.baseUrunler ; return}
    filterTEXT = filterTEXT.toLocaleLowerCase()
    this.urunler= this.baseUrunler.filter((urun: Urunler)=> {
      const aranacakUrunAdı=urun.silahturu+" "+urun.isim
      return(
      aranacakUrunAdı.toLocaleLowerCase().includes(filterTEXT!))
    });
  }

  async urunekle(urun: Urunler): Promise<void>{
    const res = await this.http.post("http://localhost:3000/urunler",urun).toPromise()
    console.log(res)
    if (!res) return
    await this.getProducts()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ürün Eklendi',
      showConfirmButton: false,
      timer: 1500
    })
  }

  createId() {
    let yeniId :number=0
    for (let urun of this.urunler)  if(urun.id>yeniId) yeniId=urun.id

    return yeniId+1
  }
}
