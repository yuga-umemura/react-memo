import * as React from "react";

type PropsA = {
  value: string;
  setValue: (value: string) => void;
};

const ChildA = React.memo<PropsA>((props: PropsA) => {
  console.log("ChildA");
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  );
});

export default ChildA;
