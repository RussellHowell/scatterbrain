import { Flex, Heading, Spinner, Stack } from "@chakra-ui/react"
import { Identity, AsyncResource, Task } from "../../common/types"
import { AyncResourceInitializationController } from "../../common/hoc"

type HomeProps = {
    tasksResource: AsyncResource<Identity<Task>[]>
}

export const Home = ({ tasksResource }: HomeProps) => {
	return (
		<Flex>
			<AyncResourceInitializationController
				resources={ [tasksResource] }
				renderInitializationState={ () => (
					<Stack spacing={ 50 }>
						<Heading>
							Loading Tasks ...
						</Heading>
						<Spinner 
							size='xl'
						/>
					</Stack>
				) }
				renderInitializationFailureState={ () => (
					<Stack>
						<Heading>
							Failed to load tasks
						</Heading>
					</Stack>
				) }
				renderInitializedState={ () => (
					<Stack>
						<Heading>
							Tasks Loaded :)
						</Heading>
					</Stack>
				) }

			/>
		</Flex>
	);
}