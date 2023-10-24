import { render, screen, RenderResult, getByRole } from '@testing-library/react'
import { Input } from './index'
import { afterEach, beforeEach, describe } from 'node:test'

// describe로 테스트를 모음
describe('input', () => {
  let renderResult: RenderResult

  // 테스트 실행 전의 처리를 기술
  beforeEach(() => {
    // 테스트 실행 전에 컴포넌트를 화면에 그리고, renderResult에 저장
    renderResult = render(<Input id="username" label="Username" />)
  })

  // 테스트 실행 후의 처리를 기술
  afterEach(() => {
    // 테스트 실행 후에 컴포넌트를 릴리스
    renderResult.unmount()
  })

  // 컴포넌트가 처음 화면에 그려졌을 때, input이 비어있는지 확인
  it('should reset when user clicks button', () => {
    // render(<Input id="username" label="Username" />)
    // label이 Username인 컴포넌트에 대응하는 input요소를 얻기
    expect(screen.getByLabelText('Username')).toHaveValue('')
  })
})
