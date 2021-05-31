import React from 'react';

import { FieldContainer } from './styles';

export default function Field(props) {
  return (
    <FieldContainer
      marginTop={props.marginTop}
      width={props.width}
      height={props.height}
      whileHover={{ scale: 1.05 }}
      top={props.top}
    >
      <i className="material-icons icon">{props.icon}</i>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyUp={props.onKeyUp}
        onKeyDown={props.onKeyDown}
        placeholder={props.placeholder}
      />
    </FieldContainer>
  );
}
