import { gql } from '@apollo/client';

export const NEW_QUESTION = gql`
  mutation MyMutation($text: String, $data: [options_insert_input!]!) {
    insert_questions_one(object: { text: $text, options: { data: $data } }) {
      id
      text
    }
  }
`;
