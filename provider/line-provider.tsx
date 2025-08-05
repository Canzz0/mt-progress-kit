import React from "react"

interface LineProviderBarProps {
  place?: string
  height?: string
  bgColor?: string
}

const LineProviderBar: React.FC<LineProviderBarProps> = ({place='top', height='4px', bgColor='#007bff'}) => {
   return (
      <div style={{
         position: 'fixed',
         [place]: 0,
         left: 0,
         width: '100%',
         height: height,
         backgroundColor: bgColor,
         zIndex: 9999,
         animation: 'progressAnimation 0.8s ease-in-out'
      }}>
         <style>{`
            @keyframes progressAnimation {
               0% { width: 0%; }
               50% { width: 70%; }
               100% { width: 100%; }
            }
         `}</style>
      </div>
   )
}

export default LineProviderBar 