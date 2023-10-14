import React, { useState, useRef } from 'react'

// useRef와 useImperativeHandle - ref 훅

// useRef: 치환 가능한 ref 객체를 생성
// - 데이터 저장
//   - ref 객체에 저장된 값은, 업데이트되더라도 화면을 다시 그리지 않으므로, 화면과 상관없는 데이터 저장 시 사용
//   - 데이터는 ref.current에서 읽거나 치환
// - DOM 참조
//   - ref는 컴포넌트에 전달하면, 마운트될 때 ref.current에 DOM참조가 설정되어 DOM함수 호출 가능

// 업로드 샘플 코드
// 2개의 ref를 사용
// - inputImageRef
//   - input요소인 ref에 inputImageRef를 전달
//   - p요소 클릭시 inputImageRef.current.click()으로 input을 클릭하는 이벤트를 발행
// - fileRef
//   - 선택된 파일 객체 유지
//   - 파일이 선택되면 호출되는 콜백 함수에서 fileRef.current에 업로드된 파일을 대입
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const UPLOAD_DELAY = 5000

const ImageUploader = () => {
  // input요소에 접근용 ref
  const inputImageRef = useRef<HTMLInputElement | null>(null)

  // 선택된 파일 데이터 저장용 ref
  const fileRef = useRef<File | null>(null)

  const [message, setMessage] = useState<string | null>('')

  // 이미지 업로드 클릭시의 콜백
  const onClickText = () => {
    if (inputImageRef.current !== null) {
      inputImageRef.current.click()
    }
  }

  // 파일이 선택된 후 호출되는 콜백
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      // fileRef에 값 저장
      fileRef.current = files[0]
    }
  }

  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      // API 호출 (여기선 생략하고 대신 대기시간을 넣음)
      await sleep(UPLOAD_DELAY)

      // 업로드 성공했음을 표시
      setMessage(`${fileRef.current.name} has been successfully uploaded`)
    }
  }

  return (
    <div>
      <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
        이미지 업로드
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept="image/*"
        onChange={onChangeImage}
        style={{ visibility: 'hidden' }}
      />
      <br />
      <button onClick={onClickUpload}>업로드</button>
      {message !== null && <p>{message}</p>}
    </div>
  )
}

export default ImageUploader
