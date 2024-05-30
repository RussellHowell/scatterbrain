import { Meta, StoryObj } from "@storybook/react";
import { Home } from "./TasksHome";
import { AsyncResourceStatus } from "../../common/types";

const meta: Meta<{
    tasksResourceInitialized: boolean
    tasksResourceStatus: AsyncResourceStatus
}> = {
    title: 'Component Trees/Tasks Home',
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
            <Home tasksResource={ { 
                status: tasksResourceStatus, 
                initialized: tasksResourceInitialized, 
                value: [],
                error: (!tasksResourceInitialized && tasksResourceStatus === 'idle') ? { code: 500, message: "Internal Server Error" } : undefined
            } } />
        )
    }
}

export default meta;


export const Story: StoryObj = {}; 