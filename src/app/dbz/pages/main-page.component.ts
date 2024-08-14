import { Component, OnInit } from '@angular/core';
import { Character } from '../Interfaces/character.interface';
import { dbzService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent   {
//inyeccion de dependencias
 constructor(private dbzService: dbzService ){}

  get characters() :Character[]{

      return [...this.dbzService.characters];

  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character : Character):void{
   this.dbzService.addCharacter(character) ;

  }


 }




