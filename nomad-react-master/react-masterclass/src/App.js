import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// theme 사용하기
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const rotataionAnimation = keyframes`
  0%{
    transform: rotate(odeg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(odeg);
    border-radius: 0px;
  }
  `;

const anim = keyframes`
  from {
    color: teal;
  }
  to {
    color: tomato;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
  animation: ${rotataionAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Btn = styled.button`
  color: #000;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  animation: ${anim} 0.5s infinite; // 실행하는 애니메이션 함수, 몇 초 주기, 얼마나 반복
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Wrapper>
      <Title>안녕하세요</Title>
      <Box bgColor="teal">
        <Emoji>😇</Emoji>
      </Box>
      <Box bgColor="tomato" />
      <Circle bgColor="blue" />
      <Btn as="a" href="/">
        Log in
      </Btn>
      <Input></Input>
    </Wrapper>
  );
}

export default App;
