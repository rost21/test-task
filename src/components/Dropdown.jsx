import { useState, useRef } from 'react';
import { DROPDOWN_OPTIONS } from '../constants/dropdownOptions';
import { useClickAway } from '../hooks/useClickAway';
import DropdownOption from './DropdownOption';

const DROPDOWN_HEIGHT = 180;

export default function Dropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const ref = useRef(null);

  // также можно добавить хук для закрытия дропдауна на клик Esc
  useClickAway({
    ref,
    callback: () => setOpen(false),
  });

  const toggle = () => {
    if (!open && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setUp(spaceBelow < DROPDOWN_HEIGHT);
    }
    setOpen((o) => !o);
  };

  return (
    <div className="dropdown" ref={ref}>
      <button type="button" onClick={toggle}>
        {value.label} {open ? '▴' : '▾'}
      </button>
      {open && (
        // можно переписать на select для лучшего accessibility
        <ul className={`dropdown-menu ${up ? 'up' : ''}`}>
          {DROPDOWN_OPTIONS.map((v) => (
            <DropdownOption
              key={v.id}
              option={v}
              onClick={(selectedOption) => {
                onChange(selectedOption);
                setOpen(false);
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
