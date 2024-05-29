import { ReactNode } from "react"
import { AsyncResource } from "../../types"

type AyncResourceInitializationControllerProps<T> = {
    resources: AsyncResource<T>[] 
    renderInitializationState: () => ReactNode
    renderInitializationFailureState: () => ReactNode
    renderInitializedState: () => ReactNode
}

export const AyncResourceInitializationController = <T, >({
    resources,
    renderInitializationState,
    renderInitializedState, 
    renderInitializationFailureState
}:  AyncResourceInitializationControllerProps<T>) => {

    const someInitializing = resources.some(({ initialized, status }) => !initialized && status === 'syncing' );
    const someFailedInit = resources.some(({ initialized, error, status }) => !initialized && error !== undefined && status === 'idle');
    const allInitialized = resources.every(({ initialized }) => initialized);

    return (
        <>
            { someInitializing && !someFailedInit && renderInitializationState() }
            { someFailedInit && renderInitializationFailureState() }
            { allInitialized && renderInitializedState() }
        </>
    );
}