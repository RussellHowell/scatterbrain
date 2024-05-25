export type Identity<T extends object> = {
    id: string  
} & T;

export type Task = {
    content: string,
    size: 'small' | 'medium' | 'large'
}

export type AsyncResource<T> = {
    value?: T,
    initialized: boolean,
    status: 'idle' | 'syncing',
    error?: { code: number, message: string }
}