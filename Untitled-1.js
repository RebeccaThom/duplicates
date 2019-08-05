altText = $('tr td:nth-child(2)').toArray()

altTxtArray = altText.map(image => $(image).text().toLowerCase());

altTxtArray.forEach(function (el, i, arr) {
    let indexes = [];
    for (j = 0; j < arr.length; j++) {
        if (arr[j] === el) {
            indexes.push(j);
        }
    }
    if (indexes.length > 1) {
        for (k = 0; k < indexes.length; k++) {
        $('table tr').eq(indexes[k] + 1).css('background-color', 'orange');
        }
        
    }
});
