import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'infoPopover',
  templateUrl: './info-popover.component.html',
  styleUrls: ['./info-popover.component.scss']
})
export class InfoPopoverComponent implements OnInit  {
 
  @Input() description:string;

  constructor() {
    
      //console.log(this.description); /* Aqui nao vem descricão */
   }
   
   

  ngOnInit(): void {
   
  }

  chamaDescricao(){
    console.log(this.description);
  }


}
