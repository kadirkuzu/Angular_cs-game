import { Component, OnInit } from '@angular/core';
import {UrunservisService} from "../services/urunservis.service";


@Component({
  selector: 'app-baslik',
  templateUrl: './baslik.component.html',
  styleUrls: ['./baslik.component.css']
})
export class BaslikComponent implements OnInit {
  aktifBaslik="Ana Sayfa"
  filterText=""
  search(){
    this.urunService.urunAra(this.filterText)

  }
  constructor(public urunService:UrunservisService) { }
  ngOnInit(): void {
  }

}
