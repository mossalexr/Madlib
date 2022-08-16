function createParagraph() {
    var word1 = document.getElementById("word1").value
    var word2 = document.getElementById("word2").value
    var word3 = document.getElementById("word3").value
    var word4 = document.getElementById("word4").value
    var word5 = document.getElementById("word5").value
    var word6 = document.getElementById("word6").value
    var word7 = document.getElementById("word7").value
    var word8 = document.getElementById("word8").value
    var word9 = document.getElementById("word9").value
    var word10 = document.getElementById("word10").value
    var word11 = document.getElementById("word11").value
    var word12 = document.getElementById("word12").value
    var word13 = document.getElementById("word13").value
    var word14 = document.getElementById("word14").value
    var word15 = document.getElementById("word15").value
    var word16 = document.getElementById("word16").value
    var word17 = document.getElementById("word17").value
    var paragraph = 'Only ' + "<span class ='underline'>" + word1 + '</span>' + ' minutes left till the school ' + "<span class ='underline'>" + word2 + '</span>' + " rings, and when it does, I'm so out of here! It's impossible to " + "<span class ='underline'>" + word3 + '</span>' + ' on algebra when I could be home watching shows like The ' + "<span class ='underline'>" + word4 + '</span>' + ' Thornberrys on ' + "<span class ='underline'>" + word5 + '</span>' + '-toons. Seriously, right now the only thing standing between me, ' + "<span class ='underline'>" + word6 + '</span>' + ' Arnold! and an ice-' + "<span class ='underline'>" + word7 + '</span>' + ' juice ' + "<span class ='underline'>" + word8 + '</span>' + ' is math! O-M-G! What if my older sister ' + "<span class ='underline'>" + word9 + '</span>' + " makes it home before I do? She'll totally " + "<span class ='underline'>" + word10 + '</span>' + " the remote, and I'd rather eat my own " + "<span class ='underline'>" + word11 + '</span>' + ' than miss an episode of Ren and ' + "<span class ='underline'>" + word12 + '</span>' + ' or The ' + "<span class ='underline'>" + word13 + '</span>' + ' Beavers. And does she actually think she can just ' + "<span class ='underline'>" + word14 + '</span>' + ' my Fruit by the ' + "<span class ='underline'>" + word15 + '</span>' + ' and keep me from watching ' + "<span class ='underline'>" + word16 + '</span>' + ' Power? As if! She may be bossy like Angelica from the Rug-' + "<span class ='underline'>" + word17 + '</span>' + ", but I've got Mom's number on speed dial!"
    document.getElementById('answer').innerHTML = paragraph;
};