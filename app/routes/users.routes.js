import { Router } from "express";
import * as userController from "../controller/users.controller";

const router = Router();

router.post('/',userController.createUser );

router.get('/',userController.findAllUsers);

router.get('/ping',userController.pingUser );

router.get('/:id',userController.findOneUser );

router.put('/:id',userController.updateUser );

router.delete('/:id',userController.deleteUser );

export default router;