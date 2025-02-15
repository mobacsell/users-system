import { css } from "aphrodite";
import { getDropdownStyles } from "./Dropdown.styles";
import { FormStyleProps } from "../types/commonTypes";
import { useEffect, useRef, useState } from "react";

export type DropdownProps = FormStyleProps & {
  type: "dropdown";
  labelText: string;
  values: string[];
};

export function Dropdown({ values, theme, size, labelText }: DropdownProps) {
  const styles = getDropdownStyles({ theme, size });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };
  const handleLabelClick = () => {
    dropdownRef.current?.focus();
    handleDropdownClick();
  };
  const handleOutsideClick = (e: MouseEvent) => {
    if (
      !dropdownRef.current?.contains(e.target as Node) &&
      !labelRef.current?.contains(e.target as Node)
    )
      setIsOpen(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleDropdownClick);
    };
  }, []);

  // TODO: Выпадающий список реагирует на пробел и enter
  return (
    <>
      <div className={css(styles.dropdown_wrapper)}>
        <label
          className={css(styles.label)}
          ref={labelRef}
          onClick={handleLabelClick}
        >
          {labelText}
        </label>
        <div
          className={css(styles.dropdown)}
          ref={dropdownRef}
          onClick={handleDropdownClick}
        >
          <div className={css(styles.main_item)} tabIndex={0}>
            Пользователь
          </div>
          <ul className={css(styles.list, isOpen && styles.list__open)}>
            {values.map((value, index) => (
              <li className={css(styles.item)} key={index}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
