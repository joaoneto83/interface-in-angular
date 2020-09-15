import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'elgin-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit, OnDestroy {

  id: number;
  selectedItem: number;
  routeId: number;
  typeItems = [
    { icon: 'fas fa-box-open', title: 'venda nacional', id: 0 },
    { icon: 'fas fa-ship', title: 'exportação', id: 1 },
    { icon: 'fas fa-truck-loading', title: 'serviços', id: 2 },
    { icon: 'fas fa-handshake', title: 'garantia', id: 3 },
    { icon: 'fas fa-globe', title: 'intercompany', id: 4 },
    { icon: 'fas fa-boxes', title: 'requisição de distribuição', id: 5 },
    { icon: 'fas fa-shipping-fast', title: 'devoluções', id: 6 },
    { icon: 'fas fa-file-signature', title: 'contrato', id: 7 },
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  navigate(index: number) {
    this.selectedItem = index;
    this.routeId = this.typeItems[this.selectedItem].id;

    if (this.routeId === 0) {
      this.router.navigate(['vendanacional'], { relativeTo: this.route });
    } else {
      this.router.navigate(['novopedido']);
    }
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
