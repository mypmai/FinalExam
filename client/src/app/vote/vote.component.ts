import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
pollId;
onePoll;

count1=0
count2=0
count3=0
count4=0

  constructor(private _mainService:MainService, private _router:Router, private _route:ActivatedRoute) {
  		this._route.paramMap.subscribe( params => {
       	       console.log(params.get('id'));
       	       this.pollId=params.get('id')
   	      })
   }

  ngOnInit() {
  	this._mainService.checklogin((data)=>{
	      console.log(data,"@@@@@@@@@@@@@@@@@@@@@@@@@@")
	      if(data===false){
          console.log('NO SESSION')
	      	this._router.navigate(['/'])
	      }
	    });
  	this._mainService.getOnePoll(this.pollId,(data)=>{
    	// console.log('Voteeeeeeeeeeeeee get poll function***************')
    	this.onePoll=data
    	console.log(data)
      
    })

  }


  vote1(){
  	this.count1+=1

  }
  vote2(){
  	this.count2+=1

  }
  vote3(){
  	this.count3+=1

  }
  vote4(){
  	this.count4+=1

  }

}
