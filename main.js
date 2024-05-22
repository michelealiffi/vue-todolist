const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [
        {
          name: "Task 1",
          type: true,
        },
        {
          name: "Task 2",
          type: true,
        },
        {
          name: "Task 3",
          type: false,
        },
        {
          name: "Task 4",
          type: false,
        },
        {
          name: "Task 5",
          type: true,
        },
        {
          name: "Task 6",
          type: false,
        },
        {
          name: "Task 7",
          type: true,
        },
        {
          name: "Task 8",
          type: true,
        },
        {
          name: "Task 9",
          type: false,
        },
      ],
      newTask: {
        name: "",
        type: false,
      },
    };
  },
  methods: {
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
    pushNewTask() {
      const newObject = { ...this.newTask };
      if (newObject.name.length < 1) {
        alert("Il valore inserito non é corretto. Ritenta");
        return;
      }
      this.tasks.push(newObject);
      this.newTask.name = "";
    },
    setTypeStatus(task) {
      task.type = !task.type;
    },
  },
});
app.mount("#app");