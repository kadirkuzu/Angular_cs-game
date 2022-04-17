import {Injectable} from '@angular/core';
import {User} from "../pages/login/User";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Injectable()
export class AccountService {
  logedIn = false

  constructor(private router: Router) {
  }

  async login(user: User): Promise<boolean> {
    if (user.userName === "kadir" && user.password === "1234") {
      this.logedIn = true
      localStorage.setItem("isLogged", user.userName)
      await Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Hesaba giriş yaptınız',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["urunekle"])
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Hata',
        text: 'Kullanıcı adı veya şifre hatalı',
      })
    }
    return false

    return true
  }

  logOut() {
    localStorage.removeItem("isLogged")
    this.router.navigate(["login"])
    this.logedIn = false
  }
}
