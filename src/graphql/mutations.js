/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createWhiteboard = /* GraphQL */ `
  mutation CreateWhiteboard($input: CreateWhiteboardInput!) {
    createWhiteboard(input: $input) {
      id
      content
      context_data
      app_created_by
      app_last_updated_by
      created_at
      external_share_enabled
      external_share_hash
      name
      product_type
      tenant_id_str
      updated_at
    }
  }
`;
export const updateWhiteboard = /* GraphQL */ `
  mutation UpdateWhiteboard($input: UpdateWhiteboardInput!) {
    updateWhiteboard(input: $input) {
      id
      content
      context_data
      app_created_by
      app_last_updated_by
      created_at
      external_share_enabled
      external_share_hash
      name
      product_type
      tenant_id_str
      updated_at
    }
  }
`;
export const deleteWhiteboard = /* GraphQL */ `
  mutation DeleteWhiteboard($input: DeleteWhiteboardInput!) {
    deleteWhiteboard(input: $input) {
      id
      content
      context_data
      app_created_by
      app_last_updated_by
      created_at
      external_share_enabled
      external_share_hash
      name
      product_type
      tenant_id_str
      updated_at
    }
  }
`;
