import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Items = styled.li`
  &:not(:nth-last-of-type(-n + 3)) {
    margin-bottom: 20px;
  }
`;

export const SpanKey = styled.span`
  font-weight: 700;
`;
