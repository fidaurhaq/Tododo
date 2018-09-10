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
