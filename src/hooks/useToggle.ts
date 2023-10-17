import { useCallback, useState } from "react";

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((value) => !value), [setValue]);

  const setOn = useCallback(() => setValue(true), [setValue]);

  const setOff = useCallback(() => setValue(false), [setValue]);

  return { isOn: value, toggle, setOff, setOn };
}
