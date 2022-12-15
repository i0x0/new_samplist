import { Text, Container, Image, Col, Row } from '@nextui-org/react';
import { useState } from 'react'
import icon from '/icon.svg'
import Input from "../components/Input"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container css={{
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
        <Row>
          <Col>
            <Image src={icon} width={400} height={400} />
          </Col>
          <Col>
            <Container css={{
              display: "flex",
              position: "absolute",
              //margin: "0",
              justifyContent: "left",
              top: "50%",
              transform: "translateY(-50%)"
            }}>
              <Text h1 size={100}>
                Samplist
              </Text>
              <Text h2>
                A simple online samplier
                <Text h3>
                  &emsp; for producers by producers
                </Text>
              </Text>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
        <Input />
      </Container>
    </>
  )
}

export default App
