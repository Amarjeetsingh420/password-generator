import { useEffect, useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

const PasswordDisplay = ({ password }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => setCopied(false), 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copyPassword() {
    if (!password) return;

    await navigator.clipboard.writeText(password);
    setCopied(true);
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-700 bg-slate-800 p-2">
      <span className="min-w-0 flex-1 break-all font-bold text-slate-100">
        {password || "Click Generate Password"}
      </span>

      <button
        type="button"
        onClick={copyPassword}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 transition hover:bg-slate-700"
      >
        {copied ? <FiCheck /> : <FiCopy />}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
};

export default PasswordDisplay;
