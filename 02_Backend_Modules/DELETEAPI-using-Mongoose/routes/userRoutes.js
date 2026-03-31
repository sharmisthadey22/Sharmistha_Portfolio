import express from 'express';
import { getUser, createUser,updateUserPut,updateUserPatch,deleteUser } from '../controllers/userController.js';

const router = express.Router();

// Get API to fetch all users
router.get('/users', getUser);

// Post API to create a new user
router.post('/users', createUser);

// Put API to update an existing user
router.put('/users/:id', updateUserPut);

// Patch API to update an existing user
router.patch('/users/:id', updateUserPatch);

//Delete API to delete a user
router.delete('/users/:id', deleteUser);


export default router;