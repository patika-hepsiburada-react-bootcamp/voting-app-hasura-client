import { gql } from '@apollo/client';

export const QUESTION_DETAIL_SUBSCRIPTION = gql`
  subscription QuestionsById($id: Int!) {
    questions_by_pk(id: $id) {
      id
      text
      options {
        id
        text
        votes_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`;

export const NEW_VOTE_MUTATION = gql`
  mutation NewVote($option_id: Int!) {
    insert_votes_one(object: { option_id: $option_id }) {
      id
    }
  }
`;
