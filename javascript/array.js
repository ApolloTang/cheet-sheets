will not modifiy the array:

    concat()
    slice()

will modify the original array:

    splice()


Copying array:

    using slice (all 3 syntex are equivalent):
        myArray_copy = Array.prototype.slice.call(myArray);
        myArray_copy = [].slice.call(myArray);
        myArray_copy = myArray.slice();

    using concat:
        myArray_copy = Array.proptotype.concat.call(myArray);
        myArray_copy = [].concat(myArray);








