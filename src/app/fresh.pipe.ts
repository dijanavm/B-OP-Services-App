import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fresh'
})
export class FreshPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const resultArray = [];
    if (value.length === 0 || filterString === '' || propName === ''){
      return value;
    }
    for(const item of value){
      if (item[propName] === filterString ){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
