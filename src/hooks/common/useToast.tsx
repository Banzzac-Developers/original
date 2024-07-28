import { useCallback, useState } from "react";
import { toast } from "react-toastify";

export default function useToast() {
  const [isToastShown, setIsToastShown] = useState(false);
  const openToast = useCallback(
    (msg: string) => {
      if (isToastShown) {
        return;
      } else {
        setIsToastShown(true);
        toast(msg, {
          onClose: () => setIsToastShown(false),
        });
      }
    },
    [isToastShown],
  );

  return { openToast };
}
