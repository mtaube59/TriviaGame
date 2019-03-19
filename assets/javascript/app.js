setTimeout(twoMinutes, 1000 * 120)


$(document).ready(function () {

    $("#button").click(function(){
        $("#first").hide();
        console.log("clicked"); 
    });
     
      
      $("#show").click(function(){
        $("p").show();
      });
// on button click first goes away and the questions with timer appear
    $(".btn").on("click", function () {

        $("#hide").click(function(){
            $("p").hide();
          });
          
          $("#show").click(function(){
            $("p").show();
          });
    })
//on submit or times up the third part show up showing score
})


$("#button").click(function(){
    $("#first").hide();
  });
