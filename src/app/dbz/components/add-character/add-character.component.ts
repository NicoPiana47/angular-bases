import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  // protected characterForm: FormGroup = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   power: new FormControl('', Validators.required)
  // });
  //Este el el Form que vamos a leer en el front. Se le agregan los campos del html que querramos validar.


  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: "",
    power: 0
  }

  emitCharacter ():void{
    console.log(this.character)
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name: "", power: 0};
  }
}
