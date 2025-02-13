import { defineStore } from "pinia";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskList {
  [date: string]: Task[];
}

const produceNewTask = (taskTitle: string) => ({
  id: Date.now(),
  title: taskTitle,
  completed: false,
});

export const useTaskStore = defineStore("tasks", {
  state: () => {
    return {
      taskLists: {} as TaskList,
      currentDay: new Date().toLocaleDateString(),
    };
  },
  getters: {
    getTasksForCurrentDay: (state) => state.taskLists[state.currentDay] || [],
  },
  actions: {
    setTasksForCurrentDat(date: string, tasks: Task[]) {
      this.taskLists[date] = tasks;
    },
    addTask(taskTitle: string) {
      const newTask = produceNewTask(taskTitle);
      if (this.taskLists[this.currentDay]) {
        this.taskLists[this.currentDay].push(newTask);
      } else {
        this.taskLists[this.currentDay] = [newTask];
      }
    },
    updateTask(updatedTask: Task) {
      const tasks = this.taskLists[this.currentDay];
      const index = tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        tasks.splice(index, 1, updatedTask);
      }
    },
    removeTask(taskId: number) {
      this.taskLists[this.currentDay] = this.taskLists[this.currentDay].filter(
        (t) => !(t.id === taskId)
      );
    },
    removeCompletedTasks() {
      this.taskLists[this.currentDay] = this.taskLists[this.currentDay].filter(
        (t) => !t.completed
      );
    },
    setCurrentDate(date: string) {
      console.log("date in store", date);
      this.currentDay = date;
    },
  },
});
