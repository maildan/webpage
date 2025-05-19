import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Section, Container } from '../components/layout/ResponsiveLayout';
import { useTheme } from '../context/ThemeContext';

// 임시 타입 정의
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

const CloudPage: React.FC = () => {
  const { theme } = useTheme();
  const [typeSpeedData, setTypeSpeedData] = useState<TypeSpeedData[]>([]);
  const [documents, setDocuments] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('typing-stats');

  useEffect(() => {
    // 개발 중에는 localhost에서 데이터를 가져옴 (임시 데이터)
    // 실제로는 백엔드 API에서 데이터를 가져와야 함
    const fetchData = async () => {
      try {
        // 실제 API 호출 코드
        // const response = await fetch('http://localhost:3001/api/typing-stats');
        // const data = await response.json();
        
        // 임시 데이터
        const mockTypeSpeedData: TypeSpeedData[] = [
          { date: '2025-05-01', wpm: 65, accuracy: 92 },
          { date: '2025-05-02', wpm: 68, accuracy: 94 },
          { date: '2025-05-03', wpm: 72, accuracy: 95 },
          { date: '2025-05-04', wpm: 67, accuracy: 91 },
          { date: '2025-05-05', wpm: 75, accuracy: 93 },
          { date: '2025-05-06', wpm: 78, accuracy: 96 },
          { date: '2025-05-07', wpm: 80, accuracy: 97 },
        ];
        
        const mockDocuments: DocumentData[] = [
          { id: '1', title: '소설 초안.docx', lastEdited: '2025-05-13', wordCount: 12450, charactersTyped: 75300 },
          { id: '2', title: '단편소설.docx', lastEdited: '2025-05-12', wordCount: 3275, charactersTyped: 19650 },
          { id: '3', title: '시놉시스.docx', lastEdited: '2025-05-10', wordCount: 850, charactersTyped: 5100 },
          { id: '4', title: '캐릭터 설정.docx', lastEdited: '2025-05-08', wordCount: 2340, charactersTyped: 14040 },
          { id: '5', title: '세계관 설정.docx', lastEdited: '2025-05-05', wordCount: 4120, charactersTyped: 24720 },
        ];
        
        setTypeSpeedData(mockTypeSpeedData);
        setDocuments(mockDocuments);
        setLoading(false);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="cloud-page">
      <Section className="cloud-hero">
        <Container>
          <h1>Loop Cloud</h1>
          <p>당신의 작업을 안전하게 백업하고 실시간으로 분석하세요.</p>
        </Container>
      </Section>
      
      <Section className="cloud-stats">
        <Container>
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
          </div>
          
          {loading ? (
            <div className="loading">데이터를 불러오는 중...</div>
          ) : (
            <div className="tab-content">
              {activeTab === 'typing-stats' && (
                <div className="typing-stats">
                  <h2>타자 속도 통계</h2>
                  <div className="stats-summary">
                    <div className="stat-card">
                      <h3>평균 타자 속도</h3>
                      <p className="stat-value">72 <span>WPM</span></p>
                    </div>
                    <div className="stat-card">
                      <h3>평균 정확도</h3>
                      <p className="stat-value">94<span>%</span></p>
                    </div>
                    <div className="stat-card">
                      <h3>총 타이핑 시간</h3>
                      <p className="stat-value">32<span>시간</span></p>
                    </div>
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
                  <h2>문서 목록</h2>
                  <div className="documents-list">
                    <table className="documents-table">
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
                              <button className="btn-sm btn-outline">다운로드</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
};

export default CloudPage;
