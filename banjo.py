def are_you_playing_banjo(name):
    if name[0].lower() == "r":
        name = name + " plays banjo"
    else:
        name = name + " does not play banjo"
    return name

print(are_you_playing_banjo("tom"))
print(are_you_playing_banjo("red"))