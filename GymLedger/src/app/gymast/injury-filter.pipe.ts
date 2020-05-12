import { Pipe, PipeTransform } from '@angular/core';
import { Injury } from './injury.model';

@Pipe({
  name: 'injuryFilter'
})
export class InjuryFilterPipe implements PipeTransform {

  transform(gymnasts: Injury[], name: string): Injury[] {
    if(!name || name.length == 0){
      return gymnasts;
    }
    return gymnasts.filter(g => 
      g.bodyPart.toLowerCase().startsWith(name.toLowerCase()));
  }

}
