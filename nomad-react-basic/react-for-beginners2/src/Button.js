import PropTyes from 'prop-types';
import styled from './Button.module.css';

function Button({ text }) {
  return <button className={styled.btn}>{text}</button>;
}

Button.PropTyes = {
  text: PropTyes.string,
};

// App.js에서 버튼을 가져오게 하 싶다.
export default Button;
