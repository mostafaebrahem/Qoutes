import { Component, OnInit } from '@angular/core';
import { QouteService } from './../qoute.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  random:any;
  constructor(private _QouteService:QouteService) { }

  ngOnInit(): void {
    this.getRandom();
  }
  getRandom(){
    this._QouteService.randomeAdvice().subscribe((res)=>{
      this.random=res;
      console.log(this.random.slip)
    });
  }
}
