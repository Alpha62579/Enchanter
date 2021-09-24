let enchantingtable = {
    "A": "ᔑ",
    "B": "ʖ",
    "C": "ᓵ",
    "D": "↸",
    "E": "ᒷ",
    "F": "⎓",
    "G": "⊣",
    "H": "⍑",
    "I": "╎",
    "J": "⋮",
    "K": "ꖌ",
    "L": "ꖎ",
    "M": "ᒲ",
    "N": "リ",
    "O": "𝙹",
    "P": "!¡",
    "Q": "ᑑ",
    "R": "∷",
    "S": "ᓭ",
    "T": "ℸ ̣",
    "U": "⚍",
    "V": "⍊",
    "W": "∴",
    "X": "̇/",
    "Y": "||",
    "Z": "⨅",
}

module.exports = {
    toenchanting(string) {
        let returnString = '';
        string.split('').forEach(letter => {
            if(enchantingtable[letter.toUpperCase()]) {
                if (enchantingtable[letter.toUpperCase()] == "||"){
                    returnString = returnString + "\\|\\|";
                } else {
                    returnString = returnString + enchantingtable[letter.toUpperCase()];
                }
            } else {
                returnString = returnString + letter;
            }
        })
        return returnString;
    },
    
    fromenchanting(string) {
        Object.keys(enchantingtable).forEach(letter =>
            string = string.replace(enchantingtable[letter], letter)
             );
        return string;
    },
}