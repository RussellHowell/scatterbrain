import { Identity, AsyncResource, Task } from "../../common/types"

type HomeProps = {
    tasksResource: AsyncResource<Identity<Task>[]>
}

export const Home = ({}: HomeProps) => {
    return (
        <div>
            home
        </div>
    )
}