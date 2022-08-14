import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    max-width:  ${({ maxWd = 'none' }) => maxWd};
    display: grid;
    place-items: center;
    gap: ${({ gap = '0' }) => gap};
    background: ${({ bg = 'transparent' }) => bg};
`;

export const WrapperWidth = styled.section`
    display: grid;
    width: ${({ width }) => width};
    grid-template-rows: ${({ rows = 'none' }) => rows};
    padding: ${({ pd = '0' }) => pd};
    
`;

export const WrapperBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ bg = 'transparent' }) => bg};
    padding: ${({ pd = '0' }) => pd};
    border-radius: ${({ br = '8px' }) => br};
`;

export const WrapperRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${({ gap = '16px' }) => gap};
    max-width:  ${({ maxWd = 'none' }) => maxWd};
`;
