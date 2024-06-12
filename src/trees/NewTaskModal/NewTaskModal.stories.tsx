import { Meta, StoryObj } from "@storybook/react";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "../../common/components";
import { NewTaskModal } from "./NewTaskModal";
import { Identity, Task } from "../../common/types";

const meta: Meta = {
  render: () => {

    const disclosure = useDisclosure();

    const handleTaskCreate = async () => {
      return new Promise<Identity<Task>>((resolve) => {
        setTimeout(() => {
          resolve({ id: "123", content: "foo", size: "medium" })
        }, 2000)
      })
    }

    return (
      <>
        <Button onClick={ disclosure.onOpen }>
          Open Dialog
        </Button>
        <NewTaskModal
          { ...disclosure }
          onTaskCreate={ handleTaskCreate }
        />
      </>
    )
  } 
}

export default meta;

export const Story: StoryObj = {};