import { Meta, StoryObj } from "@storybook/react";
import { Home } from "./Home";

const meta: Meta<{}> = {
    title: 'Tasks/Home',
    render: () => {
        return (
            <Home tasksResource={ { status: 'idle', initialized: false } } />
        )
    }
}

export default meta;


export const Story: StoryObj = {}; 