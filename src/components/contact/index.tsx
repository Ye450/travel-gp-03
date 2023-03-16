import React from 'react';

type Props = {
  placeholder?: string
  label?: string
}

const Input: React.FC<Props> = ({ label, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>

  )
}

export default Input;