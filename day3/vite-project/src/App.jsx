import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box-Components/Box'
import Card from './components/Card-Components/Card'
import Todo  from './components/Todo-Component/Todo'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//       <div className="outer">
//       <Box name="Nguyễn Văn Tài" study="Code Intensive" comment="Trở thành master coding là ước mơ của tôi"/>
//       <Box name="Trịnh Mẫn Nhi" study="Web Fullstack" comment="Học nữa, học mãi"/>
//       <Box name="Vũ Long Môn" study="Code for Everyone" comment="Quyết tâm thành thạo Reactjs"/>
//       <Card/>
//       </div>
//   )
// }

// export default App

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      header: "Mobile Wireframes",
      content: "Lên bộ khung ứng dụng thích ứng cho Mobile, có thể lên cả Desktop sau khi đã hoàn thiên",
      assign: "MindX School",
      attach: "3",
      time: "Apr 12"
    },
    {
      id: 2,
      header: "Mobile Wireframes",
      content: "Thực hiện nghiên cứu người dùng để hiểu rõ hơn nhu cầu, thói quen và mong muốn của khách hàng mục tiêu. Từ đó, đưa ra các giải pháp phù hợp nhằm nâng cao trải nghiệm người dùng.",
      assign: "Nguyễn Văn A",
      attach: "1",
      time: "Apr 12"
    },
    {
      id: 3,
      header: "Client Call",
      content: "Cuộc họp trực tuyến với khách hàng để thảo luận về yêu cầu dự án, cập nhật tiến độ và giải quyết các vấn đề phát sinh. Cần chuẩn bị tài liệu và câu hỏi trước cuộc họp.",
      assign: "Trịnh Hồng M",
      attach: "None",
      time: "Apr 2"
    }
  ])
  const handleAddTodo = () => {
    setTodoList([...todoList, {
      id: todoList.length + 1,
      header: "New Todo",
      content: "New Content",
      assign: "New Assign",
      attach: "New Attach",
      time: "New Time",
    }])
  }
  return (
    <div className="Border-Box">
      <div className="Todo-header">
        <div className="LHS">
          <p>Todo</p>
          <p>{todoList.length}</p>
        </div>
        <div className="RHS">
          <button onClick={handleAddTodo}>+</button>
          <p>...</p>
        </div>
      </div>
      {todoList.map((todo) => (
        <Todo 
          key={todo.id}
          header={todo.header} 
          content={todo.content}
          assign={todo.assign} 
          attach={todo.attach} 
          time={todo.time}
        />
      ))}
    </div>
  )
}

export default App;
