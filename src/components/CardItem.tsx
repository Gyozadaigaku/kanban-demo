import React from "react";
import Image from "next/dist/client/image";
import {
  PlusIcon,
  ChatBubbleLeftRightIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import { Draggable } from "react-beautiful-dnd";

const CardItem = ({ data, index }) => {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="m-3 mt-0 rounded-md bg-white p-3 last:mb-0"
        >
          <label
            className={`rounded
              bg-gradient-to-r px-2 py-1 text-sm text-white
              ${
                data.priority === 0
                  ? "from-blue-600 to-blue-400"
                  : data.priority === 1
                  ? "from-green-600 to-green-400"
                  : "from-red-600 to-red-400"
              }
              `}
          >
            {data.priority === 0
              ? "Low Priority"
              : data.priority === 1
              ? "Medium Priority"
              : "High Priority"}
          </label>
          <h5 className="text-md my-3 text-lg leading-6">{data.title}</h5>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <span className="flex items-center space-x-1">
                <ChatBubbleLeftRightIcon className="h-4 w-4 text-gray-500" />
                <span>{data.chat}</span>
              </span>
              <span className="flex items-center space-x-1">
                <PaperClipIcon className="h-4 w-4 text-gray-500" />
                <span>{data.attachment}</span>
              </span>
            </div>

            <ul className="flex space-x-3">
              {data.assignees.map((ass, index) => {
                return (
                  <li key={index}>
                    <Image
                      src={ass.avt}
                      width="36"
                      height="36"
                      style={{ objectFit: "cover" }}
                      className=" rounded-full "
                      alt={index}
                    />
                  </li>
                );
              })}
              <li>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed
                    border-gray-500"
                >
                  <PlusIcon className="h-5 w-5 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
