import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

interface CircleProp {
  bgColor: string;
}

function Circle({ bgColor }: CircleProp) {
  return <Container bgColor={bgColor} />;
}

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} you are ${playerObj.age} years old`;

sayHello({ name: 'sumin', age: 12 });
sayHello({ name: 'hi', age: 12 });
