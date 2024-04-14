import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() //Ahora que la propiedad tiene este decorador, los componentes padres le pueden insertar info DEL MISMO TIPO, como vemos en el main-page.component.html
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  //onDelete = Index value : number

  onDeleteCharacter(id?:string):void {
    if(!id) return;
    this.onDelete.emit(id);
  }
}
