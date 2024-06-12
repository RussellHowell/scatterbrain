import { ReactNode } from "react"
import { AsyncResource } from "../../types"
import { AnimatePresence, MotionProps, motion } from "framer-motion"

type AyncResourceInitializationControllerProps = {
    resources: AsyncResource<unknown>[] 
    renderInitializationState: () => ReactNode
    renderInitializationFailureState: () => ReactNode
    renderInitializedState: () => ReactNode
}

export const AyncResourceInitializationController = ({
    resources,
    renderInitializationState,
    renderInitializedState, 
    renderInitializationFailureState
}:  AyncResourceInitializationControllerProps) => {

    const someInitializing = resources.some(({ initialized, status }) => !initialized && status === 'syncing' );
    const someFailedInit = resources.some(({ initialized, error, status }) => !initialized && error !== undefined && status === 'idle');
    const allInitialized = resources.every(({ initialized }) => initialized);

    const motionProps: MotionProps = {
        initial: { opacity: 0,  },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        style: { height: 'inherit' }
    }

    return (
        <AnimatePresence mode='wait'>
            { 
                someInitializing && !someFailedInit && ( 
                    <motion.div key='initializing' { ...motionProps }>
                        { renderInitializationState() }
                    </motion.div>
                ) 
            }
            { 
                someFailedInit && ( 
                    <motion.div key='init failure' { ...motionProps }>
                        { renderInitializationFailureState() }
                    </motion.div>
                ) 
            }
            { 
                allInitialized && ( 
                    <motion.div key='init success' { ...motionProps }>
                        { renderInitializedState() }
                    </motion.div>
                ) 
            }
        </AnimatePresence>
    );
}