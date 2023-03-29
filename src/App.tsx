import React, { useState } from 'react';
import './App.css';
import { Basket } from './modules/Basket';
import { Payment } from './modules/Payment';
import { Submit } from './modules/Submit';
import { Tickets } from './modules/Tickets';
import { Wizard } from './modules/Wizard';
import { Sect } from './types/types';

function App() {
  const [currentStep, setCurrentStep] = useState(0)

  function handleBack(index: number) {
    setCurrentStep(index - 1)
  }

  function handleForward(index: number) {
    setCurrentStep(index + 1)
  }

  const sects: Sect[] = [
    {title: 'Jegyek', children: Tickets(), isAvailable: true},
    {title: 'Kosár', children: Basket(), isAvailable: true},
    {title: 'Fizetés', children: Payment(), isAvailable: true},
    {title: 'Beküldés', children: Submit(), isAvailable: false}
  ]
  return (
    <Wizard currentStep={currentStep} sects={sects} handleBack={handleBack} handleForward={handleForward} />
    
  );
}

export default App;
