import { Request, Response } from "express";
import service from "@/services/index.service";
import { Team, idDelete } from "@/protocols/protocols";

async function postTeam (req: Request, res: Response) {
    const team = req.body as Team
    await service.postTeamService(team);
    res.sendStatus(201);
}

async function getTeam (req: Request, res: Response) {
    const teams = await service.getTeamService();
    res.status(200).send(teams);
}

async function updateTeam (req: Request, res: Response) {
    const team = req.body as Team
    await service.updateTeamService(team);
    res.sendStatus(200);
}

async function deleteTeam (req: Request, res: Response) {
    const { id } = req.params
    await service.deleteTeamService(id);
    res.sendStatus(204);
}

const controller = { postTeam, getTeam, updateTeam, deleteTeam }

export default controller;