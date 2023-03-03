import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import { Reminder } from "./models/reminder";
import ReminderService from "./services/reminderService";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminderList, setReminderList] = useState<Reminder[]>([]);

  useEffect(() => {
    const getReminders = async () => {
      const reminders = await ReminderService.getReminders();
      setReminderList(reminders);
    };
    getReminders();
  }, []);

  function handleDeleteReminder(id: number): void {
    setReminderList(reminderList.filter((reminder) => reminder.id !== id));
  }

  const handleAddNewReminder = async (title: string) => {
    const newReminder = await ReminderService.addReminder(title);
    setReminderList([newReminder, ...reminderList]);
  };

  return (
    <div className="App">
      <NewReminder handleAddNewReminder={handleAddNewReminder} />
      <ReminderList
        reminders={reminderList}
        handleDeleteReminder={handleDeleteReminder}
      />
    </div>
  );
}

export default App;
