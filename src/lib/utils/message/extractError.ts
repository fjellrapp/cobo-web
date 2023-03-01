import type { AxiosError } from "axios";

type AxiosErrorResponse = {
    status: number,
    error: string
}
export const extractErrorMessage = (error: AxiosError): AxiosErrorResponse => {
    if (error.response?.data) {
        return error.response.data as AxiosErrorResponse
    }
    return { status: 500, error: 'Unable to extract message from error'}
}