import { useState } from "react";

const Converter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("UZS");
    const [result, setResult] = useState(null);

    const convertCurrency = () => {
        const apiKey = "SIZNING_API_KALITINGIZ";
        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[toCurrency];
                setResult(amount * rate);
            });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border rounded p-2"
            />
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="ml-2 p-2 border rounded"
            >
                <option value="UZS">UZS</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                {/* Qolgan valyutalar */}
            </select>
            <span className="mx-2">to</span>
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="p-2 border rounded"
            >
                <option value="UZS">UZS</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                {/* Qolgan valyutalar */}
            </select>
            <button
                onClick={convertCurrency}
                className="bg-blue-500 text-white p-2 rounded ml-2"
            >
                Convert
            </button>
            {result && <p className="mt-4">Result: {result} {toCurrency}</p>}
        </div>
    );
};

export default Converter;
