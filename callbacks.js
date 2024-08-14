function helloWorld(user){
    console.log("hello world");

    user()
}

helloWorld(function dream(){
    console.log("I am dreaming");
})
helloWorld(()=>{
    console.log("another funciton");

})
// funtional -----
// this keyword--oop

