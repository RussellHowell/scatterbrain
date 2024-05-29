import { Button as ChakraButton, ButtonProps as ChakraButtonProps, } from '@chakra-ui/react'

type ButtonProps = ChakraButtonProps;

export const Button = ({ ...props }: ButtonProps) => {
    return (
        <ChakraButton  { ...props }/>
    )
}