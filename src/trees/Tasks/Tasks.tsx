import { Heading, Spinner, Stack, StyleProps } from "@chakra-ui/react"
import { Identity, AsyncResource, Task } from "../../common/types"
import { AyncResourceInitializationController } from "../../common/hoc"
import { TasksHomeMenu } from "../TasksHomeMenu/TasksHomeMenu";

type HomeProps = {
    tasksResource: AsyncResource<Identity<Task>[]>
} & StyleProps; 

export const Home = ({ tasksResource, ...styleProps }: HomeProps) => {
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
					<TasksHomeMenu 
						tasks={ tasksResource.value || [] } 
						{ ...styleProps }
					/>
				) }
			/>
	);
}