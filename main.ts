input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    x = 0
    y = 0
    led.plot(x, y)
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(x, y)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        led.toggle(x, y)
        basic.pause(100)
        led.toggle(x, y)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        if (x < 4) {
            x += 1
            led.plot(x, y)
            basic.pause(500)
        }
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        if (x > 0) {
            x += -1
            led.plot(x, y)
            basic.pause(500)
        }
    }
    if (input.isGesture(Gesture.LogoUp)) {
        if (y < 4) {
            y += 1
            led.plot(x, y)
            basic.pause(500)
        }
    }
    if (input.isGesture(Gesture.LogoDown)) {
        if (y > 0) {
            y += -1
            led.plot(x, y)
            basic.pause(500)
        }
    }
})
