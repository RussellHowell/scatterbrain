import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { TasksPickerModalButton } from "./TasksPickerModalButton";

const meta: Meta<ComponentProps<typeof TasksPickerModalButton>> = {
  args: {
    children: "Open Modal",
    tasks: [
      { id: '1', size: 'medium', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
      { id: '2', size: 'medium', description: "Get passport photo taken" }
    ]
  },
  render: (args) => (
    <TasksPickerModalButton { ...args } />
  )
}

export default meta;

export const Story: StoryObj = {};