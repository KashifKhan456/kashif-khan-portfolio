import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { chatWithKashif } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export default function CommandCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      parts: [{ text: "Hello! I'm Kashif's digital twin. Ask me anything about his experience, projects, or technical skills." }] 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', parts: [{ text: input }] };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const aiResponse = await chatWithKashif(newMessages);
    setMessages([...newMessages, { role: 'model', parts: [{ text: aiResponse || "I encountered an error." }] }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-8 z-[60] bg-white text-black p-4 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <MessageSquare className="w-6 h-6 relative z-10 group-hover:text-white transition-colors" />
        <motion.div 
           animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="absolute -top-1 -right-1 bg-blue-500 w-3 h-3 rounded-full border-2 border-white" 
        />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-4 right-4 bottom-4 w-full max-w-[400px] bg-[#0A0A0A] border border-white/10 rounded-[2rem] z-[101] shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0A0A0A]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-white">Digital Twin</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest overflow-hidden h-4">
                       <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>Online & Ready</motion.span>
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages area */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                      msg.role === 'user' ? 'bg-white/5 border-white/10' : 'bg-blue-600/10 border-blue-500/20'
                    }`}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-gray-400" /> : <Sparkles className="w-4 h-4 text-blue-500" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-white/[0.03] text-gray-300 border border-white/5 rounded-tl-none'
                    }`}>
                      {msg.parts[0].text}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 rounded-tl-none flex gap-1">
                      {[0, 1, 2].map(d => (
                        <motion.div 
                          key={d}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.2 }}
                          className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input area */}
              <div className="p-6 border-t border-white/5 bg-white/[0.01]">
                <div className="relative group">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask anything..."
                    className="w-full bg-[#151515] border border-white/10 py-4 pl-6 pr-14 rounded-2xl text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="mt-4 text-[9px] text-center text-gray-700 font-bold uppercase tracking-[0.2em] pointer-events-none">
                  Powered by Gemini Flash 3.0
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
