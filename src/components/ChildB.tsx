type PropsB = {
  value: number;
  setValue: (value: number) => void;
};

const ChildB = (props: PropsB) => {
  console.log("ChildB");
  return (
    <input
      type="number"
      value={props.value}
      onChange={(e) => props.setValue(parseInt(e.target.value))}
    />
  );
};

export default ChildB;
