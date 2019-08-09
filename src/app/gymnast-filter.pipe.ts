import { Pipe, PipeTransform } from '@angular/core';
import { Gymnast } from './models/gymnast.model';

@Pipe({
  name: 'gymnastFilter'
})
export class GymnastFilterPipe implements PipeTransform {

  transform(gymnasts: Gymnast[], name: string): Gymnast[] {
    if(!name || name.length == 0){
      return gymnasts;
    }
    return gymnasts.filter(g => 
      g.firstName.toLowerCase().startsWith(name.toLowerCase()));
  }

}
