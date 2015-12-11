/*!
   * numberToCLPFormater(@number)
   * transforms a number to currency used in Chile (Chilean Pesos), adds '$'
   * @number: int
   *
   * USE: 
   * numberToCLPFormater(876142) 
   * // return: $876.142
   */

var numberToCLPFormater = (function numberToCLPFormater() {

  "use strict";

  function numberToCurrency(number){
    return "$" + (number + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  return numberToCurrency;
  
})( this );

if ( typeof module !== "undefined" && module.exports ) {
  // export for use in Node
  module.exports.numberToCLPFormater = function ( number ) {
    return numberToCLPFormater( number );
  };
} else if ( typeof define !== "undefined" && define.amd ) {
  // export for use in AMD
  define([], function ( number ) {
    return numberToCLPFormater( number );
  });
}