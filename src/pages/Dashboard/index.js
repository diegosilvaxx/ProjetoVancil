import React from 'react';
import store from '~/store';

export default function Dashboard() {
  const { nomeVendedor } = store.getState().auth;
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '20pt' }}>Seja bem vindo {nomeVendedor}</h1>
        </div>
      </div>
    </>
  );
}
