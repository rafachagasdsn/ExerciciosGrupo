var sabor, adds, adicionais, mensagem;
var preco = 0;

function fazerPedido() {
    sabor = prompt("Digite o número do sabor de sorvete desejado.(R$ 5.90)\n 1.Chocolate\n 2.Baunilha\n 3.Morango\n 4.Napolitano")
    switch (sabor) {
        case "1":
            caseChocolate();
            break;
        case "2":
            caseBaunilha();
            break;
        case "3":
            caseMorango();
            break;
        case "4":
            caseNapolitano();
            break;
        default: alert("Valor indidsponível");
    }
}
function caseChocolate() {
    sabor = "chocolate";
    preco = 5.90;
    adds = parseInt(prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate\n Quantos adicionais você deseja?\n Limite de adicionais: 2"));
    switch (adds) {
        case 0:
            exibirDados();
            break;
        case 1:
            preco += 2;
            adicionais = prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate \n Qual adicional deseja incluir?")
            exibirDados();
            break;
        case 2:
            preco += 4;
            adicionais = prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate \n Quais adicionais deseja incluir?")
            exibirDados();
            break;
        default:
            mensagem = "O limite de acompanhamentos é 2";
            alert(mensagem);
    }
}
function caseBaunilha() {
    sabor = "baunilha";
    preco = 5.90;
    adds = parseInt(prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate\n Quantos adicionais você deseja?\n Limite de adicionais: 2"));
    switch (adds) {
        case 0:
            exibirDados();
            break;
        case 1:
            preco += 2;
            adicionais = prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate \n Qual adicional deseja incluir?")
            exibirDados();
            break;
        case 2:
            preco += 4;
            adicionais = prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate \n Quais adicionais deseja incluir?")
            exibirDados();
            break;
        default:
            mensagem = "O limite de acompanhamentos é 2";
            alert(mensagem);
    }
}
function caseMorango() {
    sabor = "morango";
    preco = 5.90;
    adds = parseInt(prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate\n Quantos adicionais você deseja?\n Limite de adicionais: 2"));
    switch (adds) {
        case 0:
            exibirDados();
            break;
        case 1:
            preco += 2;
            adicionais = prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate \n Qual adicional deseja incluir?")
            exibirDados();
            break;
        case 2:
            preco += 4;
            adicionais = prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate \n Quais adicionais deseja incluir?")
            exibirDados();
            break;
        default:
            mensagem = "O limite de acompanhamentos é 2";
            alert(mensagem);
    }
}
function caseNapolitano() {
    sabor = "napolitano";
    preco = 5.90;
    adds = parseInt(prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate\n Quantos adicionais você deseja?\n Limite de adicionais: 2"));
    switch (adds) {
        case 0:
            exibirDados();
            break;
        case 1:
            preco += 2;
            adicionais = prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate \n Qual adicional deseja incluir?")
            exibirDados();
            break;
        case 2:
            preco += 4;
            adicionais = prompt(" Adicionais disponíveis: Farofa doce, Paçoca, Calda de caramelo e Biscoito de chocolate \n Quais adicionais deseja incluir?")
            exibirDados();
            break;
        default:
            mensagem = "O limite de acompanhamentos é 2";
            alert(mensagem);
    }
}
function exibirDados() {
    alert(" Pedido: Sorvete sabor " + sabor + "\n Adicionais: " + adicionais + "\n Preço final = " + preco);
}
