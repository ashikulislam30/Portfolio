import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const gears = [
    {
        category: 'Devices',
        items: [
            { name: 'Custom Gaming PC', detail: 'i5-12400, RTX 3070 Ti, 16GB RAM, 512GB NVMe' },
            { name: 'Dual Monitor Setup', detail: '240Hz + IPS' },
            { name: 'Rapoo V500 Pro', detail: 'Mechanical Keyboard' },
            { name: 'Razer Viper Mini', detail: 'Mouse' },
            { name: 'FANTECH HG11 7.1', detail: 'Headset' }
        ]
    },
    {
        category: 'Web Extensions',
        items: [
            { name: 'AdGuard', detail: 'Ad Blocker', link: 'https://adguard.com/' },
            { name: 'React Developer Tools', detail: 'Debugging', link: 'https://react.dev/learn/react-developer-tools' },
            { name: 'daily.dev', detail: 'Developer News', link: 'https://daily.dev/' },
            { name: 'Grammarly', detail: 'Writing Assistant', link: 'https://www.grammarly.com/' },
            { name: 'Wappalyzer', detail: 'Tech Stack Detector', link: 'https://www.wappalyzer.com/' },
            { name: 'ColorZilla', detail: 'Color Picker', link: 'https://www.colorzilla.com/' }
        ]
    },
    {
        category: 'Software',
        items: [
            { name: 'Notion', detail: 'Notes & Planning', link: 'https://www.notion.so/' },
            { name: 'OBS Studio', detail: 'Recording & Streaming', link: 'https://obsproject.com/' },
            { name: 'VLC', detail: 'Media Player', link: 'https://www.videolan.org/vlc/' }
        ]
    }
];

