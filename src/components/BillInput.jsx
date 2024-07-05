import React from 'react';

export default function BillInput({ value, onChange }) {
  return (
    <div>
      <h1>Bill</h1>
      <label htmlFor="input-bill">
        <input
          className="input-bill"
          id="input-bill"
          name="bill"
          type="number"
          value={value}
          min="0"
          onChange={onChange}
        />
      </label>
    </div>
  );
}
