//get odd numbers different ways 

// for(let i = 0; i <= 20; i++){
    // i ke 2 dara vhag kore 'vhag sesh' 1 hoile
//     if( i % 2 === 1){
//         console.log(i);
//     }
// }

// for(let i = 0; i <=20; i++){
//     // i ke 2 dara vhag kore vhag sesh 0 na hoile
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i <=20; i+=2){
    
//         console.log(i);
//     }

// give me the list of numbers between 1 to 30 divisible by 5
// for(let i = 1; i <= 30; i++)
//     // mane 5 diye vivaggo kina[5 diye vhag kore vhag sesh 0]
// if(i % 5 === 0){
//     console.log(i)
// }
// / give me the list of numbers between 1 to 30 divisible by 3
// for(let i = 1; i <= 30; i++)
//     // mane 5 diye vivaggo kina[3 diye vhag kore vhag sesh 0]
// if(i % 3 === 0){
//     console.log(i)
// }


// for(let i = 1; i <= 30; i++){
//     if( i % 5 === 0 || i % 3 === 0 ){
//         console.log(i);
//     }
// }


// for(let i = 1; i <= 30; i++){
//     if( i % 5 === 0 && i % 3 === 0){
//         console.log(i);
//     }
// }
// give me the sum of numbers from 1 to 20 that are divisible by 3
let total = 0;
for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
        console.log(i);
        total = total + i
        console.log("total" , total);
    }
    
    }
    console.log('total' , total); 