import {Injectable} from '@angular/core';
import {User} from "../pages/login/User";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AccountService {
  logedIn = false

  constructor(private router: Router, private http: HttpClient,) {
  }
  kisi:User={userName:"kadir",name:"kadir",secondName:"kuzu",id:1,emailAdress:"", password:1234}
  async findUser(){
    let id = localStorage.getItem("isLogged")
    let url = 'http://localhost:3000/users/'+id
    let kisi = await this.http.get(url).toPromise()
    return kisi
  }
  kisiListesi: User[] = []
  async login(forUser: any) {
    const users = await this.http.get('http://localhost:3000/users').toPromise();
    this.kisiListesi = users as User[]
    for (let kisi of this.kisiListesi) {
      if ((kisi.userName.toLowerCase() == forUser.userName.toLowerCase() || kisi.emailAdress.toLowerCase() == forUser.userName.toLowerCase()) && kisi.password == forUser.password) {
        this.logedIn = true
        localStorage.setItem("isLogged", String(kisi.id))
        await this.router.navigate(["anasayfa"])
        await Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hesaba giriş yaptınız',
          showConfirmButton: false,
          timer: 1500
        })
        this.kisi=kisi
        return true
      }
    }
    Swal.fire({
      icon: 'error',
      title: 'Hata',
      text: 'Kullanıcı adı veya şifre hatalı',
    })
    return false
  }

  logOut() {
    localStorage.removeItem("isLogged")
    this.router.navigate(["login"])
    this.logedIn = false
  }

  girisVarmi() {
    if (localStorage.getItem("isLogged") != null) return true
    return false
  }
  wait:boolean = false
  async signUp(eklenecekKisi: User) {
    const users = await this.http.get('http://localhost:3000/users').toPromise();
    this.kisiListesi = users as User[]
    for (let kisi of this.kisiListesi) {
      if (kisi.userName == eklenecekKisi.userName) {
        Swal.fire({
          icon: 'error',
          title: 'Hata',
          text: 'Bu kullanıcı adı kullanılıyor.'
        })
        return
      }
      if (kisi.emailAdress == eklenecekKisi.emailAdress) {
        Swal.fire({
          icon: 'error',
          title: 'Hata',
          text: 'Bu e-mail zaten kullanılıyor.',
        })
        return
      }
    }
    const res = this.http.post('http://localhost:3000/users', eklenecekKisi).toPromise()
    this.wait=true
  }

  async createId() {
    const users = await this.http.get('http://localhost:3000/users').toPromise();
    this.kisiListesi = users as User[]
    let yeniId = 0
    for (let kisi of this.kisiListesi) {
      if (kisi.id > yeniId) yeniId = kisi.id
    }
    return yeniId + 1
  }
}
