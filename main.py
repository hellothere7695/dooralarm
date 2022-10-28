def on_button_pressed_ab():
    global Activate
    Activate = 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

Timer = 0
Activate = 0
Activate = 0
Activate2 = 0

def on_forever():
    global Activate2, Timer
    if Activate == 1:
        if input.magnetic_force(Dimension.STRENGTH) > 0:
            Activate2 = 0
            basic.clear_screen()
        if input.magnetic_force(Dimension.STRENGTH) > 0 and Activate2 == 1:
            Activate2 = 0
            basic.clear_screen()
            basic.show_number(Timer)
        if input.magnetic_force(Dimension.STRENGTH) < 0:
            Timer += 1
            basic.show_icon(IconNames.ANGRY)
basic.forever(on_forever)
