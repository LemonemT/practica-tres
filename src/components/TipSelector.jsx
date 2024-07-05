import React from 'react';

export default function TipSelector({ selectedTip, customTip, onTipChange, customTipError }) {
  const tipPercentages = [5, 10, 15, 25, 50];

  return (
    <div>
      <h2>Select Tip %</h2>
      <ul>
        {tipPercentages.map((tp) => (
          <li id={`percentage-${tp}`} key={tp}>
            <button
              type="button"
              onClick={onTipChange}
              name="tip"
              className={`percentage-button ${selectedTip === tp && customTip === null ? 'active' : ''}`}
              value={tp}
            >
              {tp}%
            </button>
          </li>
        ))}
        <li>
          <input
            type="number"
            placeholder="Custom"
            id="custom-percentage-button"
            className={`percentage-button ${customTip !== null ? 'active' : ''} ${customTipError ? 'input-invalid' : ''}`}
            onChange={onTipChange}
            value={customTip || ''}
          />
          {customTipError && <p className="error-message">Can't be zero</p>}
        </li>
      </ul>
    </div>
  );
}
