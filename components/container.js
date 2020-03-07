import { Container } from 'react-bootstrap';

export default ({children}) => (
    <Container>
        {children}
        <style jsx global>
            {
                `
                * {
                    font-family: MessinaSans,sans-serif;
                    color: color: #0c143b;
                }
                `
            }
        </style>
    </Container>
)