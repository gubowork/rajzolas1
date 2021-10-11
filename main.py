def on_button_pressed_a():
    global x, y
    basic.clear_screen()
    x = 0
    y = 0
    led.plot(x, y)
input.on_button_pressed(Button.A, on_button_pressed_a)

y = 0
x = 0
x = 0
y = 0
led.plot(x, y)

def on_forever():
    global x, y
    if input.button_is_pressed(Button.B):
        led.toggle(x, y)
        basic.pause(100)
        led.toggle(x, y)
    if input.is_gesture(Gesture.TILT_RIGHT):
        if x < 4:
            x += 1
            led.plot(x, y)
            basic.pause(500)
    if input.is_gesture(Gesture.TILT_LEFT):
        if x > 0:
            x += -1
            led.plot(x, y)
            basic.pause(500)
    if input.is_gesture(Gesture.LOGO_UP):
        if y < 4:
            y += 1
            led.plot(x, y)
            basic.pause(500)
    if input.is_gesture(Gesture.LOGO_DOWN):
        if y > 0:
            y += -1
            led.plot(x, y)
            basic.pause(500)
basic.forever(on_forever)
