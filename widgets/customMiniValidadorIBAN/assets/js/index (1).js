function validateIBAN(iban) {
    var newIban = iban.toUpperCase(),
      modulo = function(divident, divisor) {
        var cDivident = '';
        var cRest = '';
  
        for (var i in divident) {
          var cChar = divident[i];
          var cOperator = cRest + '' + cDivident + '' + cChar;
  
          if (cOperator < parseInt(divisor)) {
            cDivident += '' + cChar;
          } else {
            cRest = cOperator % divisor;
            if (cRest == 0) {
              cRest = '';
            }
            cDivident = '';
          }
  
        }
        cRest += '' + cDivident;
        if (cRest == '') {
          cRest = 0;
        }
        return cRest;
      };
  
    if (newIban.search(/^[A-Z]{2}/gi) < 0) {
      return false;
    }
  
    newIban = newIban.substring(4) + newIban.substring(0, 4);
  
    newIban = newIban.replace(/[A-Z]/g, function(match) {
      return match.charCodeAt(0) - 55;
    });
  
    return parseInt(modulo(newIban, 97), 10) === 1;
  }

  function comprobar(iban){
      validateIBAN(iban);

      if(validateIBAN(iban) == true){
        document.getElementById("prueba").innerHTML = "IBAN VALIDO";
        document.getElementById("prueba").className = 'text-success';
        document.getElementById("iban").className = 'correcto form-control';
        
        return true;
      }else{
        document.getElementById("prueba").innerHTML = "IBAN NO VALIDO";
        document.getElementById("prueba").className = 'text-danger';
        document.getElementById("iban").className = 'incorrecto form-control';
        
        return false;
      }
  }