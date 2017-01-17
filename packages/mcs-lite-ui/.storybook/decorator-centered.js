import React from 'react';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'center'
  }
});

export default function (renderStory) {
  return (
    <div style={[ StyleSheet.absoluteFill, styles.root ]}>
      {renderStory()}
    </div>
  );
}