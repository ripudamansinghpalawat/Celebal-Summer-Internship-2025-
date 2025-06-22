import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialData = [
  { id: "1", content: "Task 1" },
  { id: "2", content: "Task 2" },
  { id: "3", content: "Task 3" },
];

export default function KanbanBoard() {
  const [tasks, setTasks] = useState(initialData);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);

    setTasks(items);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kanban Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="kanban">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      className="p-4 mb-3 bg-white dark:bg-gray-700 rounded-lg shadow border border-gray-200 dark:border-gray-600"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {task.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
