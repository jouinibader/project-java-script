function analyzeSentence() {
    var text = prompt("enter text:");
    var f = 0;
    var j = 0;
    var i = 0;

    const voyel = "aeiouAEIOU";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (ch === '.') {
            break;
        }
        f++;
        if (voyel.includes(ch)) {
            i++;
        }
        if (ch === ' ' && i > 0 && text[i - 1] !== ' ') {
            j++;
        }
    }
    if (text.length > 1 && text[text.length - 2] !== ' ') {
        j++;
    }
    console.log("Length of the sentence:", f);
    console.log("Number of words:", j);
    console.log("Number of vowels:", i);
}