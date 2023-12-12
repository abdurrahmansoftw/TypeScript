import { useEffect, useState } from 'react';
import './App.css';
import NewReminder from './components/NewReminder';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminders';
import ReminderService from './services/remider'; // Import the ReminderService class

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  });

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders(); // Use the ReminderService class
    setReminders(reminders);
  };

  const removeReminder = async (id: number) => {
    await ReminderService.deleteReminder(id);
    const newReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(newReminders);
  };

  const addReminder = async (title: string) => {
    const newReminder = await ReminderService.addReminder(title);
    setReminders([...reminders, newReminder]);
  };

  return (
    <div className='App'>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRempveReminder={removeReminder} />
    </div>
  );
}

export default App;
