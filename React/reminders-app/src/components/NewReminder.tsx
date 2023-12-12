import React, { useState } from 'react';

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState('');

  const submitFrom = (e: React.FormEvent) => {
    e.preventDefault();
    onAddReminder(title);
    setTitle('');
  };

  return (
    <form className='card p-5' onSubmit={submitFrom}>
      <label htmlFor='title'>title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} id='title' type='text' className='form-control' />
      <button type='submit' className='btn btn-primary rounded-pill my-3'>
        Add New Reminder
      </button>
    </form>
  );
}

export default NewReminder;
