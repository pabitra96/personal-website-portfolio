"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, Bot, User, Loader2, Volume2, VolumeX } from "lucide-react"
import { QUICK_QUESTIONS } from "@/lib/constants"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function PoboChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi, I'm Pobo! 👋\n\nI'm Pabitra's AI assistant and I can help you learn about his work, projects, and expertise. What would you like to know?",
      role: "assistant",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])



  // Play notification sound when chatbot opens
  useEffect(() => {
    if (isOpen && isAudioEnabled && typeof window !== 'undefined') {
      try {
        // Create a simple notification sound using Web Audio API
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        
        // Resume audio context if suspended
        if (audioContext.state === 'suspended') {
          console.log('Audio context suspended, attempting to resume...')
          audioContext.resume().then(() => {
            console.log('Audio context resumed successfully')
            playChatNotificationSound(audioContext)
          }).catch(error => {
            console.error('Failed to resume audio context:', error)
          })
        } else {
          playChatNotificationSound(audioContext)
        }
      } catch (error) {
        console.error('Failed to play chat notification sound:', error)
      }
    }
  }, [isOpen, isAudioEnabled])

  // Play closing notification sound when chatbot closes
  useEffect(() => {
    if (!isOpen && isAudioEnabled && typeof window !== 'undefined') {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        
        if (audioContext.state === 'suspended') {
          audioContext.resume().then(() => {
            playClosingNotificationSound(audioContext)
          }).catch(error => {
            console.error('Failed to resume audio context:', error)
          })
        } else {
          playClosingNotificationSound(audioContext)
        }
      } catch (error) {
        console.error('Failed to play closing notification sound:', error)
      }
    }
  }, [isOpen, isAudioEnabled])

  // Play typing notification sound when chatbot starts typing
  useEffect(() => {
    if (isLoading && isAudioEnabled && typeof window !== 'undefined') {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        
        if (audioContext.state === 'suspended') {
          audioContext.resume().then(() => {
            playTypingNotificationSound(audioContext)
          }).catch(error => {
            console.error('Failed to resume audio context:', error)
          })
        } else {
          playTypingNotificationSound(audioContext)
        }
      } catch (error) {
        console.error('Failed to play typing notification sound:', error)
      }
    }
  }, [isLoading, isAudioEnabled])
  
  // Helper function for chat notification sound
  const playChatNotificationSound = (audioContext: AudioContext) => {
    try {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1)
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2)
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.3)
    } catch (error) {
      console.error('Error playing chat notification sound:', error)
    }
  }

  // Helper function for closing notification sound
  const playClosingNotificationSound = (audioContext: AudioContext) => {
    try {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime + 0.1)
      oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.2)
      
      gainNode.gain.setValueAtTime(0.08, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.3)
    } catch (error) {
      console.error('Error playing closing notification sound:', error)
    }
  }

  // Helper function for typing notification sound
  const playTypingNotificationSound = (audioContext: AudioContext) => {
    try {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      // Create a softer, more subtle typing sound
      oscillator.frequency.setValueAtTime(1200, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.05)
      oscillator.frequency.setValueAtTime(1200, audioContext.currentTime + 0.1)
      
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.15)
    } catch (error) {
      console.error('Error playing typing notification sound:', error)
    }
  }

  // Initialize audio context early to bypass autoplay restrictions
  useEffect(() => {
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      try {
        // Create and resume audio context to enable audio
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        if (audioContext.state === 'suspended') {
          audioContext.resume()
        }
        console.log('Audio context initialized successfully')
      } catch (error) {
        console.error('Failed to initialize audio context:', error)
      }
    }
  }, [])

  // Add click event listener to enable audio on first user interaction
  useEffect(() => {
    const enableAudio = () => {
      if (typeof window !== 'undefined' && 'AudioContext' in window) {
        try {
          const audioContext = new ((window as any).AudioContext || (window as any).webkitAudioContext)()
          if (audioContext.state === 'suspended') {
            audioContext.resume()
          }
          console.log('Audio enabled on user interaction')
        } catch (error) {
          console.error('Failed to enable audio on user interaction:', error)
        }
      }
    }

    // Listen for any user interaction
    document.addEventListener('click', enableAudio, { once: true })
    document.addEventListener('keydown', enableAudio, { once: true })
    document.addEventListener('touchstart', enableAudio, { once: true })

    return () => {
      document.removeEventListener('click', enableAudio)
      document.removeEventListener('keydown', enableAudio)
      document.removeEventListener('touchstart', enableAudio)
    }
  }, [])

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages.slice(-10) // Send last 10 messages for context
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        role: "assistant",
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
      
      // Play notification sound when we get the response
      if (isAudioEnabled) {
        setTimeout(() => {
          playResponseNotificationSound()
        }, 100)
      }
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        role: "assistant",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Function to play notification sound when response is received
  const playResponseNotificationSound = () => {
    if (typeof window !== 'undefined' && isAudioEnabled) {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        
        // Resume audio context if suspended
        if (audioContext.state === 'suspended') {
          audioContext.resume().then(() => {
            playNotificationSound(audioContext)
          }).catch(error => {
            console.error('Failed to resume audio context:', error)
          })
        } else {
          playNotificationSound(audioContext)
        }
      } catch (error) {
        console.error('Failed to play response notification sound:', error)
      }
    }
  }

  // Helper function to play notification sound
  const playNotificationSound = (audioContext: AudioContext) => {
    try {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1)
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2)
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.3)
    } catch (error) {
      console.error('Error playing notification sound:', error)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <div className="flex items-center gap-3">
          {/* Hello Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-gray-200"
          >
            <p className="text-sm font-medium text-gray-800">Hello, I'm Pobo</p>
          </motion.div>
          
          {/* Chat Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </motion.div>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col chatbot-modal
                     left-2 right-2 top-2 bottom-2 max-h-[calc(100vh-1rem)]
                     xl:left-auto xl:right-6 xl:bottom-24 xl:top-auto xl:w-96 xl:h-[500px] xl:max-h-[400px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-t-2xl flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Pobo</h3>
                    <p className="text-xs sm:text-sm text-blue-100">Pabitra's AI Assistant</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* Audio toggle button */}
                  <button
                    onClick={() => {
                      setIsAudioEnabled(!isAudioEnabled)
                    }}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    title={isAudioEnabled ? "Mute notification sounds" : "Unmute notification sounds"}
                  >
                    {isAudioEnabled ? (
                      <Volume2 className="h-4 w-4 text-white" />
                    ) : (
                      <VolumeX className="h-4 w-4 text-white" />
                    )}
                  </button>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="xl:hidden p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] p-2 sm:p-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <div className="text-xs sm:text-sm whitespace-pre-line">{message.content}</div>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 p-2 sm:p-3 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                      <span className="text-xs sm:text-sm text-gray-600">Pobo is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Questions */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <p className="text-xs text-gray-500 text-center">Quick questions:</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {QUICK_QUESTIONS.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setInputValue(question)
                          setTimeout(() => sendMessage(), 100)
                        }}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 sm:px-3 rounded-full hover:bg-blue-100 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-gray-200 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Pabitra..."
                  className="flex-1 px-2 py-2 sm:px-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3"
                >
                  <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 