import { useState } from 'react'
import * as C from './App.styles'

import GerenatedCode from './components/GerenatedCode'

const App = () => {

  const [ width, setWidth ] = useState(200)
  const [ height, setHeight ] = useState(200)
  const [ borderRadius, setBorderRadius] = useState(0)
  const [ color, setColor ] = useState('#ffffff')

  const handleGetRangeWidth = (e) => {
    setWidth(e.target.value)
  }

  const handleGetRangeHeight = (e) => {
    setHeight(e.target.value)
  }

  const handleGetRangeBorderRadius = (e) => {
    setBorderRadius(e.target.value)
  }

  const handleGetColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <C.Container>

      <C.RenderContainer>
        <C.Body>
          <C.Rendered setwidth={width} setheight={height} setcolor={color} setborderradius={borderRadius}>

          </C.Rendered>
        </C.Body>
      </C.RenderContainer>

      <C.ContainerForm>

        <C.Body>

          <C.Title>
            Code Generator
          </C.Title>

          <C.GroupForm>
            <label>Set Width:</label>
            <C.Input type='range' onChange={handleGetRangeWidth} value={width} step='1' min='50' max='400'>

            </C.Input>
          </C.GroupForm>

          <C.GroupForm>
            <label>Set Height:</label>
            <C.Input type='range' onChange={handleGetRangeHeight} value={height} step='1' min='50' max='400'>

            </C.Input>
          </C.GroupForm>

          <C.GroupForm>
            <label>Set Border-Radius:</label>
            <C.Input type='range' onChange={handleGetRangeBorderRadius} value={borderRadius} step='1' min='0' max='100'>

            </C.Input>
          </C.GroupForm>

          <C.GroupForm>
            <label>Set Color:</label>
            <C.Input type='color' onChange={handleGetColor} value={color}>
            
            </C.Input>
          </C.GroupForm>
    
          <C.GerenatedCode>
            <GerenatedCode setwidth={width} setheight={height} setcolor={color} setborderradius={borderRadius} />
          </C.GerenatedCode>

        </C.Body>
      </C.ContainerForm>

    </C.Container>
  );
}

export default App;
