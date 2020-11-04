import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'elgin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  escondeItens:boolean;

  constructor(private router: Router) {
    
    
     
        //router.events.subscribe((url:any) => console.log(url));
        //this.escondeItens = this.router.url == '/' ?  true :  false;
        //console.log(this.escondeItens);

        //console.log(this.router.url);
    }




    /*
  hasRoute(route: string) {
    //console.log(route);
    return this.router.url.includes(route);
  }
  */
}
