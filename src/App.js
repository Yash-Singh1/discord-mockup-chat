import { Navbar, Container, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './App.scss';
import Message from './Message';
import postMessage from './actions';
import React, { useEffect, useState } from 'react';
import postingProcess from './postingProcess';

async function wait(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function processPosts(dispatch, ban, run, el) {
  run(true);
  for (const line of postingProcess
    .trim()
    .split('\n')
    .map((line) => line.trim())) {
    if (line.startsWith('bully') || line.startsWith('nerd')) {
      const text = line.split(':').slice(1).join(':');
      dispatch(
        postMessage({
          ...(text.trim().startsWith('img')
            ? {
                image: text.trim().split(' ').slice(1).join(' ').trim(),
                width: text.trim().slice(3).split('x')[0],
                height: text.trim().slice(3).split('x')[1].split(' ')[0],
              }
            : { text }),
          author: 'yash ' + line.split(':')[0],
        })
      );
    } else if (line === '/ban') {
      el.value = '';
      dispatch(postMessage({ text: line, author: 'yash bully' }));
      ban(true);
    } else if (line.startsWith('wait')) {
      await wait(parseFloat(line.slice(4).trim()));
    }
  }
}

function App() {
  const [isBanned, ban] = useState(false);
  const [ran, run] = useState(false);
  const messages = useSelector((state) => state.messages);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messages]);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand to="/home" as={Link} id="navbar-brand">
<<<<<<< HEAD
            <img src="/847541504914fd33810e70a0ea73177e.ico" id="brand" alt="logo" /> Discord
=======
            <img src="/847541504914fd33810e70a0ea73177e.ico" id="brand" alt="brand" /> Discord
>>>>>>> chore: migrate to scss and a11y
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div id="chat-container">
        <div>
          <Container>
            {messages.map((message, index) => (
              <Message key={index} {...message} />
            ))}
          </Container>
        </div>
      </div>
      <FormControl
        placeholder={isBanned ? '🔒 You are banned :)' : 'Send a message...'}
        className="bg-dark border-0 text-white"
        id="send"
        readOnly={isBanned}
        onKeyPress={
          isBanned
            ? () => {}
            : (event) => {
                if (event.key === 'Enter' && event.target.value !== '') {
                  const postValue = String(event.target.value);
                  event.target.value = '';
                  dispatch(postMessage({ text: postValue, author: 'me' }));
                  if (!ran) processPosts(dispatch, ban, run, event.target);
                }
              }
        }
      />
    </>
  );
}

export default App;
