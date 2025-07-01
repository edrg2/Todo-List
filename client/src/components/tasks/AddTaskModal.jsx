import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";

export default function AddTaskModal({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState("");
  const [subtasks, setSubTasks] = useState([]);
  const [priority, setPriority] = useState("N");
  const [tag, setTag] = useState("");
  const [notes, setNotes] = useState("");
  const [isOnTop, setIsOnTop] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) {
      alert("任務名稱不可為空!");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      name: taskName,
      subtasks: subtasks,
      priority: priority,
      tag: tag,
      notes: notes,
      isOnTop: isOnTop,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    dispatch(addTask(newTask));

    setTaskName("");
    setSubTasks([]);
    setPriority("N");
    setTag("");
    setNotes("");
    setIsOnTop(false);
    onClose();
  };

  return (
    <div className="add-task-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          {/* 輸入 */}
          <input
            type="text"
            placeholder="輸入新任務..."
            value={taskName}
            onChange={(e) => e.target.value}
          />
          {/* 項目 */}
          <select className="project"></select>
          {/* 提醒 */}
          <></>
          {/* 番茄鐘 */}
          <></>
          {/* 子任務 */}
          {/* <button></button> or NewComponent */}
          {/* 優先級 */}
          <></>
          {/* 標籤 */}
          <></>
          {/* 備忘錄 */}
          <button></button>
          {/* <textarea
            placeholder="備忘錄..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea> */}
          {/* 至頂 */}
          <></>
          <button type="submit" className="submit-btn">
            新增
          </button>
        </form>
      </div>
    </div>
  );
}
