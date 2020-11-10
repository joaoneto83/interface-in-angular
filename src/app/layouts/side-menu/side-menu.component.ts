import { MenuLateral } from './../../_shered/model/MenuLateral';
import { TokenService } from 'src/app/_core/services/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/_shered/model/usuario';
import { MenuServiceService } from './menu-service.service';
import { RetornoDataModel } from 'src/app/_shered/model/RetornoDataModel';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'elgin-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  routeId: number;
  routeTitle: string;
  userName:string;
  selectedItem = 0;
  dataUser:any;
  

  retornoMenu:RetornoDataModel<MenuLateral[]>;

  /* 
  
  menuItems = [
    
    { icon: 'fa fa-home', title: 'Inicial', id: 0 },
    { icon: 'fa fa-cart-arrow-down', title: 'Pedidos', id: 1 },
    { icon: 'fa fa-box-open', title: 'Produtos', id: 2 },
    { icon: 'fa fa-laptop', title: 'Gerencial', id: 3 },
    { icon: 'fa fa-suitcase', title: 'Representantes', id: 4 },
    { icon: 'fa fa-users', title: 'Clientes', id: 5 },
    { icon: 'fa fa-file-invoice-dollar', title: 'Financeiro', id: 6 },
    { icon: 'fa fa-user-tie', title: 'Poítica Comercial', id: 7 },
    { icon: 'fa fa-file-alt', title: 'Relatórios', id: 8 },
    { icon: 'fa fa-cog', title: 'Admin', id: 9 }
    
  ];
*/
  toggle = false;

  constructor(private router: Router , private serviceMenu : MenuServiceService, private ServiceToken:TokenService) {

     ServiceToken.getUser().subscribe(r => {
       //console.log(r);
       this.dataUser = r;
     });

     serviceMenu.getEstruturaMenuLateral({
       cabecalho:this.ServiceToken.retornaCabecalhoRequestGlobal(),
       idPerfil: this.dataUser.PerfilId
     }).subscribe(
       r => {
        this.retornoMenu = r;
        console.log(r);
        //console.log(this.retornoMenu); 
        //console.log(this.retornoMenu.result.data); 
     },
     error => {
        console.log(`Ocorreu um erro ao tentar coletar os dados do menu \n \n ${ error }`);
     });

   }

  ngOnInit() { }

  hideSideMenu() {
    const hover = document.getElementById('hoverMenu');

    if (hover.classList.contains('hover')) {
      hover.classList.remove('hover');

      setTimeout(() => {
        hover.classList.add('hover');
      }, 800);
    }
  }

  toggleMenu() {
    this.toggle = !this.toggle;
    this.preventScrolling();
  }

  preventScrolling() {
    const body: any = document.body;

    if (this.toggle) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }

  navigateTo(order: number) {
    
    //this.selectedItem = order;
    localStorage['selected'] = order;
    //console.log(this.selectedItem);
    //this.routeId = this.menuItems[this.selectedItem].id;

    /* 
    console.log(
      'INDEX ==>', index,
      'item selecionado ==>', this.selectedItem,
      'Id da rota ==>', this.routeId,
      'Titulo da rota ==>', this.routeTitle
    );
    */
    switch(order){
      case 1:
          this.router.navigate(['inicio']);
      break;

      case 2:
        this.router.navigate(['pedidos']);
      break;

      case 3:
        this.router.navigate(['produtos']);
      break;

      case 5:
        this.router.navigate(['representantes']);
      break;

      case 6:
        this.router.navigate(['clientes']);
      break;

      case 9:
        this.router.navigate(['relatorios']);
      break;

    }
    
    this.hideSideMenu();
  }

  deslogar(){
    this.ServiceToken.removeToken();
    window.localStorage.removeItem('selected');
    this.router.navigate(['/login']);
  }

getSelectedItem(){
  return localStorage['selected'];
}

}
