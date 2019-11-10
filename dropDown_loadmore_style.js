import styled from 'styled-components'
import { Row } from 'antd'

export const DropDownContainer = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding-left: 15px;
  position: absolute;
  background-color: white;
  z-index: 99;
  width: 300px;
`

export const ItemRow = styled(Row)`
  cursor: pointer;
`
