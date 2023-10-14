import { useRef, useState, useEffect, useLayoutEffect } from 'react'

// useEffect, useLayoutEffect 실습
// useEffect: 화면이 Render되고, DOM이 업데이트되고, 화면이 실제로 나온 후 실행됨
// useLayoutEffect: 화면이 Render되고, DOM이 업데이트되면 실행후 화면을 그림

// 리액트 18부터는 <React.StrictMode>아래의 컴포넌트는
// 안전하지 않은 부가 작용을 발견하기 위해, 컴포넌트가 화면을 2번 그림
// 고로, useEffect나 useLayoutEffect가 두번 호출됨
// 1번만 실행하도록 보장하고 싶을 때엔, useRef를 사용해, 실행 유무를 저장해서 대처

const UPDATE_CYCLE = 1000
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'en-US',
  KR = 'ko-KR',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.KR:
      return Locale.KR
    default:
      return Locale.US
  }
}

const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)
  const mounted = useRef(false)

  useEffect(() => {
    // 타이머 설정
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    // 클린업 함수 전달 & 언마운트 시에 타이머 해제
    // 언마운트 시에 타이머 해제를 하지 않으면, 부모 컴포넌트에서 Clock을 호출하지 않게 되어 버그, 메모리 누수의 원인이 됨
    return () => {
      clearInterval(timer)
    }
    // 빈 배열을 전달할 경우, 초기에만 실행
    // useEffect의 두번째 인수는 의존
  }, [])

  // 로컬 스토리지에서 값 로딩
  // useEffect(() => {
  //   const savedLocale = localStorage.getItem(KEY_LOCALE)
  //   if (savedLocale != null) {
  //     setLocale(getLocaleFromString(savedLocale))
  //   }
  // }, [])

  // useLayoutEffect
  // DOM이 업데이트된 후, 화면에 실제로 그려지기 전에 실행됨
  // 초기 화면이 반영되기 전에 localStorage로부터 데이터를 읽으므로, 리로드 랙을 줄일 수 있음
  // 다만, 동기적으로 실행되므로 무거운 처리를 실행시엔 화면 렌더가 지연되므로 주의
  useLayoutEffect(() => {
    if (mounted.current) return
    mounted.current = true
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale != null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  // 로케일이 바뀔 시, 로컬 스토리지에 값 저장
  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    localStorage.setItem(KEY_LOCALE, locale)
    // 의존 배열에 로케일 전달. 로케일이 변할 때마다 실행됨
  }, [locale])

  return (
    <div>
      <p>
        <span id="current-time-label">현재 시각</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ko-KR">ko-KR</option>
        </select>
      </p>
    </div>
  )
}

export default Clock
