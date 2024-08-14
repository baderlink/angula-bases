import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';
import { consumerMarkDirty } from '@angular/core/primitives/signals';


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
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?:string) :void {
  // emitir id del personsaje


  if( !id) return;
 this.onDelete.emit(id);

        }

}
