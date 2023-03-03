import * as React from "react";

interface INewReminderProps {
  handleAddNewReminder(title: string): void;
}

export default function NewReminder({
  handleAddNewReminder,
}: INewReminderProps): JSX.Element {
  const [value, setValue] = React.useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    handleAddNewReminder(value);
    setValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="input">Add Reminder</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="form-control"
        id="input"
      />
      <button className="btn btn-primary rounded-pill my-3">Add+</button>
    </form>
  );
}
