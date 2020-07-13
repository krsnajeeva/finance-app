$(function() {
    $('.dropdown-menu a').click(function() {
      console.log($(this).attr('data-value'));
      $(this).closest('.dropdown').find('input.countrycode')
        .val('(' + $(this).attr('data-value') + ')');
    });
  });


  // Hide and Show Customer Information

  $( "#hide" ).click(function() {
    $( "#customer-info, #jewelry-info" ).toggle( "slow", function() {
      // Animation complete.
    });
  });

  //Existing Customer
  $("#heading2").hide();
  $( "#extng-cust" ).click(function() {
    $("#heading2").show();
    $("#heading").hide();

    $( "#sec-customer-info" ).hide( "slow", function() {
      // Animation complete.
    });
  });

  $(".trans-his").hide();
  
  $( ".trans-buton" ).click(function() {
    $( ".trans-his,.loan-summary" ).toggle( "slow", function() {
      // Animation complete.
    });
    $(".trans-buton").show();

  });


//Transction History + Account Summary
