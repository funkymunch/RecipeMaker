/**
 * ************************************
 *
 * @module  AboutUs
 * @author  Hanji Chen
 * @date    March 7, 2021
 * @description
 *
 * ************************************
 */

import React from 'react';
import { Card, CardDeck, Image, Jumbotron, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  const gGImg =
    'https://i.ibb.co/tcbzrb9/kisspng-github-logo-repository-computer-icons-5afa376c51ca94-387166531526347628335.png';
  const lLImg = 'https://i.ibb.co/gzBfy74/pngwing-com.png';
  const emImg = 'https://i.ibb.co/3Wk792S/pngwing-com-1.png';

  return (
    <Jumbotron>
      <h1>Thank You!</h1>
      <CardDeck>
        <Card>
          <Card.Image src={'placeholder.png'} />
          <Card.Title>Han</Card.Title>
          <ListGroup>
            <ListGroup.Item action href="github">
              <Image src={gGImg} style={{ position: 'center', maxWidth: '25px' }} className="rounded mr-2" />{' '}
              github/HanDump
            </ListGroup.Item>
            <ListGroup.Item action href="linkedlin">
              <Image src={lLImg} style={{ position: 'center', maxWidth: '24px' }} className="rounded mr-2" />{' '}
              linkedlin/HanDump
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={emImg} style={{ position: 'center', maxWidth: '22px' }} className="rounded mr-2" />{' '}
              HanDump@gmail.com
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card>
          <Card.Image src={'placeholder.png'} />
          <Card.Title>Hanji Chen</Card.Title>
          <ListGroup>
            <ListGroup.Item action href="https://github.com/whyWhyDev">
              <Image src={gGImg} style={{ position: 'center', maxWidth: '25px' }} className="rounded mr-2" />{' '}
              https://github.com/whyWhyDev
            </ListGroup.Item>
            <ListGroup.Item action href="https://www.linkedin.com/in/HanjiChen">
              <Image src={lLImg} style={{ position: 'center', maxWidth: '24px' }} className="rounded mr-2" />{' '}
              https://www.linkedin.com/in/HanjiChen
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={emImg} style={{ position: 'center', maxWidth: '22px' }} className="rounded mr-2" />{' '}
              HChen0117@gmail.com
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card>
          <Card.Image src={'placeholder.png'} />
          <Card.Title>Nick</Card.Title>
          <ListGroup>
            <ListGroup.Item action href="github">
              <Image src={gGImg} style={{ position: 'center', maxWidth: '25px' }} className="rounded mr-2" />{' '}
              github/Nick
            </ListGroup.Item>
            <ListGroup.Item action href="linkedlin">
              <Image src={lLImg} style={{ position: 'center', maxWidth: '24px' }} className="rounded mr-2" />{' '}
              linkedlin/Nick
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={emImg} style={{ position: 'center', maxWidth: '22px' }} className="rounded mr-2" />{' '}
              Nick@email.com
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card>
          <Card.Image src={'placeholder.png'} />
          <Card.Title>Ziyad</Card.Title>
          <ListGroup>
            <ListGroup.Item action href="github">
              <Image src={gGImg} style={{ position: 'center', maxWidth: '25px' }} className="rounded mr-2" />{' '}
              github/Ziyad
            </ListGroup.Item>
            <ListGroup.Item action href="linkedlin">
              <Image src={lLImg} style={{ position: 'center', maxWidth: '24px' }} className="rounded mr-2" />{' '}
              linkedlin/Ziyad
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={emImg} style={{ position: 'center', maxWidth: '22px' }} className="rounded mr-2" />{' '}
              Ziyad@email.com
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </CardDeck>
    </Jumbotron>
  );
}

export default AboutUs;
