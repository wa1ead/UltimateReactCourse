import { useState, useEffect } from "react";
export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [converted, setConverted] = useState("");
  const [loading, setLoadind] = useState(false);

  useEffect(
    function () {
      async function currencyConverter() {
        setLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );
        const data = await res.json();
        setConverted(data.rates[to]);
        setLoading(false);
      }
      if (from === to) return setConverted(amount);
      currencyConverter();
    },
    [amount, from, to]
  );
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={loading}
      />
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={loading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        disabled={loading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{converted}</p>
    </div>
  );
}
