import { useState, useRef, useEffect } from "react";

function useMyState(initialState) {
  const [state, setState] = useState(initialState);

  let isFunction = useRef();
  // 增强原来的setState，可以传入第二个回调
  const mySetState = (state, cb) => {
    // 执行原来的setState
    setState((prevState) => {
      // 记录第二个cb
      isFunction.current = cb;
      return typeof state === "function" ? state(prevState) : state;
    });
  };
  useEffect(() => {
    if (isFunction.current) {
      isFunction.current();
    }
  });

  return [state, mySetState];
}

export default useMyState;
