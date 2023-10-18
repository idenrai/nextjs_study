import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

// 점진적 정적 재생성
// 페이지 수명 설정 & 수명이 다한 페이지는 최신 정보로 재생성 시도 & 정적 페이지를 전송하면서 정보 업데이트 가능
// ISR은 revalidate를 반환하는 getStaticProps를 사용

type ISRProps = {
  message: string
}

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props
  const router = useRouter()

  if (router.isFallback) {
    // 폴백용 페이지 반환
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 ISR을 통해 빌드 시 생성된 페이지</p>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}에 이 페이지의 getStaticProps가 실행되었습니다`

  return {
    props: {
      message,
    },
    // 페이지의 유효 기간 설정
    revalidate: 60,
  }
}

export default ISR
