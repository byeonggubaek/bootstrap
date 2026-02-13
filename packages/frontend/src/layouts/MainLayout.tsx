import { Outlet } from "react-router-dom";
import type { NavItem } from 'shared';
import WdogNavi from '@/components/WdogNavi'
import { useState, useEffect } from 'react';
import api from '@/api/client';

export default function Layout() {
  // const navItems : NavItem[] = [
  //   {
  //     id : "M001",   
  //     title: "상권분석",
  //     img: "/market.jpg",
  //     description:
  //       `예비 창업자의 성공적인 창업을 위해 빅데이터 기반의 분석 서비스를 제공합니다.`,
  //     sub_menus: [
  //       {
  //         id : "M001-S001",   
  //         title: "간단분석",
  //         href: "/market/simple",
  //         description: `BigData를 이용하여 상권을 분석하여 간단하게 보여준다.`,
  //       },
  //       {
  //         id : "M001-S002",           
  //         title: "상세분석",
  //         href: "/market/detail",
  //         description: `BigData를 이용하여 상권을 분석하여 자세히 보여준다.`,
  //       },
  //     ]
  //   },
  //   {
  //     id : "M002",      
  //     title: "트랜드",
  //     img: "/trend.jpg",    
  //     description:
  //       `빅데이터 기반으로 핫플레이스, SNS 등 주요 트렌드 정보를 제공합니다.`,
  //     sub_menus: [
  //       {
  //         id : "M002-S001",            
  //         title: "핫플레이스 분석",
  //         href: "/trends/hotplace",
  //         description: `공단에서 정의하는 6개 상권에 대한 정보를 지역별로 제공해 앞서가는 마케팅 전략을 수립할 수 있도록 합니다.`,
  //       },
  //       {
  //         id : "M002-S002",            
  //         title: "SNS 분석",
  //         href: "/trends/sns",
  //         description: `주제어에 맞는 기간별 SNS분석 정보를 제공해 트렌드에 기반한 경영을 할 수 있도록 지원합니다.`,
  //       },
  //     ]    
  //   },
  //   {
  //     id : "M003",         
  //     title: "대시보드",
  //     img: "/dash.jpg",    
  //     description:
  //       `소상공인 주요 통계, 매출추이, 업소현황 등 통계 정보를 제공합니다.`,
  //     sub_menus: [
  //       {
  //         id : "M003-S001",            
  //         title: "주요통계",
  //         href: "/dashboard/summary",
  //         description: `업소, 매출, 인구, 주요지표 등 다양한 데이터를 기반으로 통계와 뉴스를 대시보드 형태로 제공합니다`,
  //       },
  //       {
  //         id : "M003-S002",            
  //         title: "매출통계",
  //         href: "/dashboard/sale",
  //         description: `매출 데이터를 기반으로 통계와 뉴스를 대시보드 형태로 제공합니다`,
  //       },
  //     ]         
  //   },
  //   {
  //     id : "M004",         
  //     title: "이용안내",
  //     img: "/guide.jpg",    
  //     description: `플랫폼 소개, 개방활용, 공지사항 등 내용을 안내해 드립니다.`,
  //     sub_menus: [
  //       {
  //         id : "M004-S001",          
  //         title: "서비스소개",
  //         href: "/guide/intro",
  //         description: `메뉴의 기능을 설명합니다.`,
  //       },
  //       {
  //         id : "M004-S002",          
  //         title: "공지사항",
  //         href: "/guide/board",
  //         description: `공지사항 게시판을 제공합니다.`,
  //       },
  //     ]  
  //   },
  // ]  
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    api.get('/menus', { params: { level: 1 } })
      .then(res => {
        setNavItems(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="vw-100 vh-100 d-flex flex-column m-0 p-0">
      {/* Header: 전체 너비 */}
      <header className="shadow-sm w-100">
        <WdogNavi navItems={navItems} /> 
     </header>
      
      {/* main: 전체 너비 + 남은 높이 */}
      <main 
        style={{ 
          width: "100%",
          flex: 1,
          padding: "2rem",
          overflow: "auto",     // 세로 스크롤만
          boxSizing: "border-box"
        }}
      >
        <Outlet />
      </main>
      
      {/* Footer: 전체 너비 */}
      <footer 
        style={{ 
          width: "100%",
          padding: "1rem", 
          background: "#e9ecef",
          flexShrink: 0,
          boxSizing: "border-box"
        }}
      >
        <p style={{ margin: 0 }}>© 2024 My Application</p>
      </footer>
    </div>
  );
}
