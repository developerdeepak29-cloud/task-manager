import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (!value) {
      return value;
    }

    value = value[0].toUpperCase() + value.slice(1);
    return value;
  }
}
