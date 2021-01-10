input.onButtonPressed(Button.A, function () {
    basic.showString("I LOVE ENGINEERING!")
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("CYAL8R")
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("ROOM")
    basic.showLeds(`
        # . # # #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
})
basic.showString("Hello 1st Years")
