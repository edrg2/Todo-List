import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMobile } from "../../features/layout/layoutSlice";
import MobileNavBar from "../navigation/MobileNavBar";
import DesktopNavBar from "../navigation/DesktopNavBar";

export default function ResponsiveLayout({ children }) {
  const dispatch = useDispatch();

  // 讀取 Redux 預設狀態
  const isMobile = useSelector((state) => state.layout.isMobile);

  // 更新 Redux 狀態
  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth < 768));
    };
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
