import { Sizes, Themes } from "../../enums/enums";

export type FormStyleProps = {
	theme: Themes;
	size: Sizes;
};

export type CommonInputProps = {
	type: "text" | "button" | "select";
	theme: Themes;
	size: Sizes;
};
