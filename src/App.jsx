import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import BillInput from './components/BillInput';
import TipSelector from './components/TipSelector';
import PeopleInput from './components/PeopleInput';
import Results from './components/Results';

const empty_values = {
  bill: 0,
  people: 1,
  tip: 0,
};

const empty_totals = {
  totalTip: 0,
  total: 0,
};

export default function App() {
  const [values, setValues] = useState(empty_values);
  const [totals, setTotals] = useState(empty_totals);
  const [customTip, setCustomTip] = useState(null);
  const [isResetActive, setIsResetActive] = useState(false);
  const [customTipError, setCustomTipError] = useState(false);

  const resetAll = () => {
    setValues(empty_values);
    setTotals(empty_totals);
    setCustomTip(null);
    setIsResetActive(false);
    setCustomTipError(false);
  };

  const computeTotals = () => {
    const { tip, bill, people } = values;

    if (tip !== 0 && bill !== 0 && people > 0) {
      const totalTip = (bill * (tip / 100)) / people;
      const total = (bill / people) + totalTip;

      setTotals({
        totalTip: totalTip.toFixed(2),
        total: total.toFixed(2),
      });
    } else {
      setTotals(empty_totals);
    }
  };

  useEffect(() => {
    computeTotals();
  }, [values]);

  const handleValues = (e) => {
    const target = e.target;
    const value = parseFloat(target.value);
    const name = target.name;

    setIsResetActive(true);

    if (target.id === 'custom-percentage-button') {
      if (value === 0) {
        setCustomTipError(true);
      } else {
        setCustomTipError(false);
      }
      setCustomTip(value);
      setValues({ ...values, tip: value });
    } else {
      const newValue = name === 'bill' && isNaN(value) ? 0 : value;
      setCustomTip(null);
      setCustomTipError(false);
      setValues({ ...values, [name]: newValue });
    }
  };

  return (
    <>
      <Header />
      <div className="general-wrapper">
        <div className="data-wrapper">
          <BillInput value={values.bill} onChange={handleValues} />
          <TipSelector
            selectedTip={values.tip}
            customTip={customTip}
            onTipChange={handleValues}
            customTipError={customTipError}
          />
          <PeopleInput value={values.people} onChange={handleValues} />
        </div>
        <Results
          totalTip={totals.totalTip}
          total={totals.total}
          isResetActive={isResetActive}
          onReset={resetAll}
        />
      </div>
    </>
  );
}
