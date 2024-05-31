import { Center, Modal, ModalCloseButton, ModalContent } from "@chakra-ui/react"
import { Identity, Task } from "../../common/types"
import { NewTaskForm } from "./NewTaskModalForm"

type NewTaskModalProps = {
  isOpen: boolean,
  onClose: () => void
  onTaskCreate: (task: Task) => Promise<Identity<Task>>
}

export const NewTaskModal = ({ isOpen, onClose, onTaskCreate }: NewTaskModalProps) => {
  return (
    <Modal isOpen={ isOpen } onClose={ onClose } size='full'>
      <ModalContent h="100%">
        <ModalCloseButton />
        <Center h="100%">  
          <NewTaskForm onTaskCreate={ onTaskCreate } spacing={ 25 }/>
        </Center>
      </ModalContent>
    </Modal>  
  )
}