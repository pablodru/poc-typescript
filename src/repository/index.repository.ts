import { db } from "@/database/database.connection";
import { Team, idDelete } from "@/protocols/protocols";

async function postTeamRepository (team : Team) {
    const query = `INSERT INTO team ("pointGuard", "shootingGuard", "smallForward", "powerForward", center) VALUES ( $1, $2, $3, $4, $5 )`
    return await db.query<Team>(query, [team.pointGuard, team.shootingGuard, team.smallForward, team.powerForward, team.center]);
}

async function getTeamRepository () {
    const query = `SELECT * FROM team LIMIT 10`
    return await db.query<Team>(query);
}

async function updateTeamRepository (team: Team) {
    const query = `UPDATE team SET "pointGuard" = $1 , "shootingGuard" = $2, "smallForward" = $3, "powerForward" = $4, center = $5`
    return await db.query<Team>(query, [team.pointGuard, team.shootingGuard, team.smallForward, team.powerForward, team.center]);
}

async function deleteTeamRepository (id: string) {
    const query = `DELETE FROM team WHERE id = $1`
    return await db.query<idDelete>(query, [id]);
}

const repository = { postTeamRepository, getTeamRepository, updateTeamRepository, deleteTeamRepository };

export default repository;