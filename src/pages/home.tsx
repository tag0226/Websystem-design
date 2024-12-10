import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Y書店</h1>
      <p>書店についての説明</p>
      <Link to="/analyze-form">分析フォームへ</Link>
    </div>
  )
}

