
// $( ".available" ).hover(function( event ) {
//   if ( $( "input:first" ).val() === "correct" ) {
//     $( "span" ).text( "Validated..." ).show();
//     return;
//   }
//
//   $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
//   event.preventDefault();
// });

// $( ".available" ).click(
//   function() {
//     $(this).css("background-color", "pink" );
//   }
// );
// /*
// $(".available").hover(function() {
// 	$("#login-form").slideToogle();
// });
// */

/*START GAO CODE
var settings = {
               rows: 4,
               cols: 6,
               rowCssPrefix: 'row-',
               colCssPrefix: 'col-',
              //  seatWidth: 100,
              //  seatHeight: 100,
               seatCss: 'seat',
               selectedSeatCss: 'selectedSeat',
               selectingSeatCss: 'selectingSeat'
               seatWidth: 14%;
               margin: 0 auto;
               min-height: 100px;
               display: inline-block;
           };


var init = function (reservedSeat) {
                var str = [], seatNo, className;
                for (i = 0; i < settings.rows; i++) {
                    for (j = 0; j < settings.cols; j++) {
                        seatNo = (i + j * settings.rows + 1);
                        className = settings.seatCss + ' ' + settings.rowCssPrefix + i.toString() + ' ' + settings.colCssPrefix + j.toString();
                        if ($.isArray(reservedSeat) && $.inArray(seatNo, reservedSeat) != -1) {
                            className += ' ' + settings.selectedSeatCss;
                        }
                        str.push('<li class="' + className + '"' +
                                  'style="top:' + (i * settings.seatHeight).toString() + 'px;left:' + (j * settings.seatWidth).toString() + 'px">' +
                                  '<a title="' + seatNo + '">' + seatNo + '</a>' +
                                  '</li>');
                    }
                }
                $('#place').html(str.join(''));
            };
            //case I: Show from starting
            //init();

            //Case II: If already booked
            var bookedSeats = [5, 10, 25];
            init(bookedSeats);

$('.' + settings.seatCss).click(function () {
if ($(this).hasClass(settings.selectedSeatCss)){
    alert('This seat is already reserved');
}
else{
    $(this).toggleClass(settings.selectingSeatCss);
    }
});

$('#btnShow').click(function () {
    var str = [];
    $.each($('#place li.' + settings.selectedSeatCss + ' a, #place li.'+ settings.selectingSeatCss + ' a'), function (index, value) {
        str.push($(this).attr('title'));
    });
    alert(str.join(','));
})

$('#btnShowNew').click(function () {
    var str = [], item;
    $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
        item = $(this).attr('title');
        str.push(item);
    });
    alert(str.join(','));
})
END GAO CODE */

// $( function() {
//     $( "#dialog" ).dialog();
//   } );


// $('.available').append("<input type='text'/>");
// $("<input type='text' />").appendTo('.available');

// $( ".available" ).click(
//   function() {
//    $(this).css("background-color", "gray" );
//    $(".seat-chart").append.('<form id="mySearch"></form>'); //append a new form element with id mySearch to <body>
//     $('#mySearch')
//         // .attr("action","mySearchPage.cfm") .attr("method","post") //set the form attributes
//         // //add in all the needed input elements
//         .append('<input type="hidden" name="btnSearch" id="btnSearch" value="Search">')
//         .append('<input type="hidden" name="txtField1" id="txtField1" value="">')
//         .append('<input type="hidden" name="txtField2" id="txtField2" value="">')
//         .append('<input type="hidden" name="selType" id="selType" value="0">')
//         .append('<input type="hidden" name="selType2" id="selType2" value="2">')
// });


$( ".available" ).click(
   function() {
    $(this).css("background-color", "gray" );
    $(".seat-chart").append("In a perfect world, our form will appear here and not be static text!");
 }
 );
