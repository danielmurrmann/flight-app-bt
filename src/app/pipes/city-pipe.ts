import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
})
export class CityPipe implements PipeTransform {
  transform(value: string, format: 'ICAO' | 'IATA' = 'IATA'): string {
    let resultIata = value;
    let resultIcao = value;
    switch (value) {
      case 'Berlin':
        resultIata = 'BER';
        resultIcao = 'EDDB';
        break;
      case 'München':
        resultIata = 'MUC';
        resultIcao = 'EDDM';
        break;
      case 'London':
        resultIata = 'LHX';
        resultIcao = 'EGLL';
        break;
    }
    if(format === 'IATA') return resultIata;
    else return resultIcao;
  }
}
