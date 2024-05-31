import { Box, Heading, Stack, StyleProps, Text } from "@chakra-ui/react"
import { Identity, Task } from "../../common/types"
import { Button } from "../../common/components"

type TasksHomeMenuProps = {
  tasks: Identity<Task>[]
} & StyleProps

export const TasksHomeMenu = ({ tasks, ...styleProps }: TasksHomeMenuProps) => {
  return (
    <Stack { ...styleProps }>
      { 
        tasks.length === 0 && (
        <Stack alignSelf='center' spacing={ 3 }>
          <Heading>
            No tasks...yet
          </Heading>
          <Text>
            Get started by adding some tasks
          </Text>
          <Button>
            Add Tasks
          </Button>
        </Stack>
        ) 
      }
    </Stack>
  );
}