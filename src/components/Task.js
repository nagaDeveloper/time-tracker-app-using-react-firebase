import React, { useEffect, useState } from "react";
import {
  getFirestore,
  updateDoc,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { BsCircleFill } from "react-icons/bs";
import { format } from "date-fns";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCalendar,
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
  AiOutlineReload,
} from "react-icons/ai";
import { FaCheck, FaTimes } from "react-icons/fa";
import app from "../firebase/config";

//instance of firestore
const db = getFirestore(app);
function Task({ task }) {
  //=====
  //Local state
  //=====
  const [localTask, setLocalTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskDescription, setNewTaskDescription] = useState(localTask.task);

  //Handle Edit
  const handleEdit = () => {
    setIsEditing(true);
  };

  //Handle cancel Edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewTaskDescription(localTask.task);
  };

  //Handle Update
  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, "tasks", localTask.id), {
        task: newTaskDescription,
      });
      //Update the state
      setLocalTask((prevSate) => ({ ...prevSate, task: newTaskDescription }));
      setIsEditing(false);
    } catch (error) {}
  };

  //Handle renderTaskDescription
  const renderTaskDescription = () => {
    if (isEditing) {
      return (
        <div className="flex space-x-2">
          <input
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            className="border border-purple-300 rounded px-2 py-1"
          />
          <FaCheck
            onClick={handleUpdate}
            className="text-green-400 cursor-pointer"
          />
          <FaTimes
            onClick={handleCancelEdit}
            className="text-red-400 cursor-pointer"
          />
        </div>
      );
    }

    return <p className="text-gray-600">{task.task}</p>;
  };

  //Handle start
  const handleStart = async () => {
    try {
      await updateDoc(doc(db, "tasks", localTask.id), {
        status: "in_progress",
        startTime: Date.now(),
      });
      const taskDoc = doc(db, "tasks", localTask.id);
      onSnapshot(taskDoc, (docSnap) => {
        if (docSnap.exists()) {
          setLocalTask({
            ...docSnap.data(),
            date: localTask.date,
            id: localTask.id,
          });
        }
      });
    } catch (error) {
      console.log("Error starting task:", error);
    }
  };

  //Handle pause
  const handlePause = async () => {
    try {
      const elapsed = localTask.startTime
        ? Date.now() - localTask.startTime
        : 0;
      const newTotalTime = (localTask.totalTime || 0) + elapsed;
      await updateDoc(doc(db, "tasks", localTask.id), {
        status: "paused",
        endTime: Date.now(),
        totalTime: newTotalTime,
      });
      const taskDoc = doc(db, "tasks", localTask.id);
      onSnapshot(taskDoc, (docSnap) => {
        if (docSnap.exists()) {
          setLocalTask({
            ...docSnap.data(),
            date: localTask.date,
            id: localTask.id,
          });
        }
      });
    } catch (error) {
      console.log("Error pausing task:", error);
    }
  };

  //Handle delete
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "tasks", localTask.id));
      alert("Task Deleted successfully");
    } catch (error) {
      alert("Task Deleted failed");
    }
  };

  //Handle render buttons
  const handleRenderButtons = () => {
    switch (localTask.status) {
      case "unstarted":
        return (
          <AiOutlinePlayCircle
            className="text-2xl text-purple-400 cursor-pointer"
            onClick={handleStart}
          />
        );

      case "in_progress":
        return (
          <AiOutlinePauseCircle
            className="text-2xl text-green-400 cursor-pointer"
            onClick={handlePause}
          />
        );
      default:
      case "unstarted":
        return (
          <AiOutlineReload
            className="text-2xl text-green-400 cursor-pointer"
            onClick={handleStart}
          />
        );
    }
  };

  return (
    <div className="bg-white p-4 rounded-md text-black shadow-lg flex flex-col md:flex-row md:items-center justify-between">
      <div className="md:space-x-2 space-y-2 md:space-y-0">
        {/* render description */}
        {renderTaskDescription()}
        <div className="flex items-center space-x-2">
          <AiOutlineCalendar className="text-gray-600" />
          <p className="text-gray-600">
            {format(new Date(localTask.date), "do MMM yyyy")}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 justify-center">
        <BsCircleFill
          color={
            localTask.status === "paused"
              ? "red"
              : localTask.status === "in_progress"
              ? "green"
              : "yellow"
          }
        />
        <p>{localTask.status}</p>
      </div>
      <div className="flex items-center space-x-2 justify-center md:justify-end">
        {/* Render buttons */}
        {handleRenderButtons()}
        <AiOutlineEdit
          onClick={handleEdit}
          className="text-2xl text-purple-400 cursor-pointer"
        />
        <AiOutlineDelete
          onClick={handleDelete}
          className="text-2xl text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Task;
