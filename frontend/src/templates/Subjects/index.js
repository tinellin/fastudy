import React from 'react';

import { Content } from './styles';

export default function Subjects(props) {
  const subjects = [
    'Selecione...',
    'Matemática',
    'Física',
    'Qúimica',
    'Biologia',
    'História',
    'Português',
    'Geografia',
    'Filosofia',
    'Sociologia',
  ];

  return (
    <Content id="subject" width={props.width} margin={props.marginTop}>
      <select onChange={props.onChange} value={props.value}>
        {subjects.map((subject, i) => (
          <option value={i}>{subject}</option>
        ))}
      </select>
    </Content>
  );
}
