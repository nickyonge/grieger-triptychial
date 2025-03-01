/* valuegradients.ts
 * Script to generate a lil number line based on a gradient, made on codepen.io playground
 *
 * https://codepen.io/nickyonge/pen/NPWdvJj
 *
 * In CodePen, remember to set the JS Preprocessor to TypeScript
 * Open the Console to view output
 *
 * */
console.clear(); // reset output log

// ============================================= SETUP

// parameters
const value = 180; // target value to create zero-to-[value] gradient toward
const stepCount = 12; // number of steps along the gradient. step 0 = 0, step [steps] = 1
const zeroInclusive = false; // does 0 count as a step (true) or is it an additional step beforehand (false)
const decimal = 3; // decimal points to output values to

const combinedEaseInOutMethod = false; // use easeInOutMethod? if false, use easeInMethod and easeOutMethod on either side of easeTransitionCutoff
const easeTransitionCutoff = 0.5; // used to switch between easeIn/easeOut on a single value input. Can't be zero. eg, 0.25 = easing in until 0.25, easing out from 0.25 to 1

function easeInOutMethod(x: number): number {
    return easeInOutCubic(x);
}
function easeInMethod(x: number): number {
    return easeInCubic(x);
}
function easeOutMethod(x: number): number {
    return easeOutCubic(x);
}

// ============================================= EASING FUNCTIONS

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

function ease(x: number): number {
    if (x <= easeTransitionCutoff) {
        // easing in
        return (
            easeInMethod(x * (1 / easeTransitionCutoff)) * easeTransitionCutoff
        );
    }
    // easing out
    return (
        easeOutMethod(
            (x - easeTransitionCutoff) * (1 / (1 - easeTransitionCutoff))
        ) *
            (1 - easeTransitionCutoff) +
        easeTransitionCutoff
    );
}

// ============================================= EXECUTION

// prep output log
var log = "VALUE GRADIENT\nValue: " + value + ", Steps: " + stepCount + "\n";
log += "Zero " + (zeroInclusive ? "Inclusive" : "Exclusive") + "\n==========\n";

var steps = zeroInclusive ? stepCount - 1 : stepCount; // zero in/exclusive step count

for (var i = 0; i <= steps; i++) {
    var x = i / steps;
    var factor = ease(x);
    var target = value * factor;
    var zeros = target < 10 ? "00" : target < 100 ? "0" : "";
    log +=
        i +
        ": " +
        zeros +
        target.toFixed(decimal) +
        " (Factor: " +
        factor.toFixed(decimal) +
        ")\n";
}
log += "==========\nDone";

console.log(log); // results
