import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'elgin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  selectedItem: number;
  routeId: number;

  typeItems = [
    { icon: 'fas fa-plus', title: 'inclusão', id: 0 },
    { icon: 'fas fa-search', title: 'consulta', id: 1 },
    { icon: 'fas fa-server', title: 'estrutura de linha', id: 2 },
    { icon: 'far fa-object-group', title: 'grupos de produtos', id: 3 },
    { icon: 'fas fa-tags', title: 'custo de produtos', id: 4 },
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { }

  navigate(index: number) {
    this.selectedItem = index;
    this.routeId = this.typeItems[this.selectedItem].id;

    // if (this.routeId === 0) {
    //   this.router.navigate(['vendanacional'], { relativeTo: this.route });
    // } else {
    //   this.router.navigate(['novopedido']);
    // }
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
