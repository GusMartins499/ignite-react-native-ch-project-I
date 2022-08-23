import { FlatList } from "react-native"
import { EmptyList } from "./Empty"
import { Item } from "./Item"

type Todo = {
  todo: string
  done: boolean
}

interface IListProps {
  todos: Todo[]
  callback: (todo: Todo) => void
  deleteTodo: (todo: Todo) => void
}

export function List({ todos, callback, deleteTodo }: IListProps) {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.todo}
      renderItem={({ item }) => (
        <Item
          key={item.todo}
          todo={item.todo}
          done={item.done}
          onDone={() => callback(item)}
          onDelete={() => deleteTodo(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <EmptyList />}
    />
  )
}