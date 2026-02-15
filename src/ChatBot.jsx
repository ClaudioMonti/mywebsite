import React, { useState, useEffect, useRef } from 'react';
import knowledgeBase from './data/knowledgeBase.json';
import { processMessage } from './chatbotEngine';

const ChatBot = ({ language, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const greeting = language === 'it'
      ? 'Ciao! Sono Guestore, il tuo assistente virtuale. Chiedimi qualsiasi cosa sulla casa!'
      : 'Hello! I\'m Guestore, your virtual assistant. Ask me anything about the house!';
    setMessages([{ sender: 'bot', text: greeting }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text || isTyping) return;

    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputValue('');
    setIsTyping(true);

    const delay = 600 + Math.random() * 400;
    setTimeout(() => {
      const { response } = processMessage(text, language, knowledgeBase);
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
      setIsTyping(false);
    }, delay);
  };

  return (
    <div className="chatbot-body">
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chatbot-msg chatbot-msg-${msg.sender}`}>
            <div className="chatbot-msg-content">
              {msg.text.split('\n').map((line, j) => (
                <p key={j}>{line}</p>
              ))}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="chatbot-msg chatbot-msg-bot">
            <div className="chatbot-typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form className="chatbot-input" onSubmit={handleSend}>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={language === 'it' ? 'Scrivi un messaggio...' : 'Type a message...'}
        />
        <button type="submit" disabled={isTyping}>
          &#10148;
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
