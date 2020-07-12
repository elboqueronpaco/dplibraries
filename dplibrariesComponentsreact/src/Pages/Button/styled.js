import styled from "@emotion/styled";

export const ButtonContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, 11.875rem);
    grid-gap: 1rem;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
`
export const PreStyled = styled.pre`
    display: none;
    @media (min-width: 1024px){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        background-color: var(--light-color);
        color: var(--text-color)
    }
`