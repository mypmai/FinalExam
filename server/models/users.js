var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema= new Schema({
	name:String,
	polls:[{type:Schema.Types.ObjectId,ref:'Poll'}]
	
},{timestamps:true});

mongoose.model('User',UserSchema);

var PollSchema= new Schema({
	question:String,
	option1:String,
	option2:String,
	option3:String,
	option4:String,
	_user:{type:Schema.Types.ObjectId, ref:'User'}
	
},{timestamps:true});

mongoose.model('Poll',PollSchema);