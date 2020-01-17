import React from "react";
import { RadioOptionsLayout } from "./styles";

export interface RadioOptionsProps<T> {
  name: string;
  options: T[];
  onChange: (option: T) => void;
  value: T | null;
  getOptionId: (option: T) => string;
  getOptionLabel: (option: T) => string;
}

export function RadioOptions<T>({
  options,
  name,
  onChange,
  value,
  getOptionId,
  getOptionLabel
}: RadioOptionsProps<T>) {
  return (
    <RadioOptionsLayout>
      <ul>
        {options.map(option => {
          const optionId = `${name}-${getOptionId(option)}`;
          const isOptionChecked = option === value;

          return (
            <li key={optionId}>
              <label htmlFor={optionId}>
                <input
                  className="visually-hidden"
                  type="radio"
                  name={name}
                  id={optionId}
                  checked={isOptionChecked}
                  onChange={() => onChange(option)}
                />

                <span>{getOptionLabel(option)}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </RadioOptionsLayout>
  );
}
