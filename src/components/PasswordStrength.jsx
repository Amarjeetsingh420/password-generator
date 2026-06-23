const PasswordStrength = ({ upperCase, lowerCase, numbers, symbols, length }) => {
  const typeCount = [upperCase, lowerCase, numbers, symbols].filter(Boolean).length;
  const score = Math.min(4, typeCount + (length >= 12 ? 1 : 0));

  let strength = "WEAK";
  if (score >= 3) strength = "STRONG";
  else if (score === 2) strength = "MEDIUM";

  const labelColor =
    strength === "WEAK"
      ? "text-red-400"
      : strength === "MEDIUM"
      ? "text-yellow-400"
      : "text-green-400";

  const barColor =
    strength === "WEAK"
      ? "bg-red-500"
      : strength === "MEDIUM"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className="mt-3 rounded-2xl border border-slate-700 p-3">
      <div className="flex items-center justify-between">
        <p className="font-bold text-slate-100">Password Strength</p>
        <p className={`font-bold ${labelColor}`}>{strength}</p>
      </div>

      <div className="mt-2 flex gap-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded ${
              index < score ? barColor : "bg-slate-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PasswordStrength;
