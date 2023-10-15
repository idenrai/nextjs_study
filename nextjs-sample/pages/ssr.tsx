import { GetServerSideProps, NextPage } from 'next'

import Head from 'next/head'

// SSR은 페이지를 그리기 전에 getServerSideProps를 호출, 이 함수가 반환하는 돈을 기

type SSRProps = {
  message: string
}

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>Server Side Rendering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          이 페이지는 서버 사이드 렌더링을 통해 접근 시에 서버에서 그려진
          페이지입니다
        </p>
        <p>{message}</p>
      </main>
    </div>
  )
}

// getServerSideProps는 페이지로의 요청이 있을 때마다 실행
// 익스포트 필수, 비동기 함수로서 async와 함께 정의해야 함
export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  // constext
  // 실행 관련 정보(params, locale, locales, defaultLocale, preview, previewData)가 모인 객체
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}에 getServerSideProps가 실행되었습니다`
  console.log('message: ', message)

  return {
    props: {
      message,
    },
  }
}

export default SSR
