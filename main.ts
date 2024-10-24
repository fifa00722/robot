radio.onReceivedValue(function (name, value) {
    if (name == "servo 1") {
        servo_1 = value
        pins.servoWritePin(AnalogPin.P12, servo_1)
        motorbit.forward(servo_1 + 4)
    } else if (name == "servo 2") {
        servo_2 = value
        pins.servoWritePin(AnalogPin.P9, servo_2)
        motorbit.turnleft(servo_2 + 4)
    } else if (name == "servo 3") {
        servo_3 = value
        pins.servoWritePin(AnalogPin.P10, servo_3)
        motorbit.back(servo_3 + 4)
    } else if (name == "servo 4") {
        servo_4 = value
        pins.servoWritePin(AnalogPin.P8, servo_4)
        motorbit.turnright(servo_4 + 4)
    } else if (name == "reset") {
        reset = 1
    }
})
let reset = 0
let servo_3 = 0
let servo_4 = 0
let servo_2 = 0
let servo_1 = 0
radio.setGroup(216)
radio.setTransmitPower(7)
servo_1 = 90
servo_2 = 90
servo_4 = 90
servo_3 = 60
reset = 0
pins.servoWritePin(AnalogPin.P7, servo_1)
pins.servoWritePin(AnalogPin.P9, servo_2)
pins.servoWritePin(AnalogPin.P10, servo_3)
pins.servoWritePin(AnalogPin.P11, servo_4)
basic.pause(500)
basic.forever(function () {
    if (reset == 1) {
        radio.sendValue("reset", 1)
        servo_1 = 90
        servo_2 = 90
        servo_4 = 90
        servo_3 = 90
        pins.servoWritePin(AnalogPin.P12, servo_1)
        basic.pause(65)
        pins.servoWritePin(AnalogPin.P9, servo_2)
        basic.pause(65)
        pins.servoWritePin(AnalogPin.P10, servo_3)
        basic.pause(65)
        pins.servoWritePin(AnalogPin.P8, servo_4)
        basic.pause(65)
        motorbit.freestyle(0, 0)
        basic.pause(2000)
        reset = 0
    }
})
