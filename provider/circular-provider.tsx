import React from "react"

interface CircularProviderBarProps {
  bgColor?: string
  height?: string
}

const CircularProviderBar: React.FC<CircularProviderBarProps> = ({bgColor='#007bff', height='100px'}) => {
   return (
      <div style={{
        justifyContent:'center',
        alignItems:'center',
         position: 'fixed',
         top: 0,
         left: 0,
         width: '100%',
         height: '100%',
         backgroundColor: 'rgba(0, 0, 0, 0.6)',
         backdropFilter: 'blur(10px)',
         WebkitBackdropFilter: 'blur(10px)',
         zIndex: 9999,
      }}>
         
         <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
         }}>
            <div style={{
               border: '6px solid #f3f3f3',
               borderTop: `6px solid ${bgColor}`,
               borderRadius: '50%',
               width: height,
               height: height,
               animation: 'spin 1s linear infinite'
            }} />
            <style>{`
               @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
               }
               
               @keyframes progressAnimation {
                  0% { 
                     opacity: 0;
                     backdrop-filter: blur(0px);
                     -webkit-backdrop-filter: blur(0px);
                  }
                  100% { 
                     opacity: 0.7;
                     backdrop-filter: blur(10px);
                     -webkit-backdrop-filter: blur(10px);
                  }
               }
            `}</style>
         </div>
      </div>
   )
}

export default CircularProviderBar 