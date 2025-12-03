export const detailScreens = {
  mtConnect: {
    heroColors: ['#14202f', '#05080f'],
    tag: 'External Bridge',
    title: 'MT4/MT5 Connect',
    subtitle: 'ส่งต่อการเทรดผ่านพาร์ตเนอร์ MT4/MT5 โดยไม่ต้องมี execution ในแอป',
    metrics: [
      { label: 'สถานะ', value: 'Read-only ในแอป' },
      { label: 'Platform', value: 'MT4/MT5' },
      { label: 'Connector', value: 'Deep Link' }
    ],
    sections: [
      {
        title: 'วิธีเชื่อมต่อ',
        cards: [
          { title: 'Deep Link', description: 'เปิด MT4/MT5 พร้อมพารามิเตอร์ symbol/volume ที่เลือกไว้', stats: ['iOS/Android'], accent: '#46e0a0' },
          { title: 'Intent Log', description: 'บันทึกเหตุผลการเทรดเพื่อใช้ในภารกิจ/แจ้งเตือน', stats: ['ข้ามการส่งคำสั่ง'], accent: '#4da4ff' }
        ]
      },
      {
        title: 'ขั้นตอน',
        steps: ['เลือกสินทรัพย์ใน FISG เพื่อดูข้อมูล', 'กดเชื่อมต่อเพื่อเปิด MT4/MT5', 'ทำคำสั่งจริงใน MT4/MT5 แล้วกลับมาติดตามผลที่ FISG']
      },
      {
        title: 'สิ่งที่แอปทำได้ตอนนี้',
        bullets: ['แสดงพอร์ตแบบอ่านอย่างเดียวเมื่อผู้ใช้ซิงก์', 'แจ้งเตือนข่าว/ความเสี่ยงก่อนเปิด MT4/MT5', 'เชื่อมภารกิจ/คอนเทนต์กับพฤติกรรมเทรด']
      }
    ],
    cta: 'ตั้งค่าการเชื่อมต่อ'
  },
  demo: {
    heroColors: ['#1a1b3a', '#090b16'],
    tag: 'Learning Playground',
    title: 'Demo Mission Arena',
    subtitle: 'ฝึกกลยุทธ์พร้อม leaderboard และรีพอร์ตอัตโนมัติ',
    metrics: [
      { label: 'เครดิตจำลอง', value: '$100K' },
      { label: 'Missions', value: '30+' },
      { label: 'Season', value: 'Weekly' }
    ],
    sections: [
      {
        title: 'สิ่งที่ได้รับ',
        bullets: ['ชุดคอร์สประกบกับ mission', 'AI coach วิเคราะห์การเทรดหลังจบวัน', 'แชร์ผลงานตรงไปยัง community']
      },
      {
        title: 'เริ่มต้นยังไง',
        steps: ['เลือก Track (Forex / Index / Crypto)', 'ปลดล็อก mission รายวัน', 'ส่งรีพอร์ตเพื่อรับ XP / Badge']
      }
    ],
    cta: 'สร้างบัญชีเดโม'
  },
  copyLab: {
    heroColors: ['#1d1f45', '#070910'],
    tag: 'Automation',
    title: 'Copy Trading Lab',
    subtitle: 'เชื่อมกับ Master Trader แล้วปล่อยให้ระบบดูแล',
    metrics: [
      { label: 'Master', value: '28' },
      { label: 'Avg Return', value: '+12.4%' },
      { label: 'Max DD', value: '5.8%' }
    ],
    sections: [
      {
        title: 'Master Board',
        cards: [
          { title: 'Quantum Alpha', description: 'ทอง + NAS momentum', stats: ['Win 72%', 'DD 4.2%'], accent: '#46e0a0' },
          { title: 'Index Sniper', description: 'NASDAQ mean reversion', stats: ['Win 65%', 'DD 6.5%'], accent: '#e7c74a' }
        ]
      },
      {
        title: 'Risk Controls',
        bullets: ['ตั้ง equity guard และ max drawdown ส่วนตัว', 'ตั้งเลิกตามอัตโนมัติเมื่อ Master เบี่ยงกลยุทธ์', 'รับแจ้งเตือนผ่านแอป/Line เมื่อถึงจุดสำคัญ']
      },
      {
        title: 'Workflow',
        steps: ['เลือก Master + กำหนดสัดส่วนเงิน', 'ติ๊ก option ป้องกันข่าว (news guard)', 'ติดตาม performance dashboard']
      }
    ],
    cta: 'เลือก Master Trader'
  },
  hubMission: {
    heroColors: ['#231b2c', '#0c0912'],
    tag: 'Gamification',
    title: 'Mission Control',
    subtitle: 'จัดการภารกิจ, XP และรางวัลทั้งหมดในที่เดียว',
    metrics: [
      { label: 'XP วันนี้', value: '+320' },
      { label: 'Badges', value: '6' },
      { label: 'Live Rooms', value: '3' }
    ],
    sections: [
      {
        title: 'ภารกิจแนะนำ',
        cards: [
          { title: 'Share Alpha Idea', description: 'โพสต์บทความ + รับ feedback 5 คน', stats: ['+80 XP'], accent: '#f36dff' },
          { title: 'Risk Drill', description: 'ตั้ง stop ใหม่และบันทึกบทเรียน', stats: ['+60 XP'], accent: '#4da4ff' }
        ]
      },
      {
        title: 'ขั้นตอนเก็บ XP',
        steps: ['เลือก mission ตามระดับ', 'ทำกิจกรรมใน hub / เทรดเดโม', 'ส่งหลักฐาน + รับ badge']
      },
      {
        title: 'Why it matters',
        bullets: ['ปลดล็อก Prop Challenge & Rebate', 'ไต่ระดับ community ranking', 'รับคำเชิญ live session เฉพาะสมาชิก']
      }
    ],
    cta: 'ดูภารกิจทั้งหมด'
  }
};
