import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

const EnvSample: NextPage = (props) => {
  // 서버 사이드에선 test1표시, 클라이언트 사이드에선 undefined
  console.log('process.env.TEST: ', process.env.TEST)
  // test2 표시
  console.log('process.env.NEXT_PUBLIC_TEST: ', process.env.NEXT_PUBLIC_TEST)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>{process.env.TEST}</p>
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  )
}

// GetStaticProps는 항상 서버사이드에서 발생
export const getStaticProps: GetStaticProps = async (context) => {
  // test1표시
  // console.log('process.env.TEST: ', process.env.TEST)
  // test2 표시
  // console.log('process.env.NEXT_PUBLIC_TEST: ', process.env.NEXT_PUBLIC_TEST)

  return {
    props: {},
  }
}

export default EnvSample
