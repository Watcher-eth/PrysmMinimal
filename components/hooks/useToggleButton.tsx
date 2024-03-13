import * as React from "react";
import AnimatedPressable from "../common/AnimatedPressable";

export function useToggleButton(opts: {
  defaultValue: boolean;
  buttonTitle: string;
}) {
  const { buttonTitle, defaultValue = false } = opts;
  const [status, setStatus] = React.useState(defaultValue);

  const button = React.useMemo(() => {
    return (
      <AnimatedPressable onPress={() => setStatus(!status)}>
        {buttonTitle}: {`${status}`}
      </AnimatedPressable>
    );
  }, [status, buttonTitle]);

  return {
    status,
    button,
  };
}
