import { Component, OnInit, OnDestroy } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PlayerServiceService } from 'src/app/Services/player-service.service';
import { MoveSetService } from 'src/app/Services/move-set.service';
import {Router} from '@angular/router';
import { Moves } from 'src/app/Class/moves';

interface class_move {
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
  win_count:number;
  win_count_p1: number;
  win_count_p2: number;

  turn_player = [];
  score = [];
  player1 :string;
  player2: string;
  selected_player: string;
  n_round: number;
  turn: number;
  list_moves: Array<Moves>;

  public players_choises : FormGroup;
  moves: SelectItem[];
  P_moves : class_move;

  constructor(fb:FormBuilder,
    private router: Router,
    public playerservice: PlayerServiceService,
    public movesservice: MoveSetService) 
  {

    this.players_choises = fb.group({
      P_moves: ['', [Validators.required]]
    });

    this.moves = 
    [{label:'Select a Move', value:''}];
    
    debugger;
    
    this.list_moves = this.movesservice.getMoveSet();
    
    for (let index = 0; index < this.list_moves.length; index++) {
      const element = this.list_moves[index];
      this.moves.push({label:element.move,value:element.move})
    }
    




    this.player1 = this.playerservice.player1;
    this.player2 = this.playerservice.player2;
  }
  GameStart(){
    //alert("Player 1:" + this.player1 + " Player 2:" + this.player2);
    this.CheckRound(this.n_round,this.turn);
  }
  ngOnInit() 
  {
    if(this.player1 == null){
      this.router.navigate(['']);
    }

    this.n_round = 1;
    this.turn = 0;
    this.win_count = 0;
    this.win_count_p1 = 0;
    this.win_count_p2 = 0;
    this.selected_player = this.player1;
    
  }
  ngOnDestroy() 
  { 
  }

  DetermineKill(move){
    return this.movesservice.getKill(move);
  }

  AssingPlayerTurn(){
    debugger;
    if(this.turn == 0)
    {
      this.selected_player = this.player2;
      this.turn = 1;
      return;
    }
    if(this.turn == 1)
    {
      this.selected_player = this.player1;
      this.turn = 0;
      this.whoWon(this.n_round);
      this.n_round++;
      return;
    }
  }

  main()
  {
    this.router.navigate(['']);
  }
  ChangeConfiguration()
  {
    this.router.navigate(['/config']);
  }

  CheckRound(round:number,turn:number){
    debugger;
    if(this.win_count == 3){
      round = 0;
    }
    switch(round)
    {
      case 0:

        break;
      default:
          this.turn_player.push({
            player : this.player1,
            move: this.players_choises.controls["P_moves"].value,
            kill: this.DetermineKill(this.players_choises.controls["P_moves"].value),
            round: round
          })
          this.players_choises.controls["P_moves"].reset();
          this.AssingPlayerTurn()
          return;
      
    }
  }

  whoWon(round:number){
   let i = round + round;
   const p1_turn = this.turn_player[i-2];
   const p2_turn = this.turn_player[i-1];
   if(p1_turn.move == p2_turn.move){
     //Nobody Wins
      this.score.push({
        round: round,
        winner: "Draw"
      });
    }
   else{
     if(p1_turn.kill == p2_turn.move )
      { //Player 1 Wins
        this.score.push({
          round: round,
          winner: this.player1
        });
        this.win_count_p1++;
        this.win_count++;
      }
      else{
        //Player 2 Wins
        this.score.push({
          round: round,
          winner: this.player2
        });
        this.win_count_p2++;
        this.win_count++;
      }

    } 
      
    
  }
}
