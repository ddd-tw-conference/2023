import { useEffect, useState } from "react";

const useIsEmpty = (collect: Object) => {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    Object.keys(collect).length === 0 ? setIsEmpty(true) : setIsEmpty(false);
  }, [collect]);

  return isEmpty;
};

export default useIsEmpty;
