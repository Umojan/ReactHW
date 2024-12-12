import React, {useState} from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Typography from './components/Typography/Typography';
import Heading from './components/Heading/Heading';
import Tooltip from './components/Tooltip/Tooltip';
import Accordion from './components/Accordion/Accordion';

function App() {

    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <div style={{padding: '20px', textAlign: 'center'}}>

                <Heading level={2}>Buttons</Heading>
                <div>
                    <Button size="lg" variant="primary" style={{margin: '10px'}}>lg, primary</Button>
                    <Button size="md" variant="primary" style={{margin: '10px'}}>md, primary</Button>
                    <Button size="sm" variant="primary" style={{margin: '10px'}}>sm, primary</Button>
                </div>

                <div style={{marginTop: '20px'}}>
                    <Button size="lg" variant="bordered" style={{margin: '10px'}}>lg, bordered</Button>
                    <Button size="md" variant="bordered" style={{margin: '10px'}}>md, bordered</Button>
                    <Button size="sm" variant="bordered" style={{margin: '10px'}}>sm, bordered</Button>
                </div>

            </div>

                <div style={{padding: '20px'}}>
                    <Heading level={2}>Inputs</Heading>

                    <Input
                        label="Name"
                        placeholder="Enter your name"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <Input
                        label="Name"
                        placeholder="Danger"
                        danger
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>


                <div style={{padding: '20px', }}>
                    <Heading level={2}>Typography Example</Heading>

                    <Typography textSize="sm">
                        LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </Typography>

                    <Typography textSize="md">
                        LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </Typography>

                    <Typography textSize="lg">
                        LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </div>


                <div style={{padding: '20px'}}>
                    <Heading level={2}>Headings Example</Heading>

                    <Heading level={1}>H1. Heading</Heading>
                    <Heading level={2}>H2. Heading</Heading>
                    <Heading level={3}>H3. Heading</Heading>
                    <Heading level={4}>H4. Heading</Heading>
                    <Heading level={5}>H5. Heading</Heading>
                    <Heading level={6}>H6. Heading</Heading>
                </div>


                <div style={{padding: '20px', textAlign: 'center'}}>
                    <Heading level={2}>Tooltip Component</Heading>

                    <div style={{marginBottom: '20px'}}>
                        <Tooltip text="Tooltip text" position="top">
                            <button style={{padding: '10px 20px', fontSize: '16px'}}>Top Tooltip</button>
                        </Tooltip>
                    </div>

                    <div style={{marginBottom: '20px'}}>
                        <Tooltip text="Tooltip text" position="left">
                            <button style={{padding: '10px 20px', fontSize: '16px'}}>Left Tooltip</button>
                        </Tooltip>
                    </div>

                    <div style={{marginBottom: '20px'}}>
                        <Tooltip text="Tooltip text" position="right">
                            <button style={{padding: '10px 20px', fontSize: '16px'}}>Right Tooltip</button>
                        </Tooltip>
                    </div>

                    <div>
                        <Tooltip text="Tooltip text" position="bottom">
                            <button style={{padding: '10px 20px', fontSize: '16px'}}>Bottom Tooltip</button>
                        </Tooltip>
                    </div>
                </div>

                <div style={{padding: '20px'}}>
                    <Heading level={2}>Accordion Component</Heading>

                    <Accordion title="Accordion 1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua.
                    </Accordion>

                    <Accordion title="Accordion 2" defaultOpen>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat.
                    </Accordion>
                </div>
            </div>
            );
            }

            export default App;
