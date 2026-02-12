"use client"

interface WdogImageProps {
  src: string;
  title: string;
  titleSize: string; // "xs", "sm", "md", "lg"
  description: string;
}

interface WdogImageComponentProps {
  wdogImage: WdogImageProps;
}

export default function WdogImage({ wdogImage }: WdogImageComponentProps) {
  const isSmallTitle = wdogImage.titleSize === "xs" || wdogImage.titleSize === "sm";

  return (
    <div className="group position-relative overflow-hidden rounded shadow-lg border">
      <img 
        src={wdogImage.src} 
        className="w-100 transition-all img-fluid"
        style={{
          transform: 'scale(1) rotate(0deg)',
          transition: 'transform 0.7s ease'
        }}
        alt={wdogImage.title}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) rotate(-2deg)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
        }}
      />
      
      {/* 호버 오버레이 */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 bg-primary bg-opacity-20 opacity-0 transition-all"
        style={{ 
          transition: 'opacity 0.5s ease 0.2s',
          opacity: 0
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
      ></div>
      
      {/* 텍스트 오버레이 */}
      <div 
        className={`position-absolute bottom-0 start-0 w-100 
                   d-flex flex-column justify-content-end 
                   bg-dark bg-opacity-95 text-white p-${isSmallTitle ? 2 : 4}
                   opacity-0 transition-all`}
        style={{
          transition: 'opacity 0.5s ease 0.4s',
          opacity: 0
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
      >
        {/* 제목 */}
        <div className={`fw-bold ${getTitleClass(wdogImage.titleSize)}`}>
          {wdogImage.title}
        </div>
        
        {/* 설명 (xs/sm 제외) */}
        {!isSmallTitle && (
          <p className="opacity-90 small mb-2">
            {wdogImage.description}
          </p>
        )}
      </div>
    </div>
  );
}

// titleSize → Bootstrap 클래스 변환 헬퍼
function getTitleClass(size: string): string {
  switch(size) {
    case 'xs': return 'fs-6';
    case 'sm': return 'fs-5';
    case 'md': return 'fs-4';
    case 'lg': return 'fs-3';
    default: return 'fs-4';
  }
}
