import React from "react";
import styled from "styled-components";

const StyledPageDescription = styled.div`
    font-size: 1.025rem;
    border-top: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.colors.gray};
`;

const PageDescription = ({ children, className }) => {
    return (
        <StyledPageDescription className={className}>
            {children}
        </StyledPageDescription>
    );
};

export default PageDescription;
