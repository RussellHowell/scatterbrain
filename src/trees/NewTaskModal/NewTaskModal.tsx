import { Center, Modal, ModalCloseButton, ModalContent, useBoolean } from "@chakra-ui/react"
import { Identity, Task } from "../../common/types"
import { NewTaskForm } from "./NewTaskModalForm"

type NewTaskModalProps = {
  isOpen: boolean,
  onClose: () => void
  onTaskCreate: (task: Task) => Promise<Identity<Task>>
}

export const NewTaskModal = ({ isOpen, onClose, onTaskCreate }: NewTaskModalProps) => {
  const [requestInProgress, setRequestInProgress] = useBoolean();
  const handleTaskCreate = async (task: Task) => {
    setRequestInProgress.on()
    const response = await onTaskCreate(task)
    setRequestInProgress.off();
    return response;
  }
  const handleClose = () => {
    if(requestInProgress) return;
    onClose();
  }
  return (
    <Modal isOpen={ isOpen } onClose={ handleClose } size='full'>
      <ModalContent h="100%">
        <ModalCloseButton />
        <Center h="100%">  
          <NewTaskForm onTaskCreate={ handleTaskCreate } spacing={ 25 }/>
        </Center>
      </ModalContent>
    </Modal>  
  )
}