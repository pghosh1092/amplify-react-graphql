/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWhiteboard = /* GraphQL */ `
  subscription OnCreateWhiteboard($id: Int) {
    onCreateWhiteboard(id: $id) {
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
export const onUpdateWhiteboard = /* GraphQL */ `
  subscription OnUpdateWhiteboard($id: Int) {
    onUpdateWhiteboard(id: $id) {
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
export const onDeleteWhiteboard = /* GraphQL */ `
  subscription OnDeleteWhiteboard($id: Int) {
    onDeleteWhiteboard(id: $id) {
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
