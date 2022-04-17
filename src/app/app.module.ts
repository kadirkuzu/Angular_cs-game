import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BaslikComponent} from './baslik/baslik.component';
import {KategoriComponent} from './kategori/kategori.component';
import {UrunlerComponent} from './pages/urunler/urunler.component';
import {UrunfilterPipe} from './pages/urunler/urunfilter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {KategorifilterPipe} from './kategori/kategorifilter.pipe';
import {AnaSayfaComponent} from './pages/ana-sayfa/ana-sayfa.component';
import {HttpClientModule} from "@angular/common/http";
import {DataTablesModule} from "angular-datatables";
import {UrunservisService} from "./services/urunservis.service";
import { SatinAlimComponent } from './pages/satin-alim/satin-alim.component';
import { UrunEkleComponent } from './pages/urun-ekle/urun-ekle.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import {AccountService} from "./services/account.service";
import {LoginGuard} from "./pages/login/login.guard";

@NgModule({
  declarations: [
    AppComponent,
    BaslikComponent,
    KategoriComponent,
    UrunlerComponent,
    UrunfilterPipe,
    KategorifilterPipe,
    AnaSayfaComponent,
    SatinAlimComponent,
    UrunEkleComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [UrunservisService,AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
