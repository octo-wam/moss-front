import React from "react";
import { LabelLayout } from "./styles";

export interface FloatingLabelInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  id,
  label,
  value,
  onChange
}) => (
  <LabelLayout htmlFor={id}>
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
    <span>{label}</span>
  </LabelLayout>
);
