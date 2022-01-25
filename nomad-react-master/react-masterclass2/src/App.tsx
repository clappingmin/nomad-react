import React, { useState } from 'react';
import Circle from './Circle';

function App() {
  const [value, setValue] = useState('');
  // 타입스크립트는 이 onChange 함수가 InputElement에 의해서 실행될 것을 안다.
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    // target이랑 currentTarget이랑 같은거임
    const {
      currentTarget: { value },
    } = event;
    setValue(value); // 타입스크립트가 현재 setValue는 string을 받아야 한다는 걸 검사하고 있고,
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // - 기본 동작 방지 (새로고침)
    console.log('hello', value);
  };

  return (
    <div>
      {/* props 예제 */}
      <Circle text="Im here" borderColor="yellow" bgColor="teal" />
      <Circle bgColor="tomato" />

      {/* form 예제 */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          value={value}
          onChange={onChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
