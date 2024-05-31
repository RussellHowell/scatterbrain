import { Button, Radio, RadioGroup, Stack, StackProps, Textarea } from "@chakra-ui/react";
import { Controller, Form, useForm } from "react-hook-form";
import { Identity, Task, TaskSize } from "../../common/types";
import { useState } from "react";

type NewTaskFormProps = {
  onTaskCreate: (task: Task) => Promise<Identity<Task>>
} & StackProps;

export const NewTaskForm = ({ onTaskCreate, ...styleProps }: NewTaskFormProps) => {
  const { control, formState: { isValid }, getValues } = useForm<Task>();

  const [submitState, setSubmitState] = useState<'idle' | 'submitting'>('idle');
  const handleSubmit = async () => {
    setSubmitState('submitting')
    const response = await onTaskCreate(getValues());
    setSubmitState('idle');
    alert(response.id);
  }

  return (
    <Stack { ...styleProps }>
      <Controller
        name="content"
        rules={{ required: true }}
        control={ control }
        render={ ({ field }) => (
          <Textarea 
            size="lg"
            placeholder="What do you have to do?"
            variant="unstyled"
            { ...field }
            />
        ) }
      />
      <Controller 
        name="size"
        rules={{ required: true }}
        control={ control }
        render={ ({ field }) => (
          <RadioGroup { ...field }>
            <Stack direction='row'>
              {
                (['small', 'medium', 'large'] satisfies TaskSize[]).map(size => (
                  <Radio key={ size } value={ size } size='lg'>{ size }</Radio>
                ))
              }
            </Stack>
          </RadioGroup>
        )} 
      />
      <Button
        onClick={ handleSubmit }
        isLoading={ submitState === 'submitting'} 
        isDisabled={ !isValid }
        variant='outline'>
          Add Task
      </Button>
    </Stack>
  )
}