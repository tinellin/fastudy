import React from 'react';
import { Card } from './styles';

export default function CardGenerator(props) {
  const color = props.color;

  return (
    <Card>
      <div className="icon-container">
        <i className={`material-icons ${color.characters}`}>
          {color.characters}
        </i>
        <p className={color.characters}>Mínimo de 8 caracteres.</p>
      </div>
      <div className="icon-container">
        <i className={`material-icons ${color.upper}`}>{color.upper}</i>
        <p className={color.upper}>Mínimo de 1 letra maiúscula.</p>
      </div>
      <div className="icon-container">
        <i className={`material-icons ${color.lower}`}>{color.lower}</i>
        <p className={color.lower}>Mínimo de 1 letra minúscula.</p>
      </div>
      <div className="icon-container">
        <i className={`material-icons ${color.special}`}>{color.special}</i>
        <p className={color.special}>
          Mínimo de 1 caracter especial (!, @, #).
        </p>
      </div>
    </Card>
  );
}
