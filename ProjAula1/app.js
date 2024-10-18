const casual = require("casual");

casual.define('pessoa', function() {
    return {
        nome: casual.name,
        sobrenome: casual.last_name,
        rua: casual.street,
        cidade: casual.city,
        pais: casual.country,
        cep: casual.zip(digits = {5:8})
    };
});

for(let i = 1;i <= 10; i++){
    var pessoa = casual.pessoa;

    console.log("Nome: " + pessoa.nome + " " + pessoa.sobrenome +
        "\nRua: " + pessoa.rua + "\nCidade: " + pessoa.cidade + 
        "\nPais: " + pessoa.pais + "\nCEP: " + pessoa.cep)

}

