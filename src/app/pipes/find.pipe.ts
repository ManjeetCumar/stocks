import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(value: any , args?: any): any {
    let filteredgames = value.filter(function(ele){
       return ele.name.indexOf(args) > -1
    } )
    return filteredgames;
  }

}
