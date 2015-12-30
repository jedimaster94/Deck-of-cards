
var Game = (function ($) {

    //  Game API. This is where you put all your Javascript functionality that is generic
    //      and used in various places in your application. If you have a function that
    //      is only used in one page, do not put it in here. This is only for functionality
    //      that is required in many different places within your application
    
    //  'Private' function. You cannot access this function outside the scope of this js file
    generateNumber = function(){
        var maxNumber = 12;
        return Math.floor((Math.random() * maxNumber) + 1);        
    };

    //  public function
    dealTheCards = function(numberOfCardsToDeal){
        var cards = '';
        for (i = 0; i < numberOfCardsToDeal; i++){
            cards += '<div class="card col-xs-2">' + generateNumber() + '</div>';
        }
        return cards;
    };
    
    //  Exposing functions
    return {
        DealCards: dealTheCards
    }
    
})(jQuery);

