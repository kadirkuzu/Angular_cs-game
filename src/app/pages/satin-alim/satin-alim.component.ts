import { Component, OnInit } from '@angular/core';
import {UrunservisService} from "../../services/urunservis.service";
import {UrunlerComponent} from "../urunler/urunler.component";
@Component({
  selector: 'app-satin-alim',
  templateUrl: './satin-alim.component.html',
  styleUrls: ['./satin-alim.component.css']
})
export class SatinAlimComponent implements OnInit {
  constructor(private urunServis: UrunservisService) {
  }

  ngOnInit(): void {
  }

}
