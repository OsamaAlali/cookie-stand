'use strict'
const seattle ={
 min :23,
 max :65,
 averg: 6.3,
 hourSeattle:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
 purchasedCookiesPerHour:[],
 customerPerHour:[],
 location:['Seattle'],
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
},//end function gneratePurchasedCookiesPh
total1:function() {
 let sum =0;
 console.log(this.purchasedCookiesPerHour)
  for (let i=0;i<this.purchasedCookiesPerHour.length;i++)
{
sum +=this.purchasedCookiesPerHour[i];
}
return sum;
}
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
  

  let parent=document.getElementById('page');
  let h1=document.createElement('h1');
  parent.appendChild(h1)
 h1.textContent=seattle.location[0];
  let ul=document.createElement('ul');
  parent.appendChild(ul);
  let li=null;
for (let i=0;i<seattle.hourSeattle.length;i++)
{
 li=document.createElement('li');
ul.appendChild(li);
li.textContent=`${seattle.hourSeattle[i]}:${seattle.purchasedCookiesPerHour[i]}Cooking`;

if(i===seattle.hourSeattle.length-1)
{
  li=document.createElement('li');
  ul.appendChild(li);
  
li.textContent='Total:'+seattle.total1();
}
}//end for lop;



const tokyo ={
  min :3,
  max :24,
  averg:1.2,
  hourSeattle:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  purchasedCookiesPerHour:[],
  customerPerHour:[],
  location:['tokyo'],
 gnerateCustomerperhour:function() {
 for (let i=0;i<=14;i++)
     {this.customerPerHour.push(getRandomIntInclusive(this.min,this.max))
         
     }
 },//end function gnerate customar per hour
 gneratePurchasedCookiesPh: function () {
   console.log(this.customerPerHour)
     for(let i=0;i<this.customerPerHour.length;i++)
 {
 this.purchasedCookiesPerHour.push(Math.floor((this.averg) *this.customerPerHour[i]));
 
 }//end for loop
 console.log(this.purchasedCookiesPerHour)
 },//end function gneratePurchasedCookiesPh
 total1:function() {
  let sum =0;
  console.log(this.purchasedCookiesPerHour)
   for (let i=0;i<this.purchasedCookiesPerHour.length;i++)
 {
 sum +=this.purchasedCookiesPerHour[i];
 }
 return sum;
 }
 }//end tokyo
 tokyo.gnerateCustomerperhour();
 tokyo.gneratePurchasedCookiesPh();
getRandomIntInclusive();
console.log(tokyo.customerPerHour);
console.log(tokyo.purchasedCookiesPerHour)

 parent=document.getElementById('page');
   h1=document.createElement('h1');
  parent.appendChild(h1)
 h1.textContent=tokyo.location[0];
   ul=document.createElement('ul');
  parent.appendChild(ul);
   li=null;
for (let i=0;i<tokyo.hourSeattle.length;i++)
{
 li=document.createElement('li');
ul.appendChild(li);
li.textContent=`${tokyo.hourSeattle[i]}:${tokyo.purchasedCookiesPerHour[i]}Cooking`;

if(i===tokyo.hourSeattle.length-1)
{
  li=document.createElement('li');
  ul.appendChild(li);
  
li.textContent='Total:'+tokyo.total1();
}
}//end for lop;
/*
end tokyo
*/
const dubai ={
  min :11,
  max :38,
  averg:3.7,
  hourSeattle:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  purchasedCookiesPerHour:[],
  customerPerHour:[],
  location:['dubai'],
 gnerateCustomerperhour:function() {
 for (let i=0;i<=14;i++)
     {this.customerPerHour.push(getRandomIntInclusive(this.min,this.max))
         
     }
 },//end function gnerate customar per hour
 gneratePurchasedCookiesPh: function () {
   console.log(this.customerPerHour)
     for(let i=0;i<this.customerPerHour.length;i++)
 {
 this.purchasedCookiesPerHour.push(Math.floor((this.averg) *this.customerPerHour[i]));
 
 }//end for loop
 console.log(this.purchasedCookiesPerHour)
 },//end function gneratePurchasedCookiesPh
 total1:function() {
  let sum =0;
  console.log(this.purchasedCookiesPerHour)
   for (let i=0;i<this.purchasedCookiesPerHour.length;i++)
 {
 sum +=this.purchasedCookiesPerHour[i];
 }
 return sum;
 }
 }//end dubai
 dubai.gnerateCustomerperhour();
 dubai.gneratePurchasedCookiesPh();
