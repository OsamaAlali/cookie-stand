'use strict'
const seattle ={
 min :23,
 max :65,
 averg: 6.3,
 hourSeattle:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
 purchasedCookiesPerHour:[],
 customerPerHour:[],
gnerateCustomerperhour:function() {
for (let i=0;i<=14;i++)
    {this.customerPerHour.push(getRandomIntInclusive(this.min,this.max))
        //this.customerPerHour[i]=getRandomIntInclusive(23,65);
    }


},//end function gnerate customar per hour
gneratePurchasedCookiesPh: function () {
  console.log(this.customerPerHour)
    for(let i=0;i<this.customerPerHour.length;i++)
{
this.purchasedCookiesPerHour.push(Math.floor((this.averg) *this.customerPerHour[i]));

}//end for loop
console.log(this.purchasedCookiesPerHour)
}//end function gneratePurchasedCookiesPh

}//end seattile
seattle.gnerateCustomerperhour();
seattle.gneratePurchasedCookiesPh();
getRandomIntInclusive();
console.log(seattle.customerPerHour);
console.log(seattle.purchasedCookiesPerHour)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  console.log(getRandomIntInclusive(1,20));  