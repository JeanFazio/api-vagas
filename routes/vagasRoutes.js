import express from "express";
import {
    criarVaga,
    listarVagas,
    obterVagaPorId,
    atualizarVaga,
    apagarVaga,
    listarVagasPorCargo,
    listarVagasPorCidade,
} from "../controllers/vagasController.js";

const router = express.Router();

router.post("/vagas", criarVaga);
router.get("/vagas", listarVagas);
router.get("/vagas/:id", obterVagaPorId);
router.put("/vagas/:id", atualizarVaga);
router.delete("/vagas/:id", apagarVaga);
router.get("/cargo/:cargo", listarVagasPorCargo);
router.get("/localizacao/:cidade", listarVagasPorCidade);

export default router;