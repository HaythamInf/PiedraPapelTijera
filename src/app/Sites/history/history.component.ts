import { Component, OnInit } from '@angular/core';
import { HistoricalScore } from 'src/app/Class/historicalScore';
import { ConectSQLService } from 'src/app/Services/conect-sql.service';
import { Moves } from '../../Class/moves';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public MoveSets : Observable<Moves[]>;
  public historic_score : HistoricalScore[];
  
  constructor(public conectSQL: ConectSQLService) { }

  ngOnInit() {
    this.conectSQL.getMoveSet().subscribe(
      data => {
        this.MoveSets = data;
        console.log(data);
      },
      err => {
        console.log("Error.")
      }
    );
    this.conectSQL.getScore().subscribe(data => this.historic_score = data);

  }

}
