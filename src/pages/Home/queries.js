import { gql } from '@apollo/client';

export const QUESTIONS_QUERY = gql`
  subscription Questions {
    questions(order_by: {created_at: desc}) {
      id
      text
    }
  }
`;
