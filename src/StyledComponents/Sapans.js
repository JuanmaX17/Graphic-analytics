import styled from 'styled-components';

export const SpanSize = styled.span`
    color: var(--Medium-brown);
    font-size: ${({ size = '16px' }) => size};
    font-weight: ${({ weight = '400' }) => weight};
    text-align: ${({ align = 'start' }) => align};
`;

export const SpanGray = styled(SpanSize)`
    color: var(--Medium-brown);
`;

export const SpanWhite = styled(SpanSize)`
    color: var(--Very-pale-orange);
`;

export const SpanBlack = styled(SpanSize)`
    color: black;
`;
