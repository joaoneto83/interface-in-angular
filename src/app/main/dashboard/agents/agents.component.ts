import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'elgin-agents',
    templateUrl: 'agents.component.html',
    styleUrls: ['agents.component.scss']
})

export class AgentsComponent implements OnInit {

    selectedItem: number;
    routeId: number;

    typeItems = [
        { icon: 'fas fa-plus', title: 'inclusão', id: 0 },
        { icon: 'fas fa-search', title: 'consulta', id: 1 },
    ];

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() { }

    navigate(index: number) {
        this.selectedItem = index;
        this.routeId = this.typeItems[this.selectedItem].id;

        if (this.routeId === 0) {
            this.router.navigate(['incluir'], { relativeTo: this.route });
        }
        if (this.routeId === 1) {
            this.router.navigate(['consulta'], { relativeTo: this.route });
        }
    }

    hasRoute(route: string) {
        return this.router.url.includes(route);
    }
}
