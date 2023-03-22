import { useState } from "react"
import Board from "./components/board"
import Square from "./components/square"

// component Base

// Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
const App = () => {
    return <div className="h-[100vh] flex flex-col justify-center items-center">
        {/* <Board>
            {/* <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/> */}

        {/* </Board> */} */}

    </div>
}

export default App