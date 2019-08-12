import { Component, OnInit } from '@angular/core';
import { HistoricalScore } from 'src/app/Class/historicalScore';
import { ConectSQLService } from 'src/app/Services/conect-sql.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public historic_score :Array<HistoricalScore>
  constructor(public conectSQL: ConectSQLService) { 
    debugger;
    //this.conectSQL.ConectarDB();
  }

  ngOnInit() {
  }

}
