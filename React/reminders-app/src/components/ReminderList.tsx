import Reminder from '../models/reminders';

interface ReminderListProps {
  items: Reminder[];
  onRempveReminder: (id: number) => void;
}

function ReminderList({ items, onRempveReminder }: ReminderListProps) {
  return (
    <ol className='list-group'>
      {items.map((item) => (
        <li className='list-group-item' key={item.id}>
          {item.title}
          <button onClick={() => onRempveReminder(item.id)} className='btn btn-outline-danger mx-3 rounded-pill'>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}

export default ReminderList;
