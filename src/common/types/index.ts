export type Identity<T extends object> = {
    id: string  
} & T;

export type Task = {
    content: string,
    size: 'small' | 'medium' | 'large'
}

