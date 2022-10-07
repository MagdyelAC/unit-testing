export function fact (num: number){
    let factorial = 1;
    if(num>16 || num<0){
        factorial=0;
    }else{
        for (let i = 0; i<num; i++){
            factorial = factorial * (i+1);  
        }
    }
    return factorial;
}