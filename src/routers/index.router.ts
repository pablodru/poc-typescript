import controller from "@/controllers/index.controller";
import { validate } from "@/middlewares/validateSchema";
import { schemaTeam } from "@/schemas/schema";
import { Router } from "express";

const router = Router();

router.get('/health', (req, res) => res.send('Ok!'));
router.post('/team', validate(schemaTeam, 'body') , controller.postTeam);
router.get('/team', controller.getTeam);
router.put('/team', validate(schemaTeam, 'body'), controller.updateTeam);
router.delete('/team/:id', controller.deleteTeam);

export default router;