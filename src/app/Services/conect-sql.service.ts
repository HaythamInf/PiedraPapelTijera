import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// const sql = require('mssql');

export class ConectSQLService {
  public dbConection: string;
  

  constructor() { 
    this.dbConection="Driver={ODBC Driver 13 for SQL Server};Server=tcp:sqlentrevistascmtx.database.windows.net,1433;Database=RockPaperScissor;Uid=administrador@sqlentrevistascmtx;Pwd=ASD123er;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;"}

    // ConectarDB(){
    //   async () => {
    //     try {
    //         await sql.connect('mssql://administrador@sqlentrevistascmtx:ASD123er@tcp:sqlentrevistascmtx.database.windows.net/RockPaperScissor')
    //         const result = await sql.query`select * from HISTORICAL_SCORE`
    //         console.dir(result)
    //     } catch (err) {
    //         // ... error checks
    //     }
    //   }

    // }
}


 
