const person = {
    age :25,
    // tellAge : function(){
    //     console.log(this); -person 
    //     console.log(this.age);
    // }.bind(this)
   tellAge :() =>{
    console.log(this);
    console.log(this.age)
   } // arrow function burda .bind(this) yazmis kimi
     // davranir
     // this- window 
}
person.tellAge();