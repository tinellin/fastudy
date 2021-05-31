import React from 'react';
import { Content } from './styles';
import TextareaAutosize from 'react-textarea-autosize';

export default function TextArea(props) {
  return (
    <Content
      marginTop={props.marginTop}
      height={props.height}
      borderRadius={props.borderRadius}
      marginBottom={props.marginBottom}
      padding={props.padding}
    >
      <TextareaAutosize
        id="content"
        style={props.border}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    </Content>
  );
}
