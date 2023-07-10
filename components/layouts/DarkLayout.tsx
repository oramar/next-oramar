import {  ReactNode } from 'react'

const DarkLayout = ({children}: {children: ReactNode}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        
    <div>
        {children}
    </div>
        
    </div>
  )
}

export default DarkLayout