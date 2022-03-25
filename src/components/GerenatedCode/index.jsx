import React, { useState } from 'react'
import * as C from './styles'

const Css = ({ setwidth, setheight, setborderradius, setcolor }) => {
    return (
        <pre className='pre-father'>
            <span className='orange'>.classname</span> &#123;
            <pre className='pre-children'>
                <span className='purple'>width:{' '}</span>
                <span className='blue'>
                    {setwidth}
                    <span className='green'>px</span>
                </span>;
            </pre>
            <pre className='pre-children'>
                <span className='purple'>height:{' '}</span>
                <span className='blue'>
                    {setheight}
                    <span className='green'>px</span>
                </span>;
            </pre>
            <pre className='pre-children'>
                <span className='purple'>border-radius:{' '}</span>
                <span className='blue'>
                    {setborderradius}
                    <span className='green'>px</span>
                </span>;
            </pre>
            <pre className='pre-children'>
                <span className='purple'>background-color:{' '}</span>
                <span className='red'>{setcolor}</span>;
            </pre>
            &#125;
        </pre>
    )
}

const StyledComponents = ({ setwidth, setheight, setborderradius, setcolor }) => {
    return (
        <pre className='pre-father'>
            <span className='dark-orange'>export const</span>
            <span className='purple'>{' '}NameVariableStyle</span>
            = styled.
            <span className='purple'>div</span>
            <span className='green'>&#96;</span>

            <pre className='pre-children'>
                <span className='purple'>width:{' '}</span>
                <span className='blue'>
                    {setwidth}
                    <span className='green'>px</span>
                </span>;
            </pre>
            <pre className='pre-children'>
                <span className='purple'>height:{' '}</span>
                <span className='blue'>
                    {setheight}
                    <span className='green'>px</span>
                </span>;
            </pre>
            <pre className='pre-children'>
                <span className='purple'>border-radius:{' '}</span>
                <span className='blue'>
                    {setborderradius}
                    <span className='green'>px</span>
                </span>;
            </pre>
            <pre className='pre-children'>
                <span className='purple'>background-color:{' '}</span>
                <span className='red'>{setcolor}</span>;
            </pre>
            
            <span className='green'>&#96;</span>
        </pre>
    )
}

const GerenatedCode = ({ setwidth, setheight, setborderradius, setcolor }) => {

    const [active, setActive] = useState(1)

    const handleChangeButtonColor = (position) => {
        setActive(position)
    }

    const renderCode = {
        1: () => (
            <Css
                setwidth={setwidth}
                setheight={setheight}
                setborderradius={setborderradius}
                setcolor={setcolor}

            />
        ),
        2: () => (
            <StyledComponents
                setwidth={setwidth}
                setheight={setheight}
                setborderradius={setborderradius}
                setcolor={setcolor}
            />
        ),
    }

    return (
        <C.Container>
            <C.GroupButtons>
                <C.Button active={active} onClick={() => handleChangeButtonColor(1)}>
                    CSS
                </C.Button>

                <C.Button active={active} onClick={() => handleChangeButtonColor(2)}>
                    Styled-Components
                </C.Button>
            </C.GroupButtons>

            {renderCode[active]()}
        </C.Container>
    )
}

export default GerenatedCode;