import styled from 'styled-components'

export const HeaderC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  height: 45px;

  h5 {
    color: #5ca193;
    font-style: italic;
  }
`
export const HeaderIcon = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: #5ca193; */
  border-width: 2px;
  border-style: solid;
  border-color: #5ca193;
  border-radius: 50px;
  margin-right: 20px;
`
