function calcBMI({weight, height, max = 25, callback}) {
    var bmi = weight / Math.pow(height, 2);

    if (bmi > max) {
        console.log('you\'re overweight');
    }

    if (callback) {
        callback(bmi);
    }
}

calcBMI({weight, height, max: 25});
calcBMI(weight, height, null, callback: function() {});
