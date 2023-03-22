import { useState } from "react"
import Avavtar from "./components/avatar"

// component Base

// Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
const App = () => {
    const [times,setTimes] = useState();
    const today = new Date();
    const time = today.getHours() + "giờ" + today.getMinutes() + "phút" + today.getSeconds() + "giây";
    function change(){
        setTimes(time)
    }

    // function increase(){
    //     setCounter(counter+1)
    // }
    // console.log(counter);
    // JSX
    return <div className="h-[100vh] flex flex-col justify-center items-center">
        {/* <h1>{counter}</h1>
        <button onClick={increase} className="border hover:bg-pink-500">tang</button> */}
        <h1>{times}</h1>
        <button onClick={change} className="border hover:bg-pink-500">upTime</button>
    </div>
    
}

export default App