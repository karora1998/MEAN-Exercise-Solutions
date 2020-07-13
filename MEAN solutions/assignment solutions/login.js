//Solution for assignment 1

if (process.argv.length != 4) {
    console.log("I need username and password");
    process.exit(-1);
}

var username=process.argv[2]
var password = process.argv[3];
//if windows is os then used type parent.js else use cat for unix
if(username=='admin' && password =='admin'){
   // return true;
   console.log('success')
}
else{
    console.log("Invalid username or password")
    return false
}
//$ node login.js admin admin
