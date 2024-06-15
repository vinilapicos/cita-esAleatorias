function gerar() {
    var citacoes = {
        "- Friedrich Nietzsche": '"Aquilo que se faz por amor está sempre além do bem e do mal."',
        "- Cicero": '"A vida feliz consiste na tranquilidade da mente."',
        "- Epicuro": '"Só há um caminho para a felicidade. Não nos preocuparmos com coisas que ultrapassam o poder da nossa vontade."',
        "- Leandro Karnal": '"O que eu penso, não muda nada além do meu pensamento, o que eu faço a partir disso, muda tudo!"',
        "- Viviane Mosé": '"A dor da alma nada mais é do que seus limites se rasgando para caber mais mundo."',
        "- Mario Sergio Cortella": '"O conhecimento serve para encantar as pessoas, não para humilhá-las."',
        "- Djamila Ribeiro": '"O não ouvir é a tendência a permanecer num lugar cômodo e confortável daquele que se intitula poder falar sobre os Outros, enquanto esses Outros permanecem silenciados."',
        "- Clóvis de Barros Filho": '"A felicidade é a pretensão ilusória de converter um instante de alegria em eternidade."',
    }

    var autores = Object.keys(citacoes);
    var autor = autores[Math.floor(Math.random()*autores.length)]
    var citacao = citacoes[autor];
    document.getElementById("citacao").innerHTML = citacao;
    document.getElementById("autor").innerHTML = autor;
}