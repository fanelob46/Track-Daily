import TaskCard from "./TaskCard";

const TaskGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center justify-center border border-blue-400 p-4 w-[50%]">
      <TaskCard
        title={"Attend Yoga"}
        date={"23 November 2023"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores excepturi eligendi tenetur ad debitis quae? Nulla perspiciatis assumenda perferendis molestiae beatae itaque quidem recusandae optio, quam expedita iste eius?"
        }
        tag={"Gym"}
      />
      <TaskCard
        title={"Attend Yoga"}
        date={"23 November 2023"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores excepturi eligendi tenetur ad debitis quae? Nulla perspiciatis assumenda perferendis molestiae beatae itaque quidem recusandae optio, quam expedita iste eius?"
        }
        tag={"Gym"}
      />
      <TaskCard
        title={"Attend Yoga"}
        date={"23 November 2023"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores excepturi eligendi tenetur ad debitis quae? Nulla perspiciatis assumenda perferendis molestiae beatae itaque quidem recusandae optio, quam expedita iste eius?"
        }
        tag={"Gym"}
      />
      <TaskCard
        title={"Attend Yoga"}
        date={"23 November 2023"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores excepturi eligendi tenetur ad debitis quae? Nulla perspiciatis assumenda perferendis molestiae beatae itaque quidem recusandae optio, quam expedita iste eius?"
        }
        tag={"Gym"}
      />
    </div>
  );
};

export default TaskGrid;
