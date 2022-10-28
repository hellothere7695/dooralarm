input.onButtonPressed(Button.A, function () {
    // Only show number if the magnet sensor is turned off
    if (Activate == 0) {
        // Show the number of seconds counted by the Microbit
        basic.showNumber(Timer)
    }
})
// A+B
input.onButtonPressed(Button.AB, function () {
    if (Activate == 0) {
        Timer = 0
        Open = 0
    }
    // This part toggles the Microbit on and off
    if (Activate == 1) {
        Away = 0
        basic.showNumber(0)
    } else {
        basic.showNumber(1)
    }
    basic.pause(1000)
    // Clear screen to allow the number to show properly
    basic.clearScreen()
    if (Activate == 1) {
        Activate = 0
    } else {
        Activate = 1
    }
})
input.onButtonPressed(Button.B, function () {
    // Only show number if the magnet sensor is turned off
    if (Activate == 0) {
        // Show the number of times the Microbit have separated from the magnet.
        basic.showNumber(Open)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // Only recalibrate if the magnet sensor is turned off
    if (Activate == 0) {
        // Recalibrate magnet to natural magnetic wave
        // Prevent error due to slight magnet fluctuation
        Magnet = input.magneticForce(Dimension.Strength) + 20
    }
})
let Open = 0
let Away = 0
let Magnet = 0
let Timer = 0
let Activate = 0
// Microbit are turned if when started
Activate = 0
// Time starts at 0
Timer = 0
// Set noMagnet to Magnet strength
Magnet = input.magneticForce(Dimension.Strength)
// The magnet would be set on later
Away = 0
// Number of times the door is open
Open = 0
music.setVolume(255)
// Main Script
basic.forever(function () {
    // The following code would only work when the variable "Activate" is on (1), this is activated when A+B is Pressed. This part senses the magnet strength.
    if (Activate == 1) {
        // If the magnet strength is stronger than the magnet strength during recalibration, do nothing, else start a one second timer
        if (input.magneticForce(Dimension.Strength) > Magnet) {
            basic.showIcon(IconNames.Happy)
            Away = 0
        } else {
            basic.showIcon(IconNames.Angry)
            Away = 1
        }
    }
})
basic.forever(function () {
    if (Away == 1) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
basic.forever(function () {
    if (Away == 1) {
        basic.pause(1000)
        // Timer starts
        Timer += 1
    }
})
