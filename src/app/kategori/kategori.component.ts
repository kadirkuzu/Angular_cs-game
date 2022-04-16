import {Component, OnInit} from '@angular/core';
import {Kategori} from "./kategori";
import {UrunservisService} from "../services/urunservis.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css'],
  providers: []
})
export class KategoriComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(this.urunservis.createId(), [Validators.required]),
    isim: new FormControl("", [Validators.required]),
    fiyat: new FormControl(null, [Validators.required, Validators.min(0)]),
    silahturu: new FormControl("Silah türünü seçiniz", [Validators.required]),
    gorunus: new FormControl('Silah görünüşü seçiniz', [Validators.required]),
    imageUrl: new FormControl("", [Validators.required]),
  })


  constructor(public urunservis: UrunservisService) {
  }

  ngOnInit(): void {
  }

  title = "Kategoriler"
  kategoryisim = ""
  kategoriler: Kategori[] = [
    {id: 1, isim: "AWP"},
    {id: 2, isim: "AK-47"},
    {id: 3, isim: "M4A4"},
    {id: 4, isim: "M4A1-S"},
    {id: 5, isim: "DESERT EAGLE"},
    {id: 6, isim: "USP-S"},
    {id: 7, isim: "GLOCK-18"},
    {id: 8, isim: "P2000"},
  ]

  async urunEkle() {
    const urun=this.form.value
    urun.fiyat=+urun.fiyat
    await this.urunservis.urunekle(urun)
    this.form.reset({id: this.urunservis.createId(),gorunus:'Silah görünüşü seçiniz',silahturu:"Silah türünü seçiniz"});
  }

  urunekleIptal() {
    this.form.reset({id: this.urunservis.createId()});
  }

}

