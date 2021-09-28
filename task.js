let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

function sortASC(inputArray) {
    // Making a copy of the given list 
    let resultArray = inputArray;

    for (let i = 0; i < resultArray.length; i++) {

        for (let j = 0; j < resultArray.length - 1; j++) {

            //changed if(resultArray[i] > resultArray[j + 1]) to if(resultArray[j] > resultArray[j + 1]) because we need to compare the current elemnt number[j] with the neighboring element which is number[j+1]

            if (resultArray[j] > resultArray[j + 1]) {
                //chnaged the swapping method to decrease variables number

                resultArray[j] = resultArray[j] + resultArray[j + 1];
                resultArray[j + 1] = resultArray[j] - resultArray[j + 1];
                resultArray[j] = resultArray[j] - resultArray[j + 1];
            }
        }
    }
    return resultArray
}


function sortDesc(inputArray) {
    // Making a copy of the given list 
    let resultArray = inputArray;

    for (let i = 0; i < resultArray.length; i++) {

        for (let j = 0; j < resultArray.length - 1; j++) {

            //changed if(resultArray[i] > resultArray[j + 1]) to if(resultArray[j] > resultArray[j + 1]) because we need to compare the current elemnt number[j] with the neighboring element which is number[j+1]

            if (resultArray[j] < resultArray[j + 1]) {
                //chnaged the swapping method to decrease variables number

                resultArray[j] = resultArray[j] + resultArray[j + 1];
                resultArray[j + 1] = resultArray[j] - resultArray[j + 1];
                resultArray[j] = resultArray[j] - resultArray[j + 1];
            }
        }
    }
    return resultArray
}

function sortTextFileData(inputFilePath, outputFilePath) {
    // Reading text file
    var fs = require('fs');
    var fileData = fs.readFileSync(inputFilePath, 'utf-8');

    // stroring file data as integer values
    var resultArray = fileData.split(',').map(function (item) {
        return parseInt(item, 10);
    });

    //sorting the data
    resultArray = sortASC(resultArray);

    //converting the array to csv string (same as the input file)
    var resultArrayStr = resultArray.join(',');
    fs.writeFileSync(outputFilePath, resultArrayStr);
}


console.log("Original numbers list: ", numbers)

console.log("Numbers list After sorting: ", sortASC(numbers))

console.log("Numbers list After Desc sorting: ", sortDesc(numbers))

sortTextFileData('data.txt', 'output.txt');