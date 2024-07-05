import React from 'react';

export default function PeopleInput({ value, onChange }) {
  return (
    <div>
      <h2>Number of People</h2>
      <label htmlFor="input-people">
        <input
          id="input-people"
          className="input-people"
          type="number"
          name="people"
          value={value}
          min="1"
          onChange={onChange}
        />
      </label>
    </div>
  );
}
