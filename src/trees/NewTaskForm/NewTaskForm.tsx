import { Button, Radio, RadioGroup, Stack, StackProps, Textarea } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { Task, TaskSize } from "../../common/types";

type NewTaskFormProps = StackProps;

export const NewTaskForm = ({ ...styleProps }: NewTaskFormProps) => {
  const { control, formState: { isValid } } = useForm<Task>();

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
        isDisabled={ !isValid }
        variant='outline'>
          Add Task
      </Button>
    </Stack>
  )
}