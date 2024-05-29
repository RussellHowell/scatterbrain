import { ReactNode } from "react"
import { AsyncResource } from "../../types"

type AsyncResourceTreeController<T> = {
    resource: AsyncResource<T>
    renderInitializationState: () => ReactNode
    renderInitializationFailureState: () => ReactNode
    renderInitializedState: () => ReactNode
    renderInitializedEmptyState: () => ReactNode
}