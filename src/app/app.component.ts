import { Component } from '@angular/core';
import Swal from "sweetalert2";
import {UrunservisService} from "./services/urunservis.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  loading = true
  filterText=""
  search(){
    this.urunService.urunAra(this.filterText)

  }

  constructor(public urunService: UrunservisService,) {
  }

  ngOnInit(): void {
    this.urunService.getProducts().finally(()=>{this.loading=false});
  }
}



