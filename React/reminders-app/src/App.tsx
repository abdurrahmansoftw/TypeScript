import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminders';

const reminders: Reminder[] = [
  { id: 1, title: 'Buy Milk' },
  { id: 2, title: 'Buy Bread' },
  { id: 3, title: 'Buy Eggs' },
];

function App() {
  return (
    <div className='App'>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
