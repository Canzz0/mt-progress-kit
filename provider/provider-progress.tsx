// Next.js için gerekli direktif - Vite'da yok sayılır
"use client"

import React, { useEffect, useState, useCallback, useRef } from "react"
import LineProviderBar from "./line-provider"
import CircularProviderBar from "./circular-provider"

interface ProviderProgressProps {
  height?: string
  bgColor?: string
  type?: 'line' | 'circular'
  place?: string
}

const ProviderProgress: React.FC<ProviderProgressProps> = ({ height = '4px', bgColor = '#007bff', type = 'line', place = 'top' }) => {
   const [progress, setProgress] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const currentUrlRef = useRef('')

   const handleUrlChange = useCallback(() => {
      const newUrl = window.location.href
      if(newUrl !== currentUrlRef.current){
         currentUrlRef.current = newUrl
         
         // State güncellemelerini setTimeout ile geciktir
         setTimeout(() => {
            setProgress(true)
            setIsLoading(true)
            
            setTimeout(() => {
               setProgress(false)
               setIsLoading(false)
            }, 1000)
         }, 0)
      }
   }, [])

   useEffect(() => {
      // İlk yüklemede currentUrl'i ayarla
      currentUrlRef.current = window.location.href

      // Sayfa yüklendiğinde loading state'ini true yap
      const handleLoadStart = () => {
         setTimeout(() => {
            setIsLoading(true)
         }, 0)
      }

      const handleLoadEnd = () => {
         setTimeout(() => {
            setIsLoading(false)
         }, 0)
      }

      // Sayfa yükleme olaylarını dinle
      window.addEventListener('beforeunload', handleLoadStart)
      window.addEventListener('load', handleLoadEnd)

      //tarayıcı butonları geri,ileri gibi butonların dinlemek için 'popstate' kullanıyoruz
      window.addEventListener('popstate', handleUrlChange)
      
      const originalPushState = window.history.pushState
      const originalReplaceState = window.history.replaceState
      
      window.history.pushState = function(...args) {
         originalPushState.apply(window.history, args)
         setTimeout(() => {
            handleUrlChange()
         }, 0)
      }
      
      window.history.replaceState = function(...args) {
         originalReplaceState.apply(window.history, args)
         setTimeout(() => {
            handleUrlChange()
         }, 0)
      }

      return () => {
         window.removeEventListener('popstate', handleUrlChange)
         window.removeEventListener('beforeunload', handleLoadStart)
         window.removeEventListener('load', handleLoadEnd)
         window.history.pushState = originalPushState
         window.history.replaceState = originalReplaceState
      }
   }, [handleUrlChange])

   return (
      <>
      {(progress || isLoading) && (
           type === 'line' ? <LineProviderBar height={height} bgColor={bgColor} place={place} /> : <CircularProviderBar bgColor={bgColor} height={height} />
      )}
      </>
   )
}

export default ProviderProgress 