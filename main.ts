music.play(music.stringPlayable("C D E F G A B C5 ", 280), music.PlaybackMode.InBackground)
basic.showString("Hola")
music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `).showImage(0, 200)
images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 200)
images.createImage(`
    . # . # .
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    `).showImage(0, 200)
images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 200)
images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `).showImage(0, 200)
images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 200)
images.createImage(`
    . # . # .
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    `).showImage(0, 200)
images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 200)
images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `).showImage(0, 200)
images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 200)
images.createImage(`
    . # . # .
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    `).showImage(0, 200)
images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 200)
music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showString("Presiona A")
basic.showArrow(ArrowNames.West)
basic.clearScreen()
music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
basic.pause(200)
basic.showArrow(ArrowNames.West)
basic.clearScreen()
music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
basic.pause(100)
basic.showArrow(ArrowNames.West)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("John F Kennedy")
        basic.pause(100)
        basic.clearScreen()
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("Presiona B")
        basic.showArrow(ArrowNames.East)
        basic.clearScreen()
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.pause(200)
        basic.showArrow(ArrowNames.East)
        basic.clearScreen()
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.pause(200)
        basic.showArrow(ArrowNames.East)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("_____Vegachi")
        basic.pause(100)
        basic.clearScreen()
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            # # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            # # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            # # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            # # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0, 200)
        basic.pause(100)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 200)
    }
})
