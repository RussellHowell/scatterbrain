import { Meta, StoryObj } from "@storybook/react";
import { Home } from "./TasksHome";
import { AsyncResourceStatus, Identity, Task } from "../../common/types";
import { Box } from "@chakra-ui/layout";

const meta: Meta<{
    tasksResourceInitialized: boolean
    tasksResourceStatus: AsyncResourceStatus
    hasSmallTasks: boolean
}> = {
    title: 'Component Trees/Tasks Home',
    parameters: { layout: 'fullscreen' },
    args: {
        tasksResourceInitialized: false,
        tasksResourceStatus: 'idle',
        hasSmallTasks: false
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
    render: ({ tasksResourceInitialized, tasksResourceStatus, hasSmallTasks }) => {
        const smallTasks: Identity<Task>[] = hasSmallTasks ? [
            { content: 'Do this small thing', size: 'small', id: 'small-1' },
            { content: 'Do this small thing, but with a lot of text, honestly so much text it is insane', size: 'small', id: 'small-1' }
        ] : []

        const tasks = [...smallTasks];

        return (
            <Box height='100vh' width='100vw'>
                <Home 
                    h='inherit'
                    w='inherit'
                    justifyContent='center'
                    p={ 10 }
                    tasksResource={ { 
                        status: tasksResourceStatus, 
                        initialized: tasksResourceInitialized, 
                        value: tasksResourceInitialized ? tasks : undefined,
                        error: (!tasksResourceInitialized && tasksResourceStatus === 'idle') ? { code: 500, message: "Internal Server Error" } : undefined
                    } } 
                />
            </Box>
        )
    }
}

export default meta;


export const Story: StoryObj = {}; 