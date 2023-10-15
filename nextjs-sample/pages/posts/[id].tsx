import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

// GetStaticPaths
// Next.js의 동적 라우팅 기능을 통해, 경로 파라메터를 이용해서 여러 페이지를 1개의 파일로 생성 가능

// 동적 라우팅의 요소
// - [Param].tsx와 같이 []로 감싼 특별한 파일명
// - getStaticProps에 맞춰 getStaticPaths를 사용

// getStaticPaths
// 생성할 페이지의 경로 파라메터의 조합과 폴백을 반환

// 아래에서는 getStaticPaths가 각각 id가 1, 2, 3인 경로 파라메터를 반환

type PostProps = {
  id: string
}

const Post: NextPage<PostProps> = (props) => {
  const { id } = props
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다</p>
        <p>{`/posts/${id}에 대응하는 페이지입니다`}</p>
      </main>
    </div>
  )
}

// 생성한 페이지의 경로 파라메터의 조합 반환
// 이 페이지는 pages/posts/[id].tsx이므로, id값을 반환해야 함
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ]
  // fallback을 false로 정의하면, paths에 정의된 페이지 이외는 404를 표시한다
  return { paths, fallback: false }
}

interface PostParams extends ParsedUrlQuery {
  id: string
}

// getStaticPaths 실행 후에 각 경로에 대해 getStaticProps가 실행
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (
  context
) => {
  return {
    props: {
      id: context.params!['id'],
    },
  }
}

export default Post
