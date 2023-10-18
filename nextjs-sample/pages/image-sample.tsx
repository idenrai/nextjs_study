import { NextPage } from 'next'
import Image from 'next/image'

import SushiImage from '../public/images/sushi.jpeg'

// Image 컴포넌트는 브라우저의 정보를 기반으로 최적화된 이미지 제공
// 외부 리소스 이미지의 경우는 최적화된 이미지를 표시하려면, next.config.js의 domains에 이미지 도메인 추가
// 혹은 Image 컴포넌트에서 unoptimized = True 를 설정해서 최적화를 무효화

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>이미지 표시 비교</h1>
      <p>img Tag</p>
      <img src="/images/sushi.jpeg" />
      <p>Image Component</p>
      <Image src={SushiImage} alt={''} placeholder="blur" />
      <p>Image로 표시하는 경우는 사전에 그리기 영역이 확보됨</p>
    </div>
  )
}
export default ImageSample
