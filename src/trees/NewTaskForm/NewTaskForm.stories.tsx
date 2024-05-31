import { Meta, StoryObj } from "@storybook/react";
import { NewTaskForm } from "./NewTaskForm";
import { Center } from "@chakra-ui/react";

const meta: Meta = {
  title: 'Component Trees/New Task Form',
  render: () => {
    return (
      <Center>
        <NewTaskForm spacing={ 30 } alignItems='center' onTaskCreate={ () => new Promise((r) => {})}/>
      </Center>
    )
  } 
}

export default meta;

export const NewTaskFormStory: StoryObj = {};