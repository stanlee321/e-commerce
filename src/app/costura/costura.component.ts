import { Component, OnInit } from '@angular/core';

declare var $:any
@Component({
  selector: 'app-costura',
  templateUrl: './costura.component.html',
  styleUrls: ['./costura.component.css']
})
export class CosturaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $('.gallery-lb').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
              delegate: 'a', // the selector for gallery item
              type: 'image',
              gallery: {
                enabled:true
              },
              mainClass: 'mfp-fade'
          });
		  });
    });
  }
  
}


