import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Tabs from "../../components/tasks/tabs";
import TodayTasks from "./TodayTasks";
import WeekTasks from "./WeekTasks";
import LaterTasks from "./LaterTasks";

const validTabs = ["today", "week", "later"];

export default function Tasks() {
  const isMobile = useSelector((state) => state.layout.isMobile);
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("today");

  useEffect(() => {
    if (validTabs.includes(category)) {
      setActiveTab(category);
    } else {
      navigate("/today");
    }
  }, [navigate, category]);

  return (
    <div className="tasks">
      {isMobile && (
        <Tabs activeTab={activeTab} onChange={(tab) => navigate(`/${tab}`)} />
      )}
      {activeTab === "today" && <TodayTasks />}
      {activeTab === "week" && <WeekTasks />}
      {activeTab === "later" && <LaterTasks />}
    </div>
  );
}
