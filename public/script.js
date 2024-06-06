$(document).ready(function () {
    $("#formCadastro").submit(function (event) {
        event.preventDefault();
        const data = {
            nome: $("#nome").val(),
            sobrenome: $("#sobrenome").val(),
            cpf: $("#cpf").val(),
            dataNascimento: $("#dataNascimento").val(),
            endereco: $("#endereco").val(),
            telefone: $("#telefone").val(),
            email: $("#email").val()
        };
        $.post("/api/cadastro", data, function (response) {
            alert("Funcionário cadastrado com sucesso!");
            $("#formCadastro")[0].reset();
        });
    });

    $("#formConsulta").submit(function (event) {
        event.preventDefault();
        const data = {
            nome: $("#consultaNome").val(),
            cpf: $("#consultaCPF").val()
        };
        $.post("/api/consulta", data, function (response) {
            $("#resultadoConsulta").html(JSON.stringify(response, null, 2));
        });
    });

    $("#formPonto").submit(function (event) {
        event.preventDefault();
        const data = {
            cpf: $("#pontoCPF").val()
        };
        $.post("/api/ponto", data, function (response) {
            alert("Ponto registrado com sucesso!");
            $("#formPonto")[0].reset();
        });
    });

    $("#formFerias").submit(function (event) {
        event.preventDefault();
        const data = {
            cpf: $("#feriasCPF").val(),
            dataInicio: $("#dataInicioFerias").val(),
            dataFim: $("#dataFimFerias").val()
        };
        $.post("/api/ferias", data, function (response) {
            alert("Férias registradas com sucesso!");
            $("#formFerias")[0].reset();
        });
    });

    $("#formAvaliacao").submit(function (event) {
        event.preventDefault();
        const data = {
            cpf: $("#avaliacaoCPF").val(),
            feedback: $("#avaliacaoFeedback").val()
        };
        $.post("/api/avaliacao", data, function (response) {
            alert("Avaliação enviada com sucesso!");
            $("#formAvaliacao")[0].reset();
        });
    });
});
