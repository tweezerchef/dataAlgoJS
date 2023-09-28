// basic basic basic recursion

function countDown(num){
    if(typeof num !== 'number'){
        console.log('Use a number for this function you FOOL!')
        return
    }
    if(num <= 0){
        console.log('All Done');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown('thing')
countDown(10)