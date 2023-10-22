import { NextPage } from 'next'
import Link, { LinkProps } from 'next/link'
import styled, { css } from 'styled-components'

// mixin을 통해 CSS정의 및 재사용 가능
const redbox = css`
  padding: 0.25em 1em;
  border: 3px solid red;
  border-radius: 10px;
`

const bluefont = css`
  color: blue;
  font-size: 2em;
`

const BlueText = styled.p`
  color: blue;
  font-weight: bold;
`

const BlueTextBorder = styled(BlueText)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 10px;
`

const CssButton = styled.button`
  background: transparent;
  margin: 1em;
  cursor: pointer;
  ${redbox};
  ${bluefont}
`

// Styled + Props
type ButtonProps = {
  color: string
  backgroundColor: string
}

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`

// Next.js의 컴포넌트에 스타일 적용
type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string
  children: React.ReactNode
}

const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props

  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  )
}

const StyledLink = styled(BaseLink)`
  color: blue;
  font-size: 2em;
`

const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[2]};
`

const Page: NextPage = () => {
  return (
    <div>
      <Button backgroundColor="transparent" color="#FF0000">
        Hello
      </Button>
      <Button backgroundColor="#1E90FF" color="white">
        World
      </Button>
      <CssButton>Test</CssButton>
      <BlueTextBorder>BlueTestBorder</BlueTextBorder>

      {/* 스타일을 정의한 컴포넌트를 다른 html요소에서도 사용 가능 */}
      <BlueTextBorder as="a" href="/">
        a Tag BlueTestBorder
      </BlueTextBorder>

      <StyledLink href="/">Goto index</StyledLink>

      <div>
        <Text>Test for created-by-theme</Text>
      </div>
    </div>
  )
}

export default Page
