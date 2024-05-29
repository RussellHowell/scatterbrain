import { Meta, StoryObj } from "@storybook/react";
import { Home } from "./TasksHome";
import { AsyncResourceStatus } from "../../common/types";

const meta: Meta<{
    tasksResourceInitialized: boolean
    tasksResourceStatus: AsyncResourceStatus
}> = {
    title: 'Component Trees/Tasks Home',
    render: () => {
        return (
            <Home tasksResource={ { status: 'syncing', initialized: false } } />
        )
    }
}

export default meta;


export const Story: StoryObj = {}; 