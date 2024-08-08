import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';


@Component({
  selector: "dbz-list",
  templateUrl:"./list.component.html",
  styleUrls: ["./list.component.css"]

})

export class ListComponent{

  @Input()
  public characterList : Character[]=[{
    name :'Trunks',
    power :  10

  }];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter( index:number) :void {
  // emitir id del personsaje
 this.onDelete.emit(index);

        }

}
