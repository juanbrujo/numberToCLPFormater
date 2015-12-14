/*!
   * numberToCLPFormater( @number, @currencySymbol, @formatCents )
   * transforms a number to currency used in Chile (Chilean Pesos)
   * 
   * @number: int, accepts negative values
   * @currencySymbol: $ (default), CLP$ or false (empty).
   * @formatCents: bool | default: false.
   *
   * USE: 
   * numberToCLPFormater(876142) 
   * // return: $876.142
   * (more in README.md)
   */

var numberToCLPFormater = (function numberToCLPFormater() {

  "use strict";


  function numberToCurrency( number, currencySymbol, formatCents ){
    
    currencySymbol = typeof currencySymbol !== 'undefined' ? currencySymbol : "$";
    formatCents = typeof formatCents !== 'undefined' ? formatCents : false;

    var thousand = ".";
    var decimal = ",";
    var cents;
    
    if ( currencySymbol === false ) {
      currencySymbol = "";
    }
    if( formatCents === true ){
      cents = 2;
    } else if( formatCents === false ){
      cents = 0;
    }
    
    if( !isNaN( parseFloat( number ) ) && isFinite( number ) ){

      var negative = number < 0 ? "-" : "";
      var i = parseInt( number = Math.abs( +number || 0 ).toFixed( cents ), 10 ) + "";
      var j = ( j = i.length ) > 3 ? j % 3 : 0;

      return currencySymbol + negative + (j ? i.substr(0, j) + "." : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ".") + (cents ? "," + Math.abs(number - i).toFixed(cents).slice(2) : "");
       
    } else {
      return '[error] value must be a number.';
    }
  }

  return numberToCurrency;
  
})( this );

if ( typeof module !== "undefined" && module.exports ) {
  // export for use in Node
  module.exports.numberToCLPFormater = function ( number, currencySymbol, formatCents ) {
    return numberToCLPFormater( number, currencySymbol, formatCents );
  };
} else if ( typeof define !== "undefined" && define.amd ) {
  // export for use in AMD
  define([], function ( number, currencySymbol, formatCents ) {
    return numberToCLPFormater( number, currencySymbol, formatCents );
  });
}