const vscodeGuide = [
    {
        title: "Step 1: Essential Extensions",
        description: "Install these essential VS Code extensions for development:",
        items: [
            { name: "GitHub Copilot", detail: "AI pair programmer", link: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot" },
            { name: "Prettier", detail: "Code formatter", link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" },
            { name: "ES7+ React/Redux/React-Native snippets", detail: "Snippets", link: "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets" },
            { name: "Live Server", detail: "Local development server", link: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" },
            { name: "Material Icon Theme", detail: "Icons", link: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" },
            { name: "Python", detail: "For Python development", link: "https://marketplace.visualstudio.com/items?itemName=ms-python.python" },
            { name: "Remote - SSH", detail: "Remote development", link: "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh" },
        ]
    },
    {
        title: "Step 2: Quick Extension Install",
        content: `Open Command Palette by pressing the keyboard shortcut:
Ctrl + Shift + P (Windows/Linux) / Cmd + Shift + P (Mac)

Type "Extensions: Install Extensions" and search for each extension.
Or install via CLI: code --install-extension [extension-id]`
    },
    {
        title: "Step 3: VS Code Settings",
        description: "Open Settings (JSON) via Command Palette and paste the configuration below:",
        code: `{
  "github.copilot.nextEditSuggestions.enabled": true,
  "claudeCode.preferredLocation": "panel",
  "claudeCode.selectedModel": "opus",
  "chat.viewSessions.orientation": "stacked",
  "workbench.iconTheme": "vscode-icons",
  
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  
  "editor.formatOnSave": true,
  "editor.linkedEditing": true,
  "editor.minimap.enabled": false,
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorBlinking": "smooth",
  "files.autoSave": "afterDelay",
  
  "git.autofetch": true,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  
  "code-runner.runInTerminal": true,
  "code-runner.saveFileBeforeRun": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.donotVerifyTags": true,
  
  "emmet.triggerExpansionOnTab": true,
  "emmet.useInlineCompletions": true
}`
    },
    {
        title: "Final: Complete Setup",
        content: "Save the settings.json file (Ctrl+S / Cmd+S) and restart VS Code. You're all set! 🚀"
    }
];

const CopyButton = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white text-xs px-2 py-1 rounded transition-colors flex items-center gap-1"
        >
            {copied ? (
                <>
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copied!</span>
                </>
            ) : (
                <>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    <span>Copy</span>
                </>
            )}
        </button>
    );
};

export default function DevelopmentSetupModal({ isOpen, onClose, type }) {
    const title = type === 'gears' ? 'Gears Used' : 'VS Code Setup';
    const isGears = type === 'gears';

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
                            className={`bg-bg-primary border border-border-primary rounded-2xl p-6 md:p-8 w-full relative shadow-2xl overflow-y-auto custom-scrollbar ${isGears ? 'max-w-2xl max-h-[85vh]' : 'max-w-4xl max-h-[90vh]'
                                }`}
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
                                aria-label="Close"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h2 className="text-3xl font-bold text-text-primary mb-6 sticky top-0 bg-bg-primary pb-4 z-0 border-b border-border-primary">
                                {title}
                            </h2>

                            <div className="space-y-8">
                                {isGears ? (
                                    gears.map((section, idx) => (
                                        <div key={idx}>
                                            <h3 className="text-xl font-semibold text-accent mb-4">{section.category}</h3>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {section.items.map((item, itemIdx) => {
                                                    const content = (
                                                        <>
                                                            <div className="flex justify-between items-start">
                                                                <p className="font-medium text-text-primary">{item.name}</p>
                                                                {item.link && (
                                                                    <svg className="w-4 h-4 text-text-secondary/30 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                            <p className="text-sm text-text-secondary/50">{item.detail}</p>
                                                        </>
                                                    );

                                                    if (item.link) {
                                                        return (
                                                            <a
                                                                key={itemIdx}
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="group bg-bg-card border border-border-primary rounded-lg p-4 hover:bg-bg-secondary transition-colors block"
                                                            >
                                                                {content}
                                                            </a>
                                                        );
                                                    }

                                                    return (
                                                        <div key={itemIdx} className="bg-bg-card border border-border-primary rounded-lg p-4 hover:bg-bg-secondary transition-colors">
                                                            {content}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    // VS Code Guide Rendering
                                    <div className="space-y-10">
                                        {vscodeGuide.map((step, idx) => (
                                            <div key={idx} className="space-y-4">
                                                <h3 className="text-xl font-semibold text-accent border-l-4 border-accent pl-3">
                                                    {step.title}
                                                </h3>
                                                {step.description && (
                                                    <p className="text-text-secondary">{step.description}</p>
                                                )}

                                                {step.items && (
                                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                                                        {step.items.map((item, i) => (
                                                            <a
                                                                key={i}
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-3 bg-bg-card p-3 rounded-lg hover:bg-bg-secondary transition-colors group"
                                                            >
                                                                {/* Use a generic extension icon if specific ones aren't available, or simple SVG */}
                                                                <div className="w-8 h-8 rounded bg-bg-card flex items-center justify-center shrink-0">
                                                                    <svg className="w-5 h-5 text-text-secondary/50 group-hover:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                                                    </svg>
                                                                </div>
                                                                <div className="min-w-0">
                                                                    <p className="text-sm font-medium text-text-primary truncate">{item.name}</p>
                                                                    <p className="text-xs text-text-secondary/50 truncate">{item.detail}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}

                                                {step.content && (
                                                    <div className="bg-bg-card rounded-lg p-4 font-mono text-sm text-text-secondary/80 whitespace-pre-wrap border border-border-primary">
                                                        {step.content}
                                                    </div>
                                                )}

                                                {step.code && (
                                                    <div className="relative group">
                                                        <div className="absolute -top-3 right-4">
                                                            <span className="bg-teal-400/10 text-teal-400 text-xs px-2 py-1 rounded border border-teal-400/20">JSON</span>
                                                        </div>
                                                        <pre className="bg-[#0f0f0f] border border-white/10 rounded-lg p-4 overflow-x-auto text-sm font-mono text-gray-300 custom-scrollbar max-h-[400px]">
                                                            <code>{step.code}</code>
                                                        </pre>
                                                        <CopyButton text={step.code} />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
