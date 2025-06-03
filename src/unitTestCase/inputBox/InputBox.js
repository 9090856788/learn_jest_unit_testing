import React from 'react';

const InputBox = ({
  value,
  defaultValue,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  disabled,
  readOnly,
  required,
  type = 'text',
  name,
  id,
  maxLength,
  minLength,
  pattern,
  'aria-label': ariaLabel,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      aria-label={ariaLabel}
    />
  );
};

export default InputBox;
