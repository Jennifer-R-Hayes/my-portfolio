"use client";

import { useState } from "react";
import { FaFileAlt, FaPlusCircle, FaTrash, FaCheckCircle, FaUpload } from "react-icons/fa";
import IconWithFallback from "@/components/IconWithFallback";

export default function IntranetLiteDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Update client contract", completed: false },
    { id: 2, title: "Review Q4 pricing model", completed: true },
  ]);

  const [files, setFiles] = useState([
    { id: 1, name: "Q4_Report.pdf", size: "1.2 MB", uploadedBy: "Jennifer Hayes" },
    { id: 2, name: "Vendor_Contract.docx", size: "640 KB", uploadedBy: "Operations Team" },
  ]);

  const [newTask, setNewTask] = useState("");
  const [newFile, setNewFile] = useState("");

  // Handle adding new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
    setNewTask("");
  };

  // Toggle task completion
  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // Delete task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Handle file upload mock
  const uploadFile = () => {
    if (newFile.trim() === "") return;
    setFiles([
      ...files,
      {
        id: Date.now(),
        name: newFile,
        size: "500 KB",
        uploadedBy: "Jennifer Hayes",
      },
    ]);
    setNewFile("");
  };

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Intranet Lite</h1>
      <p className="text-gray-700 mb-8 max-w-3xl">
        A lightweight internal portal for managing files and tasks. This demo simulates
        the experience of a secure intranet built with Next.js, Supabase, and Clerk.
      </p>

      {/* Dashboard Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* --- Task Manager --- */}
        <div className="p-6 bg-white rounded-2xl shadow">
          {/* <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <FaCheckCircle className="text-blue-600" /> Task Manager
          </h2> */}
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <IconWithFallback icon={<FaCheckCircle className="text-blue-600" />} emoji="✅" label="Task Manager" />
            Task Manager
          </h2>


          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Add new task..."
              className="flex-1 border rounded-lg px-3 py-2"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              onClick={addTask}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1"
            >
              <FaPlusCircle /> Add
            </button>
          </div>

          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex justify-between items-center p-3 rounded-lg border ${
                  task.completed ? "bg-green-50 border-green-200" : "bg-gray-50"
                }`}
              >
                <span
                  className={`cursor-pointer ${
                    task.completed ? "line-through text-gray-500" : "text-gray-800"
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.title}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* --- File Manager --- */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <FaFileAlt className="text-blue-600" /> File Manager
          </h2>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter file name..."
              className="flex-1 border rounded-lg px-3 py-2"
              value={newFile}
              onChange={(e) => setNewFile(e.target.value)}
            />
            <button
              onClick={uploadFile}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1"
            >
              <FaUpload /> Upload
            </button>
          </div>

          <table className="w-full text-left border-t">
            <thead>
              <tr className="border-b">
                <th className="py-2">File Name</th>
                <th>Size</th>
                <th>Uploaded By</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 text-blue-600 flex items-center gap-2">
                    <FaFileAlt /> {file.name}
                  </td>
                  <td>{file.size}</td>
                  <td>{file.uploadedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-sm text-gray-500 mt-8">
        * Demo version using mocked data. Future versions integrate Clerk authentication and Supabase backend.
      </p>
    </section>
  );
}


{/* <IconWithFallback icon={<FaFileAlt className="text-blue-600" />} emoji="📁" label="File Manager" />
<IconWithFallback icon={<FaTrash />} emoji="🗑️" />
<IconWithFallback icon={<FaUpload />} emoji="⬆️" />
<IconWithFallback icon={<FaPlusCircle />} emoji="➕" /> */}
