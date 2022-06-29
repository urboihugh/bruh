melody = ""
music.set_volume(100)
tempo = 220
#alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
notes = "AGBDF"
nLen = len(notes)
metal = True
pattern = 0
mainNote = ""

def on_forever():
    if metal == False:
        melody = ""
        note = randint(0, nLen)
        length = randint(1, 10)
        tempo = randint(500, 1000)
        for x in range(length):
            melody += notes[note] + " "
        music.play_melody(melody, tempo)
    
    else:
        melody = ""
        tempo = 1000
        mainNote = notes[randint(0, nLen)]
        pattern = randint(0, 2)
        if pattern == 0:
            for x in range(3):
                melody += mainNote + " "
            note = randint(0, nLen)
            melody += notes[note] + " "
            pattern = 2
        elif pattern == 1:
            for x in range(2):
                melody += mainNote + " "
            note = randint(0, nLen)
            melody += notes[note] + " "
            note = randint(0, nLen)
            melody += notes[note] + " "
            pattern = 2
        else:
            for x in range(4):
                melody += mainNote + " "
            for x in range(4):
                melody += melody + " "
            pattern = randint(0, 1)
        music.play_melody(melody, tempo)

basic.forever(on_forever)