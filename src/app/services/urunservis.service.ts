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
    this.urunler=this.baseUrunler
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
  fiyataGoreArtan(){
    this.baseUrunler=this.baseUrunler.sort( (a:Urunler,b:Urunler) => (a.fiyat-b.fiyat))
  }
  fiyataGoreAzalan(){
    this.baseUrunler=this.baseUrunler.sort( (a:Urunler,b:Urunler) => (b.fiyat-a.fiyat))
  }
  ismeGoreArtan(){
    this.baseUrunler=this.baseUrunler.sort((a:Urunler,b:Urunler)=>(a.isim.localeCompare(b.isim)))
  }
  ismeGoreAzalan(){
    this.baseUrunler=this.baseUrunler.reverse()
  }
  async urunekle(urun: Urunler): Promise<void>{
    const res = await this.http.post("http://localhost:3000/urunler",urun).toPromise()
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
  urunSilOnay(urunId:number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    Swal.fire({
      title: 'Ürünü siliyorsunuz',
      text: "Bu işlem geri alınamaz",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ürünü sil',
      cancelButtonText: 'İptal',
      confirmButtonColor:'red',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.urunSil(urunId)
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'İptal',
          'İşlem iptal edildi',
          'error'
        )
      }
    })

  }

  async urunSil(urunId:number):Promise<void>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    let url='http://localhost:3000/urunler/'+urunId
    const res = await this.http.delete(url).toPromise()
    if (!res) return
    await this.getProducts()
    swalWithBootstrapButtons.fire(
      'İşlem başarılı',
      'Ürün silindi',
      'success'
    )
  }
  createId() {
    let yeniId :number=0
    for (let urun of this.urunler)  if(urun.id>yeniId) yeniId=urun.id

    return yeniId+1
  }
}
