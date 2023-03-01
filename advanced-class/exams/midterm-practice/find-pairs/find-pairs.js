function findPairs(array) {
    let pairs = 0;
    let testArray = array.slice().sort();

    for (let i = 0; i < testArray.length; i++)
    {
        if(testArray[i] === testArray[i + 1])
        {
            pairs++;
            i++;
        }
    }

    return pairs || -1;
}

findPairs();