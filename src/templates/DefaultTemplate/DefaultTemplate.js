import React from 'react';

const DefaultTemplate = ({ header, content, footer }) => {
  return (
    <main>
      <header> {header} </header>

      <div className="mui--appbar-height" />

      <section id="content-wrapper">{content}</section>

      <footer>{footer}</footer>
    </main>
  );
};

export default DefaultTemplate;
