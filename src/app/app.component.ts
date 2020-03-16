import { Component, OnInit } from '@angular/core';
import { ConsumirService } from './Servicios/consumir.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'frontEndWebApi';
  listado:any =[];

  constructor(private consulta:ConsumirService) {
    
  }

  ngOnInit(): void {
    // this.consulta.getEmployeeList().
    //   subscribe ( resultado =>{
    //     this.listado=resultado;
    //   })
    

      // this.consulta.getOtherForm().subscribe( resultado =>{
      //   this.listado=resultado;
      // })

      this.consulta.consumirWebApiLaravel()
      .subscribe(resultado =>{
        this.listado=resultado;
      })

  }

}
