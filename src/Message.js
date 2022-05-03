import { Row, Col } from 'react-bootstrap';
import getpfp from './getpfp';

function Message({ text, author, image, width, height }) {
  return (
    <Row className="message">
      <Col>
        {' '}
        <img src={getpfp(author)} className="pfp" alt={author} />
      </Col>
      <Col>
        <Row className="fw-bold">{author}</Row>
        <Row>{text ? text : <img src={image} style={{ width: width + 'px', height: height + 'px' }} alt="msg-img" />}</Row>
      </Col>
    </Row>
  );
}

export default Message;
