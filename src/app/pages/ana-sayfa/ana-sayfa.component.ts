import { Component, OnInit } from '@angular/core';
import {ADTSettings} from "angular-datatables/src/models/settings";
import {UrunservisService} from "../../services/urunservis.service";

@Component({
  selector: 'app-ana-sayfa',
  templateUrl: './ana-sayfa.component.html',
  styleUrls: ['./ana-sayfa.component.css'],
})
export class AnaSayfaComponent implements OnInit {

  data = [
    {id: 1, name: 'asdasd'},
    {id: 1, name: 'asdasd'},
    {id: 1, name: 'asdasd'},
    {id: 1, name: 'asdasd'},
    {id: 1, name: 'asdasd'},
    {id: 1, name: 'asdasd'},
    {id: 1, name: 'asdasd'}
  ]
  constructor(public urunService:UrunservisService) { }

  dtOptions: ADTSettings = {
    paging: true,
    pageLength: 3,
    search: false,
  }

  ngOnInit(): void {
  }

}
