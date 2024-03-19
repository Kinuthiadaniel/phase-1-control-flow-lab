function scuberGreetingForFeet(ride) {
  // Write your code here!

if(ride <= 400){

return "This one is on me!"
}
else if (ride >= 400 && ride <= 2000 ){
  return "That will be twenty bucks."
} 
else if(ride >2000 && ride <= 2500 ){
return "I will gladly take your thirty bucks."
} else
 {return "No can do."}

}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)


function ternaryCheckCity(city){
  // Write your code here!
if (city === "NYC"){
  return "Ok, sounds good."
} else {
  return "No go."
}
} 
ternaryCheckCity("NYC");
ternaryCheckCity('Pittsburgh');



function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip){
  case "generous": return "Thank you so much."
  case "no as generous": return "Thank you."
  default:return "Bye."
  
} 
}
switchOnCharmFromTip("generous");
