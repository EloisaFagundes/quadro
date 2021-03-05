import * as React from 'react';

import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Button, LinkUnderline } from '../atm.button';
import { Card } from '../atm.card';
import { RiIcon } from '../atm.icon';
import { Input } from '../atm.input';
import { Separator } from '../atm.separator';
import { Form } from './form.component';

export const FormUser: React.FC = () => {
  const [name, setName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [search, setSearch] = React.useState<string>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ email, password, name, search });
    alert('conta criada com sucesso!');
  }
  return (
    <Grid>
      <Card>
        <Row center="lg">
          <Col xs={12} lg={6} md={8}>
            <Form onSubmit={handleSubmit}>
              <Input value={name} name="nome" type="text" onChange={setName} />
              <Separator />
              <Input
                value={password}
                name="senha"
                type="text"
                onChange={setPassword}
              />
              <Separator />

              <Input
                value={email}
                name="e-mail"
                type="text"
                onChange={setEmail}
              />
              <Separator />
              <Input
                name="Com ícone"
                icon={<RiIcon.IcSearch iconRounded />}
                value={search}
                placeholder="Palavra para recuperar senha"
                onChange={setSearch}
              />
              <Separator />
              <Row center="lg">
                <Button type="submit" kind="primary">
                  Cadastrar
                </Button>
              </Row>
              <LinkUnderline kind="link">Login</LinkUnderline>
            </Form>
          </Col>
        </Row>
      </Card>
    </Grid>
  );
};

export default FormData;
