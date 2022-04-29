import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {Urunler} from "./urunler";
import {UrunservisService} from "../../services/urunservis.service";
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.css'],
})
export class UrunlerComponent {
  loading = true
  title = "Ürünler"
  filterText = ""

  constructor(
    public urunService: UrunservisService,
    private activatedRoute:ActivatedRoute ,
    public accountService:AccountService) {
  }

  odemeYap(): void {
    let timerInterval: any
    Swal.fire({
      title: 'Satın alma sitesine yönlendiriyorum...',
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        // @ts-ignore
        const b: any = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
    })
  }



}
