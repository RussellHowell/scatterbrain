import { Heading, Spinner, Stack, StyleProps } from "@chakra-ui/react"
import { Identity, AsyncResource, Task } from "../../common/types"
import { AyncResourceInitializationController } from "../../common/hoc"
import { TasksPicker } from "./TasksPicker";

type TasksProps = {
    tasksResource: AsyncResource<Identity<Task>[]>
		onTaskCreate: (task: Task) => Promise<Identity<Task>>
} & StyleProps; 

export const Tasks = ({ tasksResource, ...styleProps }: TasksProps) => {
	return (
			<AyncResourceInitializationController
				resources={ [tasksResource] }
				renderInitializationState={ () => (
					<Stack spacing={ 50 } { ...styleProps }>
						<Heading alignSelf='center'>
							Loading Tasks ...
						</Heading>
						<Spinner 
							alignSelf='center' 
							size='xl'
						/>
					</Stack>
				) }
				renderInitializationFailureState={ () => (
					<Stack { ...styleProps }>
						<Heading alignSelf='center'>
							Failed to load tasks
						</Heading>
					</Stack>
				) }
				renderInitializedState={ () => (
					<TasksPicker 
						tasks={ tasksResource.value || [] } 
						{ ...styleProps }
					/>
				) }
			/>
	);
}