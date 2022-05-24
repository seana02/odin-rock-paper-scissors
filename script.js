function computerPlay() {
    out = Math.floor(Math.random() * 3);
    switch (out) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}