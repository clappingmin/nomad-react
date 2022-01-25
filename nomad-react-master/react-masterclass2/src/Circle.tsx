import { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProp {
  bgColor: string;
  borderColor?: string; // optinal
  text?: string;
}

function Circle({ bgColor, borderColor, text = 'default text' }: CircleProp) {
  // const [value, setValue] = useState<number | string>(1);
  // setValue('hello');
  return (
    <Container borderColor={borderColor ?? bgColor} bgColor={bgColor}>
      {text}
    </Container>
  );
}

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

// 다른 예제
const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} you are ${playerObj.age} years old`;

sayHello({ name: 'sumin', age: 12 });
sayHello({ name: 'hi', age: 12 });
