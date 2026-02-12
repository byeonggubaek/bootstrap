import WdogImage from '@/components/WdogImage'

export default function Home() {
  const wdogImage = {
    src: "market.jpg",
    title: "상권분석",
    titleSize: "lg",  // 3xl → lg
    description: "예비 창업자의 성공적인 창업을 위해 빅데이터 기반의 분석 서비스를 제공합니다."
  }
  
  const wdogImageFunc1 = {
    src: "map.svg",
    title: "위치분석",
    titleSize: "xs",
    description: "이게 적용되는지 확인한다."
  }  
  
  const wdogImageFunc2 = {
    src: "industry.png",
    title: "업종추천",
    titleSize: "xs",
    description: ""
  }

  return (
    <div className="d-flex gap-4">
      {/* 메인 이미지 */}
      <WdogImage wdogImage={wdogImage} />
      
      {/* 콘텐츠 박스 */}
      <div className="bg-white max-w-2xl mx-auto p-5 rounded-4 shadow-lg border">
        {/* 헤더 */}
        <div className="d-flex align-items-center gap-3 mb-5 pb-4 border-bottom border-secondary-subtle">
          <div className="fw-bold fs-1 text-primary mb-1">빅데이터 상권분석</div>
          <div className="text-secondary fw-semibold">소상공인의 성공 창업을 위한 데이터 파트너</div>
        </div>
        
        {/* 본문 */}
        <div className="text-secondary lh-lg">
          <p className="fs-5 mb-4">
            소상공인 여러분! <span className="text-primary fw-bold">매출 데이터, 인구 통계, 경쟁업체 분석, 
            소비 트렌드</span> 등 방대한 빅데이터를 실시간으로 분석하여 
            <span className="text-primary fw-bold"> 최적의 창업 위치와 업종</span>을 추천드립니다.
          </p>
          
          {/* 기능 하이라이트 */}
          <div className="d-flex gap-4 p-4 bg-light rounded-3 border border-secondary-subtle">
            {/* 위치 분석 */}
            <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 flex-grow-1">
              <div className="flex-shrink-0" style={{width: '100px'}}>
                <WdogImage wdogImage={wdogImageFunc1} />
              </div>
              <div>
                <h4 className="fw-semibold text-dark mb-1">위치 분석</h4>
                <p className="text-secondary small mb-0">지역별 매출 잠재력 예측</p>
              </div>
            </div>
            
            {/* 업종 추천 */}
            <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 flex-grow-1">
              <div className="flex-shrink-0" style={{width: '100px'}}>
                <WdogImage wdogImage={wdogImageFunc2} />
              </div>
              <div>
                <h4 className="fw-semibold text-dark mb-1">업종 추천</h4>
                <p className="text-secondary small mb-0">성공 가능성 높은 업종 제안</p>
              </div>
            </div>
          </div>
          
          {/* 마무리 문구 */}
          <p className="text-center pt-5 mt-4">
            <span className="fw-bold fs-2 text-dark d-block mb-2">성공 창업의 첫걸음,</span>
            <span className="fw-bold fs-4">빅데이터 상권분석으로 시작하세요!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
