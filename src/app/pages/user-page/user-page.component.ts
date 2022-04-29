import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(public accountService:AccountService,public http:HttpClient) { }
  kisi:any
  async ngOnInit():Promise<void>{
    this.kisi =await this.accountService.findUser()
    $(function() {
      $('.view_details').click(function() {
        if ($(this).is(':checked')) {
          $(this)
            .next('label')
            .html('&times;')
            .attr('title', 'tap here to close full profile');
          $(this)
            .parent()
            .next('main')
            .slideDown('normal');
        } else {
          $(this)
            .next('label')
            .html('☰')
            .attr('title', 'tap here to view full profile');
          $(this)
            .parent()
            .next('main')
            .slideUp('fast');
        }
      });
    });
  }

}
