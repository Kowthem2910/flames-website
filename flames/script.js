function calling(){
    boy1 = document.getElementById("boy").value;
    girl1 = document.getElementById('girl').value;
   const boy = Array.from(boy1);
   const girl = Array.from(girl1);
   for(let i=0;i<boy.length;i++){
       for(let j=0;j<girl.length;j++){
           if(boy[i] == girl[j]){
               boy[i] ='*';
               girl[j] = '-'
           }
       }
   }
   let count =0;
   for(let i=0;i<boy.length;i++){
       if(boy[i] != '*' && boy[i] !=' '){
           count++;
       }
   }
   for(let i=0;i<girl.length;i++){
       if(girl[i] != '-' && girl[i] !=' '){
           count++;
       }
   }
   return count;
   }
   
   const findTheWinner = function(k) {
           let que = [] 
           que.push('Friends😍,You got a best soulmate');
           que.push('Lover💝, Your life lucky girl arrives');
           que.push('Affection⭐,Be happy with your caring one');
           que.push('Marriage😍🤗, You have got a life partner');
           que.push('Enemy😡, Enjoy your life');
           que.push('Sister😵, A person to show love and afffection');
       
           while(que.length > 1){
       let deleteCount = k-1
       while(deleteCount > 0){
       que.push(que.shift())    //Rotate Elements  
            deleteCount--
       }
               que.shift()     // Delete kth element
           }
           return que.shift()  
       };
       
   //first the html call this function
   function display(){
       document.getElementById('dis').innerHTML = findTheWinner(calling()); 
   }
   
   