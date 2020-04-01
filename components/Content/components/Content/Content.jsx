import React from "react";
import styled from "styled-components";

const StyledContent = styled.section`
    flex: 0 0 70%;
    padding: 24px;
    background: white;
    border: ${({ theme }) => theme.border};
    box-sizing: border-box;
    display: inline-block;
    height: 100%;
    max-height: 1200px;
    width: 70%;
    overflow: auto;
`;

const Content = ({ children, className }) => {
    return <StyledContent className={className}>{children}</StyledContent>;
};

export default Content;
