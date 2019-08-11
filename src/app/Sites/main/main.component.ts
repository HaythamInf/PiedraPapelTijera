import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { PlayerServiceService } from '../../Services/player-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnDestroy {
  public players_names: FormGroup;
  

  constructor( fb: FormBuilder,
    private router: Router,
    public playerservice: PlayerServiceService
    ) { 
    this.players_names = fb.group({
      playerone: ['', [Validators.required, Validators.maxLength(100)]],
      playertwo: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }
  
  ngOnInit() {
  }

  Ingresar()
  {
    this.router.navigate(['/game']);
  }
  
  ngOnDestroy(){
    //this.playerservice.setPlayer1Name.subscribe(p1 => {this.players_names.value.playerone});
    this.playerservice.player1 = this.players_names.value.playerone;
    this.playerservice.player2 = this.players_names.value.playertwo;

    // .subscribe(heroes => this.heroes = heroes)
  }
}
