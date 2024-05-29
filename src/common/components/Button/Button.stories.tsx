import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<{}> = {
    title: 'components/Button',
    render: () => {
        return (
            <Button onClick={ () => alert('clicked')}>
                Click Me!
            </Button>
        );
    }
}

export default meta;

export const ButtonStory: StoryObj = {}