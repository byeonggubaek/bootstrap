import { Button } from 'react-bootstrap';       // react-bootstrap만
import WdogNavi2 from '@/components/WdogNavi2'

export default function MarketSimple() {

  return (
    <div>
      <h1>상권분석 - 간단</h1>
      <Button variant="primary">자세히</Button>
      <WdogNavi2 />
    </div>
  );
}