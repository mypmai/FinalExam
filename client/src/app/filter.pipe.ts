import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
name:'filter'
  transform(allUser: Array<any>, search_text: string): Array<any> {
    if(!search_text){return allUser}
  	search_text=search_text.toLowerCase()
    return allUser.filter(user=>user.name.toLowerCase().includes(search_text));
  }

}
