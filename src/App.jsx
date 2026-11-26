import { useState } from 'react';
import { greeting } from './helpers/greeting';
import Dropdown from './components/Dropdown';
import { DROPDOWN_OPTIONS } from './constants/dropdownOptions';

export default function App() {
  const [currentOption, setCurrentOption] = useState(DROPDOWN_OPTIONS[0]);

  return (
    <>
      <h1>{greeting(__APP_NAME__)}</h1>
      <div className="card">
        <div className="card-bg" />
        <h2>Card</h2>
        <Dropdown value={currentOption} onChange={setCurrentOption} />
        <p className="card-description">
          Lorem ipsum dolor sit amet, supra mutationem signate. Nunc porta
          pulvinar lorem, a molestie elit vulputate nec. Maecenas vulputate
          fringilla mi, a posuere arcu tempor sit amet. Etiam porta nisi ut
          molestie hendrerit. Aenean luctus nibh vel sapien interdum, sit amet
          cursus nunc aliquam. Quisque rhoncus elementum sodales. Fusce placerat
          eros ut gravida rhoncus. Fusce pharetra, leo vitae dapibus faucibus,
          dolor nisl placerat elit, eget dignissim odio tortor in dolor.
        </p>
        <button type="button">
          Option <span className="card-selected-id">{currentOption.id}</span> is
          selected
        </button>
      </div>
    </>
  );
}
