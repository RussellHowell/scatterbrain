import { Heading, Radio, RadioGroup, Stack, StackProps, Textarea } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { Identity, Task, TaskSize } from "../../common/types";
import { useState } from "react";
import { AnimatePresence, MotionProps, motion } from "framer-motion";
import { Button } from '../../common/components';
import { AddIcon } from "@chakra-ui/icons";

type NewTaskFormProps = {
  onTaskCreate: (task: Task) => Promise<Identity<Task>>
} & StackProps;

export const NewTaskForm = ({ onTaskCreate, ...styleProps }: NewTaskFormProps) => {
  const { control, formState: { isValid }, getValues, reset } = useForm<Task>();

  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'complete'>('idle');
  const handleSubmit = async () => {
    setSubmitState('submitting')
    await onTaskCreate(getValues());
    setSubmitState('complete');
    // todo handle errors
  }

  const handleFormReset = () => {
    setSubmitState('idle');
    reset(undefined);
  }

  const motionProps: MotionProps = {
    initial: { opacity: 0,  },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
} 

  return (
    <Stack { ...styleProps }>
      <AnimatePresence mode="wait">
        {
          submitState !== 'complete' && (
            <>
              <Controller
                name="content"
                rules={{ required: true }}
                control={ control }
                render={ ({ field }) => (
                  <motion.div { ...motionProps }>
                    <Textarea 
                      size="lg"
                      placeholder="What do you have to do?"
                      variant="unstyled"
                      { ...field }
                      />
                  </motion.div>
                ) }
              />
              <Controller 
                name="size"
                rules={{ required: true }}
                control={ control }
                render={ ({ field }) => (
                  <motion.div { ...motionProps }>
                    <RadioGroup { ...field }>
                      <Stack direction='row'>
                        {
                          (['small', 'medium', 'large'] satisfies TaskSize[]).map(size => (
                            <Radio key={ size } value={ size } size='lg'>{ size }</Radio>
                          ))
                        }
                      </Stack>
                    </RadioGroup>
                  </motion.div>
                )} 
              />
              <motion.div { ...motionProps }>
                <Button
                  w="100%"
                  onClick={ handleSubmit }
                  isLoading={ submitState === 'submitting'} 
                  isDisabled={ !isValid }
                  variant='outline'>
                    Add Task
                </Button>
              </motion.div>
            </>
          )
        }
        {
          submitState === 'complete' && (
            <>
              <motion.div { ...motionProps }>
                <Heading>
                  Task Created :) 
                </Heading>
              </motion.div>
              <motion.div { ...motionProps }>
                <Button
                  w="100%"
                  rightIcon={ <AddIcon /> }
                  onClick={ handleFormReset }
                >
                  Create Another
                </Button>
              </motion.div>
            </>
          )
        }
      </AnimatePresence>
    </Stack>
  )
}