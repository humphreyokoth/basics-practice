const obj ={counter:0};


Object.defineProperty(obj,"reset",{
    get:function(){
        this.counter = 0;
    }
})
obj.reset;
console.log(obj.counter);