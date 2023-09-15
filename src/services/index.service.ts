import { Team } from "@/protocols/protocols";
import repository from "@/repository/index.repository";
import { Request, Response } from "express";

async function postTeamService (team: Team) {
    return await repository.postTeamRepository(team);
}

async function getTeamService () {
    const teams = await repository.getTeamRepository();
    return teams.rows;
}

async function updateTeamService (team: Team) {
    return await repository.updateTeamRepository(team);
}

async function deleteTeamService (id: string) {
    return await repository.deleteTeamRepository(id);
}

const service = { postTeamService, getTeamService, updateTeamService, deleteTeamService }

export default service;