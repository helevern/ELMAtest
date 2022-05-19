const block=document.querySelector(".block")

let arr= [];
for (let i=1;i<=100;i++) {
    arr.push(i);
}

console.log(arr);

function check(arr){
    for (let i = 0; i < arr.length; i++){
        let node = document.createElement('div');
        if (arr[i] % 15 === 0) {
            node.innerText = "FizzBizz";
            block.appendChild(node);
        } else
        if (arr[i] % 3 === 0){
            node.innerText = "Fizz";
            block.appendChild(node);
        } else
        if (arr[i] % 5 === 0){
            node.innerText = "Bizz";
            block.appendChild(node);
        } else {
            node.innerText = arr[i];
            block.appendChild(node);
        }

    }
}

check(arr);