export default function DropdownOption({ option, onClick }) {
  return <li onClick={() => onClick(option)}>{option.label}</li>;
}
