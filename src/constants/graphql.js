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

export const UPDATE_TODO_MUTATION = gql`
  mutation UpdateTodoMutation($id: ID!, $label: String, $doneStatus: Boolean!) {
    updateTodo(id: $id, label: $label, doneStatus: $doneStatus) {
      id
      doneStatus
    }
  }
`;

export const DELETE_TODO_MUTATION = gql`
  mutation DeleteTodoMutation($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;
