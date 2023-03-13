export const sayCountComments = (count?: number): string => {
	if (!count) {
		return "Sin comentarios";
	}
	if (count === 1) {
		return "(1) comentario";
	} else {
		return `(${count}) comentarios`;
	}
};
