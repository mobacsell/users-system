export const color = {
	white: "#fff",
	blue: "#0095ff",
	green: "#3cfe01",
	grey_extraLight: "#d9d9d9",
	grey_light: "#a9a9a9",
	grey_medium: "#797979",
	grey_dark: "#595959",
	blue_gradient: "linear-gradient(#00a9ff, #0095ff)",
	green_gradient: "linear-gradient(#3cff01, #3cfe01)",
} as const;

export const fontSize = {
	xs: "12px",
	sm: "14px",
	md: "16px",
	lg: "18px",
	xl: "20px",
} as const;

export const fontWeight: { [key: string]: 400 | 600 } = {
	normal: 400,
	bold: 600,
} as const;

export const indentSize = {
	xs: "4px",
	sm: "8px",
	md: "16px",
	lg: "24px",
	xl: "32px",
} as const;

export const scaleFactor = {
	half: 0.5,
	oneAndHalf: 1.5,
	double: 2,
	twoAndHalf: 2.5,
	triple: 3,
	threeAndHalf: 3.5,
} as const;

export const radius = {
	xs: "4px",
	sm: "8px",
	md: "16px",
} as const;