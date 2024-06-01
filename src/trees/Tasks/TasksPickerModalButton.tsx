import { ButtonProps, Center, Modal, ModalCloseButton, ModalContent, useDisclosure } from "@chakra-ui/react"
import { Identity, Task } from "../../common/types"
import { Button } from "../../common/components"
import { MouseEventHandler, useState } from "react"

type TasksPickerModalButtonProps = {
  tasks: Identity<Task>[]
} & ButtonProps

export const TasksPickerModalButton = ({ tasks, onClick, ...buttonProps }: TasksPickerModalButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stagedTask, setStagedTask] = useState<Identity<Task> | undefined>();
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    !!onClick && onClick(e);
    setStagedTask(tasks[Math.floor(Math.random() * tasks.length)]);
    onOpen();
  }

  return (
    <>
      <Button onClick={ handleClick } { ...buttonProps }  />
      <Modal isOpen={ isOpen } onClose={ onClose }>
        <ModalContent>
          <ModalCloseButton />
          <Center>
            { stagedTask?.content }
          </Center>
        </ModalContent>
      </Modal>
    </>
  )
}