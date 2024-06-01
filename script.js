//debouncing the data 
let counter = 0;
function getData(){
    console.log("calling the api", counter++);
}

//function dosomething
function doSomething(fn, delay) {
    let timer
    return function () {
        //to check wheather the lexical is running in correct with same arguments and context
        args = arguments;
        let context = this;
        // when delay will finish the 300s  we will clear the interval.
        clearTimeout(timer);
        //then again setTimeout run
        timer = setTimeout(() => {
            fn.apply(context, arguments); 
        }, delay);
    }
}

//we will create some function 
const betterFunction = doSomething(getData, 300);