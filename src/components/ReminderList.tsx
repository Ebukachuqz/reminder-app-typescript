import * as React from "react";
import { Reminder } from "../models/reminder";

export interface IReminderListProps {
  reminders: Reminder[];
  handleDeleteReminder(id: number): void;
}

export default function ReminderList({
  reminders,
  handleDeleteReminder,
}: IReminderListProps) {
  return (
    <div>
      <ul className="list-group">
        {reminders.map((reminder) => (
          <li className="list-group-item" key={reminder.id}>
            {reminder.title}
            <button
              onClick={() => handleDeleteReminder(reminder.id)}
              className="btn btn-outline-secondary rounded-pill mx-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
