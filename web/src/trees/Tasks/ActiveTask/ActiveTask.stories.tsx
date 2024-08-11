import { Meta, StoryObj } from "@storybook/react";
import { ActiveTask } from "./ActiveTask";

const meta: Meta<never> = {
  render: () => {
    return (
      <ActiveTask
        activeTask={{ id: '1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque.', size: 'medium' }}
      />
    );
  }
}

export default meta;

export const Story: StoryObj = {};