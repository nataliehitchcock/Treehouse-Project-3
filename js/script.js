//Setting up Variables//

const $jobTitle = $("#userTitle");
const $otherJobTitle = $("#other-title");
const $tshirtDesign = $("#design");
const $tshirtColor = $("#colors-js-puns");
const $classes = $("#classes");
const $selectJob = $('#select-job');
const $selectTheme = $('#select-theme');
const $activities = $(".activities");
const $frameworks = $('input[name="js-frameworks"]');
const $jsLibs = $('input[name="js-libs"]');
const $express = $('input[name="express"]');
const $node = $('input[name="node"]');
const $buildTools = $('input[name="build-tools"]');
const $npm = $('input[name="npm"]');
const $roles = ('.roles');
const $cardInfo = $('#credit-card');
const $paymentOption = $('#payment');
const $creditOption = $('#credit');
const $paypaloption = $('#paypalOption');
const $bitcoinOption = $('#bitcoinOption');
const $paypal = $('#paypal');
const $bitcoin = $('#bitcoin');
const $selectMethod = $('#selectMethod');
const $name = $('#name');
const $eMail = $('#mail');
const $creditCardNum = $('#cc-num');
const $zipCode = $('#zip');
const $cvv = $('#cvv');
const $submit = $('#submitButton');
let isNameValid = false;
let isEmailValid = false;
let isJobTitleValid = false;
let isCheckboxValid = false;
let isCreditCardValid = false;
let isZipValid = false;
let isCvvValid = false;

//Job Role Section//

// Hides "other" job text field upon load
$otherJobTitle.hide();

// Text field that will be revealed when the "other" option is selected from the "Job Role" drop down menu.
$($jobTitle).change(function() {
  if ($jobTitle.val() === "other") {
    $otherJobTitle.show();
    } else {
    $otherJobTitle.hide();
  }
});

// Disables "Select Job Role" in the select menu
$(function() {
    $selectJob.prop("disabled", true);
});

// T-shirt Section//

// If the user selects "Theme - JS Puns"- the color menu should display the following: "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" - the color menu should display the following: "Tomato," "Steel Blue," and "Dim Grey."
// When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.

// Color drop down menu is hidden until a design is selected.
$tshirtColor.hide();

$($tshirtDesign).change(function() {
  if ($tshirtDesign.val() === "js puns") {
    $tshirtColor.show();
    $('#color option[value="cornflowerblue"]').show();
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
  } else if ($tshirtDesign.val() === "heart js") {
    $tshirtColor.show();
    $('#color option[value="tomato"]').show();
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
  }
});

$(function() {
    $selectTheme.prop("disabled", true);
});

//Register for Activities Section//

// JavaScript Frameworks 
$frameworks.change(function() {
    if($(this).is(':checked')){
      $express.prop('disabled', true);
    } else {
      $express.prop('disabled', false);
    }
  });
  
  // JavaScript Libraries 
  $jsLibs.change(function() {
    if($(this).is(':checked')){
      $node.prop('disabled', true);
    } else {
      $node.prop('disabled', false);
    }
  });
  
  // Express 
  $express.change(function() {
    if($(this).is(':checked')){
      $frameworks.prop('disabled', true);
    } else {
      $frameworks.prop('disabled', false);
    }
  });
  
  // Node.js 
  $node.change(function() {
    if($(this).is(':checked')){
      $jsLibs.prop('disabled', true);
    } else {
      $jsLibs.prop('disabled', false);
    }
  });

//Created a new div to display total
$activities.append('<br><div class="totalDiv"><label name="total-due" class="totalCost">Total: </label></div>');
$activities.append('<br><div class="error"><font color="#ff0000">Please select an activity.</div>');

const $totalDiv = $(".totalDiv");
const $totalCost = $(".totalCost");
let $total = 0;
const $error = $(".error");

// Hide the div on load
$totalDiv.hide();
$error.hide();

