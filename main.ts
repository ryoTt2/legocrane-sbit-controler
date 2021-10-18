input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    SekectMT += 1
    if (SekectMT == 5) {
        SekectMT = 1
    }
    if (SekectMT == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        if (SekectMT == 2) {
            basic.showIcon(IconNames.Giraffe)
        } else {
            if (SekectMT == 3) {
                basic.showIcon(IconNames.Diamond)
            } else {
                basic.showLeds(`
                    # . . . .
                    . # . . .
                    . . # . .
                    . . # # #
                    . . # # #
                    `)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let SekectMT = 0
radio.setGroup(1)
SekectMT = 1
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
