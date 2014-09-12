$(document).ready(function(){

    var calc = {
     strategy: "",
     qty: 0,
     price: 0,
     royalty: 0,
     scalablePress: 0,
     serviceCost: 0,
     revenue: 0,
     income: 0
    }

    var revIncome = function(){
      calc.income = (calc.price - calc.serviceCost) * calc.qty;
      calc.royalty = calc.price - calc.serviceCost;
      print();
    };

    var costCalc = function(){
       if(calc.strategy === "Organic & high quality") {
          calc.scalablePress = 18
        } else {
          calc.scalablePress = 10
        };

        calc.serviceCost = (calc.price * 0.20) + calc.scalablePress;
        revIncome();
    };

    $("#form_button").click(function(event){
      calc.strategy = $('.nl-field-toggle')[0].innerText;
      calc.qty = parseInt($('.nl-field-toggle')[1].innerText);
      calc.price = parseInt($('.nl-field-toggle')[2].innerText);

      costCalc();
    });

    var print = function(){
      $("#breakdown").css("visibility", "visible")
      $("#strategy").text(calc.strategy);
      $("#qty").text(calc.qty);

      $("#base-price").text(calc.scalablePress.toFixed(2));
      $("#royalty").text(calc.royalty.toFixed(2));
      $("#royalty-2").text(calc.royalty.toFixed(2));
      $("#price").text(calc.price.toFixed(2));
      $("#income").text(calc.income.toFixed(2));
      $("#service").text((calc.serviceCost - calc.scalablePress).toFixed(2));
    };
})