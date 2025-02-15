import { StyleSheet } from "aphrodite";
import { FormStyleProps } from "../types/commonTypes";
import { Sizes, Themes } from "../../enums/enums";
import {
	color,
	fontSize,
	indentSize,
	scaleFactor,
} from "../../constants/styleConstants";
import "../../assets/styles/fonts.css";
import triangledown from "../../assets/icons/triangledown.svg";
import { scale } from "../utils/styleUtils";

//TODO: при раскрытии списка  треугольник должен повернуться наверх. При закрытии - обратно.
//TODO: сделать анимацию как здесь https://codesandbox.io/embed/jkw2qf?module=/src/Demo.tsx&fontsize=12
export const getDropdownStyles = ({ theme, size }: FormStyleProps) => {
	const inputPadding = size === Sizes.XS ? indentSize.xs : indentSize.sm;
	const labelPadding = inputPadding;
	const inputFontSize = {
		[Sizes.XS]: fontSize.xs,
		[Sizes.SM]: fontSize.sm,
		[Sizes.MD]: fontSize.md,
	};
	const focusBorderColor = theme === Themes.BLUE ? color.blue : color.green;

	return StyleSheet.create({
		dropdown_wrapper: {
			width: "100%",
			userSelect: "none",
		},
		dropdown: {
			display: "flex",
			flexDirection: "column",
			fontSize: inputFontSize[size],
			border: `1px solid ${color.grey_light}`,
			borderRadius: "4px",
			// ":focus": {
			// 	transition: "0.3s",
			// 	outline: "none",
			// 	border: `1px solid ${focusBorderColor}`,
			// },
		},
		label: {
			display: "block",
			marginBottom: scale(indentSize.xs, scaleFactor.oneAndHalf, "px"),
			paddingLeft: labelPadding,
			fontSize: fontSize.xs,
			color: color.grey_dark,
			width: "fit-content",
		},
		main_item: {
			display: "flex",
			justifyContent: "space-between",
			padding: inputPadding,
			"::after": {
				content: "''",
				display: "block",
				width: "10px",
				background: `url('${triangledown}') no-repeat center/contain`,
			},
			":focus": {
				transition: "0.3s",
				outline: "none",
				border: `1px solid ${focusBorderColor}`,
			},
		},
		list: {
			display: "none",
			overflow: "hidden",
			margin: 0,
			listStyleType: "none",
			paddingInlineStart: 0,
		},
		list__open: {
			display: "block",
			borderTop: `1px solid ${color.grey_extraLight}`,
		},
		item: {
			padding: inputPadding,
			":hover": {
				backgroundColor: color.grey_extraLight,
			},
		},
	});
};
