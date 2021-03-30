

function getSequreRoot(arr){
    let suqRoot =[];
    for(let i = 0 ; i<arr.length;i++){
  suqRoot.push( Math.sqrt(arr[i])) ;

    }
    return suqRoot;
}
let array = [50,16,25,100];
console.log(getSequreRoot(array));
