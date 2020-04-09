import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-terreo',
  templateUrl: './terreo.component.html',
  styleUrls: ['./terreo.component.css']
})
export class TerreoComponent implements OnInit {

  title = 'Terreo';
  subtitle = 'Una apuesta por el arroz';

  constructor() { }

  ngOnInit() {
    $('.fancybox').fancybox();
  }

  goUp() {
    jQuery('body,html').animate({scrollTop: 0}, 2500);
  }

}
