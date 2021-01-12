const fruits_into_baskets = function(fruits) {
  let windowStart=0,
      result=0,
      currMax = 0;
    let basket = {};

  for(let windowEnd=0;windowEnd<fruits.length;windowEnd++){
    if(!basket[fruits[windowEnd]])
    {
      basket[fruits[windowEnd]] = 0;
    }
    basket[fruits[windowEnd]]+=1;

    while(Object.keys(basket).length > 2){
      basket[fruits[windowStart]]--;
      if(basket[fruits[windowStart]]==0){
        delete basket[fruits[windowStart]];
      }
      windowStart++;
    }
    result = Math.max(result,windowEnd-windowStart+1);
  }
  return result;
};
