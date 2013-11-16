var myArray = [1,2,3,4,5];

Array.prototype.duplicate = function() {
    return (this + ',' + this);
};
