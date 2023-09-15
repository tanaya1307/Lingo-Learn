import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';

function MainComponent() {
  const [selectedItem, setSelectedItem] = useState('exercise');

  // Function to handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex p-2 h-full">
      {/* Sidebar */}
      <Sidebar selectedItem={selectedItem} handleItemClick={handleItemClick} />

      {/* Main Content */}
      <ContentArea selectedItem={selectedItem} />
    </div>
  );
}

export default MainComponent;
