import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es";

interface Transformable {
	createdAt: string;
	updatedAt: string;
	[x: string]: any;
}

TimeAgo.addDefaultLocale(es);
const timeAgo = new TimeAgo("es-CO");

export const adjustDateList = <T>(list: Transformable[]): T[] => {
	return list.map((item) => adjustDateItem<T>(item));
};

export const adjustDateItem = <T>(item: Transformable): T => {
	return {
		...item,
		createdAt: new Date(item.createdAt),
		updatedAt: new Date(item.updatedAt),
	} as T;
};

export const getTimeAgo = (date: Date): string => {
	if (date.constructor === String) {
		return timeAgo.format(new Date(date));
	}
	return timeAgo.format(date);
};
