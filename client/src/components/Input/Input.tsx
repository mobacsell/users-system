import { css } from "aphrodite";
import { getInputStyles } from "./Input.styles";
import { FormStyleProps } from "../types/commonTypes";
import { useEffect, useRef } from "react";

export type InputProps = FormStyleProps & {
  type: "text";
  id: string;
  title: string;
};
// TODO: Сделать валидацию на пустые поля и некорректные символы в поле возраст
function Input({ type, title, id, theme, size }: InputProps) {
  // TODO: Логику анимации размещать здесь.
  const styles = getInputStyles({ theme, size });

  return (
    <div className={css(styles.inputGroup)}>
      <label className={css(styles.inputTitle)}>{title}</label>
      <input type={type} id={id} className={css(styles.input)} />
    </div>
  );
}

export default Input;
