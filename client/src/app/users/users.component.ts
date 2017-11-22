import { Component, OnInit } from '@angular/core';
import {User} from './../users/user';
import {MainService} from './../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	new_user:User;
  constructor(private _mainService:MainService,private _router:Router) { }

  ngOnInit() {
  	this.new_user=new User;
  }
  login(){
  		// console.log('Hitting login')
  		this._mainService.login(this.new_user,(data)=>{
  			this._mainService.setUser(data);
  			this._router.navigate(['dashboard'])
  		})
  	}

}
