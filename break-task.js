// task -1 
// let r = 1;

// while(r <= 200){
//     if(r > 100){
//         break;
//     }
//     console.log(r)
//     r++
// }

// task --- 2
// let r = 1;
// let sum = 0; 

// while(r <= 200){
//     if(sum >= 100){
//         break;
//     }
    
//     console.log(r)
//     sum = r + sum
//     r++
    
// }
// console.log ('total', sum)


// task -- 3 

let r = 1 ;
let squared = 0 ;

// let squared = r * r; squared ber korar niom
while(r <= 100){
    console.log(r)
    squared = r * r
    r++
    if(squared > 1){
        break;
    }
}