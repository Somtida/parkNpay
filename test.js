console.log(fib(20), {});
function fib(n, dict){
  if(n < 2){
    return 1;
  }else{
    if(dict.hasOwnProperty(n)){
      return dict[n];
    }else{
      dict[n] = fib(n-2,dict)+fib(n-1,dict);
      return fib(n-2,dict)+fib(n-1,dict);
    }

  }

  console.log('dict: ', dict);
}
