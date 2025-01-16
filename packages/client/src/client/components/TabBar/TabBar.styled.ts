import styled from "styled-components"

export const Background = styled.div`
  height: ${({ theme }) => theme.newTheme.density.md};
  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) =>
    theme.newTheme.color["Colors/Background/bg-secondary"]};
`

export const LeftSection = styled.ul<{ doNotShowDropdown: boolean }>`
  display: flex;
  flex-wrap: wrap;

  ${({ doNotShowDropdown }) =>
    doNotShowDropdown
      ? undefined
      : `  
  @media (max-width: 915px) {
    display: none;
  }`}
`

export const RightSection = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
  list-style-type: none;
  list-style: none;
`

export const Tab = styled.button<{ active: boolean; isStatic?: boolean }>`
  height: 100%;
  width: ${({ theme }) => theme.newTheme.spacing["9xl"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style-type: none;
  text-decoration: none;

  background-color: ${({ active, theme }) =>
    active ? theme.newTheme.color["Colors/Background/bg-primary_alt"] : "none"};

  cursor: ${({ isStatic }) => (isStatic ? "unset" : "pointer")};
`

export const DropdownWrapper = styled.div`
  margin-right: auto;
  @media (min-width: 915px) {
    display: none;
  }
  @media (max-width: 915px) {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 400px) {
    padding-top: 10px;
  }
`

export const Action = styled(Tab)<{ size: "sm" | "lg"; disabled?: boolean }>`
  width: ${({ theme, size }) =>
    size === "sm" ? theme.newTheme.density.md : "auto"};
  display: flex;
  align-items: center;
  line-height: 0;

  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  &:hover {
    cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  }
`
