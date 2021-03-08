$(document).ready(function($){
    var thisValue = 0;
    var valueOne = 0;
    var valueTwo = 0;

    $('.x1').click(function(event){
        $(".symbol").css({"pointer-events":"auto"});
        if ($('.x1').hasClass('first-active')) {
            thisValue = $(this).text();
            $('.valueOne').append(thisValue);
            valueOne = $('.valueOne').text();
        }
        else if ($('.x1').hasClass('second-active')){
            thisValue = $(this).text();
            $('.valueTwo').append(thisValue);
            valueOne = $('.valueTwo').text();
        }

        $('.symbol').click(function(){
            symbol = $(this).html();
            $('.valueSymbol').text(symbol);
            symbol = $('.valueSymbol').text();
            $('.x1').removeClass('first-active').addClass('second-active')
        });

        $("#equal").click(function(){
            valueOne = parseFloat(valueOne);
            valueTwo = parseFloat(valueTwo);
            if(symbol == "+"){
                valueOne += valueTwo
            } else if (symbol == "-") {
                valueOne -= valueTwo
            } else if (symbol == "x") {
                valueOne = valueOne * valueTwo
            } else if (symbol == "÷") {
                valueOne = valueOne / valueTwo
            }

            $('.value0ne').text(valueOne);
            $('.valueSymbol').text('');
            $('.valueTwo').text('');
        });

        $('#cancel').click(function(){
            $('.x1').addClass('first-active');
            $('.symbol').css({"pointer-events": "none"});  
            $('.value0ne').text('');
            $('.valueSymbol').text('');
            $('.valueTwo').text('');          
        })
    });

});