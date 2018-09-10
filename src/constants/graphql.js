import gql from "graphql-tag";

export const ALL_TODOES_QUERY = gql`
  query AllTodoesQuery {
    allTodoes {
      id
      label
      doneStatus
    }
  }
`;

export const CREATE_TODO_MUTATION = gql`
  mutation CreateTodoMutation($label: String!, $doneStatus: Boolean = false) {
    createTodo(label: $label, doneStatus: $doneStatus) {
      id
    }
  }
`;
