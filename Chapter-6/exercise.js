
let canDrive = (age) => {
    return (age > 18)
  };
  
  
  do{
    
    let age = prompt("Enter your age: ");
  
    age = Number.parseInt(age);
  
    if(age < 0){
      console.error("The age cannot be negative.");
      break;
    }
    
    if(canDrive(age)){
      alert(age + " is valid age to drive");
    }else{
      alert("sorry, you cannot drive!!")
    }
  }while(confirm("do you want to see the prompt again?"));