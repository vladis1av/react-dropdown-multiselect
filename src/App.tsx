import { useState } from 'react';

import Dropdown from './components/Dropdown';
import Layout from './components/Layout';

const items = [
  {
    lang: 'Русский',
    icon: 'ru',
    id: 1,
  },
  {
    lang: 'Английский',
    icon: 'en',
    id: 2,
  },
  {
    lang: 'Испанский',
    icon: 'es',
    id: 3,
  },
  {
    lang: 'Немецкий',
    icon: 'de',
    id: 4,
  },
  {
    lang: 'Итальянский',
    icon: 'it',
    id: 5,
  },
  {
    lang: 'Польский',
    icon: 'pl',
    id: 6,
  },
];

function App() {
  // единственная ошибка в том что у меня не контролируемые чекбоксы
  //для демки чтоб в онлайне удобней было проверять
  const [multiSelect, setMultiSelect] = useState<boolean>(false);
  const [showIcon, setShowIcon] = useState<boolean>(true);

  return (
    <div className="app">
      <Layout>
        <div className="demo-block">
          <button
            className="btn mr20"
            onClick={() => setMultiSelect(!multiSelect)}>
            {multiSelect ? 'Выключить Multi-Select' : 'Включить Multi-Select'}
          </button>
          <button className="btn" onClick={() => setShowIcon(!showIcon)}>
            {showIcon ? 'Скрыть иконки' : 'Показать иконки'}
          </button>
        </div>

        <Dropdown items={items} multiSelect={multiSelect} showIcon={showIcon} />
      </Layout>
    </div>
  );
}

export default App;
