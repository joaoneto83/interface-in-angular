import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'elgin-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  selectedItem: number;
  routeId: number;

  typeItems = [
    { icon: 'fas fa-plus', title: 'inclusão', id: 0 },
    { icon: 'fas fa-search', title: 'consulta', id: 1 },
    { icon: 'fas fa-users', title: 'Aprovação', id: 2 },
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { }

  navigate(index: number) {
    this.selectedItem = index;
    this.routeId = this.typeItems[this.selectedItem].id;

    if (this.routeId === 0) {
      this.router.navigate(['incluir'], { relativeTo: this.route });
    }
    if (this.routeId === 1) {
      this.router.navigate(['consulta'], { relativeTo: this.route });
    }
    if (this.routeId === 2) {
      this.router.navigate(['aprovacao'], { relativeTo: this.route });
    }
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
