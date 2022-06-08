function resultQuestion (){
    const randomText = [
     "Você pode destrir o mundo com essa escolha!",
     "Tenha mais fé nisso",
     "Tente com mais fé!",
     "Isso é bom para você mas pense que pode ter consequencias",
     "Olhe pra traz ele te observa!",
     "Quando encontrar ela olhe e fale",
     "Você tem que fugir!",
    ];
    var i = Math.floor(7*Math.random())
    document.getElementById("result__question").innerHTML = `<span>${randomText[i]}</span>`;
}