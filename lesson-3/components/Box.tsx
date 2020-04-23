import React from 'react';

const styles = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#eeeeee',
  width: '128px',
  height: '128px',
  cursor: 'move'
};

export const Box = () => (
  <div style={styles}>grab me</div>
);
