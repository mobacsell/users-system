import Input, { InputProps } from "../Input/Input";
import { Themes, Sizes } from "../../enums/enums";
import Button, { ButtonProps } from "../Button/Button";
import { css } from "aphrodite";
import { getFormStyles } from "./AddForm.styles";
import { Dropdown, DropdownProps } from "../Dropdown/Dropdown";
import { FormStyleProps } from "../types/commonTypes";

type WithoutThemeAndSize<T> = Omit<T, "theme" | "size">;

type FormProps = FormStyleProps & {
	title: string;
	action: string;
	inputs: (
		| WithoutThemeAndSize<InputProps>
		| WithoutThemeAndSize<DropdownProps>
		| WithoutThemeAndSize<ButtonProps>
	)[];
};

function Form({
	title,
	action,
	inputs,
	size = Sizes.MD,
	theme = Themes.BLUE,
}: FormProps) {
	const styles = getFormStyles({ theme, size });
	return (
		<>
			<h1 className={css(styles.title)}>{title}</h1>
			<form className={css(styles.form)} action={action}>
				{inputs.map((input, index) => {
					const result = (() => {
						switch (input.type) {
							case "text":
								return (
									<Input
										{...input}
										key={index}
										theme={theme}
										size={size}
									/>
								);
							case "button":
								return (
									<Button
										{...input}
										key={index}
										theme={theme}
										size={size}
									/>
								);
							case "dropdown":
								return (
									<Dropdown
										{...input}
										theme={theme}
										size={size}
										key={index}
									/>
								);
						}
					})();
					return result;
				})}
			</form>
		</>
	);
}

export default Form;

try {
} catch (err) {
} finally {
}
