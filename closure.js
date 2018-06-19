let gl = 4;
function first(x){
    let a = 7;
    console.log('From First x: '+ x);
    console.log(arguments)
    console.log(this.gl);
    function inner(y){
        console.log('From inner y: ' + y);
        console.log('From inner x: '+ x);
        console.log('From inner a: '+ a);
        console.log(arguments)
    }
    inner(8); //y=8
}
first(3,4); // x=3