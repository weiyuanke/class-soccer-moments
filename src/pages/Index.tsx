import React, { useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';
import MemoriesGallery from '@/components/MemoriesGallery';
import MatchTimeline from '@/components/MatchTimeline';
import PlayerSpotlight from '@/components/PlayerSpotlight';
import MemoryCard from '@/components/MemoryCard';
import AnimatedImage from '@/components/AnimatedImage';
import { ArrowDown, Award, Calendar, Camera, Flag, Trophy, Users } from 'lucide-react';

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const memories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=1287",
      title: "Championship Final Match",
      description: "The team celebrating after winning the championship with a decisive 3-1 victory."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?auto=format&fit=crop&q=80&w=1512",
      title: "Training Session",
      description: "Intense training session before the semifinals. The dedication was visible in every drill."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1293",
      title: "Team Building Event",
      description: "A weekend retreat that helped strengthen team bonds and strategic planning."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=1170",
      title: "Opening Ceremony",
      description: "The tournament's opening ceremony where our team made a powerful entrance."
    }
  ];

  const timelineEvents = [
    {
      id: 1,
      date: "10 March",
      title: "Tournament Opening Match",
      description: "Defeated Class 2-B with a score of 2-0, setting a strong tone for the tournament.",
      isWin: true
    },
    {
      id: 2,
      date: "15 March",
      title: "Quarter Finals",
      description: "A challenging match against Class 3-A ended in a thrilling 3-2 victory after extra time."
    },
    {
      id: 3,
      date: "22 March",
      title: "Semi Finals",
      description: "Faced our rivals Class 1-C and secured a place in the finals with a 1-0 win."
    },
    {
      id: 4,
      date: "29 March",
      title: "Championship Final",
      description: "Claimed the trophy with a decisive 3-1 victory against the defending champions, Class 4-A.",
      isWin: true
    }
  ];

  const players = [
    {
      id: 1,
      name: "Liu Wei",
      position: "Team Captain / Forward",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=1026",
      achievements: "Scored 8 goals throughout the tournament. Named MVP of the finals match."
    },
    {
      id: 2,
      name: "Zhang Min",
      position: "Midfielder",
      image: "https://images.unsplash.com/photo-1561863374-b02313a77e2d?auto=format&fit=crop&q=80&w=774",
      achievements: "Key playmaker with 12 assists. Perfect attendance in training sessions."
    },
    {
      id: 3,
      name: "Wang Jie",
      position: "Goalkeeper",
      image: "https://images.unsplash.com/photo-1602151165983-82c31d999105?auto=format&fit=crop&q=80&w=764",
      achievements: "Conceded only 3 goals in 6 matches. Critical save in the semi-finals."
    }
  ];

  const memoryCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&q=80&w=1287",
      title: "Pre-match Pep Talk",
      description: "Coach giving an inspiring speech that motivated the team to push beyond limits.",
      date: "March 22, 2023"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1540267016810-43acf0f51c79?auto=format&fit=crop&q=80&w=1325",
      title: "Post-victory Celebration",
      description: "The moment the final whistle blew and the team erupted in celebration.",
      date: "March 29, 2023"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519766304817-3450e0e308cf?auto=format&fit=crop&q=80&w=1470",
      title: "Team Dinner",
      description: "Celebrating our journey with a special dinner arranged by the school administration.",
      date: "April 5, 2023"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <AnimatedImage
            src="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1170"
            alt="Football stadium"
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="container relative z-10 px-6 py-16 mx-auto text-center text-white">
          <span className="inline-block animate-fade-in px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-white/10 backdrop-blur-sm">
            班级足球赛
          </span>
          <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-shadow">
            青春无悔的足球记忆
          </h1>
          <p className="animate-fade-in max-w-lg mx-auto text-lg sm:text-xl mb-8 text-white/90 text-shadow">
            记录我们班级在足球场上的精彩瞬间、团队精神和难忘记忆
          </p>
          <div className="animate-fade-in">
            <a 
              href="#memories" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
            >
              探索回忆
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 animate-bounce flex justify-center">
          <a 
            href="#highlights" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </section>

      <section id="highlights" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="精彩集锦" 
            subtitle="Tournament Highlights"
          />
          
          <div className="mt-12">
            <MemoriesGallery memories={memories} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100 animate-on-scroll opacity-0">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">冠军荣誉</h3>
              <p className="text-gray-600">成功捧起校园足球锦标赛冠军奖杯，展现出色团队合作</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100 animate-on-scroll opacity-0">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">团队精神</h3>
              <p className="text-gray-600">每位队员都发挥自己的优势，互相支持，共同进步</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100 animate-on-scroll opacity-0">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Flag className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">不懈坚持</h3>
              <p className="text-gray-600">克服训练和比赛中的各种困难，展现永不言弃的精神</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="比赛历程" 
            subtitle="Match Timeline"
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <MatchTimeline events={timelineEvents} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="球员风采" 
            subtitle="Player Spotlight"
          />
          
          <div className="mt-12">
            <PlayerSpotlight players={players} />
          </div>
          
          <div className="mt-16 text-center animate-on-scroll opacity-0">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              每位队员都贡献了自己的力量，无论场上场下都展现出色的体育精神和团队合作。
              我们因为足球而相聚，因为团队而强大。
            </p>
          </div>
        </div>
      </section>

      <section id="memories" className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="难忘瞬间" 
            subtitle="Memorable Moments"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {memoryCards.map((memory) => (
              <MemoryCard
                key={memory.id}
                image={memory.image}
                title={memory.title}
                description={memory.description}
                date={memory.date}
              />
            ))}
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl bg-gray-50 animate-on-scroll opacity-0">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <Camera className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">分享你的回忆</h3>
              <p className="text-gray-600">
                你有自己拍摄的比赛或训练照片吗？将照片发送到班级邮箱，我们会更新到这个页面上，一起记录我们的足球时光。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <AnimatedImage
            src="https://images.unsplash.com/photo-1510051640316-cee0293bb343?auto=format&fit=crop&q=80&w=1170"
            alt="Football stadium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center text-white">
          <blockquote className="max-w-3xl mx-auto animate-on-scroll opacity-0">
            <p className="text-2xl md:text-3xl font-light italic mb-6">
              "足球不仅仅是一场比赛，它教会我们团队合作、坚韧不拔和追求卓越的精神。这些品质将伴随我们一生。"
            </p>
            <footer className="text-lg">
              <cite>— 班主任 王老师</cite>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="未来展望" 
            subtitle="Looking Forward"
          />
          
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <div className="flex-1 p-6 rounded-xl bg-gray-50 border border-gray-100 animate-on-scroll opacity-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">下一届比赛</h3>
              </div>
              <p className="text-gray-600 mb-4">
                期待下一届校园足球联赛的到来！我们将继续训练，保持状态，争取卫冕冠军。
              </p>
              <p className="text-sm text-gray-500">
                预计开始时间：2024年3月
              </p>
            </div>
            
            <div className="flex-1 p-6 rounded-xl bg-gray-50 border border-gray-100 animate-on-scroll opacity-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">技能提升</h3>
              </div>
              <p className="text-gray-600 mb-4">
                我们计划邀请专业教练进行技术指导，帮助队员们提升个人技能和战术水平。
              </p>
              <p className="text-sm text-gray-500">
                持续进行中
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2023 班级足球队 | 设计与开发由班级信息技术小组提供
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
