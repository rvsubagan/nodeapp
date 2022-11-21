import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema({
    title: String,
    description: String
});

const Ticket = mongoose.model('tickets', ticketSchema);

export default Ticket;