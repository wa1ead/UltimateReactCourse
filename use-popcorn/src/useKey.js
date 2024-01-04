import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function esc(e) {
        if (e.code.toLowerCase === key.toLowerCase) {
          action();
        }
      }
      document.addEventListener("keydown", esc);

      return function () {
        document.removeEventListener("keydown", esc);
      };
    },
    [key, action]
  );
}
