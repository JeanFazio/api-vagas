import { Sequelize } from "sequelize";

const conexao = new Sequelize(
    "postgresql://jean:F-I08yGF7zChpf3VpwbT3Q@blackzssj-1696.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/blueticket?sslmode=verify-full"
);

try {
    await conexao.authenticate();
    console.log("Conectado ao banco de dados com sucesso");
} catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
}

export default conexao;
