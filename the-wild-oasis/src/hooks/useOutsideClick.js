import { useEffect, useRef } from "react";

export function useOutsideClick(handler, capturingListener = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, capturingListener);
      return () =>
        document.removeEventListener("click", handleClick, capturingListener);
    },
    [handler, capturingListener]
  );
  return ref;
}
