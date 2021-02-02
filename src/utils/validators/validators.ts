export const required = (value: string) => (value ? undefined : 'Required')

export const maxLengthCreator = (maxLength: number) => (value: string | undefined) => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;
    }
    return undefined;
}
