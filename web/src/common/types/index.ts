export type Identity<T extends object> = {
    id: string  
} & T;

export type TaskSize = 'small' | 'medium' | 'large';

export type Task = {
    description: string,
    size: TaskSize
}

export type AsyncResourceStatus = 'idle' | 'syncing';

export type AsyncResource<T> = {
    value?: T,
    initialized: boolean,
    status: AsyncResourceStatus,
    error?: { code: number, message: string }
}