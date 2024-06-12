import { Identity } from "../../../common/types"

type ActiveTaskProps = {
  activeTask: Identity<Task>
}

export const ActiveTask = ({ activeTask }: ActiveTaskProps) => {
  return <div>hi</div>
}