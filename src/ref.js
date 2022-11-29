import React from 'react'

export const ref = () => {
    const [name, setName] = useState('')
    const renderCount = useRef(1)

    useEffect(() => {
      renderCount.current = renderCount.current + 1
    })
    
  return (
    <div>
        <input ref = {renderCount} value={name} onChange={e=> setName(e.target.value)}/>
        <div>My name is {name}</div>
        <div>i rendered {renderCount.current}</div>
    </div>
  )
}
