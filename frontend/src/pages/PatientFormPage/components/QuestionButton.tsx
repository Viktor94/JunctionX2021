import { styled } from '@mui/material'

export const QuestionButton = styled('button')<{ selected: boolean }>`
  width: 100px;
  padding: 15px 0;
  font-size: 18px;
  color: ${(props) => (props.selected ? props.theme.palette.primary.contrastText : 'inherit')};
  background: ${(props) => (props.selected ? props.theme.palette.primary.main : 'none')};
  border: ${(props) => (props.selected ? `solid 1px ${props.theme.palette.primary.main}` : `solid 1px #888`)};
  cursor: pointer;

  &:first-of-type {
    border-top-left-radius: ${(props) => props.theme.shape.borderRadius}px;
    border-bottom-left-radius: ${(props) => props.theme.shape.borderRadius}px;
  }

  &:last-of-type {
    border-top-right-radius: ${(props) => props.theme.shape.borderRadius}px;
    border-bottom-right-radius: ${(props) => props.theme.shape.borderRadius}px;
  }
`
