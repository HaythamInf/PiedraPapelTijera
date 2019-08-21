import { Injectable } from '@angular/core';
import { Moves } from '../Class/moves';
import { MoveSet } from '../Class/moveSet';
import { Move_s } from '../Class/move_mocker';

@Injectable({
  providedIn: 'root'
})

export class MoveSetService {
  public class_moves : Move_s;
  move_list : Array<Move_s>;
  constructor(){
    this.move_list = MoveSet;
  }
  
  getMoveSet(){
    return this.move_list;
  }

  setNewMove(new_move:{move:string,kill:string}){
    this.move_list.push(new_move)
  }

  getKill(param_move:string){
    for(let i=0; i < this.move_list.length;i++){
      if(param_move == MoveSet[i]['move']){
        return MoveSet[i]["kill"];
      }
    }
  }
}
