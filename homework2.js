function drawTriangle(height) {
    var leftAngle = '/';
    var rightAngle = '\\';
    var downAngle = '_';
    var str = '\n';

    for (var i = height; i > 0; i--) {
        for (var j = 0; j < height * 2; j++){
            if (j == i - 1){
                str = str + leftAngle;
            }
            else if (j == (height * 2) - i){
                str = str + rightAngle;
            }
            else if (i == 1){
                str = str + downAngle;
            }
            else {
                str = str + " ";
            }
        }
        str = str + '\n';
    }
    return str;
}

function drawRomb(height) {
    var leftAngle = '/';
    var rightAngle = '\\';
    var str = '\n';

    for (var i = height; i > -height; i--){
        for (var j = 0; j < height * 2; j++){
            if (j == i - 1){
                str = str + leftAngle;
            }
            else if (j == (height * 2) - i){
                str = str + rightAngle;
            }
            else if (j == -i){
                str = str + rightAngle;
            }
            else if (j == (height * 2) + i - 1){
                str = str + leftAngle;
            }
            else {
                str = str + " ";
            }
        }
        str = str + '\n';
    }
    return str;
}

function multiply(a,b){
    var result = 0;
    var isNegative = false;

    if (a < 0 && b < 0){
        a = Math.abs(a);
        b = Math.abs(b);
    }
    if (a < 0 || b < 0){
        a = Math.abs(a);
        b = Math.abs(b);
        isNegative = true;
    }
    for (var i = 0; i < b; i++) {
        result = a + result;
    }
    if (isNegative == true){
        return result * -1;
    }
    else {
        return result;
    }
}