const getTheTitles = function(books) {
    let arr = Array(books.length);
    for(i=0;i<books.length; i++) {
        arr[i]=books[i].title;
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
