import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form=new FormGroup({
    userName:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })
  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
  }
  async girisyap(){
    const kullanici = this.form.value
    await this.accountService.login(kullanici)
    this.form.reset()
  }
}
