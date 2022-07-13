import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public accountService:AccountService,public router:Router) { }
  async ngOnInit():Promise<void> {
    const newId=await this.accountService.createId()
    this.form.patchValue({id:newId})
  }
  form= new FormGroup({
  id:new FormControl ( null ,[Validators.required]),
  userName:new FormControl("",[Validators.required]),
  emailAdress:new FormControl("",[Validators.required]),
  password:new FormControl("",[Validators.required]),
  name:new FormControl("",[Validators.required]),
  secondName:new FormControl("",[Validators.required]),
})
  async signUp(){
    const kisi = this.form.value
    await this.accountService.signUp(kisi)
    if (!this.accountService.wait) return
    this.form.reset({id: this.accountService.createId()})
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Kişi Eklendi',
      showConfirmButton: false,
      timer: 1500
    })
   this.router.navigate(["login"])
    this.accountService.wait=false
  }

}
