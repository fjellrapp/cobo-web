import { writable } from 'svelte/store';

export type ToasterOptions = {
	/**
	 * Will disable interval and show toaster until refresh
	 */
	debug?: boolean;
	/** Will override default interval. Default is 5000ms */
	interval?: number;
};
export enum ToastTypeEnum {
	SUCCESS = 'success',
	WARNING = 'warning',
	ERROR = 'error'
}
export interface IToast {
	type: ToastTypeEnum;
	message: string;
}

export const toasts = writable<IToast[]>([]);

export const toast = (type: ToastTypeEnum, message: string, options?: ToasterOptions) => {
	const newToast: IToast = { type, message };
	toasts.update((state) => [newToast, ...state]);
	!options?.debug && setInterval(removeNewest, options?.interval ?? 5000);
};
const removeNewest = () => {
	toasts.update((state) => {
		return [...state.slice(0, state.length - 1)];
	});
};
