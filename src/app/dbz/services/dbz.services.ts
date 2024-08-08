import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/character.interface';

@Injectable({
  providedIn: 'root'
  })
export class dbzService {


  public characters: Character[]=[{
    name: 'Krillin',
    power: 1000
  },{
    name:'Goku',
    power: 9500,
  },{
    name: 'Vegeta',
    power : 7500
  }];


onNewCharacter( character:Character):void {
  this.characters.push(character);
  console.log("nuevos");

}

onDeleteCharacter(  index:number ): void {
  console.log("eliminar");
  this.characters.splice(index,1);
  }

}

