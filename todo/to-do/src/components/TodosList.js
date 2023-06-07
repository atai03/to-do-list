import React from 'antd'
import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined 
} from '@ant-design/icons';

const TodosList=({todos, setTodos, setEditTodo})=> {
   const handleComplete = (todo) =>{
     setTodos(
       todos.map((Item)=>{
         if(Item.id === todo.id){
           return{...Item, completed: !Item.completed}
         }
         return Item;
       })
     );
   };
    
   const handleEdit = ({id}) =>{
      const findTodo = todos.find((todo)=> todo.id === id);
      setEditTodo(findTodo);
   }
  const handleDelete =({id}) => { 
  setTodos(todos.filter((todo)=> todo.id !==id))
  }
  return (
    <div>
        {todos.map((todo) => ( 
        <li className="list-item" key={todo.id}>
         <input 
         type="text" 
         value={todo.title} 
         className={`list ${todo.completed ? "complete" : ""}`}
         onChange={(event) => event.preventDefault()}
         />
         <div>
           <button className='button-complete task-button' onClick={()=> handleComplete(todo)}>
           <CheckCircleOutlined />
             </button>
             <button className='button-edit task-button' onClick={()=> handleEdit(todo)}>
             <EditOutlined />
             </button>
             <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>
             <DeleteOutlined />
           </button>
         </div>
        </li>
        ))}
    </div>
    );
};

export default TodosList;