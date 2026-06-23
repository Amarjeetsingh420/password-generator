import { FiRefreshCw } from "react-icons/fi";
const Button = ({generatePassword}) => {
  return (
    <button
    type="button"
    className="flex justify-center mt-2 mb-2 items-center gap-2 bg-blue-700 text-white shadow-lg w-full rounded-2xl p-3"
    onClick={generatePassword}>
      <span><FiRefreshCw/></span>
      <p>Generate Password</p>
    </button>
  )
}

export default Button
