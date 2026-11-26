import { useState, useRef } from 'react';
import { useClickAway } from '../hooks/useClickAway';
import DropdownOption from './DropdownOption';

// захардкожено сейчас для простоты, правильнее вычислять высоту от количества элементов. Или использовать готовые библиотеки типа react-select, react-dropdown, react-dropdown-select
const DROPDOWN_HEIGHT = 180;

export default function Dropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const ref = useRef(null);

  // также можно добавить хук для закрытия дропдауна на клик Esc
  useClickAway({
    ref,
    callback: () => setOpen(false),
    enabled: open,
  });

  const toggle = () => {
    if (!open && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setUp(spaceBelow < DROPDOWN_HEIGHT);
    }
    setOpen((o) => !o);
  };

  const handleOptionClick = (index) => {
    onChange(index);
    setOpen(false);
  };

  return (
    <div className="dropdown" ref={ref}>
      <button type="button" onClick={toggle}>
        {value.label} {open ? '▴' : '▾'}
      </button>
      {open && (
        // можно переписать на select для лучшего accessibility
        <ul className={`dropdown-menu ${up ? 'up' : ''}`}>
          {options.map((option, index) => (
            <DropdownOption
              key={option.id}
              option={option}
              onClick={() => handleOptionClick(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
