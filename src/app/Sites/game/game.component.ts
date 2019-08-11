import { Component, OnInit, OnDestroy } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MenuItem} from 'primeng/api'; 
import { ActivatedRoute } from '@angular/router';
import { PlayerServiceService } from 'src/app/Services/player-service.service';

interface move {
  label: string;
  value: string;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy 
{
  player1 :string;
  player2: string;
  selected_player: string;

  public players_choises : FormGroup;
  moves: SelectItem[];
  P_moves : move;

  constructor(fb:FormBuilder,
    private route: ActivatedRoute,
    public playerservice: PlayerServiceService) 
  {

    this.players_choises = fb.group({
      P_moves: ['', [Validators.required]]
    });

    this.moves = 
    [
      {label:'Rock', value:'0'},
      {label:'Paper', value:'1'},
      {label:'Scissor', value:'2'},
    ];
    this.player1 = this.playerservice.player1;
    this.player2 = this.playerservice.player2;
  }
  Ingresar(){
    debugger;
    alert("Player 1:" + this.player1 + " Player 2:" + this.player2);
  }
  ngOnInit() 
  {
    this.selected_player = this.player1;
    
  }
  ngOnDestroy() 
  { 
  }

}
