var mongoose=require('mongoose');
var User=mongoose.model('User');
var Poll=mongoose.model('Poll')
var ObjectId=require('mongodb').ObjectID;

module.exports={

	login:function(req,res){
        User.findOne({name:req.body.name}, function(err, user){
            if(user==null){
                User.create({name:req.body.name}, function(err, newuser){
                    req.session.curUser=newuser;
                    console.log(req.session.curUser)
                    // req.session.userId=newuser._id
                    req.session.save();
                    return res.json(newuser);
                })
            }
            else{
                req.session.curUser=user;
                // console.log(req.session.curUser)
                req.session.save()
                  return res.json(user);
            }
          
        })
    },



	checklogin:function(req,res){
		// console.log('hitting check login Controllers')
		if(req.session.curUser===undefined){
			return res.json(false)
		}
		else{
			return res.json(true)
		}
	},
	
	logout:function(req,res){
		req.session.destroy()
        
		// console.log(req.session)
		return res.redirect('/')
	},

    getCurUser:function(req,res){
        console.log('getCurUser controller******************')
        User.findOne({_id:ObjectId(req.session.curUser._id)}).populate('questions').exec(function(err,resdata){
            
            return res.json(resdata)
        })
    },

    getAllUser:function(req,res){
        // console.log('getAllUser controller******************')
        User.find({}).populate('polls').exec(function(err,resdata){
            return res.json(resdata)
        })
    },

    create_poll:function(req,res){
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$')
        User.findOne({_id:ObjectId(req.session.curUser._id)},function(err, user){
            // console.log(req.session.curUser._id)
            // console.log(user)
            var poll= new Poll({question:req.body.question, option1:req.body.option1, option2:req.body.option2, option3:req.body.option3, option4:req.body.option4})  
            poll._user=user._id;
            User.update({_id:ObjectId(req.session.curUser._id)}, {$push: {polls:poll._id}},function(err){});
            poll.save(function(err){
                if(err){
                    console.log(err)
                }
                return res.json('success')
            })
        })
    },

    getPoll:function(req,res){
        console.log('hittingngngngngngnn get Poll')
        Poll.find({},function(err,polls){
            let info={
                userid:req.session.curUser._id,
                polls:polls
            }
            return res.json(info)
        })
    },

    delete:function(req,res){
        // console.log('Deleteeeeeeeeeeeeeeeeeeeeeeeee')
        console.log(req.params.id)
        Poll.remove({_id:req.params.id},function(err){
            return res.json()
        })
    },

    getOnePoll:function(req,res){
        console.log('getOnnnneeeeeeeeeeeeeeeeeeeeeeeee')
        console.log(req.params.id)
        Poll.find({_id:req.params.id},function(err,poll){
            console.log(poll)
            return res.json(poll)
        })
    },









}