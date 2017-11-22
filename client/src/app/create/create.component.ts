import { Component, OnInit } from '@angular/core';
import {MainService} from './../main.service';
import {Router} from '@angular/router';
import { Poll } from './poll';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	new_poll:Poll;
  constructor(private _mainService:MainService, private _router:Router) { 
  	this.new_poll= new Poll;
  }

  ngOnInit() {
  	this._mainService.checklogin((data)=>{
      console.log(data,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
      if(data===false){
        console.log('NO SESSION')
        this._router.navigate(['/'])
      }
    });



  }//ending of ngOnInit

  create_poll(){
  	console.log(this.new_poll)
  	this._mainService.create_poll(this.new_poll,()=>{
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
      this._router.navigate(['/dashboard'])
    })
  }



}
