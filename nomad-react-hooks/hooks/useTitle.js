import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerHTML = title;
  };

  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 5000);
  return (
    <div>
      <div>Hello</div>
    </div>
  );
};

export default App;
