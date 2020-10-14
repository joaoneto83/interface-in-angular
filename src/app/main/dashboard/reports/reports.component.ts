import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'elgin-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  selectedItem: number;
  routeId: number;

  typeItems = [
    { icon: 'fas fa-dollar-sign', title: 'comissão', id: 0 },
    // { icon: 'fas fa-users', title: 'clientes', id: 1 },
    // { icon: 'fas fa-box-open', title: 'produtos', id: 2 },
    { icon: 'fas fa-cart-arrow-down', title: 'vendas', id: 3 },
    { icon: 'fas fa-chart-line', title: 'metas', id: 4 },
    // { icon: 'fas fa-tasks', title: 'requisição', id: 5 },
    // { icon: 'fas fa-percentage', title: 'margem', id: 6 },
    { icon: 'fas fa-coins', title: 'faturamento', id: 7 },
    // { icon: 'fas fa-shipping-fast', title: 'devoluções', id: 8 },
    // { icon: 'fas fa-warehouse', title: 'estoque', id: 9 },
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { }

  navigate(index: number) {
    this.selectedItem = index;
    this.routeId = this.typeItems[this.selectedItem].id;

    if (this.routeId === 0) {
      this.router.navigate(['comissao'], { relativeTo: this.route });
    }
    if (this.routeId === 3) {
      this.router.navigate(['vendas'], { relativeTo: this.route });
    }
    if (this.routeId === 4) {
      this.router.navigate(['metas'], { relativeTo: this.route });
    }
    if (this.routeId === 7) {
      this.router.navigate(['faturamento'], { relativeTo: this.route });
    }
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
