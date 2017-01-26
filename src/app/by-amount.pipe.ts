import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'byAmount',
  pure: false
})
export class ByAmountPipe implements PipeTransform {

  transform(input: Project[], desiredAmount: number) {
    var output: Project[]=[];
    if(!desiredAmount) {
      return input;
    } else {
      for(var i = 0; i < input.length; i++) {
        if(input[i].amount <= desiredAmount) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }

}
