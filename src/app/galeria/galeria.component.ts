import { Component, OnInit } from '@angular/core';

declare var $:any


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

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

         /*==================================================================
      [ Isotope ]*/
      var $topeContainer = $('.isotope-grid');
      var $filter = $('.filter-tope-group');

      // filter items on button click
      $filter.each(function () {
          $filter.on('click', 'button', function () {
              var filterValue = $(this).attr('data-filter');
              $topeContainer.isotope({filter: filterValue});
          });
          
      });

      // init Isotope
      $(window).on('load', function () {
          var $grid = $topeContainer.each(function () {
              $(this).isotope({
                  itemSelector: '.isotope-item',
                  layoutMode: 'fitRows',
                  percentPosition: true,
                  animationEngine : 'best-available',
                  masonry: {
                      columnWidth: '.isotope-item'
                  }
              });
          });
      });

      var isotopeButton = $('.filter-tope-group button');

      $(isotopeButton).each(function(){
          $(this).on('click', function(){
              for(var i=0; i<isotopeButton.length; i++) {
                  $(isotopeButton[i]).removeClass('how-active1');
              }

              $(this).addClass('how-active1');
          });
      });

      /*==================================================================
      [ Filter / Search product ]*/
      $('.js-show-filter').on('click',function(){
          $(this).toggleClass('show-filter');
          $('.panel-filter').slideToggle(400);

          if($('.js-show-search').hasClass('show-search')) {
              $('.js-show-search').removeClass('show-search');
              $('.panel-search').slideUp(400);
          }    
      });

      $('.js-show-search').on('click',function(){
          $(this).toggleClass('show-search');
          $('.panel-search').slideToggle(400);

          if($('.js-show-filter').hasClass('show-filter')) {
              $('.js-show-filter').removeClass('show-filter');
              $('.panel-filter').slideUp(400);
          }    
      });


    }
  );
  }
}
