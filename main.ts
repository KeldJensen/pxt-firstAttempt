input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    while (!(input.buttonIsPressed(Button.B))) {
        radio.sendNumber(input.acceleration(Dimension.X))
    }
    basic.showString("B")
})
radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumbers([radio.receivedSerial(), receivedNumber])
})
serial.redirectToUSB()
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
input.setAccelerometerRange(AcceleratorRange.OneG)
 