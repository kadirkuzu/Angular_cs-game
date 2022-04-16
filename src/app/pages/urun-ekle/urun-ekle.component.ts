import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UrunservisService} from "../../services/urunservis.service";

@Component({
  selector: 'app-urun-ekle',
  templateUrl: './urun-ekle.component.html',
  styleUrls: ['./urun-ekle.component.css']
})
export class UrunEkleComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(this.urunservis.createId(), [Validators.required]),
    isim: new FormControl("", [Validators.required]),
    fiyat: new FormControl(null, [Validators.required, Validators.min(0)]),
    silahturu: new FormControl("Silah türünü seçiniz", [Validators.required]),
    gorunus: new FormControl('Silah görünüşü seçiniz', [Validators.required]),
    imageUrl: new FormControl("", [Validators.required]),
  })

  constructor(public urunservis:UrunservisService) { }

  async urunEkle() {
    const urun=this.form.value
    urun.fiyat=+urun.fiyat
    await this.urunservis.urunekle(urun)
    this.form.reset({id: this.urunservis.createId(),gorunus:'Silah görünüşü seçiniz',silahturu:"Silah türünü seçiniz"});
  }

  urunekleIptal() {
    this.form.reset({id: this.urunservis.createId()});
  }
  ngOnInit(): void {
  }

}
