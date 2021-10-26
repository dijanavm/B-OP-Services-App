import { Pipe, PipeTransform } from "@angular/core";
import { Data } from "../model/Data";

@Pipe({
    name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform{
    transform(Data: Data[], searchValue: string): Data[] {
        if(!Data || !searchValue){
            return Data;
        }
        return Data.filter(sports => 
            sports.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
            sports.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
           )
        }
}