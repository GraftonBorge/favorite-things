$(document).ready(function(){
  $("#form").submit(function(event){
    let animal = $("input#animal").val();
    let car = $("input#car").val();
    let food = $("input#food").val();
    const combinedArray = [animal, car, food];
    const animalArray =[combinedArray.push[0]];
    console.log(animalArray);
    // combinedArray.push()


    // $(".animal").append(animal);
    // // $("#animal1").append(combinedArray.concat(0))
    // // const animalArray = [combinedarray[0]];
    // console.log(combinedArray);
    // // console.log(animalArray);
    event.preventDefault();
  })
})