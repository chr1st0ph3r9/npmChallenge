
const messages2 = [
    `pepe`,
    `mami`,
    `angel`,
    `goldis`,
    `wiki`,
    `manchi`
]

const aleatorio2 = () =>{
    const randomen2=messages2[Math.floor(Math.random()*messages2.length)];
    console.log(randomen2);

}

module.exports={aleatorio2};