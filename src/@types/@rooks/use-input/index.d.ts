declare module '@rooks/use-input' {
  import { ChangeEvent } from "react"; // eslint-disable-line

  type Options = {
    validate: (
      nextValue: string | number,
      currentValue: string | number
    ) => boolean;
  };

  export default function useInput<T>(
    initialValue: T,
    opts?: Options
  ): {
    value: T;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };

}
