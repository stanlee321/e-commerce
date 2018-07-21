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
      $(".js-select2").each(function(){
        $(this).select2({
          minimumResultsForSearch: 20,
          dropdownParent: $(this).next('.dropDownSelect2')
        });
      });
         /*==================================================================
      [ Show modal1 ]*/
      $('.js-show-modal1').on('click',function(e){
        e.preventDefault();
        $('.js-modal1').addClass('show-modal1');
        });

        $('.js-hide-modal1').on('click',function(){
            $('.js-modal1').removeClass('show-modal1');
        });
    }
  );
  }

}


