import React from "react";
import { LabelLayout } from "./styles";
import { Input } from "../Form/Input";

export interface DatePickerProps {
  id: string;
  value: string;
  onChange: (date: string) => void;
  label: string;
  required?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  id,
  value,
  onChange,
  label,
  required = false
}) => (
  <LabelLayout htmlFor={id}>
    <Input
      type="datetime-local"
      id={id}
      name={id}
      value={value}
      onChange={e => onChange(e.target.value)}
      required={required}
    />

    <span>{label}</span>
  </LabelLayout>
);
