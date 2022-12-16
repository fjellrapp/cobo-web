import { AxiosError } from "axios";

export function assertIsError(e: unknown): asserts e is Error {
    if (!(e instanceof Error)) throw new Error(`Not an error: ${e}`)
}

export function isAxiosError(e: unknown): e is AxiosError {
    return e instanceof AxiosError
}