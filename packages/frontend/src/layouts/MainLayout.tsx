import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div 
      style={{ 
        width: "100vw",       // 화면 전체 너비
        height: "100vh",      // 화면 전체 높이
        margin: 0,
        padding: 0,
        display: "flex", 
        flexDirection: "column",
        overflow: "hidden"    // 가로 스크롤 방지
      }}
    >
      {/* Header: 전체 너비 */}
      <header 
        style={{ 
          width: "100%",
          padding: "1rem", 
          background: "#e9ecef",
          flexShrink: 0,
          boxSizing: "border-box"
        }}
      >
        <nav style={{ 
          width: "100%",
          padding: "1rem", 
          background: "#f8f9fa",
          boxSizing: "border-box"
        }}>
          <Link 
            to="/" 
            style={{ 
              marginRight: "1rem", 
              textDecoration: "none",
              color: "black"
            }}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{ 
              textDecoration: "none",
              color: "black"
            }}
          >
            About
          </Link>
        </nav>
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
