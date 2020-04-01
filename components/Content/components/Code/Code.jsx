import React from "react";
import styled from "styled-components";

const StyledCode = styled.code`
    padding: 4px 6px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: #f1f1f1;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
`;

const Code = ({ children }) => {
    return <StyledCode>{children}</StyledCode>;
};

export default Code;
