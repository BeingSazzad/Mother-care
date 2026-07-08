import { useState } from 'react';
import { 
  Home, 
  CheckSquare, 
  BookOpen, 
  User, 
  ChevronRight, 
  Bell, 
  Settings, 
  Menu, 
  Activity, 
  ArrowLeft, 
  Check,
  Calendar as CalendarIcon,
  BarChart2,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Droplet,
  Leaf,
  Circle,
  FileText,
  Heart,
  Smile,
  Mail,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';

// Custom designed high-fidelity SVG Mammoth Logo
export function MammothLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="45" cy="55" rx="25" ry="20" fill="#E88C30" stroke="#4D2506" strokeWidth="2.5" />
      <rect x="28" y="65" width="8" height="15" rx="3" fill="#E88C30" stroke="#4D2506" strokeWidth="2.5" />
      <rect x="54" y="65" width="8" height="15" rx="3" fill="#E88C30" stroke="#4D2506" strokeWidth="2.5" />
      <rect x="38" y="68" width="8" height="13" rx="3" fill="#E88C30" stroke="#4D2506" strokeWidth="2.5" />
      <rect x="47" y="68" width="8" height="13" rx="3" fill="#E88C30" stroke="#4D2506" strokeWidth="2.5" />
      <circle cx="32" cy="78" r="1.5" fill="#FAF6F0" />
      <circle cx="58" cy="78" r="1.5" fill="#FAF6F0" />
      <circle cx="60" cy="42" r="16" fill="#E88C30" stroke="#4D2506" strokeWidth="2.5" />
      <path d="M 46 42 C 40 32, 48 24, 56 30 C 58 35, 52 46, 46 42 Z" fill="#E88C30" stroke="#4D2506" strokeWidth="2.5" />
      <path d="M 49 39 C 45 34, 48 29, 53 32 C 54 35, 51 41, 49 39 Z" fill="#F03C7A" opacity="0.3" />
      <circle cx="66" cy="38" r="2" fill="#4D2506" />
      <circle cx="67" cy="37" r="0.6" fill="#FAF6F0" />
      <path d="M 72 46 C 80 46, 82 34, 76 34 C 74 34, 73 38, 70 42" stroke="#4D2506" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 72 45 C 78 45, 80 36, 76 36 C 75 36, 74 38, 72 41" stroke="#E88C30" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 68 47 C 69 51, 65 52, 63 48 C 63 46, 66 45, 68 47 Z" fill="#FAF6F0" stroke="#4D2506" strokeWidth="1.5" />
      <path d="M 21 52 C 16 52, 14 62, 17 62" stroke="#4D2506" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="17" cy="62" r="1.5" fill="#4D2506" />
    </svg>
  );
}

