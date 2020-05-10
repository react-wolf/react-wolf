import React from 'react';
import Button from '../components/button/Button';
import Container from '../components/container/Container';
import Cursor from '../components/cursor/Cursor';
import Select from '../components/select/Select';
import Text from '../components/text/Text';
import TextField from '../components/textfield/TextField';

export default {
  title: 'Example'
};

export const Basic = () => (
  <div>
    <Cursor>
        <Container title={'Example App'} variant={'parent'}>
            <Text>This is an example application you can use for inspiration.</Text>

            <Container title={'Subwindow'} variant={'child'}>
                <Select label={'Selectable 1'} options={['Option 1', 'Option 2', 'Option 3']}/>
                <Select label={'Selectable 2'} options={['Option 1', 'Option 2', 'Option 3']}/>
                <Select label={'Selectable 3'} options={['Option 1', 'Option 2', 'Option 3']}/>
                <div style={{display: 'flex'}}><Text>Input:</Text> <TextField/></div>
            </Container>
            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Button>Yes</Button>
                <Button>No</Button>
            </div>
        </Container>
    </Cursor>
  </div>
);