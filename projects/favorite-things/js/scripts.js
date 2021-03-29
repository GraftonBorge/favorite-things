$(document).ready(function(){
  $("#form").submit(function(event){
    let animal = $("input#animal").val();
    let car = $("input#car").val();
    let food = $("input#food").val();

    event.preventDefault();
    
    
    let animalArray=[];
      // animalArray.push(animal);
    animalArray.forEach(function(element){
      $("<li>").html(animal).appendTo(".animal");
      animalArray.push(element);
    });
    // let carArray=[];
    // (".car").submit(function(){
    //   car.push(carArray)
    // })
    // let foodArray=[];
    // (".food").submit(function(){
    //   food.push(foodArray)
    // })

     
    animalArray;
    // carArray;
    // foodArray;
    console.log(animalArray);
    });
   
  })
 