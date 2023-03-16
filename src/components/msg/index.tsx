import React from 'react';

type Props = {
  placeholder?: string
  label?: string,
  value?: string,
  onChange: any,


}

const Message: React.FC<Props> = ({ label, value, onChange, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
    </div >

  )
}

export default Message;