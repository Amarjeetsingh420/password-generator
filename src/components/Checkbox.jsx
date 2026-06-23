const Checkbox = ({ label, checked, setChecked }) => {
  return (
    <label className="border border-slate-700 text-slate-300 rounded-lg p-3 flex cursor-pointer items-center gap-2">
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
};

export default Checkbox;
