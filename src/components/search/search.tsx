import { ChangeEventHandler } from "react";
import { Input } from "../../ui/input";

interface SearchProps {
  value: string;
  debouncedValue: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const Search = ({
  value,
  debouncedValue,
  handleChange,
}: SearchProps) => {
  return (
    <div>
      <p>Value real-time: {value}</p>
      <p>Debounced value: {debouncedValue}</p>

      <Input value={value} handleChange={handleChange} />
    </div>
  );
};
