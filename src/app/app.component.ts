import { Component } from '@angular/core';
import Swal from "sweetalert2";
import {UrunservisService} from "./services/urunservis.service";
import {AccountService} from "./services/account.service";
import {Route, Router} from "@angular/router";


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
    this.router.navigate(["/urunler"])
  }

  constructor(public urunService: UrunservisService,public accountService:AccountService,private router:Router) {
  }

  ngOnInit(): void {
    this.urunService.getProducts().finally(()=>{this.loading=false});
  }
  girisVarmi(){
    return !!localStorage.getItem("isLogged");
  }
}
