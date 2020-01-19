import React from "react";
import { LabelLayout } from "./styles";
import { Input } from "../Form/Input";

export interface FloatingLabelInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  id,
  label,
  value,
  required = false,
  onChange
}) => (
  <LabelLayout htmlFor={id}>
    <Input
      type="text"
      id={id}
      name={id}
      value={value}
      onChange={e => onChange(e.target.value)}
      required={required}
    />
    <span>{label}</span>
  </LabelLayout>
);
