import { Event } from '../interfaces/event.interface';

export const EVENTS: Event[] = [
  {
    id: 'event-1',
    eventName: 'Red Bull Jukebox',
    description:
      'Red Bull Jukebox is an interactive music experience where fans control the show. Featuring Tamer Hosny, Waili, and DJ Nedz, this concert lets you vote for songs and moments before and during the event using a smart wristband.',
    category: { id: '1', en: 'Music', ar: 'موسيقى' },
    date: '2025-05-23T16:00:00',
    venue: 'Taj City, Nasr City, Cairo',
    price: 700,
    image:
      'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/65813fa2c9d4874b4bd0850c3e00da92.png',
    ar: {
      eventName: 'ريد بُل جيوكبوكس',
      description:
        'ريد بُل جيوكبوكس هو عرض موسيقي تفاعلي، الجمهور هو اللي بيختار الأغاني وبيتحكم في كل لحظة من الحفلة. تامر حسني هيكون النجم الأساسي ومعاه ويلي ودي جي نيدز. هتستخدم سوار ذكي علشان تصوّت وتشارك في التجربة.',
      venue: 'تاج سيتي، مدينة نصر، القاهرة',
    },
  },
  {
    id: 'event-2',
    eventName: 'AUC Venture Lab Demo Day',
    description:
      'Join us at AUC for the Demo Day of V-Lab’s latest accelerator cycle, where top Egyptian startups pitch their businesses to investors and industry leaders.',
    category: { id: '6', en: 'Entrepreneurship', ar: 'ريادة أعمال' },
    date: '2025-06-25T17:00:00',
    venue: 'AUC Tahrir Campus, Oriental Hall',
    price: 0,
    image:
      'https://business.aucegypt.edu/sites/business.aucegypt.edu/files/styles/banner/public/2023-09/vlab_photo.jpg',
    ar: {
      eventName: 'يوم العروض لبرنامج فينتشر لاب',
      description:
        'تعالى احضر يوم العروض النهائي في الجامعة الأمريكية، وشوف أقوى الشركات الناشئة وهي بتعرض أفكارها قدام مستثمرين وخبراء في ريادة الأعمال.',
      venue: 'الجامعة الأمريكية، قاعة الأورينتال – حرم التحرير',
    },
  },
  {
    id: 'event-3',
    eventName: 'Jeff Dunham - Artificial Intelligence',
    description:
      'Catch world-renowned ventriloquist Jeff Dunham live for the first time in Egypt! On June 26th, enjoy an evening of hilarious comedy and unforgettable characters at Drama Hall, New Capital. A night of wit, laughs, and masterful entertainment awaits.',
    category: { id: '3', en: 'Comedy', ar: 'كوميديا' },
    date: '2025-06-26T21:00:00',
    venue: 'Drama Hall, City Of Arts and Culture - New Capital',
    price: 1500,
    image:
      'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/c3b3c0939f17e73cd88c39d0ef167a8e.jpg',
    ar: {
      eventName: 'جيف دنهم - الذكاء الاصطناعي',
      description:
        'استعد لليلة كلها ضحك مع الفنان العالمي جيف دنهم، لأول مرة في مصر! عرض ممتع وشخصيات هتفكرك ليه هو من أشهر نجوم الكوميديا في العالم.',
      venue: 'قاعة دراما، مدينة الفنون والثقافة، العاصمة الإدارية الجديدة',
    },
  },
  {
    id: 'event-4',
    eventName: 'Mina Nader Live',
    description:
      'After a successful tour across several countries, Mina Nader returns with a fresh edition of his interactive comedy therapy show. Get ready for a night full of laughter and real connection at Theatro Arkan.',
    category: { id: '3', en: 'Comedy', ar: 'كوميديا' },
    date: '2025-05-15T20:00:00',
    venue: 'Theatro Arkan, Arkan Plaza, Elsheikh Zayed, Giza',
    price: 350,
    image:
      'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/f2c5a35775c1727e6064f403de7c529f.png',
    ar: {
      eventName: 'مينا نادر لايف',
      description:
        'بعد ما لف على كذا بلد، مينا نادر راجع بعرض تفاعلي جديد من "كوميدي ثيرابي". ليلة هتضحك فيها من قلبك وهتحس إنك جزء من العرض.',
      venue: 'تياترو أركان، أركان بلازا، الشيخ زايد، الجيزة',
    },
  },
  {
    id: 'event-5',
    eventName: 'Ignite BSE',
    description:
      'Ignite BSE is a dynamic event featuring fast-paced, inspiring talks from students, professionals, and celebrities. Enjoy live performances, giveaways, and community engagement during the mid-event break with sponsor booths, food, and drinks.',
    category: { id: '2', en: 'Talks', ar: 'مؤتمرات' },
    date: '2025-05-30T16:00:00',
    venue: 'The British School of Egypt Theatre, Elsheikh Zayed, Giza',
    price: 315,
    image:
      'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/294ead80ff92084263ba20a69d26b45c.png',
    ar: {
      eventName: 'إجنايت BSE',
      description:
        'إجنايت BSE هو حدث ملهم بيضم ناس من كل المجالات بيقدموا كلام قصير ومفيد. فيه كمان فقرات فنية، هدايا، وأماكن تتفاعل فيها مع الرعاة وتأكل وتشرب وتتبسط.',
      venue: 'مسرح المدرسة البريطانية في مصر، الشيخ زايد، الجيزة',
    },
  },
  {
    id: 'event-6',
    eventName: 'Tetrat w Zekrayat – Ali Elhaggar (Second Edition)',
    description:
      'Following the overwhelming success of the first edition, Ali El Haggar returns with another nostalgic night. Join us for an unforgettable musical evening filled with iconic TV series songs that touched generations.',
    category: { id: '1', en: 'Music', ar: 'موسيقى' },
    date: '2025-05-22T21:00:00',
    venue: 'Theatro Arkan, Arkan Plaza, Elsheikh Zayed, Giza',
    price: 750,
    image:
      'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/1bd3b6a6cec53bd2f28f01a39f5733ab.jpg',
    ar: {
      eventName: 'تترات وذكريات – علي الحجار (النسخة الثانية)',
      description:
        'علي الحجار راجع بحفلة جديدة بعد النجاح الكبير في النسخة الأولى. ليلة كلها حنين مع أشهر أغاني التترات اللي كبرنا عليها، هتفتكر معاها أحلى لحظات رمضان.',
      venue: 'تياترو أركان، أركان بلازا، الشيخ زايد، الجيزة',
    },
  },
  {
    id: 'event-7',
    eventName: 'Cairo Photo Week 2025',
    description:
      'An immersive 11-day photography and image-making festival in Downtown Cairo featuring exhibitions, talks, workshops, and more for both professionals and the public.',
    category: { id: '4', en: 'Arts', ar: 'فنون' },
    date: '2025-05-08T10:00:00',
    venue: 'Cinema Radio, Bab Al Louq, Downtown Cairo',
    price: 450,
    image:
      'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/b3459e7c3f2323ec59097c3180c247c2.jpg',
    ar: {
      eventName: 'أسبوع التصوير في القاهرة ٢٠٢٥',
      description:
        'مهرجان ممتد 11 يوم في وسط البلد، مليان معارض، ورش، وكلام مهم عن التصوير وصناعة الصورة. تجربة مفيدة وممتعة للمصورين وكل الناس اللي بتحب الإبداع.',
      venue: 'سينما راديو، باب اللوق، وسط البلد، القاهرة',
    },
  },
  {
    id: 'event-8',
    eventName: 'ZED Park Family Festival',
    description:
      'An exciting week at ZED Park filled with rides, games, and spectacular shows — promising an unforgettable festive experience for families and kids.',
    category: { id: '7', en: 'Entertainment', ar: 'ترفيه' },
    date: '2025-05-15T17:00:00',
    venue: 'ZED Park, Elsheikh Zayed, Giza Governorate',
    price: 150,
    image:
      'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/8ae035656649e7ec5b961b8a26c0eeee.png',
    ar: {
      eventName: 'مهرجان العائلة في زد بارك',
      description:
        'أسبوع كامل في زد بارك مليان ألعاب، عروض، وأنشطة ممتعة. يوم مثالي للأسرة كلها علشان تنبسط وتعمل ذكريات حلوة.',
      venue: 'زد بارك، الشيخ زايد، محافظة الجيزة',
    },
  },
];
