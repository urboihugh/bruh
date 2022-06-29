let melody = ""
music.setVolume(100)
let tempo = 220
// alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let notes = "AGBDF"
let nLen = notes.length
let metal = true
let pattern = 0
let mainNote = ""
basic.forever(function on_forever() {
    let melody: string;
    let note: number;
    let length: number;
    let tempo: number;
    let x: number;
    let mainNote: string;
    let pattern: number;
    if (metal == false) {
        melody = ""
        note = randint(0, nLen)
        length = randint(1, 10)
        tempo = randint(500, 1000)
        for (x = 0; x < length; x++) {
            melody += notes[note] + " "
        }
        music.playMelody(melody, tempo)
    } else {
        melody = ""
        tempo = 1000
        mainNote = notes[randint(0, nLen)]
        pattern = randint(0, 2)
        if (pattern == 0) {
            for (x = 0; x < 3; x++) {
                melody += mainNote + " "
            }
            note = randint(0, nLen)
            melody += notes[note] + " "
            pattern = 2
        } else if (pattern == 1) {
            for (x = 0; x < 2; x++) {
                melody += mainNote + " "
            }
            note = randint(0, nLen)
            melody += notes[note] + " "
            note = randint(0, nLen)
            melody += notes[note] + " "
            pattern = 2
        } else {
            for (x = 0; x < 4; x++) {
                melody += mainNote + " "
            }
            for (x = 0; x < 4; x++) {
                melody += melody + " "
            }
            pattern = randint(0, 1)
        }
        
        music.playMelody(melody, tempo)
    }
    
})
