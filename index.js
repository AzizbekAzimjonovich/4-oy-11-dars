/**let n=10;
let counter=[1,23,4,5];
let soni=counter.length;
let N=[];
for (let i = 0; i <=soni; i++) {
    N.push(n+i);
}
console.log(N); */

//1-misol
/**let matn = "nima gap";
function teskari(satr) {
    return satr.split('').reverse().join('');
  }
  let teskariMatn = teskari(matn);
  console.log(teskariMatn); */
 
  //2-misol
  /**let matn = "nima gap";
  function uzunSoz(satr) {
    let arr=satr.split(' ');
    let arr1=''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].split('').length>arr1) {
            arr1=arr[i]
        }
        
    }
    return arr1
  }
 let enguzun=uzunSoz(matn)
 console.log(enguzun); */

 //3-misol
 /**let matn="gulla yashna hur O'zbekiston"
 function unlilar(satr) {
    let arr=satr.split('');
    let hisob=0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i]=='a'||arr[i]=='A') {
            hisob+=1
        }
        if (arr[i]=='e'||arr[i]=='E') {
            hisob+=1
        }
        if (arr[i]=='i'||arr[i]=='I') {
            hisob+=1
        }
        if (arr[i]=='o'||arr[i]=='O') {
            hisob+=1
        }
       
        if (arr[i]=='u'||arr[i]=='U') {
            hisob+=1
        }
        
        
    }
    return hisob
 }
 console.log(unlilar(matn));
 //console.log(matn.split('')); */

 //4-misol
 /**let matn='level'
 function palindrom(satr) {
    let tek;
    let arr=satr.split('');
    if (arr.reverse().join('')==satr) {
        tek='palindrom'
    }else{
        tek='palindrom emas'
    }
    return tek
 }

 console.log(palindrom(matn)); */

 //5-misol
 /**let arr2=[1,2,3,4,4,5,6]
 function takror(arr) {
    let arr1=[];
    for (let i = 0; i < arr.length; i++) {
       a=arr[i]
       b=0;
       for (let i = 0; i < arr.length; i++) {
        if (a=!arr[i]) {
            b=a
        }
       }
       arr1.push(a)
    }
    return arr1
 }
 console.log(takror(arr2)); */

 //6-misol
/** let matn="gulla yashna hur O'zbekiston"
 function kattaHarf(satr) {
    return satr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
 }
 console.log(kattaHarf(matn)); */

 //7-misol
 /**let arr=[1,2,3,5,6];
 function umumiy(sonlar) {
    let arr1=[]
    for (let i = 1; i < (sonlar.length+2); i++) {
         arr1.push(i)
        
    }
    return arr1
 }
 console.log(umumiy(arr));
   */

 //8-misol
 function umumiy(arr1, arr2) {
    let qoshish = arr1.concat(arr2); 
    let natija = qoshish.sort((a, b) => a - b);
    return natija;
  }
  let x = [1, 3, 5, 7];
  let y = [2, 4, 6, 8];
  let nat = umumiy(x,y);
  console.log(nat);
  