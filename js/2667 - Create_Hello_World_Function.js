/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        const message = "Hello World";

        return message
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */