import { Center, Flex, Heading, IconButton, Stack, StyleProps, Text } from "@chakra-ui/react"
import { Identity, Task } from "../../common/types"
import { Button } from "../../common/components"
import { AddIcon, QuestionOutlineIcon } from "@chakra-ui/icons"

type TasksHomeMenuProps = {
  tasks: Identity<Task>[]
} & StyleProps

export const TasksHomeMenu = ({ tasks, ...styleProps }: TasksHomeMenuProps) => {
  const smallTasks = tasks.filter(({ size }) => size === 'small');
  const mediumTasks = tasks.filter(({ size }) => size === 'medium');
  const largeTasks = tasks.filter(({ size }) => size === 'large');



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
            <Button size="lg" variant="outline" rightIcon={ <AddIcon /> } mb="1em">
              Add Tasks
            </Button>
          </Stack>
        ) 
      }
      {
        tasks.length > 0 && (
          <Flex height='inherit' direction="column">
            <Stack alignSelf='center' textAlign='center' spacing={ 5 } pt="2.5em">
              <Heading>
                You have { tasks.length } Tasks
              </Heading>
              <Button size="lg" variant="outline" rightIcon={ <AddIcon /> } mb="1em">
                Add New Tasks
              </Button>
            </Stack>
            <Center flexGrow={ 1 }>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={ 4 }
                align="center"
                justify="space-evenly"
                height={ 300 }
                width={["100%", 600]}
              >
                <Button 
                  size="lg"
                  width={["95%", 200]}
                  isDisabled={ smallTasks.length === 0 }
                >
                  Small Tasks ({ smallTasks.length })
                </Button>
                <Button 
                  size="lg"
                  width={["95%", 200]}
                  isDisabled={ mediumTasks.length === 0 }
                >
                  Medium Tasks ({ mediumTasks.length })
                </Button>
                <Button 
                  size="lg"
                  width={["95%", 200]}
                  isDisabled={ largeTasks.length === 0 }
                >
                  Large Tasks ({ largeTasks.length })
                </Button>
              </Stack>
            </Center>
            <Center height={ 100 }>
              <IconButton size='lg' icon={ <QuestionOutlineIcon /> } aria-label="help" mb="1em" />
            </Center>
          </Flex>
        )
      }
    </Stack>
  );
}