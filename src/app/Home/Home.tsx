import { Identity, ServerResource, Task } from "../../common/types"

type HomeProps = {
    tasksResource: ServerResource<Identity<Task>[]>
}

export const Home = ({}: HomeProps) => {
    return (
        <div>
            home
        </div>
    )
}