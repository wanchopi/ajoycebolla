import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-eldealberto',
  templateUrl: './eldealberto.component.html',
  styleUrls: ['./eldealberto.component.css']
})
export class EldealbertoComponent implements OnInit {

  title = 'El de Alberto';
  subtitle = 'Un clásico de la ciudad';

  constructor() { }

  ngOnInit() {
    $('.fancybox').fancybox();
  }

  goUp() {
    jQuery('body,html').animate({scrollTop: 0}, 2500);
  }

}
