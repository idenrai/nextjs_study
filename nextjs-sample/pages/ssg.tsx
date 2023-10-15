import { NextPage, GetStaticProps, NextPageContext } from 'next'

import Head from 'next/head'

type SSGProps = {
  message: string
}

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          이 페이지는 정적 사이트 생성을 통해, 빌드 시 생성되는 페이지입니다.
        </p>
        <p>{message}</p>
      </main>
    </div>
  )
}

// getStaticProps는 빌드 시 실행됨
// 익스포트 필수, 비동기 함수로서 async와 함께 정의해야 함
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  // constext
  // 실행 관련 정보(params, locale, locales, defaultLocale, preview, previewData)가 모인 객체
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}에 getStaticProps가 실행되었습니다`
  console.log('message: ', message)

  return {
    props: {
      message,
    },
  }
}

export default SSG
