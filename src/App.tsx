import Heading from './components/Heading';
import { Section } from './components/Section';
import Couter from './components/Couter';
import List from './components/List';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title={'Hello'} />
      <Section title={'different title'}>This is my Section</Section>
      <Couter setCount={setCount}>Count is {count}</Couter>
      <List
        items={['☕ Coffee', '🌮 Tacos', '🔥 Code']}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;
