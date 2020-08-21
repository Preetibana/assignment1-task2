var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/insta',{useNewUrlParser:true});
var conn=mongoose.connection;
var instaSchema=new mongoose.Schema(
{
	name:String,
	posts:String,
	followers:String,
	description:String,
	contact:String,
	LivesIn:String
}
);
var instamodel=mongoose.model('profile',instaSchema);
module.exports=instamodel;
