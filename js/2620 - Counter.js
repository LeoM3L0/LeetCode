/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {  
    let atual = n;          // variável interna, "protegida"
        return function() {     // função interna (closure)
        return atual++;
  }
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */