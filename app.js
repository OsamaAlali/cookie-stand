'use strict'
let hourSeattle = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let totalPranch = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0];//array to store total of all purchpranches
let sum=0; //its the last cell in last row
function Branche(location, min, max, average) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.average = average;
  this.customerPerHour = [];
  this.purchasedCookiesPerHour = [],
    this.total = 0;
  //console.log(this);
}// End constructor

Branche.prototype.gnerateCustomerperhour = function () {
  for (let i = 0; i < 14; i++) {
    
    this.customerPerHour.push(getRandomIntInclusive(this.min, this.max))
  }
}//end function gnerate customar per hour
Branche.prototype.gneratePurchasedCookiesPh = function () {
  let rand = 0
  for (let i = 0; i < this.customerPerHour.length; i++) {
    
    rand = Math.floor((this.average) * this.customerPerHour[i]);
    //console.log(this.customerPerHour);
    this.purchasedCookiesPerHour.push(rand);
    this.total += rand;
    totalPranch[i] = totalPranch[i] + rand;
    sum +=totalPranch[i];
  }//end for loop
  
}//end function gneratePurchasedCookiesPh
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
getRandomIntInclusive();
let seattle = new Branche('Seattle', 23, 65, 6.3);
seattle.gnerateCustomerperhour();
seattle.gneratePurchasedCookiesPh();
//console.log(totalPranch+'seattle');
let tokyo = new Branche('Tokyo', 3, 24, 1.2);
tokyo.gnerateCustomerperhour();
tokyo.gneratePurchasedCookiesPh();
//console.log(totalPranch +'seattle And Takyo');
let dubai = new Branche('Dubai', 11, 38, 3.7);
dubai.gnerateCustomerperhour();
dubai.gneratePurchasedCookiesPh();
//console.log(totalPranch +'seattle And Takyo');
let paris = new Branche('paris', 20, 38, 2.3)
paris.gnerateCustomerperhour();
paris.gneratePurchasedCookiesPh();
//console.log(totalPranch +'seattle And Takyo');
let lima = new Branche('Lima', 2, 16, 4.6)
lima.gnerateCustomerperhour();
lima.gneratePurchasedCookiesPh();
//console.log(totalPranch +'seattle And Takyo');
let parent = document.getElementById('page');
let table1 = document.createElement('table');
parent.appendChild(table1);
let thead1 = document.createElement('thead');
table1.appendChild(thead1);
let tbody = document.createElement('tbody');
table1.appendChild(tbody);
let tfoot = document.createElement('tfoot')
table1.appendChild(tfoot);
let tr1 = null;
let th1 = null;
let td1 = null
function theader() {
  tr1 = document.createElement('tr')
  thead1.appendChild(tr1);
  th1 = document.createElement('th');
  tr1.appendChild(th1);
  th1.textContent = '';
  for (let i = 0; i <hourSeattle.length; i++) {
  th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = hourSeattle[i];
  }//end for loop
 let th2 = document.createElement('th');
  tr1.appendChild(th2);
  th2.textContent ='Total';
}
//end function
function tfootFn() {
  tr1 = document.createElement('tr')
  tfoot.appendChild(tr1);
  td1 = document.createElement('td');
  tr1.appendChild(td1);
  td1.textContent = 'Total';
  for (let i = 0; i < hourSeattle.length; i++) {
  
    td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent = totalPranch[i];
  }//end for loop
  td1 = document.createElement('td');
  tr1.appendChild(td1);
  td1.textContent = sum;
}
Branche.prototype.rendar = function () {
  
    tr1 = document.createElement('tr');
    tbody.appendChild(tr1);
    td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent = this.location;
    for(let j=0;j<hourSeattle.length;j++)
    {
      
      td1=document.createElement('td');
      tr1.appendChild(td1);
      td1.textContent=this.purchasedCookiesPerHour[j];
    }
    td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent = this.total;
  // }
  // tfootFn();
}
//end for loop createRow
//end function
theader();
seattle.rendar();
tokyo.rendar();
paris.rendar();
dubai.rendar();
lima.rendar();
tfootFn();
const form=document.getElementById('salmonbranch');
form.addEventListener('submit',addrow);
function addrow(event) {
 event.preventDefault();
  console.log(event);
  let locationf=event.target.location.value;
  let minf=event.target.min.value;
  minf=parseInt(minf);
  let maxf=event.target.max.value;
  maxf=parseInt(maxf);
let avgf=event .target.avg.value;
avgf=parseInt(avgf);
  
let lab9=new Branche(locationf,minf,maxf,avgf);
 
  lab9.gnerateCustomerperhour();
  lab9.gneratePurchasedCookiesPh();
  lab9.rendar();
  
    let rowCount = table1.rows.length;

    table1.deleteRow(rowCount -1);
tfootFn();

}