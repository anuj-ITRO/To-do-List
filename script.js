function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  li.innerHTML = `
    ${task}
    <button onclick="this.parentElement.remove()">Delete</button>
  `;
  taskList.appendChild(li);
  input.value = "";
}