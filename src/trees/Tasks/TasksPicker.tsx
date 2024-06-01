import { Center, Flex, Heading, IconButton, Stack, StyleProps, Text, useDisclosure } from "@chakra-ui/react"
import { Identity, Task, TaskSize } from "../../common/types"
import { Button } from "../../common/components"
import { AddIcon, QuestionOutlineIcon } from "@chakra-ui/icons"
import { NewTaskModal } from "../NewTaskModal/NewTaskModal"
import { TasksPickerModalButton } from "./TasksPickerModalButton"

type TasksPickerProps = {
  tasks: Identity<Task>[]
  onTaskCreate: (task: Task) => Promise<Identity<Task>>
} & StyleProps

export const TasksPicker = ({ tasks, onTaskCreate, ...styleProps }: TasksPickerProps) => {

  const { 
    isOpen: newTaskModalOpen, 
    onOpen: onNewTaskModalOpen, 
    onClose: onNewTaskModalClose 
} = useDisclosure();

  const tasksBySize: { [key in TaskSize]: Identity<Task>[] }  = tasks.reduce((accum, task) => ({
    ...accum,
    [task.size]: [...accum[task.size], task]
  }), { small: [], medium: [], large: []})

  return (
    <>
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
              <Button 
                mb="1em"
                size="lg" 
                variant="outline" 
                rightIcon={ <AddIcon /> }
                onClick={ onNewTaskModalOpen }>
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
                <Button onClick={ onNewTaskModalOpen } size="lg" variant="outline" rightIcon={ <AddIcon /> } mb="1em">
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
                  { 
                    Object.entries(tasksBySize).map(([taskSize, taskArray]) => (
                      <TasksPickerModalButton 
                        size="lg"
                        key={ taskSize } 
                        tasks={ taskArray }
                        width={["95%", 200]}
                        isDisabled={ taskArray.length === 0 }
                        >
                        { taskSize } ({ taskArray.length })
                      </TasksPickerModalButton>
                    )) 
                  }
                </Stack>
              </Center>
              <Center height={ 100 }>
                <IconButton size='lg' icon={ <QuestionOutlineIcon /> } aria-label="help" mb="1em" />
              </Center>
            </Flex>
          )
        }
      </Stack>
      <NewTaskModal isOpen={ newTaskModalOpen } onClose={ onNewTaskModalClose } onTaskCreate={ onTaskCreate } />
    </>
  );
}