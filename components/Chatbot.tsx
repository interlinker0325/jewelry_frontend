'use client'

import React, { useState, useRef, useEffect } from 'react'
import { X, Send, Gift, Percent, ShoppingBag, User, Bot } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '👋 Hello! Welcome! I\'m here to help you with any questions.',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 2000)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('discount') || input.includes('sale') || input.includes('offer')) {
      return '🎉 Great question! We have several ongoing offers:\n• 20% off new customers (WELCOME20)\n• 15% off orders over $100 (SAVE15)\n• Free shipping on orders over $75\n\nWould you like me to help you apply one of these?'
    }
    
    if (input.includes('gift') || input.includes('free')) {
      return '🎁 Yes! We\'re currently offering a free mystery gift with every order over $50. The gift changes monthly and is always a surprise!'
    }
    
    if (input.includes('shipping') || input.includes('delivery')) {
      return '🚚 We offer:\n• Free shipping on orders over $75\n• Standard shipping: $5.99 (3-5 business days)\n• Express shipping: $12.99 (1-2 business days)\n• Same-day delivery available in select areas'
    }
    
    if (input.includes('return') || input.includes('refund')) {
      return '✅ We have a 30-day return policy for all items. Returns are free and easy - just contact our customer service team and we\'ll help you process your return.'
    }
    
    if (input.includes('help') || input.includes('support')) {
      return '🤝 I\'m here to help! You can ask me about:\n• Products and availability\n• Discounts and promotions\n• Shipping and returns\n• Order status\n• General questions\n\nOr type "human" to speak with our team!'
    }
    
    if (input.includes('human') || input.includes('agent') || input.includes('team')) {
      return '👨‍💼 I\'ll connect you with our customer service team right away. They\'ll be with you in just a moment. In the meantime, is there anything else I can help you with?'
    }
    
    return 'Thanks for your message! Our team will review it and get back to you soon. In the meantime, feel free to browse our latest products or ask me about our current offers!'
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Window - Always Visible with Specific Dimensions */}
      <div className="chat-window flex flex-col">
        {/* Chat Header */}
        <div className="chat-header flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Store Assistant</h3>
                <p className="text-sm text-white/90">Online • Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Body */}
        <div className="chat-body flex-1 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'chat-message animate-slide-up',
                message.sender === 'user' ? 'user' : 'bot'
              )}
            >
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-gray-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="chat-message bot animate-fade-in">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Footer - Always Visible */}
        <div className="chat-footer flex-shrink-0">
          <div className="flex space-x-2">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="chat-input flex-1 resize-none"
              disabled={isTyping}
              rows={1}
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="chat-button"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          {/* Quick Action Buttons */}
          <div className="flex space-x-2 mt-3">
            <button
              onClick={() => setInputValue('What discounts do you have?')}
              className="discount-badge hover:bg-green-200 transition-colors cursor-pointer"
            >
              <Percent className="w-4 h-4 mr-1" />
              Discounts
            </button>
            <button
              onClick={() => setInputValue('Tell me about free gifts')}
              className="gift-badge hover:bg-purple-200 transition-colors cursor-pointer"
            >
              <Gift className="w-4 h-4 mr-1" />
              Free Gifts
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatbot
