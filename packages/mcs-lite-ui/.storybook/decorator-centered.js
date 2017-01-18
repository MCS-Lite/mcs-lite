import React from 'react';
import styled from 'styled-components';

const Center = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function (renderStory) {
  return (
    <Center>
      {renderStory()}
    </Center>
  );
}
