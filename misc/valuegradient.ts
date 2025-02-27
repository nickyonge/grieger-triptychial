// script to 

console.clear();// clear console when resetting the demo script

const value = 180;// target value to create zero-to-[value] gradient for
const steps = 12;
const decimal = 3;

var log = "VALUE GRADIENT\nValue: " + value + ", Steps: " + steps + "\n========== \n";
for (var i = 0; i <= steps; i++) {
    var x = i / steps;
    var factor = easeInOutCubic(x);
    var target = value * factor;
    var zeros = target < 10 ? "00" : target < 100 ? "0" : "";
    log += i + ": " + zeros + target.toFixed(decimal) + " (Factor: " + factor.toFixed(decimal) + ")";
    log += i < steps ? "\n" : " ";
}
console.log(log);

const easeTransitionCutoff = 0.5;

function ease(x: number): number {
    if (x < easeTransitionCutoff) {
        // easing in
    return easeInCubic(x);
    }
    // easing out
    return easeInOutCubic(x);
}

// copied from https://easings.net/
function easeInOutCubic(x: number): number {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}
function easeInCubic(x: number): number {
    return x * x * x;
}
function easeOutCubic(x: number): number {
    return 1 - Math.pow(1 - x, 3);
}
function easeInQuad(x: number): number {
    return x * x;
}
function easeOutQuad(x: number): number {
return 1 - (1 - x) * (1 - x);
}
function easeOutBack(x: number): number {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}