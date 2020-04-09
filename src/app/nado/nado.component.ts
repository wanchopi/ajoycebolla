import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-nado',
  templateUrl: './nado.component.html',
  styleUrls: ['./nado.component.css']
})
export class NadoComponent implements OnInit {

  title = 'NaDo';
  subtitle = 'Cocina atlántica';

  constructor() { }

  ngOnInit() {
    $('.fancybox').fancybox();
  }

  goUp() {
    jQuery('body,html').animate({scrollTop: 0}, 2500);
  }

}
