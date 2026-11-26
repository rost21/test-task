import { useState } from 'react';
import { greeting } from './helpers/greeting';
import Dropdown from './components/Dropdown';
import { DROPDOWN_OPTIONS } from './constants/dropdownOptions';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectNext = () => {
    setCurrentIndex((i) => (i + 1) % DROPDOWN_OPTIONS.length);
  };

  const currentOption = DROPDOWN_OPTIONS[currentIndex];

  return (
    <>
      <h1>{greeting(__APP_NAME__)}</h1>
      <div className="card">
        <div className="card-background" />
        <h2>Card</h2>
        <Dropdown
          options={DROPDOWN_OPTIONS}
          value={currentOption}
          onChange={setCurrentIndex}
        />
        <p className="card-description">
          Lorem ipsum dolor sit amet, supra mutationem signate. Nunc porta
          pulvinar lorem, a molestie elit vulputate nec. Maecenas vulputate
          fringilla mi, a posuere arcu tempor sit amet. Etiam porta nisi ut
          molestie hendrerit. Aenean luctus nibh vel sapien interdum, sit amet
          cursus nunc aliquam. Quisque rhoncus elementum sodales. Fusce placerat
          eros ut gravida rhoncus. Fusce pharetra, leo vitae dapibus faucibus,
          dolor nisl placerat elit, eget dignissim odio tortor in dolor.
        </p>
        <button type="button" onClick={selectNext}>
          Option <span className="card-selected">{currentIndex + 1}</span> is
          selected
        </button>
      </div>
    </>
  );
}
