input.onButtonPressed(Button.A, function () {
    radio.sendValue("A", control.deviceSerialNumber())
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("C", control.deviceSerialNumber())
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("B", control.deviceSerialNumber())
    basic.showString("B")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendValue("D", control.deviceSerialNumber())
    basic.showString("D")
})
radio.setGroup(1)
basic.forever(function () {
	
})
