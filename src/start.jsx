import React from 'react';
import {  Container, Button } from "react-bootstrap";

export default function Start() {
// const Welcome = () => {
    return(
        <>
        
        <div style={ {background: "gainsboro", padding: 60, gap: 10 } }>
        <Container className="text-center">
            <h1>Welcome in React App</h1>
            <p> 
                This is the one page application. 
                React is a library for building composable user interfaces.
                 It encourages the creation of reusable UI components, which present data that changes over time
            </p>
            <Container>
                <Button color="primary">Start Using</Button>
            </Container>

        </Container>
        </div>
        </>

    );
}
