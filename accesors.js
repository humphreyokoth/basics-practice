const obj ={counter:0};


Object.defineProperty(obj,"reset",{
    get:function(){
        this.counter = 0;
    }
})
obj.reset;
//console.log(obj.counter);

// ITERABLES
function myNumbers(){

    let n = 0;
    return{
        next:function(){
            n+=10
            return {value:n, done:false};
        }
    };
}

const n = myNumbers();
console.log(n.next().value);