//Add total cost
$('input:checkbox').on('change', function() {
    if ($(this).is(':checked')) {
      $totalDiv.show();
      $total += +this.value;
      $totalCost.html('Total: $' + parseInt($total));
      $error.hide();
    } else if ($(this).not(':checked')) {
      $total -= +this.value;
      $totalCost.html('Total: $' + parseInt($total));
    }
  });

  //Credit Card/Payment Section//

  //Hides Paypal and Bitcoin
  $paypal.hide();
  $bitcoin.hide();

  //Allows for the Credit Card payment option to be selected by default
  $paymentOption[0].selectedIndex = 1;

  //This displays payment sections based on payment option chosen in "Select" menu
  $($paymentOption).change(function() {
    if ($(this).val() === "credit card") {
      $cardInfo.show();
    } else {
      $cardInfo.hide();
    }
    if ($(this).val() === "paypal") {
      $paypal.show();
    } else {
      $paypal.hide();
    }
    if ($(this).val() === "bitcoin") {
      $bitcoin.show();
    } else {
      $bitcoin.hide();
    }
  });

  //Disables "Select Payment Method" in "Select" menu
  $(function() {
    $selectMethod.prop("disabled", true);
});

//This section prompts the user to enter their name, the name field cannot be blank
$name.focusout(function(e) {
  if ($name.val() === "") {
    isNameValid = false;
    $name.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: 'Please enter your name'});
} else if ($(this).val() > "0") {
  isNameValid = true;
  $name.css({backgroundColor: '#99e699', border: "2px solid #33cc33"}).removeAttr({placeholder: 'Please enter your name'});
}
});

//Email field needs to be formatted like a real email address ex: dave@teamtreehouse.com
$eMail.focusout(function(e) {
  let $emailVal = $('#mail').val();
  let $emailReg = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,5}$');
    if (!$emailReg.test($emailVal)) {
      isEmailValid = false;
      $eMail.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: 'Please enter a valid email address'});
    } else {
      isEmailValid = true;
      $eMail.css({backgroundColor: '#99e699', border: "2px solid #33cc33"}).removeAttr({placeholder: 'Please enter a valid email address'});
    }
  });

  //The Credit Card field should only accept a number that is between 13-16 digits
  $creditCardNum.focusout(function(e) {
    let $creditVal = $('#cc-num').val();
    let $cardReg = new RegExp('^\\d{13,16}$');
      if(!$cardReg.test($creditVal)) {
        isCreditCardValid = false;
        $creditCardNum.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: '13-16 digits'});
      } else {
        isCreditCardValid = true;
        $creditCardNum.css({backgroundColor: '#99e699', border: "2px solid #33cc33"}).removeAttr({placeholder: '13-16 digits'});
      } 
    });
  
//If either Bitcoin or Paypal are selected, form submission is still allowed
    $($paymentOption).change(function() {
      if ($paymentOption.val() == "paypal" || "bitcoin") {
        isCreditCardValid = true;
        isZipValid = true;
        isCvvValid = true;
      } 
    });

    //Zip code should only be 5 digits
    $zipCode.focusout(function(e) {
      let $zipVal = $('#zip').val();
      let $zipReg = new RegExp('^\\d{5}$');
        if (!$zipReg.test($zipVal)) {
          isZipValid = false;
          $zipCode.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: '5 digits'});
        } else {
          isZipValid = true;
          $zipCode.css({backgroundColor: '#99e699', border: "2px solid #33cc33"}).removeAttr({placeholder: '5 digits'});
        }
      });

    //CVV should only be 3 digits
  $cvv.focusout(function(e) {
    let $cvvVal = $('#cvv').val();
    let $cvvReg = new RegExp('^\\d{3}$');
      if(!$cvvReg.test($cvvVal)) {
        isCvvValid = false;
        $cvv.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: '3 digits'});
      } else {
        isCvvValid = true;
        $cvv.css({backgroundColor: '#99e699', border: "2px solid #33cc33"}).removeAttr({placeholder: '3 digits'});
      }
    });

    $('button').on('click', function(e){ 
      
      // The user needs to select at least one checkbox under the "Register for Activities" section 
    if($('.activities input:checkbox:checked').length < 1) {
      e.preventDefault();
      isCheckboxValid = false;
      $error.show();
    } else {
      isCheckboxValid = true;
    } 
    if (!isNameValid || !isEmailValid || !isCheckboxValid || !isCreditCardValid || !isZipValid || !isCvvValid) {
      e.preventDefault();
      if (!isNameValid) {$name.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: 'Please enter your name'})};
      if (!isEmailValid) {$eMail.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: 'Please enter a valid email'})};
      if (!isCreditCardValid) {$creditCardNum.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: '13-16 digits'})};
      if (!isZipValid) {$zipCode.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: '5 digits'})};
      if (!isCvvValid) {$cvv.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: '3 digits'})};
    }
    });
