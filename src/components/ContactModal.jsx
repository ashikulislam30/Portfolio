import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { countryCodes } from '../data/countryCodes';

export default function ContactModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Default to first (GB)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCountryChange = (e) => {
        const country = countryCodes.find(c => c.code === e.target.value);
        setSelectedCountry(country);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error('Telegram credentials missing');
            alert('Error: Telegram Bot Token or Chat ID is missing. Please check your .env file.');
            setStatus('error');
            return;
        }

        const fullPhone = `${selectedCountry.dial_code} ${formData.phone}`;

        const text = `
📩 *New Contact Message*

👤 *Name:* ${formData.name}
📱 *Phone:* ${fullPhone}
📧 *Email:* ${formData.email}
📝 *Message:*
${formData.message}
    `;

        try {
            const response = await fetch(`/api/telegram/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', email: '', message: '' });
                setTimeout(() => {
                    setStatus('idle');
                    onClose();
                }, 3000);
            } else {
                const errorText = await response.text();
                console.error('Telegram Error:', response.status, response.statusText, errorText);
                alert(`Failed to send message: Server responded with ${response.status} ${response.statusText}`);
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert(`Failed to send: ${error.message}`);
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h2 className="text-3xl font-bold text-white mb-2">Contact</h2>
                            <p className="text-white/60 mb-8">Get in touch with me. I will get back to you as soon as possible.</p>

                            {status === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-white/60">Thanks for reaching out. I'll be in touch soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-1">Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-teal-400 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-1">Phone *</label>
                                            <div className="flex">
                                                <div className="relative">
                                                    {/* Custom Display */}
                                                    <div className="absolute inset-0 flex items-center px-3 pointer-events-none text-white border-r border-white/10 bg-white/5 rounded-l-lg">
                                                        <img src={selectedCountry.flagUrl} alt={selectedCountry.name} className="w-6 h-4 mr-2 object-cover rounded-sm" />
                                                        <span className="text-sm text-white/90">{selectedCountry.dial_code}</span>
                                                        <svg className="w-4 h-4 ml-2 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>

                                                    {/* Invisible Native Select for Functionality */}
                                                    <select
                                                        value={selectedCountry.code}
                                                        onChange={handleCountryChange}
                                                        className="opacity-0 w-[110px] h-full cursor-pointer"
                                                    >
                                                        {countryCodes.map((country) => (
                                                            <option key={country.code} value={country.code} className="text-black">
                                                                {country.flag} {country.name} ({country.dial_code})
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="123 456 7890"
                                                    className="w-full bg-white/5 border border-white/10 rounded-r-lg px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-teal-400 transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-1">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-teal-400 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-1">Message *</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project or just say hello..."
                                            rows={4}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                Send Message
                                            </>
                                        )}
                                    </button>

                                    {status === 'error' && (
                                        <p className="text-red-400 text-sm text-center mt-2">Failed to send message. Please try again.</p>
                                    )}
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
