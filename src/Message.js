import { Row, Col } from 'react-bootstrap';
import getpfp from './getpfp';

function Message({ text, author }) {
  return (
    <Row className="message">
      <Col>
        {' '}
        <img src={getpfp(author)} className="pfp" />
      </Col>
      <Col>
        <Row className="font-weight-bold">{author}</Row>
        <Row>{text}</Row>
      </Col>
    </Row>
  );
}

export default Message;
