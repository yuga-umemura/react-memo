import { useCallback, useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

type Values = {
  valueA: string;
  valueB: number;
};

const Parent = () => {
  const [values, setValues] = useState<Values>({
    valueA: "",
    valueB: 0,
  });

  const setValueA = useCallback((value: string) => {
    setValues((prevValues) => ({ ...prevValues, valueA: value }));
  }, []);

  const setValueB = useCallback((value: number) => {
    setValues((prevValues) => ({ ...prevValues, valueB: value }));
  }, []);

  return (
    <div>
      <ChildA value={values.valueA} setValue={setValueA} />
      <ChildB value={values.valueB} setValue={setValueB} />
    </div>
  );
};

export default Parent;
