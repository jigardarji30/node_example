exports.db = function(req,res){
	try{
    console.log('get_data');
	res.send('get data');
	} catch(e) {
        res.send('something wrong');
		console.log(e);
	}
}

exports.post = function(req,res){
	try{
	  console.log('post data');
	  res.send('post data');
	}catch(e){
        console.log(e);
		res.send('something wrong');
	}
}

exports.index1 = function(req,res){
   try{
      res.sendFile('index.html');
      console.log('index');
   } catch(e) {
   	  res.send('index error');
   	  console.log(e);
   }
}

exports.submit = function(req,res){
	try{
    var name= req.body.name;
    res.send(name);
	console.log('submit');
   }catch(e){
   	console.log(e);
   	res.send('submit error');
   }
}

exports.put = function(req,res){
 try{
 	res.send('put');
	console.log('put');
   }catch(e){
   	console.log(e);
   	res.send('put error');
   }
}

exports.delete = function(req,res){
 try{
 	res.send('delete');
	console.log('delete');
   }catch(e){
   	console.log(e);
   	res.send('delete error');
   }
}

// exports.submit = function(req,res,filename){
//   try{
//   	fs.readFile('demo.txt', function(error,data){
//   		if(err){ console.log(error) };
//   		console.log(data.toString());
//   	});
  
//   	var file = req.file.filename;
//   	res.sendFile('../views/index.html');
//   	res.send(file);
//     console.log('file');
//   }catch(e){
//   	console.log(e); res.send('file error');
//   }
// }


// module.exports = method;

// exports.getMethod = function(){

//    console.log('add_data');

// 	if(error){
// 		console.log(error+' e');
// 	} else {
// 		res.send('get method');
// 	}
// };

// console.log('add_data');