import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], customFilter: any): any[] {
        if (!items) { return []; }
        if (!customFilter) { return items; }

        customFilter = customFilter.toLowerCase();
        return items.filter(it => {
            return it.filter.toLowerCase().indexOf(customFilter.toString().toLowerCase());
        });
    }
}

