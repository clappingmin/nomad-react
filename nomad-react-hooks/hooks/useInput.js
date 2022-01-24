export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

// App.js에서 사용방법
// const maxLen = (value) => value.length < 10; // 최대 길이 검사
// const includes = (value) => !value.includes('@'); // @ 있는지 검사
// const name = useInput('Mr.', includes);

// // return (
// //   <div>
// //     <h1>Hello</h1>
// //     {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
// //     <input placeholder="Name" {...name} />
// //   </div>
// // );
