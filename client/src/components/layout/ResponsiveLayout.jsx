import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMobile } from "../../features/layout/layoutSlice"; // 匯入 action
import MobileNavBar from "../navigation/MobileNavBar";
import DesktopNavBar from "../navigation/DesktopNavBar";

export default function ResponsiveLayout({ children }) {
  const dispatch = useDispatch();

  // 讀取 Redux 裡的狀態
  const isMobile = useSelector((state) => state.layout.isMobile);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth < 768));
    };

    // 初始化也要設定一次（保險）
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <>
      {isMobile ? <MobileNavBar /> : <DesktopNavBar />}
      <main>{children}</main>
    </>
  );
}
