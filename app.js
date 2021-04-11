'use strict'
const seattle ={
 min :23,
 max :65,
 averg: 6.3,
 customerPerHour:[],
gnerateCustomerperhour:function() {
for (let i=0;i<14;i++)
    {
        this.customerPerHour[i]=getRandomIntInclusive(23,65)
    }


}//end function gnerate customar per hour


}//end seattile
seattle.gnerateCustomerperhour()
getRandomIntInclusive();
console.log(seattle.customerPerHour);
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  console.log(getRandomIntInclusive(1,20));  