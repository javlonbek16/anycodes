import { postUser, getUser, getOneUser, uptadeUser, deleteUser } from './../controller/users.controller';
import { Router } from "express";

export const router =Router()

router.get('/users', getUser);
router.post('/users',postUser );
router.get('/users/:id',getOneUser );
router.put('/users/:id',uptadeUser );
router.delete('/users/:id',deleteUser );