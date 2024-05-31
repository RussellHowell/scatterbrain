import { Meta, StoryObj } from "@storybook/react";
import { Home } from "./TasksHome";
import { AsyncResourceStatus } from "../../common/types";
import { Box } from "@chakra-ui/layout";

const meta: Meta<{
    tasksResourceInitialized: boolean
    tasksResourceStatus: AsyncResourceStatus
}> = {
    title: 'Component Trees/Tasks Home',
    parameters: { layout: 'fullscreen' },
    args: {
        tasksResourceInitialized: false,
        tasksResourceStatus: 'idle'
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
    render: ({ tasksResourceInitialized, tasksResourceStatus }) => {
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
                        value: [],
                        error: (!tasksResourceInitialized && tasksResourceStatus === 'idle') ? { code: 500, message: "Internal Server Error" } : undefined
                    } } 
                />
            </Box>
        )
    }
}

export default meta;


export const Story: StoryObj = {}; 