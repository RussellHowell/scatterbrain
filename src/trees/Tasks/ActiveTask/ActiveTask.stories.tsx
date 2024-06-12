import { Meta, StoryObj } from "@storybook/react";
import { ActiveTask } from "./ActiveTask";

const meta: Meta<{}> = {
  render: () => {
    return (
      <ActiveTask
        activeTask={{ id: '1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque.', size: 'medium' }}
      />
    );
  }
}

export default meta;

export const Story: StoryObj = {};