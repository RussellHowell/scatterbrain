import { Center, Flex, Heading, Stack, Tag, Text } from "@chakra-ui/react"
import { Identity, Task } from "../../../common/types"
import * as _ from 'lodash';
import { Button } from "../../../common/components";

type ActiveTaskProps = {
  activeTask: Identity<Task>
}

export const ActiveTask = ({ activeTask }: ActiveTaskProps) => {
  return (
    <Flex height='inherit' direction="column">
      <Stack spacing={ 25 }>
        <Heading textAlign='center'>
          Active Task:
        </Heading>
        <Center>
          <Stack align='center' spacing={ 15 }>
            <Text>  
              { activeTask.description }
            </Text>
            <Tag size='lg'>
              { _.startCase(activeTask.size)}
            </Tag>
            <Button mt={ 33 } >
              Mark Completed
            </Button>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={ 4 }
              align="center"
              justify="center"
              width={["100%", 600]}>
                <Button>
                  Abandon Task
                </Button>
                <Button>
                  Add Tasks
                </Button>
            </Stack>
          </Stack>
        </Center>
      </Stack>
    </Flex>
  )
}