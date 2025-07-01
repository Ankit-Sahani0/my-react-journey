// hooks/useCurrencyInfo.js (or .ts)
import { useEffect, useState } from "react";

export default function useCurrencyInfo(base) {
    const [rates, setRates] = useState({});   // store only the rates map

    useEffect(() => {
        // Frankfurter needs the base code in UPPER‑CASE
        const BASE = base.toUpperCase();

        fetch(`https://api.frankfurter.app/latest?from=${BASE}`)
            .then((r) => r.json())
            .then((json) => setRates(json.rates))     // <-- grab .rates
            .catch((err) => console.error("FX-API error:", err));
    }, [base]);

    return rates;        // e.g. { INR: 85.8, EUR: 0.85, ... }
}
