import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.light};
  color: ${props => props.theme.dark};
  width: 100%;
  font-size: 1.5rem;
  padding: 0.8rem 2.6rem 0.8rem 2.6rem;
  border-radius: 0.5rem;
  border: none;
  box-sizing: border-box;
  font-weight: 500;
  font-stretch: normal;
  line-height: 1.4;
  margin: 0.2rem;
  display: relative;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: transform 0.2s ease-in;
  will-change: transform;
  :hover {
    transform: scale(0.975);
    -webkit-transform: scale(0.975);
  }
  :active {
    transform: scale(0.9);
    -webkit-transform: scale(0.9);
  }
  :focus {
    outline: none;
  }
`

export default Button
