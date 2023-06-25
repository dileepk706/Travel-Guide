function f(){
    for(var i=1;i<=5;i++){
        
        function d(i){
            setTimeout(() => {
                console.log(i);
            }, i*1000);
        }
        d(i)
    }
}
f()