// basic basic basic recursion

function countDown(num){
    if(num <= 9){
        console.log('All Done');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown('thing')