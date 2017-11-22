import { Component, OnInit } from '@angular/core';
import {MainService} from './../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	curUserInfo; 	//current user infor
	curUserName;	//current user name
	allUser;		//All the user in the database
	userpolls;		//All user polls
	submitted:boolean;

	polls;
  	userid;

  constructor(private _mainService:MainService, private _router:Router) { }

  ngOnInit() {
  	this._mainService.checklogin((data)=>{
      console.log(data,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
      if(data===false){
        console.log('NO SESSION')
        this._router.navigate(['/'])
      }
    });

    this._mainService.getCurUser((data)=>{
      this.curUserInfo=data;
      this.curUserName=data.name


    });

    this._mainService.getAllUser((data)=>{
    	// console.log(data)
    	// console.log(data.polls)
        this.allUser=data;
        this.userpolls=data.polls

        
        this.submitted=true;
    });

    this._mainService.getPoll((data)=>{
    	console.log('Dashboard get poll function***************')
      this.polls=data.polls
      this.userid=data.userid
      console.log(data)
      console.log(this.polls)
      console.log(this.userid)
    })

  };//End of ngOnInit function

  delete(id){
  	console.log(id)
  	this._mainService.delete(id,()=>{
  		// this._mainService.getPoll((data)=>{
    // 	console.log('Dashboard get poll function***************')
	   //  this.polls=data.polls
	   //  this.userid=data.userid
	   //  this._router.navigate(['dashboard'])

    // })
    this._mainService.getAllUser((data)=>{
    	// console.log(data)
    	// console.log(data.polls)
        this.allUser=data;
        this.userpolls=data.polls

        
        this.submitted=true;
    });
    
  	})
  }








}
