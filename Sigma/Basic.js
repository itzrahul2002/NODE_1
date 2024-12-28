let r_name = "Ram";
let age = 25;

// console.log(`His Name is ${r_name} and his name is ${age}`);

let arr = [12,34,546,67,87];

for(let i =0;i<arr.length;i++){
    // console.log(arr[i]);
}

arr.forEach((index, value, arr)=>{
    // console.log(index, value, arr);
})


let obj ={
    a:"Ram",
    b: 25,
    c: "India",
    d: 25.56
}


for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        // console.log(key,element);
        
    }
}

for (const element of arr) {
    // console.log(element);
}

const greater = (x)=>{
    if(x>500){
        return true;
    }
    return false;
}

console.log(arr.filter(greater));
