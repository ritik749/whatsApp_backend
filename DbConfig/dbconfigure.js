
import mongoose from "mongoose";


const connect =async()=>{

  try{

  console.log('aaaaaaaaa')    

    let url = "mongodb+srv://ritik763:ritik763@whtscln.yrccgkt.mongodb.net/";

    await mongoose.connect(url,{useUnifiedTopology:true})

    console.log('connected sussesss');

  }catch(err){

     console.log('error while connection with mongpdb',err);
  }

}


export default connect;



