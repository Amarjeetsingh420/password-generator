import { useState } from "react";
import { FiInfo, FiLock } from "react-icons/fi";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordStrength from "./components/PasswordStrength";
import Slider from "./components/Slider";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  function generatePassword() {
    let chars = "";
    if (upperCase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerCase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (!chars) return;

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(pass);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 p-5">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-6 shadow-lg">
        <div className="flex justify-center">
          <div className="rounded-full border border-slate-700 bg-slate-800 p-4 text-blue-700">
            <FiLock />
          </div>
        </div>

        <h1 className="mt-4 text-center text-3xl font-bold">Password Generator</h1>

        <p className="mt-2 text-center text-slate-400">
          Generate strong, secure passwords in seconds
        </p>

        <div className="mt-6 rounded-2xl border border-slate-700 p-4">
          <p className="mb-2 font-bold">Generated Password</p>

          <PasswordDisplay password={password} />
          <Slider length={length} setLength={setLength} />

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Checkbox
              label="Include Uppercase Letters"
              checked={upperCase}
              setChecked={setUpperCase}
            />
            <Checkbox
              label="Include Lowercase Letters"
              checked={lowerCase}
              setChecked={setLowerCase}
            />
            <Checkbox
              label="Include Numbers"
              checked={numbers}
              setChecked={setNumbers}
            />
            <Checkbox
              label="Include Symbols"
              checked={symbols}
              setChecked={setSymbols}
            />
          </div>

          <Button generatePassword={generatePassword} />
          <PasswordStrength
            upperCase={upperCase}
            lowerCase={lowerCase}
            numbers={numbers}
            symbols={symbols}
            length={length}
          />
        </div>

        <div className="mt-4 flex gap-3 rounded-2xl bg-slate-800 p-4">
          <div className="text-blue-700">
            <FiInfo />
          </div>
          <p className="text-sm text-slate-300">
            Tip: use a mix of uppercase, lowercase, numbers, and symbols for a
            strong password.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
