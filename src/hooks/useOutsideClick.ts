import { useEffect, useRef } from "react";
const useOutsideClick = (callback: any | undefined) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (callback) {
          callback();
        }
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callback]);
  return ref;
};
export default useOutsideClick;
