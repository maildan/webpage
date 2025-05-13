import React, { useState, useEffect } from 'react';
import { Section, Container, Row, Column } from '../layout/ResponsiveLayout';
import { useTheme, ThemeProvider } from '../../context/ThemeContext';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// 타입 정의
interface TypeSpeedData {
  date: string;
  wpm: number;
  accuracy: number;
}

interface DocumentData {
  id: string;
  title: string;
  lastEdited: string;
  wordCount: number;
  charactersTyped: number;
}

interface ChatData {
  id: string;
  chatName: string;
  platform: string;
  lastActivity: string;
  messageCount: number;
}

/**
 * 클라우드 데이터 페이지 컴포넌트
 * Novel 및 Pro 앱의 데이터를 시각화
 */
const CloudPageSectionContent: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('typing-stats');
  const [loading, setLoading] = useState(true);
  const [typeSpeedData, setTypeSpeedData] = useState<TypeSpeedData[]>([]);
  const [documents, setDocuments] = useState<DocumentData[]>([]);
  const [chatData, setChatData] = useState<ChatData[]>([]);
  const [appFilter, setAppFilter] = useState('novel'); // 'novel' 또는 'pro'

  // 차트 색상
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  useEffect(() => {
    // 임시 데이터 로드 (실제로는 API에서 데이터를 가져와야 함)
    const fetchData = async () => {
      try {
        // 타자 속도 데이터
        const mockTypeSpeedData: TypeSpeedData[] = [
          { date: '5월 7일', wpm: 65, accuracy: 92 },
          { date: '5월 8일', wpm: 68, accuracy: 94 },
          { date: '5월 9일', wpm: 72, accuracy: 95 },
          { date: '5월 10일', wpm: 67, accuracy: 91 },
          { date: '5월 11일', wpm: 75, accuracy: 93 },
          { date: '5월 12일', wpm: 78, accuracy: 96 },
          { date: '5월 13일', wpm: 80, accuracy: 97 },
        ];
        
        // 문서 데이터
        const mockDocuments: DocumentData[] = [
          { id: '1', title: '소설 초안.docx', lastEdited: '2025-05-13', wordCount: 12450, charactersTyped: 75300 },
          { id: '2', title: '단편소설.docx', lastEdited: '2025-05-12', wordCount: 3275, charactersTyped: 19650 },
          { id: '3', title: '시놉시스.docx', lastEdited: '2025-05-10', wordCount: 850, charactersTyped: 5100 },
          { id: '4', title: '캐릭터 설정.docx', lastEdited: '2025-05-08', wordCount: 2340, charactersTyped: 14040 },
          { id: '5', title: '세계관 설정.docx', lastEdited: '2025-05-05', wordCount: 4120, charactersTyped: 24720 },
        ];
        
        // 채팅 데이터
        const mockChatData: ChatData[] = [
          { id: '1', chatName: '프로젝트 회의', platform: 'Discord', lastActivity: '2025-05-13', messageCount: 1243 },
          { id: '2', chatName: '가족 그룹', platform: '카카오톡', lastActivity: '2025-05-13', messageCount: 3567 },
          { id: '3', chatName: '마케팅팀', platform: 'Discord', lastActivity: '2025-05-12', messageCount: 856 },
          { id: '4', chatName: '친구들', platform: '카카오톡', lastActivity: '2025-05-10', messageCount: 2104 },
          { id: '5', chatName: '게임 길드', platform: 'Discord', lastActivity: '2025-05-09', messageCount: 4521 },
        ];

        setTypeSpeedData(mockTypeSpeedData);
        setDocuments(mockDocuments);
        setChatData(mockChatData);
        setLoading(false);
      } catch (error) {
        console.error('데이터 로드 중 오류 발생:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 워드 카운트 데이터
  const wordCountData = [
    { name: '소설 초안', value: 12450 },
    { name: '단편소설', value: 3275 },
    { name: '시놉시스', value: 850 },
    { name: '캐릭터 설정', value: 2340 },
    { name: '세계관 설정', value: 4120 },
  ];

  // 메시지 카운트 데이터
  const messageCountData = [
    { name: '프로젝트 회의', value: 1243 },
    { name: '가족 그룹', value: 3567 },
    { name: '마케팅팀', value: 856 },
    { name: '친구들', value: 2104 },
    { name: '게임 길드', value: 4521 },
  ];

  return (
    <Section className="cloud-page-section">
      <Container>
        <div className="section-header text-center">
          <h2>클라우드 데이터</h2>
          <p>당신의 작업 데이터를 한눈에 확인하세요</p>
        </div>

        <div className="app-selector">
          <button 
            className={`app-selector-btn ${appFilter === 'novel' ? 'active' : ''}`}
            onClick={() => setAppFilter('novel')}
          >
            Novel 앱 데이터
          </button>
          <button 
            className={`app-selector-btn ${appFilter === 'pro' ? 'active' : ''}`}
            onClick={() => setAppFilter('pro')}
          >
            Pro 앱 데이터
          </button>
        </div>

        {appFilter === 'novel' ? (
          <div className="novel-data">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'typing-stats' ? 'active' : ''}`}
                onClick={() => setActiveTab('typing-stats')}
              >
                타자 통계
              </button>
              <button 
                className={`tab ${activeTab === 'documents' ? 'active' : ''}`}
                onClick={() => setActiveTab('documents')}
              >
                문서 목록
              </button>
              <button 
                className={`tab ${activeTab === 'word-count' ? 'active' : ''}`}
                onClick={() => setActiveTab('word-count')}
              >
                워드 카운트
              </button>
            </div>

            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>데이터를 불러오는 중...</p>
              </div>
            ) : (
              <div className="tab-content">
                {activeTab === 'typing-stats' && (
                  <div className="typing-stats">
                    <div className="stats-summary">
                      <Row>
                        <Column md={4}>
                          <div className="stat-card">
                            <h3>평균 타자 속도</h3>
                            <p className="stat-value">72 <span>WPM</span></p>
                          </div>
                        </Column>
                        <Column md={4}>
                          <div className="stat-card">
                            <h3>평균 정확도</h3>
                            <p className="stat-value">94<span>%</span></p>
                          </div>
                        </Column>
                        <Column md={4}>
                          <div className="stat-card">
                            <h3>총 타이핑 시간</h3>
                            <p className="stat-value">32<span>시간</span></p>
                          </div>
                        </Column>
                      </Row>
                    </div>
                    
                    <div className="chart-container">
                      <h3>최근 7일 타자 속도</h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                          data={typeSpeedData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="date" 
                            stroke={theme === 'dark' ? '#ccc' : '#666'} 
                          />
                          <YAxis 
                            stroke={theme === 'dark' ? '#ccc' : '#666'} 
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: theme === 'dark' ? '#333' : '#fff',
                              color: theme === 'dark' ? '#fff' : '#333',
                              border: `1px solid ${theme === 'dark' ? '#444' : '#ddd'}`
                            }} 
                          />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="wpm" 
                            name="분당 단어 수" 
                            stroke="#4c84ff" 
                            activeDot={{ r: 8 }} 
                          />
                          <Line 
                            type="monotone" 
                            dataKey="accuracy" 
                            name="정확도 (%)" 
                            stroke="#ff6b6b" 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div className="documents">
                    <div className="documents-list">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>문서명</th>
                            <th>마지막 수정일</th>
                            <th>단어 수</th>
                            <th>입력한 문자</th>
                            <th>작업</th>
                          </tr>
                        </thead>
                        <tbody>
                          {documents.map(doc => (
                            <tr key={doc.id}>
                              <td>{doc.title}</td>
                              <td>{doc.lastEdited}</td>
                              <td>{doc.wordCount.toLocaleString()}</td>
                              <td>{doc.charactersTyped.toLocaleString()}</td>
                              <td>
                                <button className="btn-sm btn-outline">보기</button>
                                <button className="btn-sm btn-outline ml-sm">다운로드</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'word-count' && (
                  <div className="word-count">
                    <Row>
                      <Column md={6}>
                        <div className="chart-container">
                          <h3>문서별 단어 수</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                              data={wordCountData}
                              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="value" name="단어 수" fill="#8884d8" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </Column>
                      <Column md={6}>
                        <div className="chart-container">
                          <h3>문서별 단어 분포</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                              <Pie
                                data={wordCountData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                                nameKey="name"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                {wordCountData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </Column>
                    </Row>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="pro-data">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'chat-list' ? 'active' : ''}`}
                onClick={() => setActiveTab('chat-list')}
              >
                채팅방 목록
              </button>
              <button 
                className={`tab ${activeTab === 'message-count' ? 'active' : ''}`}
                onClick={() => setActiveTab('message-count')}
              >
                메시지 통계
              </button>
              <button 
                className={`tab ${activeTab === 'platforms' ? 'active' : ''}`}
                onClick={() => setActiveTab('platforms')}
              >
                플랫폼 통계
              </button>
            </div>

            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>데이터를 불러오는 중...</p>
              </div>
            ) : (
              <div className="tab-content">
                {activeTab === 'chat-list' && (
                  <div className="chat-list">
                    <div className="chat-list-container">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>채팅방</th>
                            <th>플랫폼</th>
                            <th>마지막 활동</th>
                            <th>메시지 수</th>
                            <th>작업</th>
                          </tr>
                        </thead>
                        <tbody>
                          {chatData.map(chat => (
                            <tr key={chat.id}>
                              <td>{chat.chatName}</td>
                              <td>{chat.platform}</td>
                              <td>{chat.lastActivity}</td>
                              <td>{chat.messageCount.toLocaleString()}</td>
                              <td>
                                <button className="btn-sm btn-outline">보기</button>
                                <button className="btn-sm btn-outline ml-sm">대화방 열기</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'message-count' && (
                  <div className="message-count">
                    <Row>
                      <Column md={6}>
                        <div className="chart-container">
                          <h3>채팅방별 메시지 수</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                              data={messageCountData}
                              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="value" name="메시지 수" fill="#0088FE" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </Column>
                      <Column md={6}>
                        <div className="chart-container">
                          <h3>채팅방별 메시지 분포</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                              <Pie
                                data={messageCountData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                                nameKey="name"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                {messageCountData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </Column>
                    </Row>
                  </div>
                )}

                {activeTab === 'platforms' && (
                  <div className="platforms">
                    <Row>
                      <Column md={6}>
                        <div className="chart-container">
                          <h3>플랫폼별 채팅방 수</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                              <Pie
                                data={[
                                  { name: '카카오톡', value: 2 },
                                  { name: 'Discord', value: 3 }
                                ]}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                                nameKey="name"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                <Cell fill="#FFBB28" />
                                <Cell fill="#0088FE" />
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </Column>
                      <Column md={6}>
                        <div className="chart-container">
                          <h3>플랫폼별 메시지 수</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                              data={[
                                { name: '카카오톡', value: 5671 },
                                { name: 'Discord', value: 6620 }
                              ]}
                              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="value" name="메시지 수" fill="#00C49F" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </Column>
                    </Row>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
};

// 테마 제공자로 감싼 클라우드 페이지 섹션
const CloudPageSection: React.FC = () => {
  return (
    <ThemeProvider>
      <CloudPageSectionContent />
    </ThemeProvider>
  );
};

export default CloudPageSection;
