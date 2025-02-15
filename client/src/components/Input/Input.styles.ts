import { StyleSheet } from "aphrodite";
import {
	color,
	fontSize,
	indentSize,
	radius,
	scaleFactor,
} from "../../constants/styleConstants";
import { Themes, Sizes } from "../../enums/enums";
import { FormStyleProps } from "../types/commonTypes";
import { scale } from "../utils/styleUtils";

// TODO: Стилизовать и анимировать как здеь https://mui.com/material-ui/react-text-field/

export const getInputStyles = ({ theme, size }: FormStyleProps) => {
	const dynamicStyleValues = {
		[Sizes.XS]: {
			inputFontSize: fontSize.xs,
			inputPadding: indentSize.xs,
		},
		[Sizes.SM]: {
			inputFontSize: fontSize.sm,
			inputPadding: indentSize.sm,
		},
		[Sizes.MD]: {
			inputFontSize: fontSize.sm,
			inputPadding: indentSize.sm,
		},
	};
	// const titleMarginLeft = inputPadding;
	const focusBorderColor = theme === Themes.BLUE ? color.blue : color.green;
	const { inputFontSize, inputPadding } = dynamicStyleValues[size];
	return StyleSheet.create({
		inputGroup: {
			position: "relative",
			width: "inherit",
		},
		input: {
			boxSizing: "border-box",
			width: "inherit",
			fontSize: inputFontSize,
			border: `1px solid ${color.grey_light}`,
			borderRadius: radius.xs,
			padding: inputPadding,
			color: color.grey_dark,
			":focus": {
				transition: "0.3s",
				outline: "none",
				border: `1px solid ${focusBorderColor}`,
			},
		},
		inputTitle: {
			position: "absolute",
			// top: inputPadding,
			// left: "1px",
			// padding: scale(inputPadding, scaleFactor.half, "px"),
			// border: `1px solid ${color.green}`,
			// margin: inputPadding,
			padding: inputPadding,
			border: `1px solid rgb(255, 255, 255, 0.0)`,
			fontSize: inputFontSize,
			backgroundColor: "rgb(255, 255, 255, 0.0)",
			color: color.grey_dark,
			userSelect: "none",
			":hover": {
				top: 0,
				transform: `translateY(-50%)`,
				fontSize: fontSize.xs,
				padding: `0 ${scale(inputPadding, scaleFactor.half, "px")}`,
				// marginLeft: titleMarginLeft
			},
		},
	});
};
