import React from 'react';
import {Button} from 'react-bootstrap';
import {Stack} from 'react-bootstrap';

const LogInPage = () => {
    return (
        <div>
            <h1>My name is Zubaer Hossain Jewel.This is LOg in LogInPage</h1>

                <Stack direction="vertical" gap={2}>
                <Button  variant="primary">Button as link</Button>
                <Button  variant="success"> Button as link </Button>
                </Stack>
        </div>
    );
};

export default LogInPage;