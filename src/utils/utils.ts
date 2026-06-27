export const cn = (...classes: string[]) => {
    return classes.join(' ')
}

export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time))