import { css } from "aphrodite";
import { getButtonStyles } from "./Button.styles";
import { FormStyleProps } from "../types/commonTypes";

export type ButtonProps = FormStyleProps & {
	type: "button";
	value: string;
};

function Button({ type, theme, size, value }: ButtonProps) {
	const styles = getButtonStyles({ theme, size });

	return <input type={type} value={value} className={css(styles.button)} />;
}

export default Button;
