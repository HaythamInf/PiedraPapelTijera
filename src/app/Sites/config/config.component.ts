import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoveSetService } from 'src/app/Services/move-set.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})

export class ConfigComponent implements OnInit {
  public moveSet : Array<{move:string,kill:string}>
  public new_move : FormGroup;
  move : string;
  kill : string;
  new_moveSet : {move:string,kill:string};
  list_move : Array<{label:string,value:string}>;

  constructor(fb:FormBuilder,
    private router: Router,
    public movesservice: MoveSetService) { 
    
    
    this.moveSet = this.movesservice.getMoveSet();
    
    this.new_move = fb.group({
      move_input: ['', [Validators.required]],
      kill_input: ['', [Validators.required]]
      
    });
    
    this.fillDropdownMoves();
    
    }

  ngOnInit() {
  }

  registerMove(){
    this.move = this.new_move.value.move_input;
    this.kill = this.new_move.value.kill_input;
    this.new_moveSet = {move:this.move,kill:this.kill};
    this.movesservice.setNewMove(this.new_moveSet);
    this.fillDropdownMoves();
  }
  main(){
    this.router.navigate(['']);
  }

  fillDropdownMoves(){
    debugger;
    this.list_move = [];
    this.list_move = [{label:"Select a Move",value:""}];
    for (let index = 0; index < this.moveSet.length; index++) {
      const element = this.moveSet[index];
      this.list_move.push({label:element.move,value:element.move});
    }
  }

}

