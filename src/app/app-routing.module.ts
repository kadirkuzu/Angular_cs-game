import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnaSayfaComponent} from "./pages/ana-sayfa/ana-sayfa.component";
import {UrunlerComponent} from "./pages/urunler/urunler.component";
import {SatinAlimComponent} from "./pages/satin-alim/satin-alim.component";
import {UrunEkleComponent} from "./pages/urun-ekle/urun-ekle.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {LoginGuard} from "./pages/login/login.guard";

const routes: Routes = [
  {path:'anasayfa',component:AnaSayfaComponent},
  {path:'urunler',component:UrunlerComponent},
  {path:'',redirectTo:'anasayfa',pathMatch:'full'},
  {path:'urunler/:uruntur',component:UrunlerComponent},
  {path:'urunekle',component:UrunEkleComponent,canActivate:[LoginGuard]},
  {path:'odemesayfasi',component:SatinAlimComponent,canActivate:[LoginGuard]},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
