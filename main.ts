input.onGesture(Gesture.TiltLeft, function () {
    if (Math.randomBoolean()) {
        basic.showString("P")
    } else {
        basic.showString("F")
    }
    basic.pause(300)
    basic.clearScreen()
})
