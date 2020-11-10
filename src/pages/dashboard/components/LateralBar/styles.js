import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  height: 100vh;
  width: 15%;
`
export const PageSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
  justify-content: space-around;

  button {
    padding: 10px;
    border-radius: 50px;
    min-width: 180px;
    text-align: center;
    border: 1px solid #157763;
    color: #157763;
    background-color: #fff;
    outline: none;
   
  }
`
