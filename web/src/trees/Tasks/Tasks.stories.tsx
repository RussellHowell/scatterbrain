import { Meta, StoryObj } from "@storybook/react";
import { Tasks } from "./Tasks";
import { AsyncResourceStatus, Identity, Task } from "../../common/types";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";

const meta: Meta<{
    tasksResourceInitialized: boolean
    tasksResourceStatus: AsyncResourceStatus
    tasks: Identity<Task>[]
}> = {
    parameters: { layout: 'fullscreen' },
    args: {
        tasksResourceInitialized: false,
        tasksResourceStatus: 'idle',
        tasks: []
    },
    argTypes: {
        tasksResourceInitialized: {
            control: 'boolean'
        },
        tasksResourceStatus: {
            control: 'select',
            options: ['idle', 'syncing'] satisfies AsyncResourceStatus[]
        }
    },
    render: ({ tasksResourceInitialized, tasksResourceStatus, tasks }) => {
        
        const [nextTaskID, setNextTaskID] = useState(0);
        const [tasksState, setTasksState] = useState(tasks);

        const handleCreateTask = async (task: Task) => {
            return new Promise<Identity<Task>>((resolve) => {
                setTimeout(() => {
                    const newTask: Identity<Task> = { ...task, id: nextTaskID.toString() }
                    setNextTaskID(currentTaskID => {
                        setTasksState(currentTasksState => {
                            return [...currentTasksState, newTask]
                         })
                         return currentTaskID+1;
                    });
                    resolve(newTask);
                }, 1000)
            })
        }

        return (
            <Box height='100vh' width='100vw'>
                <Tasks 
                    h='inherit'
                    w='inherit'
                    justifyContent='center'
                    p={ 10 }
                    onTaskCreate={ handleCreateTask }
                    tasksResource={ { 
                        status: tasksResourceStatus, 
                        initialized: tasksResourceInitialized, 
                        value: tasksResourceInitialized ? tasksState : undefined,
                        error: (!tasksResourceInitialized && tasksResourceStatus === 'idle') ? { code: 500, message: "Internal Server Error" } : undefined
                    } } 
                />
            </Box>
        )
    }
}

export default meta;


export const Story: StoryObj = {
    args: {
        tasksResourceInitialized: true
    }
}; 