import { ChevronRight, GitBranch, MessageCircle, Terminal, X, Users, Filter, RefreshCw, Settings, Monitor, Code } from "lucide-react";
import React, { useState } from "react";
import "./App.css";

// 직접 Button 컴포넌트 구현
const Button = ({ className, variant = "default", size = "default", children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded font-medium transition-colors";
  const variantStyles = {
    default: "bg-[#0066b8] text-white hover:bg-[#005ba4]",
    secondary: "bg-[#252526] text-white hover:bg-[#2d2d2d]",
    outline: "border border-[#3c3c3c] bg-transparent hover:bg-[#2a2a2a] text-[#cccccc]",
    ghost: "bg-transparent hover:bg-[#2a2a2a] text-[#cccccc]",
  };
  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-6",
    icon: "h-10 w-10",
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

// 직접 Card 컴포넌트 구현
const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={`bg-[#252526] border border-[#3c3c3c] rounded-md ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

// 직접 CardContent 컴포넌트 구현
const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={`p-4 ${className || ""}`} {...props}>
      {children}
    </div>
  );
};

// 채팅 플랫폼 아이템 컴포넌트
const ChatPlatformItem = ({ name, icon, unread = 0, isActive = false, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center justify-between p-3 cursor-pointer rounded ${isActive ? 'bg-[#37373d]' : 'hover:bg-[#2a2a2a]'}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-[#cccccc]">{name}</span>
      </div>
      {unread > 0 && (
        <div className="bg-[#0066b8] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {unread}
        </div>
      )}
    </div>
  );
};

// 채팅 메시지 컴포넌트
const ChatMessage = ({ sender, time, message, isMe }) => {
  return (
    <div className={`flex flex-col mb-4 ${isMe ? 'items-end' : 'items-start'}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm font-medium text-[#cccccc]">{sender}</span>
        <span className="text-xs text-[#666666]">{time}</span>
      </div>
      <div className={`p-3 rounded-lg max-w-[80%] ${isMe ? 'bg-[#0066b8] text-white' : 'bg-[#37373d] text-[#cccccc]'}`}>
        {message}
      </div>
    </div>
  );
};

// 사이드바 항목 컴포넌트
const SidebarItem = ({ icon, isActive = false }) => {
  return (
    <div className={`flex items-center justify-center w-12 h-12 cursor-pointer ${isActive ? 'border-l-2 border-[#0066b8] bg-[#37373d]' : 'hover:bg-[#2a2a2a]'}`}>
      {React.cloneElement(icon, { 
        className: `w-5 h-5 ${isActive ? 'text-white' : 'text-[#858585]'}`
      })}
    </div>
  );
};

export default function ElementLight() {
  const [activePlatform, setActivePlatform] = useState("Slack");
  const [activeTab, setActiveTab] = useState("chats");
  
  // 채팅 플랫폼 데이터
  const chatPlatforms = [
    { name: "Slack", unread: 7, icon: <MessageCircle className="w-5 h-5 text-[#E01E5A]" /> },
    { name: "Telegram", unread: 3, icon: <MessageCircle className="w-5 h-5 text-[#0088cc]" /> },
    { name: "Discord", unread: 0, icon: <MessageCircle className="w-5 h-5 text-[#5865F2]" /> },
    { name: "Whatsapp", unread: 12, icon: <MessageCircle className="w-5 h-5 text-[#25D366]" /> },
    { name: "Messenger", unread: 1, icon: <MessageCircle className="w-5 h-5 text-[#00B2FF]" /> },
    { name: "Line", unread: 0, icon: <MessageCircle className="w-5 h-5 text-[#00B900]" /> }
  ];
  
  // 채팅 메시지 데이터
  const chatMessages = [
    { sender: "김영훈", time: "10:23 AM", message: "오늘 회의 시간 언제였죠?", isMe: false },
    { sender: "나", time: "10:25 AM", message: "오후 2시에 시작이에요.", isMe: true },
    { sender: "김영훈", time: "10:26 AM", message: "감사합니다! 회의 자료는 공유되었나요?", isMe: false },
    { sender: "나", time: "10:30 AM", message: "네, 메일로 방금 보냈어요. 확인해보세요!", isMe: true },
    { sender: "김영훈", time: "10:32 AM", message: "확인했습니다. 그럼 회의에서 뵙겠습니다.", isMe: false },
  ];
  
  // 그룹 데이터
  const groups = [
    { name: "마케팅팀", unread: 5, members: 12 },
    { name: "개발팀", unread: 0, members: 8 },
    { name: "디자인팀", unread: 2, members: 5 },
    { name: "경영진", unread: 0, members: 4 }
  ];
  
  return (
    <div className="relative bg-[#1e1e1e] text-[#cccccc] min-h-screen flex">
      {/* 왼쪽 사이드바 (액티비티 바) - VS Code 스타일 */}
      <div className="flex flex-col items-center w-12 bg-[#333333] border-r border-[#252526]">
        <SidebarItem icon={<MessageCircle />} isActive={true} />
        <SidebarItem icon={<Users />} />
        <SidebarItem icon={<Settings />} />
        <div className="flex-1"></div>
        <SidebarItem icon={<Monitor />} />
        <SidebarItem icon={<Code />} />
      </div>
      
      {/* 플랫폼 리스트 패널 */}
      <div className="w-64 bg-[#252526] border-r border-[#3c3c3c] overflow-auto">
        <div className="p-4 border-b border-[#3c3c3c] flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Loop</h2>
          <Button variant="ghost" size="icon" className="w-8 h-8 p-1.5">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#3c3c3c]">
          <div className="flex gap-2">
            <Button 
              variant={activeTab === "chats" ? "secondary" : "ghost"} 
              size="sm" 
              className="text-xs h-7 px-2"
              onClick={() => setActiveTab("chats")}
            >
              채팅
            </Button>
            <Button 
              variant={activeTab === "groups" ? "secondary" : "ghost"} 
              size="sm" 
              className="text-xs h-7 px-2"
              onClick={() => setActiveTab("groups")}
            >
              그룹
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="w-6 h-6 p-1">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="p-2">
          {activeTab === "chats" ? (
            <>
              {chatPlatforms.map((platform, index) => (
                <ChatPlatformItem 
                  key={index} 
                  name={platform.name} 
                  icon={platform.icon} 
                  unread={platform.unread} 
                  isActive={activePlatform === platform.name}
                  onClick={() => setActivePlatform(platform.name)}
                />
              ))}
            </>
          ) : (
            <>
              {groups.map((group, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-[#2a2a2a] rounded cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-[#cccccc]">{group.name}</span>
                    <span className="text-xs text-[#858585]">구성원 {group.members}명</span>
                  </div>
                  {group.unread > 0 && (
                    <div className="bg-[#0066b8] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {group.unread}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      
      {/* 메인 채팅 영역 */}
      <div className="flex-1 flex flex-col bg-[#1e1e1e]">
        {/* 채팅 헤더 */}
        <div className="h-12 border-b border-[#3c3c3c] px-4 flex items-center justify-between bg-[#252526]">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {chatPlatforms.find(p => p.name === activePlatform)?.icon}
              <span className="ml-2 text-white font-semibold">{activePlatform}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#858585]" />
            <span>김영훈</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="w-8 h-8 p-1.5">
              <Users className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 p-1.5">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* 채팅 메시지 영역 */}
        <div className="flex-1 overflow-auto p-4">
          {chatMessages.map((message, index) => (
            <ChatMessage 
              key={index}
              sender={message.sender}
              time={message.time}
              message={message.message}
              isMe={message.isMe}
            />
          ))}
        </div>
        
        {/* 채팅 입력 영역 */}
        <div className="p-4 border-t border-[#3c3c3c]">
          <div className="flex items-center bg-[#252526] rounded border border-[#3c3c3c] p-2">
            <input 
              type="text" 
              placeholder="메시지를 입력하세요..." 
              className="flex-1 bg-transparent border-none outline-none text-[#cccccc] placeholder-[#6e6e6e]"
            />
            <Button variant="default" size="sm">
              보내기
            </Button>
          </div>
        </div>
      </div>
      
      {/* 오른쪽 패널 - 채팅 정보 */}
      <div className="w-64 bg-[#252526] border-l border-[#3c3c3c] overflow-auto hidden md:block">
        <div className="p-4 border-b border-[#3c3c3c]">
          <h3 className="text-sm font-semibold text-white">채팅 정보</h3>
        </div>
        
        <div className="p-4">
          <div className="mb-6">
            <h4 className="text-xs text-[#858585] uppercase mb-2">멤버</h4>
            <div className="flex items-center gap-3 mb-3 hover:bg-[#2a2a2a] p-2 rounded cursor-pointer">
              <div className="w-8 h-8 bg-[#37373d] rounded-full flex items-center justify-center text-white font-semibold text-xs">
                김영
              </div>
              <div>
                <p className="text-sm text-[#cccccc]">김영훈</p>
                <p className="text-xs text-[#858585]">온라인</p>
              </div>
            </div>
            <div className="flex items-center gap-3 hover:bg-[#2a2a2a] p-2 rounded cursor-pointer">
              <div className="w-8 h-8 bg-[#0066b8] rounded-full flex items-center justify-center text-white font-semibold text-xs">
                나
              </div>
              <div>
                <p className="text-sm text-[#cccccc]">나</p>
                <p className="text-xs text-[#858585]">온라인</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-xs text-[#858585] uppercase mb-2">첨부 파일</h4>
            <Card className="mb-2 cursor-pointer hover:bg-[#2a2a2a]">
              <CardContent className="p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-[#37373d] flex items-center justify-center rounded">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-[#cccccc]">회의자료.pdf</p>
                  <p className="text-xs text-[#858585]">2.4 MB</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h4 className="text-xs text-[#858585] uppercase mb-2">설정</h4>
            <div className="flex items-center justify-between p-2 hover:bg-[#2a2a2a] rounded cursor-pointer">
              <span className="text-sm text-[#cccccc]">알림 끄기</span>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 닫기 버튼 - VS Code 스타일 */}
      <div className="absolute top-3 right-3">
        <Button variant="ghost" size="icon" className="w-8 h-8 p-1.5">
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}