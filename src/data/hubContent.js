const hubContentTh = {
  center: {
    title: 'FISG Learning Hub',
    subtitle: 'รวมทุกอย่างที่เทรดเดอร์ต้องรู้ในที่เดียว',
    metrics: [
      { label: 'คอร์สใหม่', value: '12' },
      { label: 'ภารกิจวันนี้', value: '4' },
      { label: 'ห้องสนทนา', value: '3 สด' }
    ]
  },
  discoverTopics: [
    { title: 'Webinar: Prop Challenge 2024', time: 'สด 20:00 น.', tag: 'Live' },
    { title: 'Community Idea Board', time: 'โพสต์ใหม่ 35 รายการ', tag: 'Community' },
    { title: 'FISG Model Library', time: 'เพิ่มสูตรใหม่ 5 รายการ', tag: 'Quant' }
  ],
  communityRooms: [
    { name: 'AI Scalping Squad', members: '268 เทรดเดอร์', status: 'กำลังสนทนา', highlights: ['XAUUSD', 'NAS100', 'Scripts'] },
    { name: 'Macro Morning Brief', members: '154 คน', status: 'Live Podcast', highlights: ['Dollar Index', 'Oil', 'Bond'] }
  ],
  learningTracks: [
    { title: 'Zero-to-One Forex', level: 'Beginner', duration: '6 ชม.', progress: 65 },
    { title: 'Algo Trading Kickstart', level: 'Intermediate', duration: '4 ชม.', progress: 30 },
    { title: 'Risk Manager Playbook', level: 'Advance', duration: '3 ชม.', progress: 0 }
  ],
  missions: [
    { title: 'Mission 01 – ตั้งเป้าพอร์ต', reward: '+120 XP', steps: ['กำหนดเป้ารายสัปดาห์', 'ซิงก์กับ Copy Bot'], status: 'in-progress' },
    { title: 'Mission 02 – แชร์บทเรียน', reward: '+80 XP', steps: ['โพสต์บทความ', 'รับ feedback 5 คน'], status: 'pending' },
    { title: 'Mission 03 – ลองเครื่องมือใหม่', reward: '+50 XP', steps: ['ใช้ Model Library', 'บันทึกผลลัพธ์'], status: 'pending' }
  ],
  notifications: [
    { title: 'Aiden Challenge เริ่มแล้ว', description: 'สะสมภารกิจครบ 5 เพื่อรับ Prop Account Demo', time: '5 นาทีที่แล้ว' },
    { title: 'มีผู้ตอบกลับบทความคุณ', description: 'สมาชิก Quant Rookie ชมและตั้งคำถาม', time: '15 นาทีที่แล้ว' }
  ],
  quickSignals: [
    { label: 'Copy Signal', detail: 'ติดตามพอร์ต Elite Momentum', status: '+9.4% 30d' },
    { label: 'เข้าห้อง Live', detail: 'Macro Brief เริ่มใน 15 นาที', status: 'Set Reminder' }
  ]
};

const hubContentEn = {
  center: {
    title: 'FISG Learning Hub',
    subtitle: 'Everything traders need in one place',
    metrics: [
      { label: 'New Courses', value: '12' },
      { label: 'Missions Today', value: '4' },
      { label: 'Live Rooms', value: '3 live' }
    ]
  },
  discoverTopics: [
    { title: 'Webinar: Prop Challenge 2024', time: 'Live 20:00', tag: 'Live' },
    { title: 'Community Idea Board', time: '35 new posts', tag: 'Community' },
    { title: 'FISG Model Library', time: '5 new models', tag: 'Quant' }
  ],
  communityRooms: [
    { name: 'AI Scalping Squad', members: '268 traders', status: 'Chatting', highlights: ['XAUUSD', 'NAS100', 'Scripts'] },
    { name: 'Macro Morning Brief', members: '154 members', status: 'Live Podcast', highlights: ['Dollar Index', 'Oil', 'Bond'] }
  ],
  learningTracks: [
    { title: 'Zero-to-One Forex', level: 'Beginner', duration: '6 hrs', progress: 65 },
    { title: 'Algo Trading Kickstart', level: 'Intermediate', duration: '4 hrs', progress: 30 },
    { title: 'Risk Manager Playbook', level: 'Advance', duration: '3 hrs', progress: 0 }
  ],
  missions: [
    { title: 'Mission 01 – Set Portfolio Goal', reward: '+120 XP', steps: ['Define weekly target', 'Sync Copy Bot'], status: 'in-progress' },
    { title: 'Mission 02 – Share a Lesson', reward: '+80 XP', steps: ['Post an article', 'Get 5 feedback'], status: 'pending' },
    { title: 'Mission 03 – Try a New Tool', reward: '+50 XP', steps: ['Use Model Library', 'Log your result'], status: 'pending' }
  ],
  notifications: [
    { title: 'Aiden Challenge started', description: 'Complete 5 missions to get a Prop Account Demo', time: '5 min ago' },
    { title: 'You received feedback', description: 'Member Quant Rookie liked and asked a question', time: '15 min ago' }
  ],
  quickSignals: [
    { label: 'Copy Signal', detail: 'Follow Elite Momentum portfolio', status: '+9.4% 30d' },
    { label: 'Join Live', detail: 'Macro Brief starts in 15 min', status: 'Set Reminder' }
  ]
};

export const getHubContent = (language = 'th') => (language === 'en' ? hubContentEn : hubContentTh);