getRandomIntInclusive();
console.log(dubai.customerPerHour);
console.log(dubai.purchasedCookiesPerHour)

 parent=document.getElementById('page');
   h1=document.createElement('h1');
  parent.appendChild(h1)
 h1.textContent=dubai.location[0];
   ul=document.createElement('ul');
  parent.appendChild(ul);
   li=null;
for (let i=0;i<dubai.hourSeattle.length;i++)
{
 li=document.createElement('li');
ul.appendChild(li);
li.textContent=`${dubai.hourSeattle[i]}:${dubai.purchasedCookiesPerHour[i]}Cooking`;

if(i===dubai.hourSeattle.length-1)
{
  li=document.createElement('li');
  ul.appendChild(li);
  
li.textContent='Total:'+dubai.total1();
}
}//end for lop;
/*

endDubai  */
const paris ={
  min :20,
  max :38,
  averg:2.3,
  hourSeattle:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  purchasedCookiesPerHour:[],
  customerPerHour:[],
  location:['paris'],
 gnerateCustomerperhour:function() {
 for (let i=0;i<=14;i++)
     {this.customerPerHour.push(getRandomIntInclusive(this.min,this.max))
         
     }
 },//end function gnerate customar per hour
 gneratePurchasedCookiesPh: function () {
   console.log(this.customerPerHour)
     for(let i=0;i<this.customerPerHour.length;i++)
 {
 this.purchasedCookiesPerHour.push(Math.floor((this.averg) *this.customerPerHour[i]));
 
 }//end for loop
 console.log(this.purchasedCookiesPerHour)
 },//end function gneratePurchasedCookiesPh
 total1:function() {
  let sum =0;
  console.log(this.purchasedCookiesPerHour)
   for (let i=0;i<this.purchasedCookiesPerHour.length;i++)
 {
 sum +=this.purchasedCookiesPerHour[i];
 }
 return sum;
 }
 }//end paris
 paris.gnerateCustomerperhour();
 paris.gneratePurchasedCookiesPh();
getRandomIntInclusive();
console.log(paris.customerPerHour);
console.log(paris.purchasedCookiesPerHour)

 parent=document.getElementById('page');
   h1=document.createElement('h1');
  parent.appendChild(h1)
 h1.textContent=paris.location[0];
   ul=document.createElement('ul');
  parent.appendChild(ul);
   li=null;
for (let i=0;i<paris.hourSeattle.length;i++)
{
 li=document.createElement('li');
ul.appendChild(li);
li.textContent=`${paris.hourSeattle[i]}:${paris.purchasedCookiesPerHour[i]}Cooking`;

if(i===paris.hourSeattle.length-1)
{
  li=document.createElement('li');
  ul.appendChild(li);
  
li.textContent='Total:'+paris.total1();
}
}//end for lop;
/*
end paris
*/

const lima ={
  min :2,
  max :16,
  averg:4.3,
  hourSeattle:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  purchasedCookiesPerHour:[],
  customerPerHour:[],
  location:['lima'],
 gnerateCustomerperhour:function() {
 for (let i=0;i<=14;i++)
     {this.customerPerHour.push(getRandomIntInclusive(this.min,this.max))
         
     }
 },//end function gnerate customar per hour
 gneratePurchasedCookiesPh: function () {
   console.log(this.customerPerHour)
     for(let i=0;i<this.customerPerHour.length;i++)
 {
 this.purchasedCookiesPerHour.push(Math.floor((this.averg) *this.customerPerHour[i]));
 
 }//end for loop
 console.log(this.purchasedCookiesPerHour)
 },//end function gneratePurchasedCookiesPh
 total1:function() {
  let sum =0;
  console.log(this.purchasedCookiesPerHour)
   for (let i=0;i<this.purchasedCookiesPerHour.length;i++)
 {
 sum +=this.purchasedCookiesPerHour[i];
 }
 return sum;
 }
 }//end paris
 lima.gnerateCustomerperhour();
 lima.gneratePurchasedCookiesPh();
getRandomIntInclusive();
console.log(lima.customerPerHour);
console.log(lima.purchasedCookiesPerHour)

 parent=document.getElementById('page');
   h1=document.createElement('h1');
  parent.appendChild(h1)
 h1.textContent=lima.location[0];
   ul=document.createElement('ul');
  parent.appendChild(ul);
   li=null;
for (let i=0;i<lima.hourSeattle.length;i++)
{
 li=document.createElement('li');
ul.appendChild(li);
li.textContent=`${lima.hourSeattle[i]}:${lima.purchasedCookiesPerHour[i]}Cooking`;

if(i===lima.hourSeattle.length-1)
{
  li=document.createElement('li');
  ul.appendChild(li);
  
li.textContent='Total:'+lima.total1();
}
}