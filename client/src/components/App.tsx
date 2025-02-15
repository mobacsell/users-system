import AddForm from "./AddForm/AddForm";
import { Sizes, Themes } from "../enums/enums";

function App() {
  return (
    <AddForm
      title="Добавить пользователя"
      action=""
      size={Sizes.MD}
      theme={Themes.BLUE}
      inputs={[
        {
          type: "text",
          title: "Имя пользователя",
          id: "userName",
        },
        {
          type: "text",
          title: "Возраст",
          id: "userAge",
        },
        {
          type: "dropdown",
          labelText: "Роль",
          values: ["Пользователь", "Продвинутый пользователь", "Администратор"],
        },
        {
          type: "button",
          value: "Сохранить",
        },
      ]}
    />
  );
}

export default App;
