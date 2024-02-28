import { Row } from 'react-bootstrap';

const UpperLeftQuotes = () => {
  const quoteStyles = 'border border-white rounded mx-2 my-4 py-2 quote';

  return (
    <>
      <Row className={quoteStyles}>
        <div>
          This is an inspirational quote. Can you believe how inspirational it
          is?
        </div>
      </Row>
      <Row className={quoteStyles}>
        <div>This is a funny anecdote about working at MARS.</div>
      </Row>
      <Row className={quoteStyles}>
        <div>
          This is a short but impactful quote from a recent news article.
        </div>
      </Row>
    </>
  );
};

export default UpperLeftQuotes;
