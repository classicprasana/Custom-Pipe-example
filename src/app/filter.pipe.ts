import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    console.log(value);
    if(sName=="")
    {
        return value;
    }
    
    const playersArray:any[]=[];
    for(let i =0;i<value.length;i++)
    {
       let teamName:string=value[i].team;
       //console.log(teamName);
       if(teamName.startsWith(sName.toLowerCase())){
           playersArray.push(value[i]);
       }

    }
    return playersArray;
  }

}
