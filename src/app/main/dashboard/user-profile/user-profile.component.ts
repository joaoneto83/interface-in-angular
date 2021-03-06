import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'UserProfile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  typeItems:any[] = [

    { icon: 'fas fa-user', title: 'Informações de Perfil', route: 'infoProfile' },
    { icon: 'fas fa-key', title: 'Alterar Senha', route: 'AlterPass' }

  ];

  selectedItem: number;
  nomeUser : string;
  routeId: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.nomeUser = this.route.snapshot.paramMap.get('nomeUser');
    this.router.navigate(['infoProfile'],{ relativeTo:this.route });
    //console.log(this.route.url);
   }

   /*
   navigate(index: number) {
    this.selectedItem = index;
    this.routeId = this.typeItems[this.selectedItem].id;

    switch(this.routeId){
      case 1:
        this.router.navigate(['infoProfile'],{ relativeTo:this.route })
      break;

      case 2:
        this.router.navigate(['AlterPass'],{ relativeTo:this.route })
      break;

    }
  }
*/
  
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  ngOnInit(): void {
  }

}
