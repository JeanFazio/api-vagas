import { Vaga } from "../models/Vagas.js";

const criarVaga = async (req, res) => {
    try {
        const { titulo, descricao, cargo, cidade, salario } = req.body;

        if (!titulo || !descricao || !cargo || !cidade) {
            return res.status(404).send({ mensagem: "Favor informar todos os campos obrigatórios: título, descrição, cargo e cidade." });
        }

        const vaga = await Vaga.create({ titulo, descricao, cargo, cidade, salario });
        res.status(201).send({ vaga });
    } catch (erro) {
        console.error(erro);
        res.status(500).send({ mensagem: "Erro interno ao criar a vaga" });
    }
};

const listarVagas = async (req, res) => {
    try {
        const vagas = await Vaga.findAll();
        res.status(200).send({ vagas });
    } catch (erro) {
        console.error(erro);
        res.status(500).send({ mensagem: "Erro interno ao listar as vagas" });
    }
};

const obterVagaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const vaga = await Vaga.findByPk(id);

        if (!vaga) {
            return res.status(404).send({ mensagem: "Vaga não encontrada" });
        }

        res.status(200).send({ vaga });
    } catch (erro) {
        console.error(erro);
        res.status(500).send({ mensagem: "Erro interno ao buscar a vaga" });
    }
};

const atualizarVaga = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descricao, cargo, cidade, salario } = req.body;
        const [atualizado] = await Vaga.update({ titulo, descricao, cargo, cidade, salario }, { where: { id } });

        if (!atualizado) {
            return res.status(404).send({ mensagem: "Vaga não encontrada" });
        }

        res.status(200).send({ mensagem: "Vaga atualizada com sucesso" });
    } catch (erro) {
        console.error(erro);
        res.status(500).send({ mensagem: "Erro interno ao atualizar a vaga" });
    }
};

const apagarVaga = async (req, res) => {
    try {
        const { id } = req.params;
        const apagado = await Vaga.destroy({ where: { id } });

        if (!apagado) {
            return res.status(404).send({ mensagem: "Vaga não encontrada" });
        }

        res.status(200).send({ mensagem: "Vaga removida com sucesso" });
    } catch (erro) {
        console.error(erro);
        res.status(500).send({ mensagem: "Erro interno ao remover a vaga" });
    }
};

const listarVagasPorCargo = async (req, res) => {
    try {
        const { cargo } = req.params;
        const vagas = await Vaga.findAll({ where: { cargo } });

        res.status(200).send({ vagas });
    } catch (erro) {
        console.error(erro);
        res.status(500).send({ mensagem: "Erro interno ao buscar por cargo" });
    }
};

const listarVagasPorCidade = async (req, res) => {
    try {
        const { cidade } = req.params;
        const vagas = await Vaga.findAll({ where: { cidade } });

        res.status(200).send({ vagas });
    } catch (erro) {
        console.error(erro);
        res.status(500).send({ mensagem: "Erro interno ao buscar por cidade" });
    }
};

export { criarVaga, listarVagas, obterVagaPorId, atualizarVaga, apagarVaga, listarVagasPorCargo, listarVagasPorCidade };
