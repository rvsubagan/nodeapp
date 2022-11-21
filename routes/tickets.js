import express from 'express';
import { getTickets, getTicket, createTicket, updateTicket, deleteTicket } from '../controllers/tickets.js';

const router = express.Router();

router.get('/', getTickets);
router.get('/:id', getTicket);
router.post('/', createTicket);
router.patch('/:id', updateTicket);
router.delete('/:id', deleteTicket);

export default router;