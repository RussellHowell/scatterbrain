import { Flex, Heading, Spinner, Stack } from "@chakra-ui/react"
import { Identity, AsyncResource, Task } from "../../common/types"

type HomeProps = {
    tasksResource: AsyncResource<Identity<Task>[]>
}

export const Home = ({ tasksResource }: HomeProps) => {
    return (
        <Flex>
            { 
                !tasksResource.initialized && tasksResource.status === 'syncing' && (
                    <Stack spacing={ 50 }>
                        <Heading>
                            Loading Tasks ...
                        </Heading>
                        <Spinner 
                            size='xl'
                        />
                    </Stack>
                ) 
            }
        </Flex>
    )
}