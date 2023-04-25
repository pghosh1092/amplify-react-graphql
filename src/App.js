import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import {
  onCreateNote as createNoteSub,
  onDeleteNote as deleteNoteSub
} from './graphql/subscriptions';


const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);
  const stateRef = useRef(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(()=> {
    stateRef.current = notes;
  }, [notes])

  useEffect(() => {
    // Subscribe to creation of Todo
    const createNoteSubscription = API.graphql(
      graphqlOperation(createNoteSub)
     ).subscribe({
        next: ({provider, value }) => {
          const response = value.data.onCreateNote;
          const tempNotes = stateRef.current;
          tempNotes.push(response);
          setNotes([...tempNotes]);
        },
        error: (error) => console.warn(error)
     })

     const deleteNoteSubscription = API.graphql(
      graphqlOperation(deleteNoteSub)
     ).subscribe({
        next: ({provider, value }) => {
          console.log(value.data)
          const response = value.data.onDeleteNote;
          const newNotes = stateRef.current.filter((note) => note.id !== response.id);
          setNotes(newNotes);
        },
        error: (error) => console.warn(error)
     })

       return () => {
         // Stop receiving data updates from the subscription
         createNoteSubscription.unsubscribe()
         deleteNoteSubscription.unsubscribe()
       }
  }, [])

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    event.target.reset();
  }

  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);