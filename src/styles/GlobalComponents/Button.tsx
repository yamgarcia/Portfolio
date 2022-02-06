import React from "react";

import { ButtonBack, ButtonFront } from "./index";

interface Props {
  alt?: any;
  form?: any;
  disabled?: any;
  onClick?: any;
  children?: any;
}

const Button: React.FC<Props> = ({
  alt,
  form,
  disabled,
  onClick,
  children,
}) => (
  <ButtonBack alt={alt} form={form} disabled={disabled}>
    {children}
    <ButtonFront alt={alt} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
