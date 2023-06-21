let person = document.getElementById("count")

let person2 = document.getElementById("saveBtn")

document.title = "local passenger count"

let btn3 = document.getElementById('btn3')



console.log(person2);


let count1 = 0

console.log(count1);

 function increment() {
    count1 += 1
   person.innerText = count1 
   person.style.background= 'green'
  
 }
  
 function decrement() {
  count1 -= 1
 person.innerText = count1
 btn3. style.background= 'red'   
}

function save() {
   let countstr = count1  + ""
  person2.innerText += countstr
}



  





