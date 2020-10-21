import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  toggle = false;

  constructor(private router: Router) {

    this.userName = 'Carlos Magno';
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

  navigateTo(index: number) {
    this.selectedItem = index;
    this.routeId = this.menuItems[this.selectedItem].id;

    console.log(
      'INDEX ==>', index,
      'item selecionado ==>', this.selectedItem,
      'Id da rota ==>', this.routeId,
      'Titulo da rota ==>', this.routeTitle
    );

    if (this.routeId === 0) {
      this.router.navigate(['inicio']);
    }
    if (this.routeId === 1) {
      this.router.navigate(['pedidos']);
    }
    if (this.routeId === 2) {
      this.router.navigate(['produtos']);
    }
    if (this.routeId === 4) {
      this.router.navigate(['representantes']);
    }
    if (this.routeId === 5) {
      this.router.navigate(['clientes']);
    }
    if (this.routeId === 8) {
      this.router.navigate(['relatorios']);
    }

    this.hideSideMenu();
  }
}
