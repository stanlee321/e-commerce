import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var megamenu:any;
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".megamenu").megamenu();
    });
  }

}
