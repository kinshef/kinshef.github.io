$(document).ready(function() {
  // Calculator
	$("form.calculator-price__forma").change(function () {
    var form = this;
    var length = $("input[name='length']:checked", form).val();
    var duga = $("input[name='duga']:checked", form).val();
    var dop = $("input[name='dop[]']:checked", form);
    var sum = 0;
  
    sum = priceCalculatorData.product[0]
    if(length){
      sum = priceCalculatorData.product[length][0]
    }
    if(duga){
      sum = priceCalculatorData.product[length][duga][0]
    }

    if(dop.length>0){
      sum = priceCalculatorData.product[length][duga][1]
    }

    var out = $('.discount__value .jPrice');
    var animateFrom = 0 < out.data("animateFrom") ? out.data("animateFrom") : 0;
    
    $({ animateNumber: animateFrom }).animate({ animateNumber: sum }, {
      duration: 800,
      step: function (animateNumber){
        out.text(Number(animateNumber).toFixed());
      },
      complete: function() {
        out.data("animateFrom", Number(sum).toFixed())
      }
    });

	});
	$("form.calculator-price__forma").change();
  
  // Calculator
  $("form.has-calculator").change(function () {
    var form = this;
    var product = $("input[name='product']", form).val();
    var length = $("input[name='length']:checked", form).val();
    var sum = 0;

    sum += calculatorData.product[product][length];
    var out = $('.jPrice', form);
    var outOld = $('.jPriceOld', form);

    var animateFrom1 = 0 < out.data("animateFrom") ? out.data("animateFrom") : 0;

    $({ animateNumber: animateFrom1 }).animate({ animateNumber: sum }, {
      duration: 800,
      step: function (animateNumber){
        out.text(Number(animateNumber).toFixed() + " руб.");
        outOld.text(Number(animateNumber * 1.5).toFixed() + " руб.")
      },
      complete: function() {
        out.data("animateFrom", Number(sum).toFixed())
      }
    });
  });
  $("form.has-calculator").change();

});
