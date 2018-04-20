function rowWeights(array){
let ansArr=[]
let firstArr=0;
let secondArr=0
  for (let i=0; i<array.length; i++){
    if(i%2===0){
    firstArr+=array[i]
    };
    if(i%2!=0){
    secondArr+=array[i]
    };
  };
ansArr.push(firstArr);
ansArr.push(secondArr);
return ansArr;
};
