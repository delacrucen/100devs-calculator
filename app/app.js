document.addEventListener("DOMContentLoaded", ()=>{
  console.log("Calculator Loaded!");

  const one = document.querySelector("#one");
  one.addEventListener("click", ()=>{
    console.log("number 1");
  })

  let calculator = {
    fistValue: 0,
    secondValue: 0,
    opeartion: false
  };

  
});