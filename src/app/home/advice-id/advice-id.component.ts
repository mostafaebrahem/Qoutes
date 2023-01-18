import { Component, OnInit } from '@angular/core';
import { QouteService } from './../../qoute.service';

@Component({
  selector: 'app-advice-id',
  templateUrl: './advice-id.component.html',
  styleUrls: ['./advice-id.component.scss']
})
export class AdviceIDComponent implements OnInit {
  id:number=1;
  advice:any;
  error:string="";
  constructor(private _QouteService:QouteService) {

  }

  ngOnInit(): void {
   this.getAdviceById();
  }
  getAdviceById(){

      try{
        this._QouteService.adviceByID(this.id).subscribe((res)=>{
        this.advice=res;
        console.log( "res",res);
        })
       }   catch(e){

        console.log(e)
      }
    //   this.advice=res;
    //   console.log(res)
    // })

  }

}
