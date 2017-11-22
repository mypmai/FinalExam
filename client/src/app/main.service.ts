import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {User} from './users/user';


@Injectable()
export class MainService {
	curUser;
	submitted:boolean;

  constructor(private _http:Http) { }

	login(newUser,callback){
		this._http.post('/login',newUser).subscribe(
			(response)=>{
				callback(response.json())
			},
			(error)=>{
				console.log('login error')
			})
	}

	checklogin(callback){
		// console.log('Hitting checklogin service')
		this._http.get('/checklogin').subscribe(
		(response)=>{
			callback(response.json())
			// console.log(response.json(),'******************************')
		},
		(error)=>{
			console.log('checklogin error')
		})
	}

	setUser(data){
  	// console.log('set current user in MainService to use any Component',data)
  	this.curUser=data.name;
  	this.submitted=true;
  	}

  	getCurUser(callback){
  		this._http.get('/getCurUser').subscribe((response)=>{
  			// console.log(response.json())
  			callback(response.json())
  		},(error)=>{
  			console.log(error)
  		})
  	}
    getAllUser(callback){
      this._http.get('/getAllUser').subscribe((response)=>{
        callback(response.json())
        // console.log(response.json())
      },(error)=>{
        console.log(error)
      })
    }

    create_poll(poll,callback){
  		// console.log('1111111111111111111111111')
  		// console.log(poll)
  		this._http.post('/create_poll',poll).subscribe((response)=>{
  			callback(response.json())
  		},(error)=>{
  			console.log(error)
  		})
  	}

  	getPoll(callback){
		console.log('get poll service************')
		this._http.get('/getPoll').subscribe(
			(response)=>{
				console.log(response.json())
				callback(response.json())
			},
			(error)=>{
				console.log(error)
			})
	}

	delete(id,callback){
		// console.log(id,'1111111111111111')
		this._http.get(`/delete/${id}`).subscribe((response)=>{
			console.log(response)
			callback(response)
		},(error)=>{
			console.log(error)
		})
	}

	getOnePoll(id,callback){
		console.log(id,'11111111111111111111111')
		this._http.get(`/getOnePoll/${id}`).subscribe((response)=>{
			callback(response.json())
			console.log(response.json(), '222222222222222222222')
		})
	}











}
