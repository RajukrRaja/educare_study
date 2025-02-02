import styled from 'styled-components';

// Styled components for the links and dropdown
export const StyledNavLink = styled.nav`
  font-size: 18px;
  padding: 10px;
  text-decoration: none;
  color: #333;
  display: block;
  &:hover {
    color: #007BFF;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: #444;
  min-width: 200px;
  display: none;
  padding: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  color: #fff;
  text-decoration: none;
  padding: 8px 0;
  display: block;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;
