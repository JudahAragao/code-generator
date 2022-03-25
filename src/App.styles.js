import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #121222;
    display: flex;
`

export const ContainerForm = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    color: white;
    margin: 30px 0 20px 0;
`

export const Body = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 10px;
    background-color: #16162d;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const GroupForm = styled.div`
    width: 100%;
    margin: 0 0 0 70px;
    display: flex;
    flex-direction: column;

    &:nth-child(5) {
        margin-top:  10px;
        flex-direction: row;
    }

    &:nth-child(5) input {
        width: 30px;
        height: 30px;
    }
    
    label {
        color: white;
        margin: 10px 15px 0 0;
    }
`

export const Input = styled.input`
    width: 430px;
`

export const GerenatedCode = styled.div`
    width: 460px;
    height: 180px;
    margin-top: 20px;
    background-color: #121222;
`

export const RenderContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Body} {
        background-color: #151528;
    }
`

export const Rendered = styled.div`
    width: ${props => props.setwidth + 'px'};
    height: ${props => props.setheight + 'px'};
    border-radius: ${props => props.setborderradius + 'px'};
    background-color: ${props => props.setcolor};
`