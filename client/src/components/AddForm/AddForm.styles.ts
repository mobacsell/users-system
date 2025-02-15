import { StyleSheet } from "aphrodite";
import { color, indentSize, scaleFactor } from "../../constants/styleConstants";
import { FormStyleProps } from "../types/commonTypes";
import { Sizes } from "../../enums/enums";
import { scale } from "../utils/styleUtils";
import "../../assets/styles/fonts.css";
import "normalize.css";

export const getFormStyles = ({ theme, size }: FormStyleProps) => {
	const dynamicStyleValues = {
		[Sizes.XS]: {
			formWidth: "240px",
			formGap: indentSize.md,
			titleMargin: indentSize.xs,
		},
		[Sizes.SM]: {
			formWidth: "300px",
			formGap: scale(indentSize.sm, scaleFactor.twoAndHalf, "px"),
			titleMargin: `${indentSize.sm} 0`,
		},
		[Sizes.MD]: {
			formWidth: "380px",
			formGap: indentSize.lg,
			titleMargin: scale(indentSize.xs, scaleFactor.triple, "px"),
		},
	};
	const { formWidth, formGap, titleMargin } = dynamicStyleValues[size];
	// TODO: Вынести в константу
	const fontFamily = "'RobotoVariable', 'Arial', sans";

	return StyleSheet.create({
		form: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			width: formWidth,
			padding: indentSize.md,
			fontFamily: fontFamily,
			fontWeight: "normal",
			boxShadow: `0 0 6px 1px ${color.grey_light}`,
			borderRadius: "6px",
			gap: formGap,
		},
		title: {
			color: color.grey_dark,
			margin: titleMargin,
			fontSize: "24px",
			fontWeight: "normal",
			fontFamily: fontFamily,
		},
	});
};
