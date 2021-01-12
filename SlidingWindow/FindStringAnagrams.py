def find_string_anagrams(str, pattern):
  result_indexes = []
  patternMap = {};
  matched = 0 ; 
  start = 0;
  
  for char in pattern:
    if(char in patternMap):
        patternMap[char] +=1;
    else:
        patternMap[char] = 1;
  
  for idx,end in enumerate(str):    
    if(end in patternMap):
      patternMap[end] -=1;
      if(patternMap[end] == 0):
        matched+=1;   
    
    if(matched == len(patternMap)):
      result_indexes.append(start);
      
    if(idx - start  + 1 == len(pattern)):
      if(str[start] in patternMap):
        if(patternMap[str[start]]==0):
          matched-=1;
        patternMap[str[start]]+=1;
      start+=1;

  return result_indexes;


