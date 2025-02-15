import { StyleDeclaration, StyleSheet } from "aphrodite";
import {
	color,
	fontSize,
	fontWeight,
	indentSize,
	scaleFactor,
} from "../../constants/styleConstants";
import { Sizes, Themes } from "../../enums/enums";
import { FormStyleProps } from "../types/commonTypes";
import { scale } from "../utils/styleUtils";

export const getButtonStyles = ({ theme, size }: FormStyleProps) => {
	const backgroundColor = theme === Themes.BLUE ? color.blue : color.green;
	const hoverColor = backgroundColor;
	const padding =
		size === Sizes.XS
			? indentSize.sm
			: scale(indentSize.sm, scaleFactor.oneAndHalf, "px");

	return StyleSheet.create({
		button: {
			width: "100%",
			background: color.blue_gradient,
			color: color.white,
			padding: padding,
			border: `1px solid ${backgroundColor}`,
			borderRadius: "4px",
			cursor: "pointer",
			":hover": {
				transition: "0.1s",
				background: color.white,
				color: hoverColor,
				border: `1px solid ${hoverColor}`,
			},
		} as StyleDeclaration,
	});
};
