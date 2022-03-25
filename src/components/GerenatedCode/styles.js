import styled from "styled-components"

export const Container = styled.div`
    pre {
        color: #a9aa9a;
    }

    .pre-father {
        margin: 15px 0 0 15px;
    }

    .pre-children{
        margin-left: 25px;
    }

    .orange {
        color: #e8bf69;
    }

    .dark-orange {
        color: #db7e32;
    }

    .purple {
        color: #bf93d8;
    }

    .blue{
        color: #5297bb;
    }

    .red {
        color: #ce9178;
    }

    .green {
        color: #7cb961;
    }
`

export const GroupButtons = styled.div`
    display: flex;
`

export const Button = styled.button`
    padding: 5px;
    border-radius: 0;
    border: none;
    background-color: #22223f;
    font-size: 15px;
    color: white;

    &:nth-child(${props => props.active}){
        background-color: #121222;
    }
`