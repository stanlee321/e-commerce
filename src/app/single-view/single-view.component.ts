import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var jQuery:any
declare var $:any;
declare  var etalage_show :any;
@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    // Go to Top of page of Router Change event
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    
    // JQuery  handler
    jQuery(document).ready(function($){
					
      $('#etalage').etalage({
        thumb_image_width: 300,
        thumb_image_height: 400,
        source_image_width: 700,
        source_image_height: 800,
        show_hint: true,
        click_callback: function(image_anchor, instance_id){
          alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
        }
      });
      // This is for the dropdown list example:
      $('.dropdownlist').change(function(){
        etalage_show( $(this).find('option:selected').attr('class') );
      });

    });
  }

}