export function MeditatingGirlIllustration({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="40" fill="#FDE5EF" />
      <path d="M 25 70 C 20 60, 22 45, 30 40 C 35 48, 30 65, 25 70 Z" fill="#C6E6C9" opacity="0.6" />
      <path d="M 75 70 C 80 60, 78 45, 70 40 C 65 48, 70 65, 75 70 Z" fill="#C6E6C9" opacity="0.6" />
      <path d="M 28 78 C 35 70, 65 70, 72 78 C 65 82, 35 82, 28 78 Z" fill="#F03C7A" />
      <path d="M 42 75 L 45 55 L 55 55 L 58 75 Z" fill="#FAF6F0" />
      <path d="M 42 75 L 45 55 C 48 55, 52 55, 55 55 L 58 75 Z" fill="#F03C7A" opacity="0.8" />
      <rect x="48" y="48" width="4" height="8" fill="#FCD3B6" />
      <circle cx="50" cy="42" r="8" fill="#FCD3B6" />
      <circle cx="50" cy="31" r="4" fill="#3D2010" />
      <path d="M 42 38 C 45 34, 55 34, 58 38 C 56 42, 44 42, 42 38 Z" fill="#3D2010" />
      <path d="M 46 42 Q 48 44 48 42" stroke="#3D2010" strokeWidth="0.75" strokeLinecap="round" fill="none" />
      <path d="M 52 42 Q 54 44 54 42" stroke="#3D2010" strokeWidth="0.75" strokeLinecap="round" fill="none" />
      <circle cx="34" cy="74" r="2.5" fill="#FCD3B6" />
      <circle cx="66" cy="74" r="2.5" fill="#FCD3B6" />
      <path d="M 44 57 C 38 62, 34 68, 34 74" stroke="#FCD3B6" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 56 57 C 62 62, 66 68, 66 74" stroke="#FCD3B6" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function InsightsGirlIllustration({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M 15 80 C 10 50, 30 30, 45 35 C 35 55, 25 75, 15 80 Z" fill="#86C48B" opacity="0.8" />
      <path d="M 85 80 C 90 50, 70 30, 55 35 C 65 55, 75 75, 85 80 Z" fill="#86C48B" opacity="0.8" />
      <circle cx="50" cy="78" r="18" fill="#FDE5EF" />
      <path d="M 32 82 C 38 75, 62 75, 68 82 C 62 86, 38 86, 32 82 Z" fill="#86C48B" />
      <path d="M 43 78 L 46 60 L 54 60 L 57 78 Z" fill="#FAF6F0" />
      <path d="M 43 78 L 46 60 C 48 60, 52 60, 54 60 L 57 78 Z" fill="#2E5B34" />
      <rect x="48" y="54" width="4" height="7" fill="#FCD3B6" />
      <circle cx="50" cy="48" r="8" fill="#FCD3B6" />
      <path d="M 42 45 C 44 38, 56 38, 58 45 C 60 52, 40 52, 42 45 Z" fill="#3D2010" />
      <circle cx="50" cy="38" r="3.5" fill="#3D2010" />
      <path d="M 47 48 Q 48 49 48 48" stroke="#3D2010" strokeWidth="0.75" strokeLinecap="round" fill="none" />
      <path d="M 52 48 Q 53 49 53 48" stroke="#3D2010" strokeWidth="0.75" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function LightbulbIconIllustration({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 12.5 2.5C9 2.5 6 5 6 8.5c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup' | 'forgot'>('login');
  
  // Onboarding States
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [userName, setUserName] = useState('Lisa');
  const [userGoal, setUserGoal] = useState<'menstrual' | 'pregnancy' | 'baby'>('menstrual');

  // Onboarding Settings configurations
  const [cycleLmpDate, setCycleLmpDate] = useState('2026-06-30');
  const [cycleLength, setCycleLength] = useState(28);
  const [periodDuration, setPeriodDuration] = useState(5);

  const [pregnancyDueDate, setPregnancyDueDate] = useState('2026-12-15');
  const [pregnancyKicks, setPregnancyKicks] = useState(6);
  const [pregnancyMood, setPregnancyMood] = useState('Good');
  const [pregnancySymptoms, setPregnancySymptoms] = useState<string[]>(['Morning sickness', 'Fatigue']);
  const [pregnancyNotes, setPregnancyNotes] = useState('Feeling active today! Baby kicked a few times. 👶✨');

  const [babyName, setBabyName] = useState('Emilia');
  const [babyDob, setBabyDob] = useState('2026-04-15');
  const [babyGender, setBabyGender] = useState<'Boy' | 'Girl' | 'Surprise'>('Girl');

  // Dynamic Calculators
  const calculateCycleInfo = () => {
    const lmp = new Date(cycleLmpDate);
    const today = new Date();
    // Normalize dates to eliminate time differences
    today.setHours(0, 0, 0, 0);
    lmp.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - lmp.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Cycle day is 1-indexed relative to the cycle length
    let cycleDay = 1;
    if (diffDays >= 0) {
      cycleDay = (diffDays % cycleLength) + 1;
    } else {
      // Handles past start dates logically
      cycleDay = cycleLength - (Math.abs(diffDays) % cycleLength) + 1;
      if (cycleDay > cycleLength) cycleDay = 1;
    }
    
    const isMenstruating = cycleDay <= periodDuration;
    const daysRemainingInPeriod = isMenstruating ? periodDuration - cycleDay + 1 : 0;
    
    const ovulationDay = cycleLength - 14; 
    const isFertile = cycleDay >= (ovulationDay - 3) && cycleDay <= (ovulationDay + 2);
    const isOvulationDay = cycleDay === ovulationDay;
    
    let phase = 'Follicular Phase';
    if (isMenstruating) phase = 'Menstruation';
    else if (isOvulationDay) phase = 'Ovulation';
    else if (isFertile) phase = 'Fertile Window';
    else if (cycleDay > ovulationDay) phase = 'Luteal Phase';
    
    return {
      cycleDay,
      phase,
      isMenstruating,
      daysRemainingInPeriod,
      isFertile,
      ovulationDay
    };
  };

  const calculatePregnancyInfo = () => {
    const due = new Date(pregnancyDueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);
    
    // LMP = Due Date - 280 days
    const lmp = new Date(due.getTime() - (280 * 24 * 60 * 60 * 1000));
    
    const diffTime = today.getTime() - lmp.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const gestationWeek = Math.max(1, Math.min(40, Math.floor(diffDays / 7) + 1));
    const remainingDays = Math.max(0, Math.floor((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
    
    let fruit = 'Lemon';
    let sizeDesc = 'Baby is about 8.5 cm long and weighs around 43 grams.';
    let extraDesc = 'Fingerprints are starting to form!';
    
    if (gestationWeek <= 7) {
      fruit = 'Poppy Seed';
      sizeDesc = 'Baby is about 0.1 cm long and weighs under 1 gram.';
      extraDesc = 'Major organs are starting to form!';
    } else if (gestationWeek <= 11) {
      fruit = 'Raspberry';
      sizeDesc = 'Baby is about 1.6 cm long and weighs around 1 gram.';
      extraDesc = 'Baby is starting to wiggle their tiny limbs!';
    } else if (gestationWeek <= 15) {
      fruit = '🍋 Lemon';
      sizeDesc = 'Baby is about 8.5 cm long and weighs around 43 grams.';
      extraDesc = 'Fingerprints are starting to form!';
    } else if (gestationWeek <= 19) {
      fruit = '🥑 Avocado';
      sizeDesc = 'Baby is about 12 cm long and weighs around 150 grams.';
      extraDesc = 'Baby can now hear your heartbeat and voice!';
    } else if (gestationWeek <= 23) {
      fruit = '🍌 Banana';
      sizeDesc = 'Baby is about 26 cm long and weighs around 360 grams.';
      extraDesc = 'Baby is developing their sleep-wake cycles!';
    } else if (gestationWeek <= 27) {
      fruit = '🥦 Cauliflower';
      sizeDesc = 'Baby is about 36 cm long and weighs around 900 grams.';
      extraDesc = 'Baby is now opening and closing their eyes!';
    } else if (gestationWeek <= 31) {
      fruit = '🍆 Eggplant';
      sizeDesc = 'Baby is about 40 cm long and weighs around 1.5 kilograms.';
      extraDesc = 'Baby is gaining body fat and growing fast!';
    } else if (gestationWeek <= 35) {
      fruit = '🍈 Melon';
      sizeDesc = 'Baby is about 45 cm long and weighs around 2.2 kilograms.';
      extraDesc = 'Baby is getting snug in your womb!';
    } else {
      fruit = '🍉 Watermelon';
      sizeDesc = 'Baby is about 50 cm long and weighs around 3.2 kilograms.';
      extraDesc = 'Baby is fully developed and ready to meet you!';
    }
    
    let trimester = '1st Trimester';
    if (gestationWeek > 27) trimester = '3rd Trimester';
    else if (gestationWeek > 13) trimester = '2nd Trimester';
    
    return {
      gestationWeek,
      remainingDays,
      trimester,
      fruit,
      sizeDesc,
      extraDesc,
      dueDateString: due.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };
  };

  const calculateBabyInfo = () => {
    const dob = new Date(babyDob);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    dob.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - dob.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const months = Math.max(0, Math.floor(diffDays / 30.4));
    const weeks = Math.max(0, Math.floor((diffDays % 30.4) / 7));
    
    let phase = 'Phase 1: 0 - 3 Months';
    let phaseTitle = 'Getting to know the world';
    let phaseDescription = 'Gentle observations — these are not a test. Every child develops at their own pace.';
    if (months >= 18) {
      phase = 'Phase 6: 18 - 24 Months';
      phaseTitle = 'The Little Explorer';
      phaseDescription = 'Active movement and simple sentences. Child is discovering independence.';
    } else if (months >= 12) {
      phase = 'Phase 5: 12 - 18 Months';
      phaseTitle = 'First Steps & Words';
      phaseDescription = 'Walking and first spoken words. Curiosity is at an all-time high.';
    } else if (months >= 9) {
      phase = 'Phase 4: 9 - 12 Months';
      phaseTitle = 'Standing & Understanding';
      phaseDescription = 'Pulling up to stand and responding to simple requests.';
    } else if (months >= 6) {
      phase = 'Phase 3: 6 - 9 Months';
      phaseTitle = 'Sitting & Babbling';
      phaseDescription = 'Sitting independently and starting to eat solid foods.';
    } else if (months >= 3) {
      phase = 'Phase 2: 3 - 6 Months';
      phaseTitle = 'Smiling & Reaching';
      phaseDescription = 'Reaching for toys and rolling over. Gaining head control.';
    }
    
    return {
      months,
      weeks,
      phase,
      phaseTitle,
      phaseDescription,
      ageString: months === 0 && weeks === 0 
        ? 'Newborn' 
        : `${months} Month${months !== 1 ? 's' : ''}, ${weeks} Week${weeks !== 1 ? 's' : ''} old`
    };
  };

  const [activeScreen, setActiveScreen] = useState('switcher'); // switcher, menstrual, logger, calendar, analytics, pregnancy, dashboard, milestones, ratgeber, checklists, profile
  const [selectedBaby, setSelectedBaby] = useState('Emilia');
  const [activeMode, setActiveMode] = useState<'menstrual' | 'pregnancy' | 'baby'>('menstrual');
  
  // Menstrual Tracker States
  const [mood, setMood] = useState('Good');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['Cramps', 'Fatigue']);
  const [bleedingFlow, setBleedingFlow] = useState('Light');
  const [notes, setNotes] = useState('Feeling a bit tired today, but overall good. 💖');

  // Baby Milestones States
  const [checkedMilestones, setCheckedMilestones] = useState<Record<string, boolean>>({
    'm1': true,
    'm2': true,
    'm3': true,
    'm4': false,
    'm5': false,
    'm6': false,
  });

  // Checklist States
  const [englishChecklist, setEnglishChecklist] = useState<Record<string, boolean>>({
    'c1': true,
    'c2': true,
    'c3': false,
    'c4': false,
    'c5': false,
    'e1': true,
    'e2': false,
    'w1': false,
  });

  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const toggleMilestone = (id: string) => {
    setCheckedMilestones(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleEnglishChecklist = (id: string) => {
    setEnglishChecklist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
    );
  };

  const togglePregnancySymptom = (symptom: string) => {
    setPregnancySymptoms(prev => 
      prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
    );
  };

  const navigateTo = (screen: string) => {
    setActiveScreen(screen);
    if (screen === 'menstrual') {
      setActiveMode('menstrual');
    } else if (screen === 'pregnancy') {
      setActiveMode('pregnancy');
    } else if (screen === 'dashboard') {
      setActiveMode('baby');
    }
  };

  const getThemeBackground = () => {
    if (!isLoggedIn) {
      return "bg-gradient-to-b from-[#FFFDFB] via-[#FFF0E6] to-[#FDE2EC]";
    }
    if (!hasCompletedOnboarding) {
      return "bg-gradient-to-b from-[#FFFDFB] via-[#FFF5F0] to-[#FDEADA]";
    }
    if (activeMode === 'menstrual') {
      return "bg-gradient-to-b from-[#FFF5F8] via-[#FFF1F6] to-[#FDE2EC]";
    }
    if (activeMode === 'pregnancy') {
      return "bg-gradient-to-b from-[#FFFDFB] via-[#FFF5F0] to-[#FFF9F6]";
    }
    return "bg-gradient-to-b from-[#FFFDFB] via-[#EAF6ED] to-[#DFEDE2]";
  };

  const screenNames = [
    { id: 'switcher', title: '1. Mode Switcher' },
    { id: 'menstrual', title: '2. Menstrual Tracker' },
    { id: 'calendar', title: '2b. Cycle Calendar' },
    { id: 'logger', title: '3. Cycle Logger' },
    { id: 'analytics', title: '3b. Cycle Analytics' },
    { id: 'pregnancy', title: '4. Pregnancy Companion' },
    { id: 'dashboard', title: '5. Baby Dashboard' },
    { id: 'milestones', title: '6. Development Checks' },
    { id: 'checklists', title: '7. Checklists Screen' },
    { id: 'ratgeber', title: '8. Guides & Articles' },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-brand-cream text-gray-800 antialiased font-sans" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      
      {/* Simulation Sidebar / Controller */}
      <div className="w-full lg:w-80 bg-white border-b lg:border-b-0 lg:border-r border-brand-beige p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-brand-cream rounded-2xl border border-brand-beige flex items-center justify-center p-1">
              <MammothLogo className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-brand-brown leading-none">BAMUDI</h1>
              <span className="text-[11px] text-brand-orange font-semibold uppercase tracking-wider">Master User Flow</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            Switch screens to preview the unified pregnancy and child companion flow. Emojis have been replaced by a premium baby elephant logo vector.
          </p>

          <div className="space-y-2">
            {screenNames.map((s) => (
              <button
                key={s.id}
                onClick={() => navigateTo(s.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                  activeScreen === s.id
                    ? 'bg-brand-lightgreen text-brand-green border-l-4 border-brand-green'
                    : 'bg-brand-cream hover:bg-brand-beige/50 text-gray-700 border-l-4 border-transparent'
                }`}
              >
                <span>{s.title}</span>
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-beige">
          <h3 className="text-xs font-bold text-brand-brown uppercase tracking-wider mb-3">Product Spec</h3>
          <ul className="space-y-2 text-xs text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span>
              <span>Primary Color: <strong>Forest Green</strong></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-brown"></span>
              <span>Brand Color: <strong>Wood Brown</strong></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
              <span>Accent Color: <strong>Mammoth Orange</strong></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span>
              <span>Buttons: <strong>48px height, 16px bold</strong></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Previewer Area */}
      <div className="flex-1 flex justify-center items-center py-10 px-4">
        {/* Device Wrapper */}
        <div className="w-[430px] h-[832px] bg-white rounded-[55px] border-[12px] border-brand-brown/90 shadow-2xl relative overflow-hidden flex flex-col shrink-0 select-none">
          
          {/* iOS Status Bar */}
          <div className="flex justify-between items-center px-8 pt-4 pb-2 text-[12px] font-bold text-gray-900 z-50 bg-transparent select-none">
            <span>9:41</span>
            <div className="w-28 h-6 bg-brand-brown rounded-full absolute left-1/2 transform -translate-x-1/2 top-3 z-50 flex items-center justify-center">
              <div className="w-2 h-2 bg-brand-brown/50 rounded-full absolute right-4"></div>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-brown" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="none"/><path d="M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              <svg className="w-4 h-4 text-brand-brown" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21H23L12 2L1 21Z"/></svg>
              <div className="w-5 h-2.5 border border-brand-brown rounded-sm p-0.5 flex items-center"><div className="w-3.5 h-full bg-brand-brown rounded-2xs"></div></div>
            </div>
          </div>

          {/* Active Screen Rendering */}
          <div className={`flex-1 overflow-y-auto no-scrollbar pb-24 ${getThemeBackground()}`}>
            {!isLoggedIn ? (
              <>
                {authView === 'login' && (
                  <ScreenLogin 
                    onLogin={() => {
                      setIsLoggedIn(true);
                      setHasCompletedOnboarding(false); // Reset onboarding on normal login
                    }} 
                    onNavigateAuth={setAuthView} 
                    onQuickDemoLogin={() => {
                      setIsLoggedIn(true);
                      setHasCompletedOnboarding(true); // Bypass onboarding for quick demo
                      // Seed defaults matching original Lisa demo
                      setUserName('Lisa');
                      setCycleLmpDate('2026-06-30');
                      setCycleLength(28);
                      setPeriodDuration(5);
                      setPregnancyDueDate('2026-12-15');
                      setBabyName('Emilia');
                      setSelectedBaby('Emilia');
                      setBabyDob('2026-04-15');
                      navigateTo('switcher');
                    }}
                  />
                )}
                {authView === 'signup' && (
                  <ScreenSignUp 
                    onNavigateAuth={setAuthView} 
                    onRegister={(registeredName) => {
                      setUserName(registeredName);
                      setIsLoggedIn(true);
                      setHasCompletedOnboarding(false); // Begin onboarding setup
                    }}
                  />
                )}
                {authView === 'forgot' && (
                  <ScreenForgotPassword onNavigateAuth={setAuthView} />
                )}
              </>
            ) : !hasCompletedOnboarding ? (
              <ScreenOnboarding
                onComplete={() => {
                  setHasCompletedOnboarding(true);
                  setSelectedBaby(babyName); // sync selected baby state
                  navigateTo(userGoal === 'menstrual' ? 'menstrual' : userGoal === 'pregnancy' ? 'pregnancy' : 'dashboard');
                }}
                userName={userName}
                setUserName={setUserName}
                userGoal={userGoal}
                setUserGoal={setUserGoal}
                setCycleLmpDate={setCycleLmpDate}
                setCycleLength={setCycleLength}
                setPeriodDuration={setPeriodDuration}
                setPregnancyDueDate={setPregnancyDueDate}
                setBabyName={setBabyName}
                setBabyDob={setBabyDob}
                babyGender={babyGender}
                setBabyGender={setBabyGender}
              />
            ) : (
              <>
                {activeScreen === 'switcher' && (
                  <ScreenSwitcher 
                    onNavigate={navigateTo} 
                    userName={userName}
                    selectedBaby={selectedBaby} 
                    cycleInfo={calculateCycleInfo()}
                    pregnancyInfo={calculatePregnancyInfo()}
                    babyInfo={calculateBabyInfo()}
                  />
                )}
                {activeScreen === 'menstrual' && (
                  <ScreenMenstrual 
                    onNavigate={navigateTo} 
                    userName={userName}
                    cycleLmpDate={cycleLmpDate}
                    cycleLength={cycleLength}
                    periodDuration={periodDuration}
                    cycleInfo={calculateCycleInfo()}
                  />
                )}
                {activeScreen === 'calendar' && (
                  <ScreenCalendar onNavigate={navigateTo} />
                )}
                {activeScreen === 'logger' && (
                  <ScreenLogger 
                    onNavigate={navigateTo} 
                    activeMode={activeMode}
                    mood={activeMode === 'pregnancy' ? pregnancyMood : mood} 
                    setMood={activeMode === 'pregnancy' ? setPregnancyMood : setMood} 
                    selectedSymptoms={activeMode === 'pregnancy' ? pregnancySymptoms : selectedSymptoms} 
                    toggleSymptom={activeMode === 'pregnancy' ? togglePregnancySymptom : toggleSymptom} 
                    bleedingFlow={bleedingFlow} 
                    setBleedingFlow={setBleedingFlow} 
                    notes={activeMode === 'pregnancy' ? pregnancyNotes : notes} 
                    setNotes={activeMode === 'pregnancy' ? setPregnancyNotes : setNotes} 
                    pregnancyKicks={pregnancyKicks}
                    setPregnancyKicks={setPregnancyKicks}
                  />
                )}
                {activeScreen === 'analytics' && (
                  <ScreenAnalytics onNavigate={navigateTo} />
                )}
                {activeScreen === 'pregnancy' && (
                  <ScreenPregnancy 
                    onNavigate={navigateTo} 
                    pregnancyInfo={calculatePregnancyInfo()}
                    pregnancyKicks={pregnancyKicks}
                    setPregnancyKicks={setPregnancyKicks}
                  />
                )}
                {activeScreen === 'dashboard' && (
                  <ScreenDashboard 
                    onNavigate={navigateTo} 
                    selectedBaby={selectedBaby} 
                    babyInfo={calculateBabyInfo()}
                  />
                )}
                {activeScreen === 'milestones' && (
                  <ScreenMilestones onNavigate={navigateTo} checkedMilestones={checkedMilestones} toggleMilestone={toggleMilestone} />
                )}
                {activeScreen === 'checklists' && (
                  <ScreenChecklists onNavigate={navigateTo} activeMode={activeMode} englishChecklist={englishChecklist} toggleEnglishChecklist={toggleEnglishChecklist} />
                )}
                {activeScreen === 'ratgeber' && (
                  <ScreenRatgeber 
                    onNavigate={navigateTo} 
                    activeMode={activeMode} 
                    onSelectArticle={(idx) => {
                      setSelectedArticle(idx);
                      setActiveScreen('article-details');
                    }}
                  />
                )}
                {activeScreen === 'article-details' && (
                  <ScreenArticleDetails 
                    onNavigate={navigateTo} 
                    articleIdx={selectedArticle ?? 0}
                    activeMode={activeMode}
                  />
                )}
                {activeScreen === 'profile' && (
                  activeMode === 'menstrual' ? (
                    <ScreenInsights onNavigate={navigateTo} />
                  ) : (
                    <ScreenProfile 
                      onNavigate={navigateTo} 
                      activeMode={activeMode} 
                      selectedBaby={selectedBaby} 
                      setSelectedBaby={setSelectedBaby} 
                      babyInfo={calculateBabyInfo()}
                      babyName={babyName}
                      onLogOut={() => {
                        setIsLoggedIn(false);
                        setAuthView('login');
                      }}
                    />
                  )
                )}
              </>
            )}
          </div>

          {/* Context-aware Bottom Tab bar */}
          {isLoggedIn && hasCompletedOnboarding && (
            <BottomTabBar activeTab={activeScreen === 'article-details' ? 'ratgeber' : activeScreen} setActiveTab={navigateTo} context={activeMode} />
          )}
          
          {/* iOS Bottom Indicator bar */}
          <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-brand-brown rounded-full z-50"></div>
        </div>
      </div>
    </div>
  );
}

interface OnboardingProps {
  onComplete: () => void;
  userName: string;
  setUserName: (n: string) => void;
  userGoal: 'menstrual' | 'pregnancy' | 'baby';
  setUserGoal: (g: 'menstrual' | 'pregnancy' | 'baby') => void;
  setCycleLmpDate: (d: string) => void;
  setCycleLength: (l: number) => void;
  setPeriodDuration: (d: number) => void;
  setPregnancyDueDate: (d: string) => void;
  setBabyName: (n: string) => void;
  setBabyDob: (d: string) => void;
  babyGender: 'Boy' | 'Girl' | 'Surprise';
  setBabyGender: (g: 'Boy' | 'Girl' | 'Surprise') => void;
}

function ScreenOnboarding({
  onComplete,
  userName,
  setUserName,
  userGoal,
  setUserGoal,
  setCycleLmpDate,
  setCycleLength,
  setPeriodDuration,
  setPregnancyDueDate,
  setBabyName,
  setBabyDob,
  babyGender,
  setBabyGender
}: OnboardingProps) {
  const [step, setStep] = useState(1); // Step 1: Base profile, Step 2: Goal, Step 3: Specific Params
  const [inputName, setInputName] = useState(userName === 'Lisa' ? '' : userName);
  const [inputLmp, setInputLmp] = useState('');
  const [inputLen, setInputLen] = useState<string>('');
  const [inputDur, setInputDur] = useState<string>('');
  const [inputDue, setInputDue] = useState('');
  const [inputBabyName, setInputBabyName] = useState('');
  const [inputBabyDob, setInputBabyDob] = useState('');
  const [inputGender, setInputGender] = useState<'Boy' | 'Girl' | 'Surprise'>(babyGender);

  const handleNext = () => {
    if (step === 1) {
      if (!inputName.trim()) return;
      setUserName(inputName);
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (userGoal === 'menstrual') {
        if (!inputLmp) return;
        const parsedLen = Number(inputLen);
        const parsedDur = Number(inputDur);
        if (isNaN(parsedLen) || parsedLen < 15 || parsedLen > 50) return;
        if (isNaN(parsedDur) || parsedDur < 2 || parsedDur > 15) return;
        setCycleLmpDate(inputLmp);
        setCycleLength(parsedLen);
        setPeriodDuration(parsedDur);
      } else if (userGoal === 'pregnancy') {
        if (!inputDue) return;
        setPregnancyDueDate(inputDue);
      } else if (userGoal === 'baby') {
        if (!inputBabyName.trim() || !inputBabyDob) return;
        setBabyName(inputBabyName);
        setBabyDob(inputBabyDob);
        setBabyGender(inputGender);
      }
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="p-6 pt-4 animate-fade-in flex flex-col justify-between min-h-full text-gray-900 bg-gradient-to-b from-[#FFFDFB] via-[#FFF0E6] to-[#FDE2EC]">
      <div className="flex-grow flex flex-col justify-center">
        {/* Step indicator */}
        <div className="flex justify-between items-center mb-6">
          {step > 1 ? (
            <button onClick={handleBack} className="flex items-center gap-1 text-brand-brown font-bold text-xs">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div className="w-4 h-4"></div>
          )}
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {step} of 3</span>
          <div className="w-4 h-4"></div>
        </div>

        {/* Form content */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-white border border-brand-beige rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xs">
                <MammothLogo className="w-10 h-10" />
              </div>
              <h2 className="text-[20px] font-extrabold text-brand-brown leading-tight">Welcome to BAMUDI</h2>
              <p className="text-[12px] text-gray-500 font-semibold mt-1">Let's set up your profile properly.</p>
            </div>
            
            <div>
              <label className="text-[11px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1.5">What should we call you?</label>
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Enter your name"
                className="w-full h-11 px-4 bg-white border border-orange-100 rounded-2xl text-xs font-semibold focus:outline-none focus:border-brand-orange shadow-xs"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-[20px] font-extrabold text-brand-brown leading-tight">Choose Your Track</h2>
              <p className="text-[12px] text-gray-500 font-semibold mt-1">Select your current stage to customize the app.</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setUserGoal('menstrual')}
                className={`w-full p-4 rounded-3xl border text-left flex items-center justify-between transition-all duration-300 ${
                  userGoal === 'menstrual'
                    ? 'bg-brand-lightorange border-brand-orange shadow-xs'
                    : 'bg-white border-brand-beige hover:border-brand-orange/30'
                }`}
              >
                <div>
                  <h3 className="text-sm font-bold text-brand-brown">Cycle Tracker</h3>
                  <p className="text-[11px] text-gray-500 font-semibold mt-0.5">Track period, ovulation, and fertility</p>
                </div>
                <span className="text-2xl">🩸</span>
              </button>

              <button
                onClick={() => setUserGoal('pregnancy')}
                className={`w-full p-4 rounded-3xl border text-left flex items-center justify-between transition-all duration-300 ${
                  userGoal === 'pregnancy'
                    ? 'bg-brand-lightbrown border-brand-brown/75 shadow-xs'
                    : 'bg-white border-brand-beige hover:border-brand-brown/30'
                }`}
              >
                <div>
                  <h3 className="text-sm font-bold text-brand-brown">Pregnancy Companion</h3>
                  <p className="text-[11px] text-gray-500 font-semibold mt-0.5">Track gestation weeks and baby size</p>
                </div>
                <span className="text-2xl">🤰</span>
              </button>

              <button
                onClick={() => setUserGoal('baby')}
                className={`w-full p-4 rounded-3xl border text-left flex items-center justify-between transition-all duration-300 ${
                  userGoal === 'baby'
                    ? 'bg-brand-lightgreen border-brand-green/75 shadow-xs'
                    : 'bg-white border-brand-beige hover:border-brand-green/30'
                }`}
              >
                <div>
                  <h3 className="text-sm font-bold text-brand-brown">Baby Dashboard (Compass)</h3>
                  <p className="text-[11px] text-gray-500 font-semibold mt-0.5">Track baby milestones and development</p>
                </div>
                <span className="text-2xl">👶</span>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="text-center mb-5">
              <h2 className="text-[20px] font-extrabold text-brand-brown leading-tight">Complete Setup</h2>
              <p className="text-[12px] text-gray-500 font-semibold mt-1">Provide data for the selected track.</p>
            </div>

            {userGoal === 'menstrual' && (
              <div className="space-y-3 text-left">
                <div>
                  <label className="text-[10px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">First Day of Last Period (LMP)</label>
                  <input
                    type="date"
                    value={inputLmp}
                    onChange={(e) => setInputLmp(e.target.value)}
                    className="w-full h-10 px-4 bg-white border border-orange-100 rounded-2xl text-xs font-semibold focus:outline-none focus:border-brand-orange shadow-xs"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">Cycle Length (Days)</label>
                    <input
                      type="number"
                      value={inputLen}
                      onChange={(e) => setInputLen(e.target.value)}
                      placeholder="e.g. 28"
                      className="w-full h-10 px-4 bg-white border border-orange-100 rounded-2xl text-xs font-semibold focus:outline-none focus:border-brand-orange shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">Period Duration (Days)</label>
                    <input
                      type="number"
                      value={inputDur}
                      onChange={(e) => setInputDur(e.target.value)}
                      placeholder="e.g. 5"
                      className="w-full h-10 px-4 bg-white border border-orange-100 rounded-2xl text-xs font-semibold focus:outline-none focus:border-brand-orange shadow-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {userGoal === 'pregnancy' && (
              <div className="space-y-4 text-left">
                <div>
                  <label className="text-[11px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">Estimated Due Date (EDD)</label>
                  <input
                    type="date"
                    value={inputDue}
                    onChange={(e) => setInputDue(e.target.value)}
                    className="w-full h-11 px-4 bg-white border border-orange-100 rounded-2xl text-xs font-semibold focus:outline-none focus:border-brand-orange shadow-xs"
                  />
                  <p className="text-[10px] text-gray-400 font-semibold mt-1 pl-1">Don't know? Standard pregnancy is 280 days from your LMP start date.</p>
                </div>
              </div>
            )}

            {userGoal === 'baby' && (
              <div className="space-y-3 text-left">
                <div>
                  <label className="text-[10px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">Baby's Name</label>
                  <input
                    type="text"
                    value={inputBabyName}
                    onChange={(e) => setInputBabyName(e.target.value)}
                    placeholder="Enter baby's name or nickname"
                    className="w-full h-10 px-4 bg-white border border-orange-100 rounded-2xl text-xs font-semibold focus:outline-none focus:border-brand-orange shadow-xs"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">Baby's Birth Date (DOB)</label>
                  <input
                    type="date"
                    value={inputBabyDob}
                    onChange={(e) => setInputBabyDob(e.target.value)}
                    className="w-full h-10 px-4 bg-white border border-orange-100 rounded-2xl text-xs font-semibold focus:outline-none focus:border-brand-orange shadow-xs"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">Baby's Gender</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Boy', 'Girl', 'Surprise'].map((g) => (
                      <button
                        type="button"
                        key={g}
                        onClick={() => setInputGender(g as any)}
                        className={`h-10 text-xs font-bold rounded-xl border transition ${
                          inputGender === g
                            ? 'bg-brand-green border-brand-green text-white shadow-2xs'
                            : 'bg-white border-brand-beige text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-8">
        <button
          onClick={handleNext}
          className="w-full h-[48px] bg-brand-brown hover:bg-brand-brown/95 text-white rounded-2xl text-[16px] font-bold flex items-center justify-center shadow-md active:scale-98 transition"
        >
          <span>{step === 3 ? 'Start Tracking' : 'Continue'}</span>
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 1: MODE SWITCHER & NAVIGATION HUB
// -------------------------------------------------------------
function ScreenSwitcher({ 
  onNavigate, 
  userName,
  selectedBaby,
  cycleInfo,
  pregnancyInfo,
  babyInfo
}: { 
  onNavigate: (s: string) => void; 
  userName: string;
  selectedBaby: string;
  cycleInfo: { cycleDay: number; daysRemainingInPeriod: number; phase: string };
  pregnancyInfo: { gestationWeek: number; fruit: string };
  babyInfo: { ageString: string };
}) {
  const cyclePercent = Math.min(100, Math.max(0, (cycleInfo.cycleDay / 28) * 100));
  const pregnancyPercent = Math.min(100, Math.max(0, (pregnancyInfo.gestationWeek / 40) * 100));

  return (
    <div className="p-6 pt-4 animate-fade-in space-y-6 text-gray-900 bg-gradient-to-b from-[#FFFDFB] via-[#FFF5F0] to-[#FFF9F6] min-h-full">
      {/* Premium Header */}
      <div className="flex justify-between items-center bg-white/70 backdrop-blur-md p-3 -mx-3 rounded-3xl border border-white/50 shadow-2xs">
        <div className="w-10 h-10 rounded-2xl hover:bg-gray-100/50 flex items-center justify-center cursor-pointer transition">
          <Menu className="w-5 h-5 text-brand-brown" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-brown rounded-2xl flex items-center justify-center shadow-xs">
            <MammothLogo className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-[16px] tracking-widest text-brand-brown uppercase">BAMUDI</span>
        </div>
        <div className="w-10 h-10 rounded-2xl hover:bg-gray-100/50 flex items-center justify-center cursor-pointer transition relative">
          <Bell className="w-5 h-5 text-brand-brown" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-orange rounded-full ring-2 ring-white animate-pulse"></span>
        </div>
      </div>

      {/* Hero Greeting Section */}
      <div className="space-y-1 pl-1">
        <h2 className="text-[26px] font-black text-brand-brown leading-tight tracking-tight">
          Hello, <span className="bg-gradient-to-r from-brand-orange to-brand-brown bg-clip-text text-transparent">{userName}</span>! 👋
        </h2>
        <p className="text-[13px] text-brand-brown/70 font-medium tracking-wide">
          Welcome to your motherhood and cycle companion portal.
        </p>
      </div>

      {/* Main Switcher Bento Area */}
      <div className="space-y-4">
        {/* Cycle Tracker Mode Card */}
        <div 
          onClick={() => onNavigate('menstrual')}
          className="bg-gradient-to-br from-[#FFF5F7] via-[#FFF2F5] to-[#FDE8EE] p-5 rounded-[32px] border border-[#FAD7E2]/60 shadow-xs hover:shadow-md hover:scale-[1.01] hover:border-[#F27E9F]/40 cursor-pointer transition-all duration-300 group relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="pr-2">
              <span className="px-3 py-1 bg-[#FDE5EF] text-[#F03C7A] rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-2xs">
                {cycleInfo.phase}
              </span>
              <h3 className="text-[17px] font-black text-brand-brown mt-2.5">Cycle Tracker</h3>
            </div>
            <div className="w-14 h-14 bg-white/80 rounded-2xl shadow-sm border border-pink-100/60 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <span>🩸</span>
            </div>
          </div>
          
          {/* Mini progress bar */}
          <div className="space-y-2 mt-2.5 relative z-10">
            <div className="flex justify-between text-[11px] font-bold text-gray-500">
              <span>Day {cycleInfo.cycleDay} / 28</span>
              <span>{cycleInfo.daysRemainingInPeriod > 0 ? `${cycleInfo.daysRemainingInPeriod} days left` : 'Active'}</span>
            </div>
            <div className="w-full h-2 bg-pink-100/70 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#FF8FA3] to-[#F03C7A] rounded-full transition-all duration-500" 
                style={{ width: `${cyclePercent}%` }}
              ></div>
            </div>
            <p className="text-[12px] font-semibold text-[#F03C7A]/80 pt-0.5 leading-snug">
              {cycleInfo.daysRemainingInPeriod > 0 
                ? 'Menstrual phase is active. Stay comfortable! 🌸' 
                : 'Track mood and log symptoms for best predictions.'}
            </p>
          </div>
        </div>

        {/* Pregnancy Mode Card */}
        <div 
          onClick={() => onNavigate('pregnancy')}
          className="bg-gradient-to-br from-[#FFF7F0] via-[#FFF1E6] to-[#FDEADA] p-5 rounded-[32px] border border-orange-100/60 shadow-xs hover:shadow-md hover:scale-[1.01] hover:border-brand-orange/40 cursor-pointer transition-all duration-300 group relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="pr-2">
              <span className="px-3 py-1 bg-[#FFF0E2] text-brand-orange rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-2xs">
                Week {pregnancyInfo.gestationWeek}
              </span>
              <h3 className="text-[17px] font-black text-brand-brown mt-2.5">Pregnancy Companion</h3>
            </div>
            <div className="w-14 h-14 bg-white/80 rounded-2xl shadow-sm border border-orange-100/60 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <span>🤰</span>
            </div>
          </div>

          {/* Mini progress bar */}
          <div className="space-y-2 mt-2.5 relative z-10">
            <div className="flex justify-between text-[11px] font-bold text-gray-500">
              <span>Week {pregnancyInfo.gestationWeek} / 40</span>
              <span>Size of a {pregnancyInfo.fruit.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, '')}</span>
            </div>
            <div className="w-full h-2 bg-orange-100/60 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-brand-orange rounded-full transition-all duration-500" 
                style={{ width: `${pregnancyPercent}%` }}
              ></div>
            </div>
            <p className="text-[12px] font-semibold text-brand-orange/80 pt-0.5 leading-snug">
              Currently in {pregnancyInfo.gestationWeek > 27 ? '3rd Trimester' : pregnancyInfo.gestationWeek > 13 ? '2nd Trimester' : '1st Trimester'}. Baby is growing beautifully!
            </p>
          </div>
        </div>

        {/* Baby Mode Card (Bamudi Kompass) */}
        <div 
          onClick={() => onNavigate('dashboard')}
          className="bg-gradient-to-br from-[#EAF6ED] via-[#DFEDE2] to-[#D5E6D8] p-5 rounded-[32px] border border-emerald-100/60 shadow-xs hover:shadow-md hover:scale-[1.01] hover:border-brand-green/40 cursor-pointer transition-all duration-300 group relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="pr-2">
              <span className="px-3 py-1 bg-[#EEF8F1] text-brand-green rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-2xs">
                Active Baby
              </span>
              <h3 className="text-[17px] font-black text-brand-green mt-2.5">Bamudi Compass</h3>
            </div>
            <div className="w-14 h-14 bg-white/80 rounded-2xl shadow-sm border border-emerald-100/60 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <span>👶</span>
            </div>
          </div>

          {/* Baby Status details */}
          <div className="space-y-2 mt-2.5 relative z-10">
            <div className="flex justify-between text-[11px] font-bold text-emerald-800/80">
              <span>Baby Profile: {selectedBaby}</span>
              <span>{babyInfo.ageString}</span>
            </div>
            <div className="w-full h-2 bg-emerald-100/70 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-teal-400 to-brand-green rounded-full transition-all duration-500" 
                style={{ width: '50%' }}
              ></div>
            </div>
            <p className="text-[12px] font-semibold text-brand-green/80 pt-0.5 leading-snug">
              Milestones: Phase 1 Checklist (50% completed). Track growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 2: MENSTRUAL TRACKER HOME
// -------------------------------------------------------------
function ScreenMenstrual({ 
  onNavigate,
  userName,
  cycleLmpDate,
  cycleLength,
  periodDuration,
  cycleInfo
}: { 
  onNavigate: (s: string) => void;
  userName: string;
  cycleLmpDate: string;
  cycleLength: number;
  periodDuration: number;
  cycleInfo: {
    cycleDay: number;
    phase: string;
    isMenstruating: boolean;
    daysRemainingInPeriod: number;
    isFertile: boolean;
    ovulationDay: number;
  };
}) {
  const addDays = (dateStr: string, days: number) => {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const nextPeriodStart = addDays(cycleLmpDate, cycleLength);
  const nextPeriodEnd = addDays(cycleLmpDate, cycleLength + periodDuration - 1);
  const nextFertileStart = addDays(cycleLmpDate, cycleInfo.ovulationDay - 3);
  const nextFertileEnd = addDays(cycleLmpDate, cycleInfo.ovulationDay + 2);
  const nextOvulation = addDays(cycleLmpDate, cycleInfo.ovulationDay);

  // Dynamic SVG circle segments
  const totalCircumference = 276.46;
  const menstruationDays = periodDuration;
  const follicularDays = Math.max(1, cycleInfo.ovulationDay - periodDuration - 1);
  const ovulationDays = 1.5;

  const mStroke = (menstruationDays / cycleLength) * totalCircumference;
  const fStroke = (follicularDays / cycleLength) * totalCircumference;
  const oStroke = (ovulationDays / cycleLength) * totalCircumference;
  const lStroke = totalCircumference - mStroke - fStroke - oStroke;

  const mOffset = 0;
  const fOffset = -mStroke;
  const oOffset = -(mStroke + fStroke);
  const lOffset = -(mStroke + fStroke + oStroke);

  return (
    <div className="p-6 pt-3 animate-fade-in text-gray-900 bg-gradient-to-b from-[#FFF5F8] via-[#FFF1F6] to-[#FDE2EC] min-h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Menu className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => onNavigate('switcher')} />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#F03C7A] rounded-full flex items-center justify-center text-white text-[14px] font-bold">
            <span role="img" aria-label="elephant" className="text-lg -mt-0.5">🐘</span>
          </div>
          <span className="font-bold text-[18px] tracking-wide text-[#F03C7A] uppercase" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>BAMUDI</span>
        </div>
        <Bell className="w-6 h-6 text-gray-700 cursor-pointer" />
      </div>

      {/* Greeting */}
      <div className="mb-6">
        <h2 className="text-[20px] font-bold text-gray-900 mb-0.5 leading-snug">Hi, {userName}! 👋</h2>
        <p className="text-[14px] text-gray-600 font-normal">You're doing amazing!</p>
      </div>

      {/* Cycle Circle */}
      <div className="flex flex-col items-center mb-8 relative">
        <div className="w-[195px] h-[195px] rounded-full flex items-center justify-center relative shadow-[0_4px_16px_rgba(240,60,122,0.06)] border border-[#FFF1F6] bg-white">
          <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Segment 1: Menstruation */}
            <circle 
              cx="50" 
              cy="50" 
              r="44" 
              fill="none" 
              stroke="#F03C7A" 
              strokeWidth="4.5" 
              strokeDasharray={`${mStroke} ${totalCircumference}`} 
              strokeDashoffset={mOffset} 
              strokeLinecap="round" 
            />
            {/* Segment 2: Follicular */}
            <circle 
              cx="50" 
              cy="50" 
              r="44" 
              fill="none" 
              stroke="#FFAEC9" 
              strokeWidth="4.5" 
              strokeDasharray={`${fStroke} ${totalCircumference}`} 
              strokeDashoffset={fOffset} 
              strokeLinecap="round" 
            />
            {/* Segment 3: Ovulation */}
            <circle 
              cx="50" 
              cy="50" 
              r="44" 
              fill="none" 
              stroke="#D2C7DD" 
              strokeWidth="4.5" 
              strokeDasharray={`${oStroke} ${totalCircumference}`} 
              strokeDashoffset={oOffset} 
              strokeLinecap="round" 
            />
            {/* Segment 4: Luteal */}
            <circle 
              cx="50" 
              cy="50" 
              r="44" 
              fill="none" 
              stroke="#E5DFE3" 
              strokeWidth="4.5" 
              strokeDasharray={`${lStroke} ${totalCircumference}`} 
              strokeDashoffset={lOffset} 
              strokeLinecap="round" 
            />
          </svg>
          <div className="text-center z-20 flex flex-col items-center justify-center">
            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1">CYCLE DAY</p>
            <p className="text-[56px] font-semibold text-gray-900 leading-none mb-1 font-sans">{cycleInfo.cycleDay}</p>
            <p className="text-[13px] text-gray-400 font-semibold mb-2">of {cycleLength}</p>
            <Droplet className="w-4 h-4 text-[#F03C7A] fill-[#F03C7A] mb-1.5" />
            <span className="text-[13px] font-bold text-[#F03C7A] tracking-wide">{cycleInfo.phase}</span>
          </div>
        </div>
        <div className="mt-5 text-center">
          <p className="text-[14px] font-semibold text-gray-800">
            {cycleInfo.daysRemainingInPeriod > 0 
              ? `${cycleInfo.daysRemainingInPeriod} days of menstruation left` 
              : `Current Phase: ${cycleInfo.phase}`}
          </p>
          <p className="text-[12px] font-normal text-gray-500">
            {cycleInfo.cycleDay <= cycleInfo.ovulationDay 
              ? `Next fertile window starts in ${Math.max(0, cycleInfo.ovulationDay - 3 - cycleInfo.cycleDay)} days` 
              : `Next period in ${Math.max(0, cycleLength - cycleInfo.cycleDay + 1)} days`}
          </p>
        </div>
      </div>

      {/* Upcoming predictions */}
      <div className="mb-6">
        <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3 pl-1">Upcoming</h3>
        <div className="bg-white rounded-3xl p-5 border border-gray-100 space-y-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Droplet className="w-5 h-5 text-[#F03C7A] flex-shrink-0" fill="currentColor" />
            <div>
              <p className="text-[14px] font-bold text-gray-900">Menstruation</p>
              <p className="text-[12px] font-normal text-gray-500">{nextPeriodStart} - {nextPeriodEnd}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Leaf className="w-5 h-5 text-[#86C48B] flex-shrink-0" fill="currentColor" />
            <div>
              <p className="text-[14px] font-bold text-gray-900">Fertile Window</p>
              <p className="text-[12px] font-normal text-gray-500">{nextFertileStart} - {nextFertileEnd}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Circle className="w-5 h-5 text-[#B696D9] flex-shrink-0" strokeWidth={3} />
            <div>
              <p className="text-[14px] font-bold text-gray-900">Ovulation</p>
              <p className="text-[12px] font-normal text-gray-500">{nextOvulation}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Tip */}
      <div className="bg-[#FDE5EF] border border-[#FAD7E4] p-5 rounded-3xl flex items-center justify-between shadow-xs mb-4">
        <div className="pr-4">
          <h4 className="text-[12px] font-bold text-[#F03C7A] uppercase tracking-wider mb-1">Today's Tip</h4>
          <p className="text-[14px] text-gray-900 font-bold leading-snug mb-1">Take time for yourself.</p>
          <p className="text-[12px] font-normal text-gray-600">Your well-being comes first.</p>
        </div>
        <div className="w-16 h-16 bg-[#FFF5F8] border border-[#FAD7E4]/50 rounded-2xl flex items-center justify-center flex-shrink-0">
          <MeditatingGirlIllustration className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
// -------------------------------------------------------------
// SCREEN 3: MENSTRUAL LOGGER (moods, symptoms, flow)
// -------------------------------------------------------------
function ScreenLogger({ 
  onNavigate, 
  activeMode,
  mood, 
  setMood, 
  selectedSymptoms, 
  toggleSymptom, 
  bleedingFlow, 
  setBleedingFlow, 
  notes, 
  setNotes,
  pregnancyKicks,
  setPregnancyKicks
}: { 
  onNavigate: (s: string) => void;
  activeMode: 'menstrual' | 'pregnancy' | 'baby';
  mood: string;
  setMood: (mood: string) => void;
  selectedSymptoms: string[];
  toggleSymptom: (symptom: string) => void;
  bleedingFlow: string;
  setBleedingFlow: (flow: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
  pregnancyKicks?: number;
  setPregnancyKicks?: (k: number) => void;
}) {
  const isPregnancy = activeMode === 'pregnancy';

  const moods = isPregnancy ? [
    { label: 'Great', emoji: '😍' },
    { label: 'Good', emoji: '🙂' },
    { label: 'Tired', emoji: '😐' },
    { label: 'Emotional', emoji: '🥺' },
    { label: 'Exhausted', emoji: '😫' },
  ] : [
    { label: 'Great', emoji: '😍' },
    { label: 'Good', emoji: '🙂' },
    { label: 'Okay', emoji: '😐' },
    { label: 'Bad', emoji: '🙁' },
    { label: 'Terrible', emoji: '😫' },
  ];

  const symptoms = isPregnancy ? [
    'Morning sickness', 'Fatigue', 'Backache', 
    'Swollen feet', 'Heartburn', 'Mood swings', 'Headache'
  ] : [
    'Cramps', 'Backache', 'Headache', 
    'Bloating', 'Fatigue', 'Acne', 
    'Breast tenderness', 'Nausea', 'Sleep issues'
  ];
  
  const flows = ['Very light', 'Light', 'Medium', 'Heavy', 'Very heavy'];

  return (
    <div className={`p-6 pt-3 animate-fade-in text-gray-900 min-h-full ${
      isPregnancy 
        ? 'bg-gradient-to-b from-[#FFFDFB] via-[#FFF5F0] to-[#FDEADA]' 
        : 'bg-gradient-to-b from-[#FFF5F8] via-[#FFF1F6] to-[#FDE2EC]'
    }`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <ArrowLeft className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => onNavigate(isPregnancy ? 'pregnancy' : 'menstrual')} />
        <h2 className="text-[16px] font-bold text-gray-900">{isPregnancy ? 'Pregnancy Journal' : 'Today\'s Cycle Log'}</h2>
        <div className="w-6 h-6"></div>
      </div>

      {/* Mood Section */}
      <div className="mb-8">
        <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">Mood</h3>
        <p className="text-[13px] text-gray-500 font-medium mb-3.5 pl-1">How are you feeling?</p>
        <div className="flex justify-between items-center bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
          {moods.map((m) => {
            const isSelected = mood === m.label;
            return (
              <div 
                key={m.label} 
                onClick={() => setMood(m.label)}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl cursor-pointer transition-all ${
                  isSelected 
                    ? (isPregnancy ? 'bg-orange-50 border border-brand-orange scale-105 shadow-2xs' : 'bg-[#EEF8F0] border border-[#86C48B] scale-105 shadow-2xs') 
                    : 'border border-transparent hover:bg-gray-50'
                }`}
              >
                <span className={`text-2xl transition-all ${isSelected ? 'scale-110' : 'opacity-70'}`}>{m.emoji}</span>
                <span className={`text-[11px] ${isSelected ? 'font-bold text-gray-900' : 'font-semibold text-gray-500'}`}>{m.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Symptoms Section */}
      <div className="mb-8">
        <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">Symptoms</h3>
        <p className="text-[13px] text-gray-500 font-medium mb-3.5 pl-1">What symptoms are you experiencing?</p>
        <div className="flex flex-wrap gap-2.5">
          {symptoms.map((s) => {
            const isSelected = selectedSymptoms.includes(s);
            return (
              <button 
                key={s} 
                onClick={() => toggleSymptom(s)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  isSelected 
                    ? (isPregnancy ? 'bg-orange-100/70 text-brand-orange border-orange-200 shadow-2xs' : 'bg-[#FDE5EF] text-[#F03C7A] border-[#FAD7E4] shadow-2xs') 
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Special Context-Based Area */}
      {isPregnancy ? (
        /* Kick Counter Area for Pregnancy */
        <div className="mb-8">
          <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">Baby Kicks</h3>
          <p className="text-[13px] text-gray-500 font-medium mb-3.5 pl-1">Track baby's active moments</p>
          <div className="flex justify-between items-center bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
            <div>
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Current Count</p>
              <h4 className="text-[22px] font-black text-brand-brown">{pregnancyKicks || 0} kicks</h4>
            </div>
            <button 
              onClick={() => setPregnancyKicks && setPregnancyKicks((pregnancyKicks || 0) + 1)}
              className="px-5 py-2.5 bg-gradient-to-r from-brand-orange to-amber-500 hover:opacity-95 text-white font-bold rounded-2xl text-xs shadow-2xs active:scale-95 transition"
            >
              + Log Kick
            </button>
          </div>
        </div>
      ) : (
        /* Bleeding Flow Area for Menstruation */
        <div className="mb-8">
          <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">Bleeding</h3>
          <p className="text-[13px] text-gray-500 font-medium mb-3.5 pl-1">How heavy is your flow?</p>
          <div className="flex justify-between bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
            {flows.map((f, i) => {
              const isSelected = bleedingFlow === f;
              return (
                <div 
                  key={f} 
                  onClick={() => setBleedingFlow(f)}
                  className="flex flex-col items-center gap-2 cursor-pointer group"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isSelected 
                      ? 'border-2 border-[#F03C7A] bg-[#FDE5EF]' 
                      : 'border border-gray-100 bg-gray-50 group-hover:bg-gray-100'
                  }`}>
                    <Droplet 
                      className={`w-5 h-5 ${i === 0 && !isSelected ? 'text-gray-300' : 'text-[#F03C7A]'}`} 
                      fill={(i > 0 || isSelected) ? "currentColor" : "none"} 
                    />
                  </div>
                  <span className={`text-[10px] text-center w-12 leading-tight transition-all ${
                    isSelected ? 'font-bold text-gray-900' : 'font-semibold text-gray-500'
                  }`}>{f}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Notes Section */}
      <div className="mb-8">
        <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">Notes</h3>
        <p className="text-[13px] text-gray-500 font-medium mb-2.5 pl-1">Write a note...</p>
        <textarea 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full h-24 p-4 bg-white border border-gray-200 rounded-3xl text-sm focus:outline-none focus:border-brand-orange leading-relaxed shadow-sm resize-none"
          placeholder={isPregnancy ? "Log pregnancy updates or memories..." : "Log notes about your cycle..."}
        />
      </div>

      <button 
        onClick={() => onNavigate(isPregnancy ? 'pregnancy' : 'menstrual')}
        className={`w-full h-[48px] text-white rounded-2xl text-[16px] font-bold flex items-center justify-center shadow-md active:scale-98 transition-all ${
          isPregnancy ? 'bg-brand-orange hover:bg-brand-orange/95' : 'bg-brand-brown hover:bg-brand-brown/95'
        }`}
      >
        <span>{isPregnancy ? 'Save pregnancy log' : 'Save cycle log'}</span>
      </button>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 4: PREGNANCY COMPANION HOME
// -------------------------------------------------------------
function ScreenPregnancy({ 
  onNavigate,
  pregnancyInfo,
  pregnancyKicks,
  setPregnancyKicks
}: { 
  onNavigate: (s: string) => void;
  pregnancyInfo: {
    gestationWeek: number;
    remainingDays: number;
    trimester: string;
    fruit: string;
    sizeDesc: string;
    extraDesc: string;
    dueDateString: string;
  };
  pregnancyKicks: number;
  setPregnancyKicks: (k: number) => void;
}) {
  const getFetalStats = (week: number) => {
    if (week <= 8) return { len: '1.6 cm', wt: '1 g' };
    if (week <= 12) return { len: '5.4 cm', wt: '14 g' };
    if (week <= 16) return { len: '11.6 cm', wt: '100 g' };
    if (week <= 20) return { len: '25.6 cm', wt: '300 g' };
    if (week <= 24) return { len: '30 cm', wt: '600 g' };
    if (week <= 28) return { len: '37.6 cm', wt: '1000 g' };
    if (week <= 32) return { len: '42.4 cm', wt: '1700 g' };
    if (week <= 36) return { len: '47.4 cm', wt: '2600 g' };
    return { len: '51.2 cm', wt: '3400 g' };
  };

  const stats = getFetalStats(pregnancyInfo.gestationWeek);
  const isTrimester1 = pregnancyInfo.gestationWeek <= 13;
  const isTrimester2 = pregnancyInfo.gestationWeek > 13 && pregnancyInfo.gestationWeek <= 27;
  const isTrimester3 = pregnancyInfo.gestationWeek > 27;

  return (
    <div className="p-6 pt-4 animate-fade-in space-y-6 text-gray-900 bg-gradient-to-b from-[#FFFDFB] via-[#FFF5F0] to-[#FFF9F6] min-h-full">
      {/* Premium Header */}
      <div className="flex justify-between items-center bg-white/70 backdrop-blur-md p-3 -mx-3 rounded-3xl border border-white/50 shadow-2xs">
        <button 
          onClick={() => onNavigate('switcher')}
          className="w-10 h-10 rounded-2xl hover:bg-gray-100/50 flex items-center justify-center transition"
        >
          <ArrowLeft className="w-5 h-5 text-brand-brown" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-orange/10 rounded-2xl flex items-center justify-center">
            <span className="text-sm">🤰</span>
          </div>
          <span className="font-extrabold text-[15px] text-brand-brown tracking-wide">Pregnancy Mode</span>
        </div>
        <button 
          onClick={() => onNavigate('profile')}
          className="w-10 h-10 rounded-2xl hover:bg-gray-100/50 flex items-center justify-center transition"
        >
          <Settings className="w-5 h-5 text-brand-brown" />
        </button>
      </div>

      {/* Hero Gestation Tracker */}
      <div className="bg-gradient-to-br from-brand-brown to-[#5A3825] rounded-[32px] p-6 text-white shadow-md relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        
        <div className="relative z-10 space-y-4">
          <div className="flex justify-between items-center">
            <span className="px-3 py-1 bg-white/15 text-[10px] font-extrabold uppercase tracking-widest rounded-full backdrop-blur-md">
              {pregnancyInfo.trimester}
            </span>
            <span className="text-xs font-bold text-white/80">Due Date: {pregnancyInfo.dueDateString}</span>
          </div>
          
          <div className="space-y-1">
            <p className="text-[11px] text-white/70 font-semibold tracking-wider uppercase">Gestation Period</p>
            <h2 className="text-[36px] font-black leading-none">Week {pregnancyInfo.gestationWeek}</h2>
          </div>
          
          {/* Progress bar inside the hero */}
          <div className="space-y-1.5">
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-orange rounded-full transition-all duration-500" 
                style={{ width: `${(pregnancyInfo.gestationWeek / 40) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[11px] font-bold text-white/70">
              <span>Day {(pregnancyInfo.gestationWeek * 7) - 6}</span>
              <span>{Math.max(0, 280 - (pregnancyInfo.gestationWeek * 7))} Days remaining</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trimester Timeline */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-extrabold text-brand-brown/50 uppercase tracking-widest pl-1">Trimester Timeline</h4>
        <div className="flex gap-2 p-1 bg-white border border-brand-beige rounded-2xl shadow-2xs">
          <div className={`flex-1 text-center py-2 text-[10px] font-extrabold rounded-xl transition ${
            isTrimester1 ? 'bg-brand-orange text-white shadow-2xs' : 'text-gray-400'
          }`}>
            Trimester 1
          </div>
          <div className={`flex-1 text-center py-2 text-[10px] font-extrabold rounded-xl transition ${
            isTrimester2 ? 'bg-brand-orange text-white shadow-2xs' : 'text-gray-400'
          }`}>
            Trimester 2
          </div>
          <div className={`flex-1 text-center py-2 text-[10px] font-extrabold rounded-xl transition ${
            isTrimester3 ? 'bg-brand-orange text-white shadow-2xs' : 'text-gray-400'
          }`}>
            Trimester 3
          </div>
        </div>
      </div>

      {/* Baby Size Visualizer Card */}
      <div className="bg-gradient-to-br from-[#FFF7F0] via-[#FFF2E6] to-[#FDEADA] rounded-[32px] p-5 border border-orange-100/60 shadow-2xs space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-orange-100/50 flex items-center justify-center text-3xl flex-shrink-0">
            {pregnancyInfo.fruit.match(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/) 
              ? pregnancyInfo.fruit.substring(0, 2) 
              : '🥑'}
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] font-black uppercase text-brand-orange tracking-widest">Fetal Development</span>
            <h3 className="text-[17px] font-black text-brand-brown">
              Size of a {pregnancyInfo.fruit.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, '')}
            </h3>
            <div className="flex gap-3 text-[11px] font-bold text-gray-500 pt-0.5">
              <span>Length: <strong className="text-brand-brown">{stats.len}</strong></span>
              <span>•</span>
              <span>Weight: <strong className="text-brand-brown">{stats.wt}</strong></span>
            </div>
          </div>
        </div>
        <p className="text-[12px] font-semibold text-brand-brown/85 leading-relaxed pl-1">
          {pregnancyInfo.sizeDesc} {pregnancyInfo.extraDesc}
        </p>
      </div>

      {/* Nesting Checklist & Interactive Kick Counter (Two Column Bento Grid) */}
      <div className="grid grid-cols-2 gap-4">
        {/* Kick Counter Card */}
        <div className="bg-white p-5 rounded-[28px] border border-brand-beige shadow-2xs flex flex-col justify-between space-y-3">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-[#F03C7A] uppercase tracking-wider block">Baby Kicks</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-brand-brown">{pregnancyKicks}</span>
              <span className="text-[10px] text-gray-400 font-bold">today</span>
            </div>
          </div>
          <button 
            onClick={() => setPregnancyKicks(pregnancyKicks + 1)}
            className="w-full py-2 bg-gradient-to-r from-rose-400 to-[#F03C7A] hover:opacity-95 active:scale-95 transition text-white rounded-xl text-[11px] font-bold shadow-2xs flex items-center justify-center gap-1"
          >
            <span>+ Log Kick</span>
          </button>
        </div>

        {/* Nesting Tasks Link */}
        <div 
          onClick={() => onNavigate('checklists')}
          className="bg-white p-5 rounded-[28px] border border-brand-beige shadow-2xs flex flex-col justify-between cursor-pointer hover:border-brand-green/30 transition-all duration-200"
        >
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-brand-green uppercase tracking-wider block">Nesting Guide</span>
            <h4 className="text-[13px] font-bold text-brand-brown leading-tight">Clinic Bag & Nursery</h4>
          </div>
          <div className="flex items-center justify-between text-[11px] font-bold text-brand-green pt-2">
            <span>Open Tasks</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Weekly Tips */}
      <div className="bg-[#EAF6ED] border border-brand-green/10 p-5 rounded-[32px] flex gap-4 shadow-2xs">
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 text-2xl shadow-sm border border-emerald-100/50">
          💡
        </div>
        <div className="space-y-1">
          <h4 className="text-[13px] font-bold text-brand-green">Weekly Pregnancy Tip</h4>
          <p className="text-[12px] text-brand-green/90 leading-relaxed font-semibold">
            {pregnancyInfo.gestationWeek < 13 
              ? "Ensure proper rest and take prenatal vitamins. Drink lots of water to stay hydrated."
              : pregnancyInfo.gestationWeek < 28 
              ? "Second trimester energy boost! Try mild walking, stretch routines, and moderate workouts."
              : "Review birth preferences and ensure your hospital bag packing checklist is complete."}
          </p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 5: BABY DASHBOARD (KOMPASS OVERVIEW)
// -------------------------------------------------------------
function ScreenDashboard({ 
  onNavigate, 
  selectedBaby,
  babyInfo
}: { 
  onNavigate: (s: string) => void; 
  selectedBaby: string;
  babyInfo: {
    months: number;
    weeks: number;
    phase: string;
    phaseTitle: string;
    phaseDescription: string;
    ageString: string;
  };
}) {
  return (
    <div className="p-6 pt-3 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <ArrowLeft className="w-6 h-6 text-brand-brown cursor-pointer" onClick={() => onNavigate('switcher')} />
        <div className="flex items-center gap-1.5">
          <MammothLogo className="w-6 h-6" />
          <span className="font-extrabold text-[15px] tracking-wide text-brand-brown">BAMUDI</span>
          <span className="font-bold text-[15px] tracking-wide text-brand-green">COMPASS</span>
        </div>
        <Settings className="w-6 h-6 text-brand-brown cursor-pointer" onClick={() => onNavigate('profile')} />
      </div>

      {/* Baby Profile Info Card */}
      <div className="bg-white rounded-3xl p-5 border border-brand-beige shadow-xs flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-brand-cream border-2 border-brand-beige flex items-center justify-center p-1.5 flex-shrink-0">
          <MammothLogo className="w-full h-full" />
        </div>
        <div>
          <h3 className="text-[18px] font-bold text-brand-brown">{selectedBaby}</h3>
          <p className="text-[13px] text-gray-500 font-medium">{babyInfo.ageString}</p>
          <span className="text-[11px] font-bold text-brand-green bg-brand-lightgreen px-2.5 py-0.5 rounded-full mt-1.5 inline-block">{babyInfo.phase}</span>
        </div>
      </div>

      {/* Milestone Progress Indicator */}
      <div 
        onClick={() => onNavigate('milestones')}
        className="bg-brand-lightgreen rounded-3xl p-5 border border-brand-green/20 mb-6 flex items-center justify-between cursor-pointer hover:border-brand-green/40 transition-all duration-200"
      >
        <div className="flex-1 pr-2">
          <p className="text-[11px] font-bold text-brand-green uppercase tracking-wider mb-1">Milestones progress</p>
          <h3 className="text-base font-bold text-brand-green mb-2 leading-tight">{babyInfo.phase.split(':')[0]} Checklist</h3>
          <p className="text-[12px] text-brand-green/80 leading-snug">3 of 6 milestones checked. Keep tracking daily!</p>
        </div>
        <div className="w-16 h-16 rounded-full border-4 border-brand-lightgreen flex items-center justify-center relative flex-shrink-0 bg-white shadow-xs">
          <span className="text-[15px] font-bold text-brand-green">50%</span>
        </div>
      </div>

      {/* Bento Grid Navigation */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div 
          onClick={() => onNavigate('milestones')}
          className="bg-white p-4 rounded-2xl border border-brand-beige shadow-xs cursor-pointer hover:border-brand-green/30 transition duration-200"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-lightgreen flex items-center justify-center text-xl mb-3">📈</div>
          <h4 className="text-[13px] font-bold text-brand-brown mb-0.5">Development</h4>
          <p className="text-[11px] text-gray-500">Milestone checks</p>
        </div>

        <div 
          onClick={() => onNavigate('ratgeber')}
          className="bg-white p-4 rounded-2xl border border-brand-beige shadow-xs cursor-pointer hover:border-brand-green/30 transition duration-200"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-lightorange flex items-center justify-center text-xl mb-3">📚</div>
          <h4 className="text-[13px] font-bold text-brand-brown mb-0.5">Guides</h4>
          <p className="text-[11px] text-gray-500">Tips & articles</p>
        </div>

        <div 
          onClick={() => onNavigate('checklists')}
          className="bg-white p-4 rounded-2xl border border-brand-beige shadow-xs cursor-pointer hover:border-brand-green/30 transition duration-200"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-lightbrown flex items-center justify-center text-xl mb-3">📋</div>
          <h4 className="text-[13px] font-bold text-brand-brown mb-0.5">Checklists</h4>
          <p className="text-[11px] text-gray-500">Essentials & prep</p>
        </div>

        <div 
          onClick={() => onNavigate('profile')}
          className="bg-white p-4 rounded-2xl border border-brand-beige shadow-xs cursor-pointer hover:border-brand-green/30 transition duration-200"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center text-xl mb-3">👤</div>
          <h4 className="text-[13px] font-bold text-brand-brown mb-0.5">Profile Info</h4>
          <p className="text-[11px] text-gray-500">Manage settings</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 6: DEVELOPMENT CHECKS
// -------------------------------------------------------------
function ScreenMilestones({ onNavigate, checkedMilestones, toggleMilestone }: { onNavigate: (s: string) => void; checkedMilestones: Record<string, boolean>; toggleMilestone: (id: string) => void }) {
  const milestonesList = [
    { id: 'm1', text: 'Responds to sounds' },
    { id: 'm2', text: 'Follows objects with eyes' },
    { id: 'm3', text: 'Holds head up' },
    { id: 'm4', text: 'Brings hands to mouth' },
    { id: 'm5', text: 'Coos and babbles' },
    { id: 'm6', text: 'Pushes up on arms' },
  ];

  const checkedCount = Object.values(checkedMilestones).filter(Boolean).length;

  return (
    <div className="p-6 pt-3 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <ArrowLeft className="w-6 h-6 text-brand-brown cursor-pointer" onClick={() => onNavigate('dashboard')} />
        <div className="flex items-center gap-1.5">
          <MammothLogo className="w-5 h-5" />
          <h2 className="text-[15px] font-bold text-brand-brown">Development checks</h2>
        </div>
        <div className="w-6 h-6"></div>
      </div>

      <div className="mb-6">
        <span className="text-[10px] font-bold text-brand-green bg-brand-lightgreen px-3 py-1 rounded-full uppercase tracking-wider">Phase 1: 0 - 3 Months</span>
        <h3 className="text-xl font-bold text-brand-brown mt-2.5 mb-1.5">Getting to know the world</h3>
        <p className="text-[13px] text-gray-500 leading-snug">
          Gentle observations — these are not a test. Every child develops at their own pace.
        </p>
      </div>

      {/* Milestone Progress Bar */}
      <div className="bg-white border border-brand-beige rounded-2xl p-4 shadow-2xs mb-6">
        <div className="flex justify-between items-center mb-2 text-xs font-semibold text-gray-700">
          <span>Observed Milestones</span>
          <span>{checkedCount} of {milestonesList.length}</span>
        </div>
        <div className="w-full h-2.5 bg-brand-cream rounded-full overflow-hidden">
          <div className="h-full bg-brand-green rounded-full transition-all duration-300" style={{ width: `${(checkedCount / milestonesList.length) * 100}%` }}></div>
        </div>
      </div>

      {/* Checkbox Checklist */}
      <div className="space-y-3 mb-8">
        {milestonesList.map((m) => {
          const isChecked = checkedMilestones[m.id];
          return (
            <div 
              key={m.id}
              onClick={() => toggleMilestone(m.id)}
              className={`flex items-center gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                isChecked 
                  ? 'bg-brand-lightgreen border-brand-green/30 text-brand-green' 
                  : 'bg-white border-brand-beige text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                isChecked 
                  ? 'bg-brand-green border-brand-green text-white' 
                  : 'border-gray-300 bg-white'
              }`}>
                {isChecked && <Check className="w-4 h-4" strokeWidth={3} />}
              </div>
              <span className="text-[14px] font-semibold">{m.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 7: CHECKLISTS TABBED
// -------------------------------------------------------------
function ScreenChecklists({ onNavigate, activeMode, englishChecklist, toggleEnglishChecklist }: { onNavigate: (s: string) => void; activeMode: 'menstrual' | 'pregnancy' | 'baby'; englishChecklist: Record<string, boolean>; toggleEnglishChecklist: (id: string) => void }) {
  const [activeTab, setActiveTab] = useState('hospital');

  const checklistItems = {
    hospital: [
      { id: 'c1', name: 'Identity documents & birth details' },
      { id: 'c2', name: 'Comfortable clothing for labor' },
      { id: 'c3', name: 'Snacks & drinks' },
      { id: 'c4', name: 'Baby outfit for going home' },
      { id: 'c5', name: 'Toiletries & nursing bra' },
    ],
    essentials: [
      { id: 'e1', name: 'Baby bodysuit (5-6x)' },
      { id: 'e2', name: 'Cozy sleeping bag' },
    ],
    postpartum: [
      { id: 'w1', name: 'Postpartum recovery pads' },
    ]
  };

  const currentList = checklistItems[activeTab as keyof typeof checklistItems];
  const checkedCount = currentList.filter(item => englishChecklist[item.id]).length;

  const getTabStyle = (tabId: string) => {
    const isActive = activeTab === tabId;
    if (isActive) {
      if (activeMode === 'pregnancy') return 'bg-brand-orange text-white shadow-xs';
      if (activeMode === 'menstrual') return 'bg-[#F03C7A] text-white shadow-xs';
      return 'bg-brand-green text-white shadow-xs';
    }
    return 'text-gray-600 hover:text-gray-900';
  };

  const getProgressColor = () => {
    if (activeMode === 'pregnancy') return 'bg-brand-orange';
    if (activeMode === 'menstrual') return 'bg-[#F03C7A]';
    return 'bg-brand-green';
  };

  const getCheckboxStyle = (isChecked: boolean) => {
    if (isChecked) {
      if (activeMode === 'pregnancy') return 'bg-brand-orange border-brand-orange text-white';
      if (activeMode === 'menstrual') return 'bg-[#F03C7A] border-[#F03C7A] text-white';
      return 'bg-brand-green border-brand-green text-white';
    }
    return 'border-gray-300';
  };

  const getHoverBorder = () => {
    if (activeMode === 'pregnancy') return 'hover:border-brand-orange/20';
    if (activeMode === 'menstrual') return 'hover:border-[#F03C7A]/20';
    return 'hover:border-brand-green/20';
  };

  return (
    <div className="p-6 pt-3 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <ArrowLeft className="w-6 h-6 text-brand-brown cursor-pointer" onClick={() => onNavigate(activeMode === 'pregnancy' ? 'pregnancy' : 'dashboard')} />
        <div className="flex items-center gap-1.5">
          <MammothLogo className="w-5 h-5" />
          <h2 className="text-[15px] font-bold text-brand-brown">Checklists</h2>
        </div>
        <div className="w-6 h-6"></div>
      </div>

      {/* Tabs */}
      <div className="flex bg-brand-cream border border-brand-beige p-1.5 rounded-full mb-6">
        <button 
          onClick={() => setActiveTab('hospital')}
          className={`flex-1 py-2 text-[12px] font-bold rounded-full transition-all ${getTabStyle('hospital')}`}
        >
          Hospital Bag
        </button>
        <button 
          onClick={() => setActiveTab('essentials')}
          className={`flex-1 py-2 text-[12px] font-bold rounded-full transition-all ${getTabStyle('essentials')}`}
        >
          Essentials
        </button>
        <button 
          onClick={() => setActiveTab('postpartum')}
          className={`flex-1 py-2 text-[12px] font-bold rounded-full transition-all ${getTabStyle('postpartum')}`}
        >
          Postpartum
        </button>
      </div>

      {/* Progress */}
      <div className="bg-white border border-brand-beige rounded-2xl p-4 shadow-2xs mb-6">
        <div className="flex justify-between items-center mb-2 text-xs font-semibold text-gray-700">
          <span>Completed Items</span>
          <span>{checkedCount} of {currentList.length}</span>
        </div>
        <div className="w-full h-2.5 bg-brand-cream rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all duration-300 ${getProgressColor()}`} style={{ width: `${currentList.length ? (checkedCount / currentList.length) * 100 : 0}%` }}></div>
        </div>
      </div>

      {/* Checklist Items */}
      <div className="space-y-3">
        {currentList.map((item) => {
          const isChecked = !!englishChecklist[item.id];
          return (
            <div 
              key={item.id}
              onClick={() => toggleEnglishChecklist(item.id)}
              className={`flex items-center gap-3.5 p-4 bg-white border border-brand-beige rounded-2xl cursor-pointer transition ${getHoverBorder()}`}
            >
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all ${getCheckboxStyle(isChecked)}`}>
                {isChecked && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
              </div>
              <span className={`text-[13px] font-semibold text-gray-800 ${isChecked ? 'line-through opacity-55' : ''}`}>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 8: GUIDES DIRECTORY
// -------------------------------------------------------------
function ScreenRatgeber({ onNavigate, activeMode, onSelectArticle }: { onNavigate: (s: string) => void; activeMode: 'menstrual' | 'pregnancy' | 'baby'; onSelectArticle: (idx: number) => void }) {
  const articles = [
    {
      title: 'Physical Changes During Pregnancy',
      desc: 'What happens in your body and what it means for you.',
      readTime: '6 min read',
      cat: 'Pregnancy'
    },
    {
      title: 'Postpartum Recovery: Healing, Rest, and Time for Yourself',
      desc: 'Why recovery is crucial now and how to care for yourself.',
      readTime: '5 min read',
      cat: 'Postpartum'
    }
  ];

  const getThemeStyles = () => {
    if (activeMode === 'pregnancy') return { text: 'text-brand-orange', borderHover: 'hover:border-brand-orange/30' };
    if (activeMode === 'menstrual') return { text: 'text-[#F03C7A]', borderHover: 'hover:border-[#F03C7A]/30' };
    return { text: 'text-brand-green', borderHover: 'hover:border-brand-green/30' };
  };

  const styles = getThemeStyles();

  return (
    <div className="p-6 pt-3 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <ArrowLeft className="w-6 h-6 text-brand-brown cursor-pointer" onClick={() => onNavigate(activeMode === 'pregnancy' ? 'pregnancy' : 'dashboard')} />
        <div className="flex items-center gap-1.5">
          <MammothLogo className="w-5 h-5" />
          <h2 className="text-[15px] font-bold text-brand-brown">Guides & Articles</h2>
        </div>
        <div className="w-6 h-6"></div>
      </div>

      <div className="space-y-4">
        {articles.map((art, idx) => {
          const isPregnancyCat = art.cat === 'Pregnancy';
          const badgeClass = isPregnancyCat
            ? 'bg-orange-50 text-brand-orange border border-orange-100/60'
            : 'bg-emerald-50 text-brand-green border border-emerald-100/60';
          
          return (
            <div 
              key={idx} 
              onClick={() => onSelectArticle(idx)}
              className={`bg-white rounded-2xl border border-brand-beige shadow-2xs overflow-hidden flex flex-col transition cursor-pointer ${styles.borderHover}`}
            >
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${badgeClass}`}>{art.cat}</span>
                  <span className="text-[10px] text-gray-400 font-semibold">{art.readTime}</span>
                </div>
                <h4 className="text-[14px] font-bold text-brand-brown mb-1.5 leading-snug">{art.title}</h4>
                <p className="text-[12px] text-gray-500 leading-snug">{art.desc}</p>
              </div>
              <div className="px-5 py-3 bg-brand-cream border-t border-brand-beige flex items-center justify-between">
                <span className={`text-[11px] font-bold ${styles.text}`}>Read now</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 8B: ARTICLE DETAILS VIEW
// -------------------------------------------------------------
function ScreenArticleDetails({ onNavigate, articleIdx, activeMode }: { onNavigate: (s: string) => void; articleIdx: number; activeMode: 'menstrual' | 'pregnancy' | 'baby' }) {
  const articles = [
    {
      title: 'Physical Changes During Pregnancy',
      cat: 'Pregnancy',
      readTime: '6 min read',
      introduction: 'Pregnancy is a journey of incredible transformation. As your baby develops, your body goes through major changes week by week. Understanding what happens can help you feel more connected and prepared.',
      sections: [
        {
          title: 'First Trimester (Weeks 1 - 13)',
          content: 'This phase is marked by rapid hormonal surges. It is common to experience fatigue, morning sickness, tender breasts, and frequent urination. Even if you do not look pregnant yet, your body is working overtime to lay the foundation for your baby.'
        },
        {
          title: 'Second Trimester (Weeks 14 - 27)',
          content: 'Often referred to as the "golden trimester". Many mothers find that morning sickness begins to fade, energy levels return, and the baby bump becomes beautifully visible. This is also when you will start feeling the first gentle movements (flutters).'
        },
        {
          title: 'Third Trimester (Weeks 28 - 40)',
          content: 'As your baby grows, physical space becomes tighter. You might feel backaches, shortness of breath, or difficulty sleeping. Focus on resting, stretching, and doing nesting preparations like finalizing your hospital bag.'
        }
      ]
    },
    {
      title: 'Postpartum Recovery: Healing, Rest, and Time for Yourself',
      cat: 'Postpartum',
      readTime: '5 min read',
      introduction: 'Giving birth is a monumental event. While much of your attention now shifts to your newborn, caring for yourself is just as important. Postpartum healing takes time, patience, and gentle self-love.',
      sections: [
        {
          title: 'Physical Recovery',
          content: 'Whether you had a vaginal birth or a C-section, your body needs weeks to heal. Rest as much as possible, keep hydrated, and do gentle pelvic floor exercises only when cleared by your midwife or doctor.'
        },
        {
          title: 'Emotional Well-being',
          content: 'A few days after birth, dropping hormones can trigger the "baby blues". You might feel weepiness, mood swings, or anxiety. This is normal. If these feelings persist beyond two weeks, speak with your healthcare provider.'
        },
        {
          title: 'Nourishment & Rest',
          content: 'The golden rule of early postpartum is: "Sleep when the baby sleeps". Eat warm, nutrient-dense foods (like soups, stews, and oatmeal) to restore energy and support healing or lactation.'
        }
      ]
    }
  ];

  const art = articles[articleIdx] || articles[0];

  const getThemeStyles = () => {
    if (activeMode === 'pregnancy') return { text: 'text-brand-orange', bg: 'bg-brand-orange', lightBg: 'bg-orange-50' };
    if (activeMode === 'menstrual') return { text: 'text-[#F03C7A]', bg: 'bg-[#F03C7A]', lightBg: 'bg-rose-50' };
    return { text: 'text-brand-green', bg: 'bg-brand-green', lightBg: 'bg-emerald-50' };
  };

  const styles = getThemeStyles();

  return (
    <div className="p-6 pt-3 animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <ArrowLeft className="w-6 h-6 text-brand-brown cursor-pointer" onClick={() => onNavigate('ratgeber')} />
        <span className="font-bold text-[13px] text-gray-500 uppercase tracking-widest">Article Details</span>
        <div className="w-6 h-6"></div>
      </div>

      {/* Hero Section */}
      <div className={`${styles.lightBg} p-6 rounded-[32px] border border-brand-beige shadow-2xs`}>
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white ${styles.text} border border-brand-beige`}>
            {art.cat}
          </span>
          <span className="text-[10px] text-gray-500 font-semibold">{art.readTime}</span>
        </div>
        <h3 className="text-xl font-black text-brand-brown leading-tight mb-2">
          {art.title}
        </h3>
        <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
          {art.introduction}
        </p>
      </div>

      {/* Body Content */}
      <div className="space-y-5 pl-1">
        {art.sections.map((sec, i) => (
          <div key={i} className="space-y-1.5">
            <h4 className="text-[14px] font-black text-brand-brown flex items-center gap-2">
              <span className={`w-1.5 h-4 rounded-full ${styles.bg}`}></span>
              {sec.title}
            </h4>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              {sec.content}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Health Advice Card */}
      <div className="bg-white border border-brand-beige p-5 rounded-3xl shadow-3xs">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="text-xl">🩺</span>
          <h4 className="text-[13px] font-extrabold text-brand-brown uppercase tracking-wider">Health Reminder</h4>
        </div>
        <p className="text-[12px] text-gray-500 leading-normal">
          This article is for informational purposes only and does not replace professional medical advice. Always consult your doctor or obstetrician regarding any medical concerns.
        </p>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 9: SETTINGS & ACCOUNT PROFILE
// -------------------------------------------------------------
function ScreenProfile({ 
  onNavigate, 
  activeMode, 
  selectedBaby, 
  setSelectedBaby, 
  babyInfo,
  babyName,
  onLogOut 
}: { 
  onNavigate: (s: string) => void; 
  activeMode: 'menstrual' | 'pregnancy' | 'baby'; 
  selectedBaby: string; 
  setSelectedBaby: (b: string) => void; 
  babyInfo: { ageString: string };
  babyName: string;
  onLogOut?: () => void 
}) {
  const settingsList = [
    { name: 'Manage baby profile', icon: '👶' },
    { name: 'Updates & notifications', icon: '🔔' },
    { name: 'Co-parent Sync / Partner role', icon: '👥' },
  ];

  const defaultBabyName = babyName || 'Emilia';

  const getToggleStyle = (babyId: string) => {
    const isSelected = selectedBaby === babyId;
    if (isSelected) {
      if (activeMode === 'pregnancy') return 'bg-brand-orange text-white shadow-xs';
      if (activeMode === 'menstrual') return 'bg-[#F03C7A] text-white shadow-xs';
      return 'bg-brand-green text-white shadow-xs';
    }
    return 'text-gray-500 hover:text-gray-900';
  };

  const getButtonStyle = () => {
    if (activeMode === 'pregnancy') return 'border-brand-orange/20 hover:bg-brand-lightorange text-brand-orange';
    if (activeMode === 'menstrual') return 'border-[#F03C7A]/20 hover:bg-[#FFF5F8] text-[#F03C7A]';
    return 'border-brand-green/20 hover:bg-brand-lightgreen text-brand-green';
  };

  return (
    <div className="p-6 pt-3 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <ArrowLeft className="w-6 h-6 text-brand-brown cursor-pointer" onClick={() => onNavigate(activeMode === 'pregnancy' ? 'pregnancy' : 'dashboard')} />
        <div className="flex items-center gap-1.5">
          <MammothLogo className="w-5 h-5" />
          <h2 className="text-[15px] font-bold text-brand-brown">My Profile</h2>
        </div>
        <div className="w-6 h-6"></div>
      </div>

      <div className="bg-white rounded-3xl p-5 border border-brand-beige shadow-xs flex flex-col items-center text-center mb-6">
        <div className="w-20 h-20 rounded-full bg-brand-cream border-2 border-brand-beige flex items-center justify-center mb-3 flex-shrink-0 p-2">
          <MammothLogo className="w-full h-full" />
        </div>
        <h3 className="text-lg font-bold text-brand-brown mb-1">{selectedBaby}</h3>
        <p className="text-xs text-gray-500 font-medium mb-3">Baby: {babyInfo.ageString}</p>
        
        {/* Toggle Baby Name */}
        <div className="flex gap-2 bg-brand-cream border border-brand-beige p-1 rounded-xl">
          <button 
            onClick={() => setSelectedBaby(defaultBabyName)}
            className={`px-3 py-1 text-[11px] font-bold rounded-lg transition ${getToggleStyle(defaultBabyName)}`}
          >
            {defaultBabyName}
          </button>
          <button 
            onClick={() => setSelectedBaby('Leo')}
            className={`px-3 py-1 text-[11px] font-bold rounded-lg transition ${getToggleStyle('Leo')}`}
          >
            Leo
          </button>
        </div>
      </div>

      {/* Settings Options */}
      <div className="bg-white border border-brand-beige rounded-3xl overflow-hidden mb-6">
        {settingsList.map((set, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-between p-4 border-b border-brand-beige last:border-0 hover:bg-gray-50 cursor-pointer transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg flex-shrink-0">{set.icon}</span>
              <span className="text-[13px] font-semibold text-gray-800">{set.name}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        ))}
        {onLogOut && (
          <div 
            onClick={onLogOut}
            className="flex items-center justify-between p-4 hover:bg-[#FFF5F6] cursor-pointer transition border-t border-brand-beige"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg flex-shrink-0">🚪</span>
              <span className="text-[13px] font-bold text-[#F03C7A]">Log Out</span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#F03C7A]" />
          </div>
        )}
      </div>

      <button 
        onClick={() => onNavigate('switcher')}
        className={`w-full h-[48px] border-2 active:scale-98 transition rounded-2xl text-[16px] font-bold flex items-center justify-center gap-2 ${getButtonStyle()}`}
      >
        <span>Switch tracker modes</span>
      </button>
    </div>
  );
}

// -------------------------------------------------------------
// CONTEXT-AWARE BOTTOM TAB BAR
// -------------------------------------------------------------
interface BottomProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  context: 'menstrual' | 'pregnancy' | 'baby';
}

function BottomTabBar({ activeTab, setActiveTab, context }: BottomProps) {
  const getTabs = () => {
    if (context === 'menstrual') {
      return [
        { id: 'menstrual', icon: Home, label: 'Cycle' },
        { id: 'calendar', icon: CalendarIcon, label: 'Calendar' },
        { id: 'logger', icon: Activity, label: 'Log' },
        { id: 'analytics', icon: BarChart2, label: 'Analytics' },
        { id: 'profile', icon: User, label: 'Insights' },
      ];
    }
    if (context === 'pregnancy') {
      return [
        { id: 'pregnancy', icon: Home, label: 'Gestation' },
        { id: 'checklists', icon: CheckSquare, label: 'Checklists' },
        { id: 'logger', icon: Activity, label: 'Log Book' },
        { id: 'ratgeber', icon: BookOpen, label: 'Guides' },
        { id: 'profile', icon: User, label: 'Profile' },
      ];
    }
    return [
      { id: 'dashboard', icon: Home, label: 'Overview' },
      { id: 'milestones', icon: Activity, label: 'Checks' },
      { id: 'checklists', icon: CheckSquare, label: 'Checklists' },
      { id: 'ratgeber', icon: BookOpen, label: 'Guides' },
      { id: 'profile', icon: User, label: 'Profile' },
    ];
  };

  const tabs = getTabs();

  return (
    <div className="absolute bottom-0 w-full bg-white border-t border-brand-beige px-6 py-4 pb-8 rounded-b-[40px] z-50 shadow-md">
      <div className="flex justify-between items-end">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          if ((context === 'menstrual' || context === 'pregnancy') && tab.id === 'logger') {
            const isPreg = context === 'pregnancy';
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex flex-col items-center gap-1 min-w-[50px] relative -top-3.5 transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
              >
                <div className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center text-white text-2xl font-normal leading-none ${
                  isPreg ? 'bg-brand-orange' : 'bg-[#F03C7A]'
                }`}>
                  <span>+</span>
                </div>
                <span className={`text-[10px] font-bold -mt-0.5 ${
                  isPreg ? 'text-brand-orange' : 'text-[#F03C7A]'
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 min-w-[50px] transition-colors flex-shrink-0 ${
                isActive 
                  ? (context === 'menstrual' ? 'text-[#F03C7A]' : context === 'pregnancy' ? 'text-brand-orange' : 'text-brand-green') 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon 
                className={`w-[22px] h-[22px] ${isActive ? (context === 'menstrual' ? 'fill-[#F03C7A]/10' : context === 'pregnancy' ? 'fill-brand-orange/10' : 'fill-brand-green/10') : ''}`} 
                strokeWidth={isActive ? 2.5 : 2} 
              />
              <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-semibold'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 2b: CYCLE CALENDAR
// -------------------------------------------------------------
function ScreenCalendar({ onNavigate }: { onNavigate: (s: string) => void }) {
  const [calendarMonth, setCalendarMonth] = useState<'April 2024' | 'May 2024' | 'June 2024'>('May 2024');
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getMonthData = () => {
    if (calendarMonth === 'April 2024') {
      const padding = [25, 26, 27, 28, 29, 30, 31];
      const dates = [];
      for (let i = 1; i <= 30; i++) {
        let type = 'default';
        if (i >= 5 && i <= 9) type = 'menstruation';
        if (i >= 18 && i <= 23) type = 'fertile';
        if (i === 21) type = 'ovulation';
        dates.push({ day: i, type });
      }
      const endPadding = [1, 2, 3, 4, 5];
      return { padding, dates, endPadding };
    } else if (calendarMonth === 'June 2024') {
      const padding = [27, 28, 29, 30, 31];
      const dates = [];
      for (let i = 1; i <= 30; i++) {
        let type = 'default';
        if (i >= 1 && i <= 4) type = 'menstruation';
        if (i >= 14 && i <= 19) type = 'fertile';
        if (i === 17) type = 'ovulation';
        dates.push({ day: i, type });
      }
      const endPadding = [1, 2, 3, 4, 5, 6, 7];
      return { padding, dates, endPadding };
    } else {
      // May 2024
      const padding = [29, 30];
      const dates = [];
      for (let i = 1; i <= 31; i++) {
        let type = 'default';
        if (i >= 3 && i <= 5) type = 'menstruation';
        if (i >= 17 && i <= 19) type = 'fertile';
        if (i === 23) type = 'ovulation';
        if (i === 7) type = 'today';
        dates.push({ day: i, type });
      }
      const endPadding = [1, 2];
      return { padding, dates, endPadding };
    }
  };

  const { padding, dates, endPadding } = getMonthData();

  const handlePrev = () => {
    if (calendarMonth === 'May 2024') setCalendarMonth('April 2024');
    else if (calendarMonth === 'June 2024') setCalendarMonth('May 2024');
  };

  const handleNext = () => {
    if (calendarMonth === 'April 2024') setCalendarMonth('May 2024');
    else if (calendarMonth === 'May 2024') setCalendarMonth('June 2024');
  };

  return (
    <div className="p-6 pt-3 animate-fade-in text-gray-900 bg-gradient-to-b from-[#FFF5F8] via-[#FFF1F6] to-[#FDE2EC] min-h-full">
      <div className="flex justify-between items-center mb-6">
        <ArrowLeft className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => onNavigate('menstrual')} />
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 bg-[#F03C7A] rounded-full flex items-center justify-center text-white text-[11px] font-bold">
            <span role="img" aria-label="elephant" className="text-[11px]">🐘</span>
          </div>
          <span className="font-extrabold text-[15px] text-gray-900">Cycle Calendar</span>
        </div>
        <div className="w-6 h-6"></div>
      </div>

      {/* Month Selector */}
      <div className="flex justify-between items-center mb-6 relative px-4">
        <ChevronLeft 
          className={`w-6 h-6 text-gray-900 cursor-pointer ${calendarMonth === 'April 2024' ? 'opacity-20 pointer-events-none' : ''}`} 
          onClick={handlePrev} 
        />
        <h2 className="text-[16px] font-bold text-gray-900 w-full text-center">{calendarMonth}</h2>
        <ChevronRightIcon 
          className={`w-6 h-6 text-gray-900 cursor-pointer ${calendarMonth === 'June 2024' ? 'opacity-20 pointer-events-none' : ''}`} 
          onClick={handleNext} 
        />
      </div>

      {/* Calendar Grid */}
      <div className="mb-6 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
        <div className="grid grid-cols-7 gap-y-4 gap-x-1 mb-4">
          {days.map(day => (
            <div key={day} className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">{day}</div>
          ))}
          
          {padding.map((date, index) => (
            <div key={`pad-${index}`} className="text-center text-[13px] font-medium text-gray-300 py-1.5">{date}</div>
          ))}
          
          {dates.map((dateObj) => {
            const { day, type } = dateObj;
            let containerClass = "text-center mx-auto flex items-center justify-center w-8 h-8 rounded-full transition-all ";
            let textClass = "text-[13px] font-semibold ";
            
            if (type === 'menstruation') {
              containerClass += "bg-[#F03C7A] text-white shadow-xs";
            } else if (type === 'fertile') {
              containerClass += "bg-[#C6E6C9] text-[#2E6B34]";
            } else if (type === 'ovulation') {
              containerClass += "bg-[#B696D9] text-white shadow-xs";
            } else if (type === 'today') {
              containerClass += "border-2 border-[#F03C7A] text-[#F03C7A]";
            } else {
              containerClass += "text-gray-900 hover:bg-gray-50 cursor-pointer";
            }

            return (
              <div key={`date-${day}`} className={containerClass}>
                <span className={textClass}>{day}</span>
              </div>
            );
          })}

          {endPadding.map((date, index) => (
            <div key={`endpad-${index}`} className="text-center text-[13px] font-medium text-gray-300 py-1.5">{date}</div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 pt-4 border-t border-gray-100 justify-center text-[11px] font-semibold text-gray-500">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F03C7A]"></div> 
            <span>Menstruation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C6E6C9]"></div> 
            <span>Fertile Window</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#B696D9]"></div> 
            <span>Ovulation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#F03C7A] bg-white"></div> 
            <span>Today</span>
          </div>
        </div>
      </div>

      {/* Cycle Phases List */}
      <div>
        <h3 className="text-[14px] font-bold mb-3 pl-1 text-gray-900">Cycle Phases</h3>
        <div className="bg-white rounded-3xl p-5 border border-gray-100 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Droplet className="w-5 h-5 text-[#F03C7A]" fill="currentColor" />
              <span className="text-[13px] font-bold text-gray-900">Menstruation</span>
            </div>
            <span className="text-[11px] font-bold text-gray-500">Day 1 - 5</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Leaf className="w-5 h-5 text-[#86C48B]" fill="currentColor" />
              <span className="text-[13px] font-bold text-gray-900">Follicular Phase</span>
            </div>
            <span className="text-[11px] font-bold text-gray-500">Day 6 - 13</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Circle className="w-5 h-5 text-[#B696D9]" strokeWidth={3} />
              <span className="text-[13px] font-bold text-gray-900">Ovulation</span>
            </div>
            <span className="text-[11px] font-bold text-gray-500">Day 14</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#FFD166] border-[4px] border-white shadow-sm flex-shrink-0"></div>
              <span className="text-[13px] font-bold text-gray-900">Luteal Phase</span>
            </div>
            <span className="text-[11px] font-bold text-gray-500">Day 15 - 28</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 3b: CYCLE ANALYTICS
// -------------------------------------------------------------
function ScreenAnalytics({ onNavigate }: { onNavigate: (s: string) => void }) {
  const [activeTab, setActiveTab] = useState<'cycle' | 'symptoms' | 'mood'>('cycle');

  return (
    <div className="p-6 pt-3 animate-fade-in text-gray-900 bg-gradient-to-b from-[#FFF5F8] via-[#FFF1F6] to-[#FDE2EC] min-h-full">
      <div className="flex justify-between items-center mb-6">
        <ArrowLeft className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => onNavigate('menstrual')} />
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 bg-[#F03C7A] rounded-full flex items-center justify-center text-white text-[11px] font-bold">
            <span role="img" aria-label="elephant" className="text-[11px]">🐘</span>
          </div>
          <span className="font-extrabold text-[15px] text-gray-900">Analytics</span>
        </div>
        <div className="w-6 h-6"></div>
      </div>

      {/* Tab Toggle */}
      <div className="flex bg-[#FFF1F6] border border-[#FAD7E4] p-1 rounded-full mb-6">
        <button 
          onClick={() => setActiveTab('cycle')}
          className={`flex-1 py-2 text-[12px] font-bold rounded-full transition-all ${
            activeTab === 'cycle' ? 'bg-[#F03C7A] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Cycle
        </button>
        <button 
          onClick={() => setActiveTab('symptoms')}
          className={`flex-1 py-2 text-[12px] font-bold rounded-full transition-all ${
            activeTab === 'symptoms' ? 'bg-[#F03C7A] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Symptoms
        </button>
        <button 
          onClick={() => setActiveTab('mood')}
          className={`flex-1 py-2 text-[12px] font-bold rounded-full transition-all ${
            activeTab === 'mood' ? 'bg-[#F03C7A] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Mood
        </button>
      </div>

      {activeTab === 'cycle' && (
        <div className="space-y-6">
          {/* Cycle Length Graph */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-[14px] font-bold text-gray-900 mb-1">Cycle Length</h3>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[32px] font-light text-gray-900 leading-none">28</span>
                  <span className="text-[11px] font-medium text-gray-500">days (average)</span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-gray-400 mt-1">Last 6 cycles</span>
            </div>
            
            {/* SVG Graph */}
            <div className="h-[140px] w-full relative mt-4">
              <div className="absolute inset-0 flex flex-col justify-between text-[10px] font-bold text-gray-400">
                <span>34</span><span>32</span><span>28</span><span>26</span><span>24</span><span>22</span><span>20</span>
              </div>
              <div className="ml-7 h-full relative">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <line x1="0" y1="14" x2="100" y2="14" stroke="#FFF1F6" strokeWidth="1" />
                  <line x1="0" y1="42" x2="100" y2="42" stroke="#FFF1F6" strokeWidth="1" />
                  <line x1="0" y1="71" x2="100" y2="71" stroke="#FFF1F6" strokeWidth="1" />

                  <polyline fill="none" stroke="#F03C7A" strokeWidth="2.5" points="0,60 20,40 40,30 60,35 80,25 100,50" />
                  
                  {[
                    {x:0, y:60}, {x:20, y:40}, {x:40, y:30}, 
                    {x:60, y:35}, {x:80, y:25}, {x:100, y:50}
                  ].map((p, i) => (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r="4" fill="white" />
                      <circle cx={p.x} cy={p.y} r="3" fill="#F03C7A" />
                    </g>
                  ))}
                </svg>
              </div>
            </div>
            <div className="flex justify-between ml-7 mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
            </div>
          </div>

          {/* Averages Cards */}
          <div className="flex gap-4">
            <div className="flex-1 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-[11px] font-bold text-gray-500 mb-2 leading-tight">Avg. Period Length</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-[26px] font-light text-gray-900 leading-none">5</span>
                <span className="text-[11px] font-semibold text-gray-400">days</span>
              </div>
            </div>
            <div className="flex-1 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-[11px] font-bold text-gray-500 mb-2 leading-tight">Avg. Cycle Length</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-[26px] font-light text-gray-900 leading-none">28</span>
                <span className="text-[11px] font-semibold text-gray-400">days</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'symptoms' && (
        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[14px] font-bold text-gray-900">Symptom Frequency</h3>
            <span className="text-[11px] font-bold text-gray-400">Last 6 cycles</span>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Cramps', p: 83 },
              { name: 'Bloating', p: 67 },
              { name: 'Headache', p: 50 },
              { name: 'Fatigue', p: 33 },
              { name: 'Acne', p: 20 },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <span className="w-16 text-[12px] font-bold text-gray-700">{item.name}</span>
                <div className="flex-1 h-2 bg-gray-50 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F03C7A] rounded-full" style={{ width: `${item.p}%` }}></div>
                </div>
                <span className="w-8 text-right text-[11px] font-semibold text-gray-500">{item.p}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'mood' && (
        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[14px] font-bold text-gray-900">Mood Distribution</h3>
            <span className="text-[11px] font-bold text-gray-400">Last 6 cycles</span>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Great', p: 50, emoji: '😍' },
              { name: 'Good', p: 30, emoji: '🙂' },
              { name: 'Okay', p: 15, emoji: '😐' },
              { name: 'Bad', p: 5, emoji: '🙁' },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <span className="text-base flex-shrink-0">{item.emoji}</span>
                <span className="w-12 text-[12px] font-bold text-gray-700">{item.name}</span>
                <div className="flex-1 h-2 bg-gray-50 rounded-full overflow-hidden">
                  <div className="h-full bg-[#86C48B] rounded-full" style={{ width: `${item.p}%` }}></div>
                </div>
                <span className="w-8 text-right text-[11px] font-semibold text-gray-500">{item.p}%</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 4b: CYCLE INSIGHTS
// -------------------------------------------------------------
function ScreenInsights({ onNavigate }: { onNavigate: (s: string) => void }) {
  const [activeTab, setActiveTab] = useState<'foryou' | 'articles' | 'tips'>('foryou');

  return (
    <div className="p-6 pt-3 animate-fade-in text-gray-900 bg-gradient-to-b from-[#FFF5F8] via-[#FFF1F6] to-[#FDE2EC] min-h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <ArrowLeft className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => onNavigate('menstrual')} />
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 bg-[#F03C7A] rounded-full flex items-center justify-center text-white text-[11px] font-bold">
            <span role="img" aria-label="elephant" className="text-[11px]">🐘</span>
          </div>
          <span className="font-extrabold text-[15px] text-gray-900">Insights</span>
        </div>
        <div className="w-6 h-6"></div>
      </div>

      {/* Tab Toggle */}
      <div className="flex bg-[#FFF1F6] border border-[#FAD7E4] p-1 rounded-full mb-6">
        <button 
          onClick={() => setActiveTab('foryou')}
          className={`flex-1 py-2 text-[12px] font-bold rounded-full transition-all ${
            activeTab === 'foryou' ? 'bg-[#F03C7A] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          For you
        </button>
        <button 
          onClick={() => setActiveTab('articles')}
          className={`flex-1 py-2 text-[12px] font-bold rounded-full transition-all ${
            activeTab === 'articles' ? 'bg-[#F03C7A] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Articles
        </button>
        <button 
          onClick={() => setActiveTab('tips')}
          className={`flex-1 py-2 text-[12px] font-bold rounded-full transition-all ${
            activeTab === 'tips' ? 'bg-[#F03C7A] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Tips
        </button>
      </div>

      {activeTab === 'foryou' && (
        <div className="space-y-6">
          {/* Current Phase Card */}
          <div className="bg-[#EAF3EA] p-5 rounded-[28px] relative overflow-hidden border border-[#D5EAD6] shadow-2xs">
            <p className="text-[11px] font-bold text-[#4A7D50] mb-1.5 uppercase tracking-wider">Your current phase</p>
            <h3 className="text-[20px] font-extrabold text-[#2E5B34] mb-2 leading-none">Follicular Phase</h3>
            <p className="text-[13px] font-normal text-[#3A6D40] w-[65%] leading-relaxed relative z-10">
              Your body is preparing for ovulation. Energy and mood can improve!
            </p>
            {/* Meditating girl illustration */}
            <div className="absolute right-0 bottom-0 w-28 h-28 z-0">
              <InsightsGirlIllustration className="w-full h-full" />
            </div>
          </div>

          {/* Recommended Section */}
          <div>
            <div className="flex justify-between items-center mb-4 px-1">
              <h3 className="text-[14px] font-bold text-gray-900">Recommended for you</h3>
              <span className="text-[12px] font-bold text-[#F03C7A] cursor-pointer hover:underline">See all</span>
            </div>
            
            <div className="space-y-3.5">
              {[
                { title: 'What happens during the Follicular Phase?', bg: 'bg-[#E6F0FF]', icon: <FileText className="text-[#4D90FE] w-5 h-5"/> },
                { title: 'Nutrition in your cycle', bg: 'bg-[#FFF0E6]', icon: <Heart className="text-[#FF8A65] w-5 h-5"/> },
                { title: 'How to reduce stress in the Luteal Phase', bg: 'bg-[#FFF5E6]', icon: <Smile className="text-[#FFB74D] w-5 h-5"/> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:border-[#FAD7E4]/50 cursor-pointer transition">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <p className="flex-1 text-[13px] font-bold text-gray-800 leading-snug pr-2">{item.title}</p>
                  <ChevronRightIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Did you know block */}
          <div className="bg-[#F5F0FA] p-5 rounded-[28px] flex items-center gap-4 border border-[#EBE0F4] shadow-2xs">
            <div className="flex-1">
              <h4 className="text-[13px] font-bold text-[#5B437A] mb-1">Did you know?</h4>
              <p className="text-[12px] font-medium text-[#6B538A] leading-relaxed">
                Your most fertile days are 1 day before ovulation and the day of ovulation.
              </p>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-purple-50">
              <LightbulbIconIllustration className="w-6 h-6 text-[#9C75D9]" />
            </div>
          </div>
        </div>
      )}

      {(activeTab === 'articles' || activeTab === 'tips') && (
        <div className="text-center py-10 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-[14px] text-gray-400 font-semibold">More insights coming soon! 📚</p>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 0a: AUTHENTICATION - LOGIN
// -------------------------------------------------------------
function ScreenLogin({ 
  onLogin, 
  onNavigateAuth,
  onQuickDemoLogin
}: { 
  onLogin: () => void; 
  onNavigateAuth: (view: 'login' | 'signup' | 'forgot') => void;
  onQuickDemoLogin?: () => void;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    onLogin();
  };

  const handleDemoLogin = () => {
    setEmail('lisa@bamudi.com');
    setPassword('password123');
    if (onQuickDemoLogin) {
      onQuickDemoLogin();
    } else {
      onLogin();
    }
  };

  return (
    <div className="p-6 pt-8 animate-fade-in flex flex-col justify-between min-h-full text-gray-900 bg-gradient-to-b from-[#FFFDFB] via-[#FFF0E6] to-[#FDE2EC]">
      <div className="flex-grow flex flex-col justify-center">
        {/* Logo and Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md border border-orange-50 mb-3">
            <MammothLogo className="w-10 h-10" />
          </div>
          <h1 className="font-extrabold text-[22px] text-brand-brown tracking-wide leading-none uppercase">BAMUDI</h1>
          <p className="text-[11px] text-gray-500 font-semibold tracking-wider uppercase mt-1">Your Family Companion</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-3.5">
          <div>
            <label className="text-[11px] font-bold text-brand-brown uppercase tracking-wider pl-1 block mb-1">Email Address</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Mail className="w-4 h-4" />
              </span>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="Enter your email address"
                className="w-full h-11 pl-11 pr-4 bg-white/80 border border-orange-100 rounded-2xl text-xs focus:outline-none focus:border-brand-orange leading-snug shadow-xs"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold text-brand-brown uppercase tracking-wider pl-1 block mb-1">Password</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Lock className="w-4 h-4" />
              </span>
              <input 
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Enter your password"
                className="w-full h-11 pl-11 pr-11 bg-white/80 border border-orange-100 rounded-2xl text-xs focus:outline-none focus:border-brand-orange leading-snug shadow-xs"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-[11px] text-[#F03C7A] font-bold pl-1">{error}</p>
          )}

          {/* Action links */}
          <div className="flex justify-between items-center px-1 py-0.5">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded text-brand-orange focus:ring-brand-orange w-3.5 h-3.5 border-orange-200"
              />
              <span className="text-[11px] text-gray-500 font-semibold">Remember me</span>
            </label>
            <button 
              type="button" 
              onClick={() => onNavigateAuth('forgot')}
              className="text-[11px] text-brand-orange hover:underline font-bold"
            >
              Forgot password?
            </button>
          </div>

          <button 
            type="submit"
            className="w-full h-[48px] bg-brand-brown hover:bg-brand-brown/95 text-white rounded-2xl text-[16px] font-bold flex items-center justify-center shadow-md active:scale-98 transition"
          >
            Sign In
          </button>
        </form>

        {/* Demo User bypass */}
        <div className="text-center mt-4">
          <button 
            type="button"
            onClick={handleDemoLogin}
            className="px-3.5 py-1.5 bg-[#FFF0E6] text-brand-orange border border-brand-orange/20 rounded-full text-[11px] font-bold hover:bg-[#FFE3D1] transition"
          >
            ⚡ Quick Demo Login
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-orange-100/70"></div>
          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Or login with</span>
          <div className="flex-1 h-px bg-orange-100/70"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-3">
          <button 
            type="button" 
            onClick={onLogin}
            className="flex-1 h-10 bg-white hover:bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center gap-2 shadow-xs transition"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
            <span className="text-[11px] font-bold text-gray-700">Google</span>
          </button>
          <button 
            type="button" 
            onClick={onLogin}
            className="flex-1 h-10 bg-white hover:bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center gap-2 shadow-xs transition"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24"><path fill="#000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.93 1.49-.62.72-1.16 1.87-1.01 2.98 1.11.09 2.27-.58 2.95-1.41z"/></svg>
            <span className="text-[11px] font-bold text-gray-700">Apple</span>
          </button>
        </div>
      </div>

      {/* Footer link */}
      <div className="text-center mt-6">
        <p className="text-[11px] text-gray-500 font-semibold">
          Don't have an account?{' '}
          <button 
            type="button" 
            onClick={() => onNavigateAuth('signup')}
            className="text-brand-orange hover:underline font-bold"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 0b: AUTHENTICATION - SIGN UP
// -------------------------------------------------------------
function ScreenSignUp({ 
  onRegister,
  onNavigateAuth 
}: { 
  onRegister: (userName: string) => void;
  onNavigateAuth: (view: 'login' | 'signup' | 'forgot') => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!agree) {
      setError('Please agree to the terms.');
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      onRegister(name);
    }, 1500);
  };

  return (
    <div className="p-6 pt-4 animate-fade-in flex flex-col justify-between min-h-full text-gray-900 bg-gradient-to-b from-[#FFFDFB] via-[#FFF0E6] to-[#FDE2EC]">
      <div className="flex-grow flex flex-col justify-center">
        {/* Back navigation */}
        <div className="mb-4">
          <button 
            type="button" 
            onClick={() => onNavigateAuth('login')}
            className="flex items-center gap-1 text-brand-brown font-bold text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Login</span>
          </button>
        </div>

        {/* Header */}
        <div className="mb-5">
          <h2 className="text-[20px] font-extrabold text-brand-brown leading-tight">Create Account</h2>
          <p className="text-[12px] text-gray-500 font-semibold mt-0.5">Join BAMUDI today to start tracking</p>
        </div>

        {success ? (
          <div className="bg-[#EEF8F0] border border-[#86C48B] p-5 rounded-3xl text-center space-y-2 mb-6">
            <p className="text-xl">🎉</p>
            <p className="text-[13px] font-bold text-[#2E6B34]">Account Created Successfully!</p>
            <p className="text-[11px] text-gray-500 font-medium">Redirecting you to login screen...</p>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="space-y-3">
            <div>
              <label className="text-[10px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">Full Name</label>
              <input 
                type="text"
                required
                value={name}
                onChange={(e) => { setName(e.target.value); setError(''); }}
                placeholder="Enter your full name"
                className="w-full h-10 px-4 bg-white/85 border border-orange-100 rounded-2xl text-xs focus:outline-none focus:border-brand-orange leading-snug shadow-xs"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">Email Address</label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="Enter your email address"
                className="w-full h-10 px-4 bg-white/85 border border-orange-100 rounded-2xl text-xs focus:outline-none focus:border-brand-orange leading-snug shadow-xs"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">Password</label>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Create a strong password"
                className="w-full h-10 px-4 bg-white/85 border border-orange-100 rounded-2xl text-xs focus:outline-none focus:border-brand-orange leading-snug shadow-xs"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">Confirm Password</label>
              <input 
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value); setError(''); }}
                placeholder="Re-enter your password"
                className="w-full h-10 px-4 bg-white/85 border border-orange-100 rounded-2xl text-xs focus:outline-none focus:border-brand-orange leading-snug shadow-xs"
              />
            </div>

            {error && (
              <p className="text-[11px] text-[#F03C7A] font-bold pl-1">{error}</p>
            )}

            {/* Checkbox */}
            <label className="flex items-start gap-2.5 px-1 py-1.5 cursor-pointer">
              <input 
                type="checkbox" 
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-0.5 rounded text-brand-orange focus:ring-brand-orange w-3.5 h-3.5 border-orange-200"
              />
              <span className="text-[11px] text-gray-500 font-semibold leading-normal">
                I agree to the <span className="text-brand-orange font-bold hover:underline">Terms</span> & <span className="text-brand-orange font-bold hover:underline">Privacy</span>.
              </span>
            </label>

            <button 
              type="submit"
              className="w-full h-[48px] bg-brand-brown hover:bg-brand-brown/95 text-white rounded-2xl text-[16px] font-bold flex items-center justify-center shadow-md active:scale-98 transition"
            >
              Create Account
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <div className="text-center mt-6">
        <p className="text-[11px] text-gray-500 font-semibold">
          Already have an account?{' '}
          <button 
            type="button" 
            onClick={() => onNavigateAuth('login')}
            className="text-brand-orange hover:underline font-bold"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCREEN 0c: AUTHENTICATION - FORGOT PASSWORD
// -------------------------------------------------------------
function ScreenForgotPassword({ 
  onNavigateAuth 
}: { 
  onNavigateAuth: (view: 'login' | 'signup' | 'forgot') => void;
}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    setSent(true);
  };

  return (
    <div className="p-6 pt-4 animate-fade-in flex flex-col justify-between min-h-full text-gray-900 bg-gradient-to-b from-[#FFFDFB] via-[#FFF0E6] to-[#FDE2EC]">
      <div className="flex-grow flex flex-col justify-center">
        {/* Back navigation */}
        <div className="mb-6">
          <button 
            type="button" 
            onClick={() => onNavigateAuth('login')}
            className="flex items-center gap-1 text-brand-brown font-bold text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Login</span>
          </button>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-[20px] font-extrabold text-brand-brown leading-tight">Reset Password</h2>
          <p className="text-[12px] text-gray-500 font-semibold mt-1">Enter your email and we'll send you a password recovery link</p>
        </div>

        {sent ? (
          <div className="bg-[#EEF8F0] border border-[#86C48B] p-5 rounded-3xl text-center space-y-2 mb-6">
            <p className="text-xl">✉️</p>
            <p className="text-[13px] font-bold text-[#2E6B34]">Recovery Link Sent!</p>
            <p className="text-[11px] text-gray-500 font-medium">Please check your inbox at **{email}** for instructions.</p>
          </div>
        ) : (
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="text-[11px] font-bold text-brand-brown uppercase tracking-wider pl-0.5 block mb-1">Email Address</label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="lisa@example.com"
                className="w-full h-11 px-4 bg-white/85 border border-orange-100 rounded-2xl text-xs focus:outline-none focus:border-brand-orange leading-snug shadow-xs"
              />
            </div>

            {error && (
              <p className="text-[11px] text-[#F03C7A] font-bold pl-1">{error}</p>
            )}

            <button 
              type="submit"
              className="w-full h-[48px] bg-brand-brown hover:bg-brand-brown/95 text-white rounded-2xl text-[16px] font-bold flex items-center justify-center shadow-md active:scale-98 transition"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </div>

      <div className="w-full"></div>
    </div>
  );
}
