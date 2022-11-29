import Link from 'next/link'
export default function PageNotFound() {
  return (
    <div>
      <h3> 페이지가 없으니 돌아가주세용. </h3>
      <Link href="/">홈으로 돌아가기 </Link>
    </div>
  )
}
