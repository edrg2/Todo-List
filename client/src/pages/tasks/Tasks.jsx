import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tabs from "../../components/tasks/Tabs";
import InfoColumn from "../../components/tasks/InfoColumn";
import TodayTasks from "./TodayTasks";
import WeekTasks from "./WeekTasks";
import LaterTasks from "./LaterTasks";
import AddTaskModal from "../../components/tasks/AddTaskModal";

const validTabs = ["today", "week", "later"];

export default function Tasks() {
  const isMobile = useSelector((state) => state.layout.isMobile);
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("today");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (validTabs.includes(category)) {
      setActiveTab(category);
    } else {
      navigate("/today");
    }
  }, [navigate, category]);

  return (
    <div className="tasks">
      {/* Mobile only */}
      {isMobile && (
        <Tabs activeTab={activeTab} onChange={(tab) => navigate(`/${tab}`)} />
      )}

      {/* Desktop only */}
      {/* <nav></nav> or import <... /> */}
      {/* "新增Todo" 按鈕 */}
      <button className="add-task-btn" onClick={() => setIsModalOpen(true)}>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-plus" />
      </button>

      {/* "新增Todo" 視窗 */}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* 資訊欄 */}
      <InfoColumn />

      {/* 任務欄 */}
      {activeTab === "today" && <TodayTasks />}
      {activeTab === "week" && <WeekTasks />}
      {activeTab === "later" && <LaterTasks />}
    </div>
  );
}
