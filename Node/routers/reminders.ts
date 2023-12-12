import { Router } from 'express';
import CreateReminderDto from '../dtos/create-remainder';
import Reminder from '../models/reminderModel';

const router = Router();

const reminders: Reminder[] = [];

// GET /reminders
router.get('/', (req, res) => {
  res.json(reminders);
});

//
router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminder);
});

export default router;
