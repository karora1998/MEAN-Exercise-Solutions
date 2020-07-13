var a= require('./A')

//instance function
function demo(constr){
    
    this.c= ()=>{
        console.log(a.x())
        console.log(a.y())
        console.log('I am instance method c in Module B')
    }
 }
module.exports={demo:demo}