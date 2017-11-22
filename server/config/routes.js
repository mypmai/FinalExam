var users=require('./../controllers/users.js');
var path=require('path');

module.exports=function(app){

	app.post('/login',function(req,res){
		// console.log('Loggin routes Backend**************')
		return users.login(req,res)
	})

	app.get('/checklogin',function(req,res){
		return users.checklogin(req,res)
	})

	app.get('/logout',function(req,res){
		// console.log('Loogggouttttttt')
		return users.logout(req,res)
	})

	app.get('/getCurUser',function(req,res){
		// console.log('111111111111111111111111111')
		return users.getCurUser(req,res)
	})

	app.get('/getAllUser',function(req,res){
		
		return users.getAllUser(req,res)
	})
	
	app.post('/create_poll',function(req,res){
		console.log('create poll routes Backend**************')
		return users.create_poll(req,res)
	})

	app.get('/getPoll',function(req,res){
		console.log('getPolllllllllllllllllllllllllllll')
		return users.getPoll(req,res)
	})

	app.get('/delete/:id',function(req,res){

		return users.delete(req,res)
	})

	app.get('/getOnePoll/:id',function(req,res){

		return users.getOnePoll(req,res)
	})























	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    })

}