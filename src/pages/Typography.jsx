import React from 'react';
import { Link } from 'react-router-dom';  
import './Typography.css';

const Typography = () => {
  return (
    <>
 
      <section className="typo-hero">
        <div className="typo-hero-bg"></div>
        <div className="typo-hero-content">
          <h1 className="typo-hero-title">Typography</h1>

          <div className="typo-hero-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Typography</span>
          </div>
        </div>
      </section>

      <section className="typo-content">
        <div className="typo-container">

          <div className="typo-headings-grid">

            <div className="typo-headings-left">
              <div className="typo-block">
                <h1 className="demo-h1">H1 Heading</h1>
                <p className="demo-text">
                  Welcome to our wonderful world. We sincerely hope that each and every
                  user entering our website will find exactly what he/she is looking for.
                  With advanced features of activating account and new login widgets,
                  you will definitely have a great experience of using our web page.
                </p>
              </div>

              <div className="typo-block">
                <h2 className="demo-h2">H2 Heading</h2>
                <p className="demo-text">
                  Welcome to our wonderful world. We sincerely hope that each and every
                  user entering our website will find exactly what he/she is looking for.
                  With advanced features of activating account and new login widgets,
                  you will definitely have a great experience of using our web page.
                </p>
              </div>

              <div className="typo-block">
                <h3 className="demo-h3">H3 Heading</h3>
                <p className="demo-text">
                  Welcome to our wonderful world. We sincerely hope that each and every
                  user entering our website will find exactly what he/she is looking for.
                  With advanced features of activating account and new login widgets,
                  you will definitely have a great experience of using our web page.
                </p>
              </div>
            </div>

            <div className="typo-headings-right">
              <h1 className="demo-h1 no-margin">H1 Heading</h1>
              <h2 className="demo-h2 no-margin">H2 Heading</h2>
              <h3 className="demo-h3 no-margin">H3 Heading</h3>
              <h4 className="demo-h4 no-margin">H4 Heading</h4>
              <h5 className="demo-h5 no-margin">H5 Heading</h5>
              <h6 className="demo-h6 no-margin">H6 Heading</h6>
            </div>

          </div>

          <div className="typo-block">
            <h2 className="demo-h2">HTML Text Elements</h2>
            <p className="demo-text">
              Welcome to our wonderful world. This is a <strong>bold text</strong>.{' '}
              <span className="demo-highlight">This is a highlighted text</span>. We
              sincerely hope that each and every user entering our website will find
              exactly what he/she is looking for. With advanced features of activating
              account and new login <span className="demo-tooltip">Tooltips</span>{' '}
              widgets, you will definitely have a great experience of using our web
              page. <span className="demo-strike">This is a strikethrough text</span>.
              This is an <span className="demo-underline">underlined text</span>.{' '}
              <a href="#link" className="demo-link">Link</a>{' '}
              <a href="#hover" className="demo-link">Hover link</a>{' '}
              <a href="#press" className="demo-link">Press link</a>
            </p>
          </div>

          <div className="typo-two-col">

            <div className="typo-block">
              <h2 className="demo-h2">Ordered &amp; Unordered Lists</h2>

              <div className="list-wrapper">
                <ul className="demo-list unordered">
                  <li>Consulting</li>
                  <li>Customer Service</li>
                  <li>Innovation</li>
                  <li>Management</li>
                  <li>Ethics</li>
                </ul>

                <ol className="demo-list ordered">
                  <li>Consulting</li>
                  <li>Customer Service</li>
                  <li>Innovation</li>
                  <li>Management</li>
                  <li>Ethics</li>
                </ol>
              </div>
            </div>

            <div className="typo-block">
              <h2 className="demo-h2">Blockquote</h2>
              <blockquote className="demo-blockquote">
                <span className="quote-mark">“</span>
                <p className="quote-text">
                  We use only trusted, verified content, so you can believe our every word.
                </p>
                <cite className="quote-author">Catherine Williams</cite>
              </blockquote>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Typography;