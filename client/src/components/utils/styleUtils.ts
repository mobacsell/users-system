export const scale = (value: string, factor: number, unit: string) => {
	return `${parseInt(value) * factor}${unit}`;
};

//TODO: Папку utils не нужно вынест за пределы components?

//TODO: Удалить!
// export const createStyles = (styles: {
// 	[key: string]: { [key: string]: StyleDeclarationValue };
// }) => {
// 	const result: { [key: string]: { [key: string]: StyleDeclarationValue } } =
// 		{};
// 	for (let style in styles) {

// 		result[style] = StyleSheet.create(styles);
// 		console.log(style);
// 	}
// 	return result;
// };
