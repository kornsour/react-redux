import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'This is a test.',
    content: 'Test test test'
  },
  {
    title: 'What is the best season?',
    content: 'Fall is the best'
  }
];
export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
