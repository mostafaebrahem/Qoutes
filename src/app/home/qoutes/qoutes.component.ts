import { Component, OnInit } from '@angular/core';
import { QouteService } from './../../qoute.service';

@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.scss']
})
export class QoutesComponent implements OnInit {
  random:any;
  constructor(private _QouteService:QouteService) { }

  ngOnInit(): void {
    this.getRandom()
  }
  getRandom(){
    this._QouteService.randomeAdvice().subscribe((res)=>{
      this.random=res;
      console.log(this.random.slip)
    });
  }

}
