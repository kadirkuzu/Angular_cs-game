import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnaSayfaComponent} from "./pages/ana-sayfa/ana-sayfa.component";
import {UrunlerComponent} from "./pages/urunler/urunler.component";
import {SatinAlimComponent} from "./pages/satin-alim/satin-alim.component";
import {UrunEkleComponent} from "./pages/urun-ekle/urun-ekle.component";

const routes: Routes = [
  {path:'anasayfa',component:AnaSayfaComponent},
  {path:'urunler',component:UrunlerComponent},
  {path:'',redirectTo:'anasayfa',pathMatch:'full'},
  {path:'urunler/:uruntur',component:UrunlerComponent},
  {path:'urunekle',component:UrunEkleComponent},
  {path:'odemesayfasi',component:SatinAlimComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
