const talks = [
  {
    id: 1,
    title: '.Net Configuration is Easy ... Right?',
    description:
      "Let&apos;s face it, we&apos;ve all done it at some point. You have a value in your code that you don&apos;t want to hard code as it will vary in different environments or needs to change in a runtime environment, so you want to make it configurable in a file. That&apos;s where the fun begins.\n\nIn the.NET Framework, you usually create an XML configuration file and reference it using some static methods. Or maybe you use the designer in Visual Studio to do the work for you? In .NET Core, you are given a JSON file by default and access it through the IConfiguration interface. Job done ...or so you think.\n\n•\tHow do you code the keys to access the values?\n•\tHow do you unit test it and what if you need to test different values?\n•\tWhat if you want to store values other than primitive types?\n•\tWhat if you want to have secure passwords, but don&apos;t want them in your source control?\n•\tWhat if you don&apos;t want to use JSON files ... or come to that, don&apos;t want to use files at all?\n•\tWhat if you want to change values in a Docker container\n.. and the questions go on and on.\n\nIn this talk, we start with a brief overview of the history of configuration in .NET Framework and how Microsoft handed developers a loaded gun to shoot themselves in the foot. Moving on to .NET Core, things are much better, but there are still some gotchas.\n\nLastly, the talk goes on to deal with the questions raised above with a \"SOLID\" based approach that makes configuration not only fully testable, but adds enhancements to handle encrypted configuration values (because you&apos;re not storing passwords as clear text in source control are you?) and validation of the configuration data before it hits your code.\n\nThe talk aims to help new and intermediate developers avoid the pitfalls that others have fallen down and give experienced developers some food for thought as to how they might want to reconsider how they do configuration.",
    level: 'Intermediate',
    tags: [
      'software methodology/process',
      'architecture',
      'language specific',
      '.net',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 2,
    title: '.NET Core Dependency Injection – The Booster Jab',
    description:
      'With the release of .NET Core 3.x  and the promise of a unified .NET 5 based on it, more developers have now got to grips with the basics of using the default Microsoft Dependency Injection container that comes with .NET Core. However, the story does not end there... \n\nThis talk will take you beyond the basics and cover more complex topics such as \n\n* Avoiding unintended multiple registrations  \n* Conflicts between service lifetimes \n* Understanding the Root and Scoped service providers \n* Automated service registration packages\n* Registering and resolving open generics, classes with multiple interfaces; and interfaces with multiple class implementation   \n* Integrating with other DI containers \n* Key named registrations are not supported ... but I need it! \n* Getting better startup performance from your registered services \n* Thread safety and avoiding memory leaks \n* Validating and unit testing your service registrations \n\nThe talk assumes that you have already had an initial dose of DI knowledge and are now ready for a top up to avoid some nasty bugs.',
    level: 'Intermediate',
    tags: [
      'software methodology/process',
      'architecture',
      'language specific',
      '.net',
    ],
    lengths: ['60 minute talk', '30 minute talk'],
  },
  {
    id: 3,
    title: 'Serverless Architectural Patterns and Best Practices',
    description:
      'Get to know Serverless from square one!\n\nThe Serverless architectural style empowers you to rapidly create scalable and cost-effective applications without the overhead of managing servers. It eliminates infrastructure management tasks such as server or cluster provisioning, patching, operating system maintenance, and capacity provisioning. This session will take you on a guided tour of serverless terrain and get you building your own serverless solution on your favorite cloud providers like AWS, GCP and AZURE.\n\n\nYou will get to know:\n\nFoundational knowledge to architect Serverless Systems\n\nCapabilities of the popular Serverless Platform\n\nBest practices for developing Serverless Architectures\n\nServerless Patterns and Architectures\n\nPlatform Providers and ecosystem of services and tools\n\nSecurity, Cost and Economics of Serverless Solutions\n\nServerless Application use cases\n\nBy the end of this session, you will have the knowledge needed to start designing serverless systems.',
    level: 'Introductory and overview',
    tags: ['cloud', 'architecture', 'serverless'],
    lengths: ['60 minute talk'],
  },
  {
    id: 4,
    title: 'Complex systems design in nature',
    description:
      'Nature is full of highly complex systems, way more complicated than the systems we build. In the process, life has found solutions for many of the problems that we face today:\n\n* Architecture of large-scale systems\n* Communication at a distance \n* Eventual consistency\n* Security\n* Fault tolerance\n* Multivariate testing strategies\n* Adaptive algorithms for learning\n\nI will explore how nature has solved these issues, the parallels with our systems, what we can learn from the natural world, and what we could do differently.',
    level: 'Introductory and overview',
    tags: ['architecture', 'software methodology/process'],
    lengths: ['60 minute talk'],
  },
  {
    id: 5,
    title: 'The Big I.D.E.A',
    description:
      'In this short session, we will examine the I.D.E.A framework -  Imagine Design Execute Amplify  -  This is a great little design-centred framework that can be pointed at everything from a product or campaign to a start-up or business model',
    level: 'Introductory and overview',
    tags: ['leadership', 'design', 'change management'],
    lengths: ['30 minute talk'],
  },
  {
    id: 6,
    title: 'Businesses, Cities & Ecosystems',
    description:
      'In this talk, we discuss the similarities between businesses and cities and how designing a human-centred business ecosystem helps grow our organisations in 3 ways, employee experience, customer experience, & economic growth.',
    level: 'Advanced',
    tags: ['leadership', 'design', 'change management'],
    lengths: ['30 minute talk', '60 minute talk'],
  },
  {
    id: 7,
    title: 'The power of questions',
    description:
      'In this short took we look at how questions power everything and asking good questions help us design better everything',
    level: 'Introductory and overview',
    tags: ['leadership', 'design', 'change management'],
    lengths: ['15 minute lightning talk'],
  },
  {
    id: 8,
    title: '.NET Core Data Security : Hope is not a Strategy',
    description:
      "Not encrypting your data is a risky move and just relying on the hope that you won&apos;t get hacked and compromised is not a strategy.\n\nAs a software developer, you have a duty to your employer to secure and protect their data. In this talk, you will learn how to use the .NET Framework to protect your data to satisfy confidentiality, integrity, non-repudiation, and authentication.\n\nThis talk covers random number generation, hashing, authenticated hashing, and password-based key derivation functions. The talk also covers both symmetric and asymmetric encryption using DES, Triple DES, AES (ECB and GCM), and RSA. You then learn how to combine these all together to produce a hybrid encryption scheme which includes AES, RSA, HMACS, and Digital Signatures.",
    level: 'Intermediate',
    tags: ['security', 'software methodology/process', '.net'],
    lengths: ['60 minute talk'],
  },
  {
    id: 9,
    title:
      'Fighting Back Against a Distracted World - Increasing your Focus and Self-motivation',
    description:
      'We live in an age of technical wonder with the internet, high-end games, and streaming service all vying for our attention. We have never had so many significant innovations available at our fingertips, accessible 24 by 7. There is a big problem, though. With all these systems, we are becoming increasingly distracted, making it hard to focus on issues for an extended period. If left unchecked, this can affect our work, careers, and self-confidence. We need to be able to break this cycle from throwing us into a spiral of distraction while still being able to enjoy all these innovations.\n\nWhen I first went self-employed, I thought I had the ultimate freedom to do what I wanted, when I wanted. To a degree, I did, but I didn’t have anyone looking over me, holding me to account. I started to become distracted. After I while, I decided things had to change. I started on a quest to become more productive, focused, and increase my motivation; while still enjoy the occasional Netflix binge.\n\nIn this talk, I want to share my story of personal distraction, low motivation, and increased project anxiety. I will share how I broke this cycle and got my creative and productive mojo back.\n\nThis talk is aimed at anyone that strives to be more productive but struggles with distractions daily. In the talk, I will cover subjects such as\n\n- Distraction and procrastination\n- Finding meaning in your work\n- Increasing self-motivation\n- Understanding your locus of control\n- Productivity and time management\n- Controlling social media addiction\n\nI consider myself now to be very productive, but it was a battle getting there. Let me share my story, in the hope that I can also help you be productive and confident.',
    level: 'Introductory and overview',
    tags: ['coreskills/softskills'],
    lengths: ['60 minute talk'],
  },
  {
    id: 10,
    title:
      'Blockchain Internals : A Developers View of How Blockchain Works',
    description:
      'The blockchain is described as the next revolution in computing as it solves the problem of distributed trust when there is no trust on the internet (Byzantine Generals Problem).  Blockchain technology is generating an enormous amount of interest and is a current hot topic with financial institutions, insurance companies or any industry that works with transactional data that could benefit from the distributed trust it gives. The blockchain is also generating lots of investment from Venture Capital funds, so learning about this technology could certainly be career changing.\n \nIn this talk, we will explore what blockchain is in some detail from the conceptual use cases for it through to looking under the covers at how it works in detail. As the talk progresses, we will build up a sample implementation that will help developers form their mental model of what a blockchain is and how it works.\n \nIn this talk, I will cover\n \n    •    Blockchain quick overview \n    •    Cryptographic principles used by blockchain\n    •    How transactions are stored in a block\n    •    How transactions are hashed in Merkle trees\n    •    Authorising transactions\n    •    Verifying transactions in a block\n    •    Solving the Byzantine Generals Problem\n    •    Proof of work vs Proof of stake\n    •    Maintaining consistency and consensus\n \nYou will leave this talk with a very good understanding of how the blockchain technology works and how it helps you solve the problem of trust on a trust-less internet. I will be demonstrating code written in C# and .NET Core 2 (Standard 2) specifically.',
    level: 'Introductory and overview',
    tags: ['blockchain', 'architecture', 'security'],
    lengths: ['60 minute talk'],
  },
  {
    id: 11,
    title: 'Building Fantasy Worlds in Code',
    description:
      "Modern video game entertainment is designed to be a complete assault on your senses with high-resolution computer graphics and immersive spacial sound, so much so that they leave little left to the players' imagination. Back in the 1980s, the humble text adventure was tearing up sales charts with games by companies such as Infocom. These games were great as they required the player to use their imagination to visualize what is happening, much like a novel but more interactive. I would argue that your imagination provides the highest resolution graphics available.\n\nIn this session, we are going to look at the entertainment and technical roots of text adventures and look at how to create a fantasy world with interactive fiction built with code. I will look at developing the parser that you use to navigate and interact with the world, how I have tried to overcome some of the problems of the older games like ‘verb hunting,’ interactive sparsity, impossible puzzles, and how we can develop modern interactive fiction for a new generation.\n\nThis talk is ideal for OO developers (especially C# and .NET Core), fans of interactive fiction and anyone nostalgic for the 1980s. As a group, we will also play through a simple game I have developed specifically for the conference. Hopefully, we won’t be eaten by a Grue!!\n\nI will cover:\n\n- The brief history of text adventures\n- Building an object-oriented text adventure engine\n- Integration testing of game paths\n- Parser and simple natural language processing development\n- Building games for different age groups and abilities\n- Applying accessibility techniques to interactive fiction. \n- Using profanity detection to drive gameplay and story instead of just censorship.\n\nCome along if you are interested in pop culture, software design, natural language parsing, accessibility, and a little adventure..",
    level: 'Introductory and overview',
    tags: [
      'software methodology/process',
      'architecture',
      'cross discipline',
      'fun',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 12,
    title:
      'Hacking Humans : Social Engineering Techniques and How to Protect Against Them',
    description:
      'Social engineering is one of the biggest threats to our organisations as attackers use manipulation techniques to coerce people into revealing secrets about our companies to allow attackers to gain access to critical systems.\n\nIn this talk we will look at some of the techniques used in social engineering and look at how to guard yourself against them. We will cover subjects like pre-texting, elicitation and body language as techniques for manipulating people.',
    level: 'Introductory and overview',
    tags: ['security', 'coreskills/softskills'],
    lengths: ['60 minute talk'],
  },
  {
    id: 13,
    title: 'The UX of Community Building',
    description:
      'This brief talk tells the story of how a virtual collaboration  went on to co-found a new, online, skills-focussed community. When everything can be considered a ‘product’, the talk considers the experiences and challenges of the creators’ journey and how they set out a new stall for their community.',
    level: 'Introductory and overview',
    tags: ['ux', 'design', 'community'],
    lengths: ['30 minute talk'],
  },
  {
    id: 14,
    title: 'A Future Experience Landscape',
    description:
      'With digital tools becoming a foundation of our personal ecosystems, the level of trust and dependency people place on their software and devices is increasing exponentially.\n\nHow can the rate of change in tech and in user expectation be balanced to create digital experiences with real purpose?\n\nIn 2020, we are entering a new decade of UX. What might our user experience landscape look like in another 10 years?',
    level: 'Introductory and overview',
    tags: ['ux', 'design'],
    lengths: ['30 minute talk'],
  },
  {
    id: 15,
    title: 'A tour of Azure Vision using Azure Notebooks and Python',
    description:
      "There&apos;s so much built in to Azure&apos;s Vision Cognitive Services API! \n\nThis session will run you through all of the different options available to you using Azure Notebooks and Python.\n\nWe&apos;ll have a practical code based demos of everything from Face Recognition, through Object recognition to Emotion Detection and everything in between.\n\nWhen you leave you&apos;ll have a greater understanding of the possibilities for recognising the world around you.",
    level: 'Introductory and overview',
    tags: [
      'machine learning',
      'artificial intelligence',
      'python',
      'azure',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 16,
    title: 'Dot NET Core 3 with Raspberry Pi',
    description:
      "In this talk, I take attendees through the basics of the Dot Net Framework, Dot NET Standard, Dot NET Core, what it is and it’s place in the Microsoft Ecosystem.\n\nI then explain how to install Dot NET Core on the Pi and deploy a Dot NET Core Console App.\n\nOnce the basics are covered, I move on to adding GPIO functionality to the Console app to provide some real world interaction.\n\nWe then add a connection to an Azure IoT Hub.\n\nFinally I show how to spin up a Blazor app.\n\nWhat you&apos;ll learn by attending this session;\n\nHow to get Dot NET Core 3 up and running on Raspberry Pi, Controlling electronics through GPIO with Dot NET Core 3, Azure IoT Hubs with Dot NET Core 3, Blazor with Raspberry Pi and Dot NET Core 3.\n\nWho this talk is suitable for;\n\nThis talk is suitable for anybody with basic programming experience and an interest in using their C# experience in the world of IoT",
    level: 'Introductory and overview',
    tags: ['iot', 'cloud', 'hardware', '.net'],
    lengths: ['60 minute talk'],
  },
  {
    id: 17,
    title: 'DevOps in an IoT World',
    description:
      "In this talk I take you through how we can integrate DevOps patterns into IoT Workflows. \n\nWe’ll begin by setting up a simple IoT Application that sends data to an Azure Web App which we deploy using Azure App Service.\n\nNext we’ll look at how we can create an Azure IoT Edge solution, publishing components to a registry and seeing how the IoT Edge process keeps itself in sync with remote code changes.\n\nWe&apos;ll then explore an open source alternative with Jenkins and Docker.\n\nWho is this session for:\n\nThis session is for beginner to intermediate developers with an interest in IoT and how to apply DevOps patterns.\n\nWhat you&apos;ll learn:\n\nYou&apos;ll leave this session with an understanding of the various options for applying DevOps patterns to IoT. This will include IoT Hubs, Web Apps, IoT Edge and Azure Devops Projects.",
    level: 'Introductory and overview',
    tags: ['iot', 'devops', 'cloud', 'infrastructure'],
    lengths: ['60 minute talk'],
  },
  {
    id: 18,
    title:
      'Azure IoT Hubs from End to End with Raspberry Pi and Node.js',
    description:
      "Do you want to put your Raspberry pi to use and remotely monitor the temperature in your loft to save energy? Or perhaps send a tweet out when someone comes into your office? \n\nAnything is possible with Azure IoT Hubs, a little Node.js, a Raspberry Pi and a few electronic components.\n\nUsing a Raspberry Pi and a really basic circuit containing a switch, some LEDs and a Temperature / Humidity Sensor, and Node.js… \n\nWe’ll go about connecting the whole thing to an Azure IoT Hub and getting Messaging working between the two!\n\nAfter attending this session you&apos;ll understand;\n\nBasic Electronics with Raspberry Pi, Azure IoT Hubs, Message Routing, Device to Cloud / Cloud to Device Messages, Service Bus and Azure Logic Apps.\n\nWho this talk is suitable for;\n\nThis talk is suitable for anybody with basic programming experience and an interest in making a fully functional IoT Solution.",
    level: 'Introductory and overview',
    tags: ['iot', 'hardware', 'cloud', 'azure', 'javascript'],
    lengths: ['60 minute talk'],
  },
  {
    id: 19,
    title: 'GitHub, Azure DevOps, so much confusion… or maybe not?',
    description:
      'We live in a fast-paced industry. Today we get a brilliant new feature for Azure DevOps, the day after a new GitHub Actions enhancement comes out. Why two platforms? What’s the need?\n\nIs it confusing? Perhaps – I was in a situation where I had to deal with both, let’s try to shed some light on how to get the best of these two!',
    level: 'Introductory and overview',
    tags: [
      'devops',
      'change management',
      'cross discipline',
      'testing',
      'software methodology/process',
      'devsecops',
      'azure',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 20,
    title:
      'How to make security pervasive without falling into the DevSecOps trap',
    description:
      'It’s all about labels these days – AI, Containers, DevSecOps. Many people claim to ‘do it’, very few *actually* do.\n\nTake DevSecOps: on face value it’s about adding Security practices to DevOps. But how do you measure the value derived from it? And also – how do you make sure you are not disrupting your team in the process?\n\nIn this session the speaker will show why you don’t need a label to add these practices, and how to introduce sustainable solutions to implement in your build and release pipelines in order to achieve a higher security standard across your projects without hampering your teams.',
    level: 'Intermediate',
    tags: [
      'security',
      'devsecops',
      'secops',
      'cloud',
      'software methodology/process',
      'automated testing',
      'devops',
      'operations',
      'cross discipline',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 21,
    title: 'Let’s move to pipelines as code, it’s about time!',
    description:
      'We started with CI, then we introduced Configuration Management, evolved towards Infrastructure as Code – but we still lag behind on pipelines, we are too reliant on the tools we use and we don’t really apply the best practices of the industry.\n\nIs it difficult to move to Pipelines as Code? What should I do to start the journey? If I am already there, what can I do to make it scale at an organisational level?\n\nThese questions (and many more!) will find answers in this session, shedding light on how and why we should move to Pipelines as Code and the benefits that come out of this migration.',
    level: 'Intermediate',
    tags: ['devsecops', 'cloud', 'devops'],
    lengths: ['60 minute talk'],
  },
  {
    id: 22,
    title:
      'Automations and a touch of DevOps for a fully resilient IaaS cloud estate',
    description:
      "Nothing wrong with running IaaS workloads in the cloud - but just don&apos;t use it as someone else&apos;s datacentre!\n\nThere are a number of techniques we can apply to keep costs under control and get most of the benefits of the public cloud while still running your own virtual machines. Let&apos;s take a look at a real world scenario where all of these were applied with great success.",
    level: 'Intermediate',
    tags: [
      'cloud',
      'software methodology/process',
      'devops',
      'operations',
      'change management',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 23,
    title: 'Transforming the impossible - a successful Lean story',
    description:
      'A short story on a real world case of Agile transformation, where waterfall and command-and-control were not only used but also loved. Now they also love Lean, probably even more than before.\n\nTo get there I embarked on a long and tortuous journey, with eventually a positive result. It was unpredictable, difficult, but we got there in the end. \n\nThis session looks at the learnings from that experience, and how to re-use them in everyday situations.',
    level: 'Intermediate',
    tags: [
      'coreskills/softskills',
      'software methodology/process',
      'management',
      'leadership',
      'change management',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 24,
    title: 'Startuplife',
    description:
      "So you are thinking of working for a startup.  Nervous about paying the rent/mortgage?  Wondering who works at startups?\n\nIf you are thinking of making the move, what should you be looking for?  Are there fringe benefits on offer like share options, pensions, health benefits, free meals and where should you rank them?  Oh, and what craziness might you have to put up with?\n\nBased on the real world experience of working in four different startups, you&apos;ll get an idea of the different funding models, how that changes the pressures on the business, and what makes for a happy atmosphere in which to work.\n\nAlthough working at startups can be infuriating at times, it can also be fun and a great way of learning new skills and responsibilities much faster than at MegaCorp plc.\n\n&apos;And they all go\nFlat white in hand\nFlat white in hand through their\nStartuplife'\n(c) Blur-ish",
    level: 'Introductory and overview',
    tags: [
      'software methodology/process',
      'management',
      'operations',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 25,
    title:
      'Getting Started with Unity and AR/VR for the .NET Developer',
    description:
      "We all see the cool demos of how augmented and virtual reality are going to be the future of our interaction with devices, but it often feels like there’s a significant barrier to getting started in building these types of apps.\n\nThis session is here to help. If you’ve ever thought about developing for Oculus Rift S, HTC VIVE or the Windows Mixed Reality headsets, but haven’t known where to start, this is the session for you.\n\nAt DDD, I will present what I learned building a small game, set in a mysterious dungeon using Unity and the SteamVR plugin. We&apos;ll explore how to import assets from the Unity store, how to implement locomotion techniques and interactions using the motion/touch controllers, including some tips for optimising performance and avoid motion sickness.\n\nCome along, there’ll be .NET code, demos and we’ll have some fun looking at how you can get started on your first VR/AR project.",
    level: 'Introductory and overview',
    tags: ['ar/vr', '.net'],
    lengths: ['60 minute talk'],
  },
  {
    id: 26,
    title: 'Management is Not a Dirty Word',
    description:
      'In the modern days of Agile Development our goal is to have empowered self organising teams. Is the role of the humble Dev Manager as archaic as Windows 3.1?\n\nIn this talk I’ll look at what a modern day development manager actually does and why you may want to become one.',
    level: 'Introductory and overview',
    tags: [
      'management',
      'leadership',
      'coreskills/softskills',
      'software methodology/process',
    ],
    lengths: ['30 minute talk'],
  },
  {
    id: 27,
    title: 'A Geek’s Guide to People',
    description:
      'People are, without doubt the most important component of any great software engineering team. But many of us look at people skills as something reserved for the extroverts. In this talk I’ll dismiss this idea, talk amateur psychology, and give you some tools to understand the operating system which we’re all running behind the scenes.',
    level: 'Introductory and overview',
    tags: ['coreskills/softskills', 'leadership'],
    lengths: ['60 minute talk'],
  },
  {
    id: 28,
    title:
      "TPL Dataflow - The Best Little Async Library You&apos;ve Never Heard Of",
    description:
      "From the docs:\n\n> The Task Parallel Library (TPL) provides dataflow components to help increase the robustness of concurrency-enabled applications. \n\nWhat it actually does is give you the tools to create in-process async pipelines in a simple, structured manner.\n\nAnd I&apos;m betting that like me (until recently), this is a library you&apos;ll never even have heard of.\n\nI&apos;ll cover the basics - Sources, Targets and Blocks - and how to link them together into useful **asynchronous** and **parallel** pipelines within your programs. We&apos;ll handle error conditions, cancellation and how to control the degree of parallelism - with samples that give you a bit more than \"Hello World\".",
    level: 'Intermediate',
    tags: ['.net'],
    lengths: ['60 minute talk'],
  },
  {
    id: 29,
    title: 'When I Decided to Write A Technical Book',
    description:
      'To her credit when I told my wife that I wanted to write a technical book she only rolled her eyes slightly.\n\n“Why?” She asked.\n“I think it’d be fun!” I replied.\n\nAround 18 months later I published my book on LeanPub and have (so far) attracted a whopping 4 readers. I’m extremely pleased, I put Code Black together because I wanted to invest the time to develop my knowledge of DevOps and because I knew I’d enjoy the process (I was naive, I hadn’t started proofreading yet).\n\nIn this short talk I’ll share my experiences and tell you about how I went about going from idea to book and will try to give advice to anyone who is interested in doing the same.',
    level: 'Introductory and overview',
    tags: ['leadership', 'documentation'],
    lengths: ['30 minute talk'],
  },
  {
    id: 30,
    title: 'Just what is DevOps Anyway?',
    description:
      'Many organisations still struggle to grasp what DevOps is, the benefits it provides or even where to get started. \n\nIn this talk, we set a definition for DevOps that can apply to every kind, shape and size of organisation along with describing the benefits, the three ways of DevOps, the four types of work and the five ideals. We also talk about starting points and how to not lose momentum, touch on anti-patterns and how to avoid them.',
    level: 'Introductory and overview',
    tags: [
      'devsecops',
      'software methodology/process',
      'leadership',
      'management',
      'coreskills/softskills',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 31,
    title: 'Building event driven system with Kafka',
    description:
      "You likely don&apos;t need Kafka. Yes, you&apos;ve read that right. If your application performs without problems and you don&apos;t expect high increase in load, there is no need to look for different tools or architecture. But after 2 years of using Kafka on production, I&apos;m still amazed by it. If you like to learn how certain tools work, we will do exactly that. I will walk you through building producers and consumers, partitioning and replication. We will have a look at retention of data and log compaction. By the end of the session you will understand principles behind Kafka and when it&apos;s a perfect tool for the job. And even if you decide to not use it, it will be based on your knowledge.",
    level: 'Introductory and overview',
    tags: ['architecture'],
    lengths: ['60 minute talk'],
  },
  {
    id: 32,
    title: 'Saving the World with IoT',
    description:
      "Do you need to be a C/C++ developer to work with IoT?\n\nDo you need to have a bunch of IoT devices before you can get started?\n\nThe answer to those questions is no, this talk will show how you can get started building IoT solutions in minutes, with nothing more than a browser and a development environment using your favourite language like C#.\nBased on our work at Kaluza (OVO Group) where we control devices such as storage heaters, heat pumps, smart chargers for electric vehicles, integrate with renewable power generators, I will show you how you can build your own IoT system.\n\nWhat will the audience learn?\n\nWith a combination of live demos and real devices the audience will learn:\n\n    - How to create an Azure IoT Hub\n    - How to use IoT Hub toolkit for simulating devices and monitoring messages\n    - We will build end to end example including devices and a service controlling our system\n\nPre-requisites\n\nNo prior knowledge of IoT is required, I will show code samples in C#\n\nWhy should I care about IoT?\n\nYou don&apos;t have to be a super hero, to make a difference to our planet. Just a bit of programming skills will suffice.\n\nWe can&apos;t imagine our lives without electricity. Unfortunately it is generated mostly with fossil fuels and it&apos;s not good for our planet. That&apos;s why we build wind farms, solar panels, hydro power plants, but we can&apos;t force them to generate electricity when we want. We have to either use green electricity when it&apos;s available or store it. Both tasks are not easy, but with help from technology it&apos;s possible.\n\nWe can use IoT devices to change the power usage patterns, create virtual power plant, which can be used when the demand exceeds supply. This is exactly what we created over last couple years, controlling heat and car chargers using IoT. We integrated with a hydropower plant on Mull and a wind turbine on Orkney.\n\nI will show you how we use Azure IoT Hub to do that. With simple demos and easy to follow examples you will hopefully leave the presentation inspired to try it at home.",
    level: 'Introductory and overview',
    tags: ['iot'],
    lengths: ['60 minute talk'],
  },
  {
    id: 33,
    title: 'Design for Developers',
    description:
      'Have you ever found yourself not only having to build the product, but in the absence of an actual designer, you’re the one who ends up having to design it too? Ever wondered how you gain the magical design dust to transform that ugly screen into a beautiful interface?\n\nPeople have often told me they’d never be able to do design, as it’s too subjective and a completely different mindset to coding. Well I’m here to tell you that UI design isn’t as complex as it looks when you’ve got the right tools to hand.\n\nIn this talk, I will help you understand some of the main design principles that you can apply across UI design. Including – Typography, Emphasis, Hierarchy, Layout, Spacing, Size, Depth and Colour.\n\nWe’ll be discussing these principles and through visual demonstrations show just how you can implement them across typical features such as forms, cards, dashboards and other interface elements . There may even be some *live designing* to help demonstrate.\n\nWhether you’re the ‘dev-signer’ or you’re just somebody who would like to learn some fundamental design skills to widen your knowledge – you should then leave feeling well equipped with new design skills to apply day to day!',
    level: 'Intermediate',
    tags: [
      'design',
      'ui',
      'ux',
      'cross discipline',
      'software methodology/process',
    ],
    lengths: ['30 minute talk', '60 minute talk'],
  },
  {
    id: 34,
    title:
      'A threat modeling paradigm to achieving security by design',
    description:
      'We have seen great advances in software development over the past few years. Our perception of software development has shifted for good. We now think about the quality and performance of our software from the ground up. But what about security?\n\nIRM statistics for 2019 reports that 7 out of 10 businesses are not ready for a cyber attack. What about detection? A blog that came out in the cyber defence magazine in 2019 puts it this way, “in most cases, it takes half a year to detect a breach”. The obvious question is why. An article by Adam Levin in “inc.com” titled “How Can 73 Percent of Companies Not Be Prepared for Hackers?” sheds some light. Adam highlight’s the fact that cybersecurity is a complex, continually evolving challenge. Robert Ackerman blogs about another issue in his blog titled “Too few cybersecurity professionals is a gigantic problem for 2019”. Robert points to a study by (ISC)2 in his article that highlights a gap of almost 3 million cybersecurity jobs globally. Let us supplement that with wise words from an article by Aaron Tan titled “Security remains an afterthought in DevOps”. Aaron pointed to a CyberArk finding that 94% of organisations had adopted DevOps, but only 28% had fully integrated security teams and processes throughout the application development process. The article also quotes the global security director for CyberArk, Jody Hunt  “Security is an afterthought or is actively avoided because it is perceived as a drag on innovation”. At this point it seems like there are far too many constraints to delivering a secure product faced with the facts. So am I saying that, this is a losing battle?\n\nAu contraire I want to invite you to a shift in direction and thinking. Let me introduce you to a world of security by design. One that ensures that we build secure software from the ground up. To be more specific, a world of threat modeling. A realm where everyone regardless of their role has a part to play.\n\n‘What is threat modeling and how does it result in a more secure software?’, you may ask. Stay tuned, for this is a journey I want to take you on. A workshop and an application level dive in for both the expert and novice alike into how you could put threat modeling into practice, visualise how it helps deliver more secure software and understand how it fits into your existing agile practices.',
    level: 'Introductory and overview',
    tags: [
      'security',
      'software methodology/process',
      'cross discipline',
      'design',
      'testing',
      'devops',
      'devsecops',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 35,
    title: 'Using cats to purfect your software architecture',
    description:
      'What have cats got to tell us about Software Architecture?  Well, most people are roughly familiar with cats, their boundaries and their input/output mechanisms.   It turns out it’s very easy to see when a use case has gone wrong when using a cat.  We’ll take a look at some typical cat use cases and see what lessons we can take back software architecture.\n\nJoin me for an irreverent look at Coupling and Cohesion, Aggregate Roots and the Point of Highest Abstraction … all using the medium of cats.',
    level: 'Introductory and overview',
    tags: ['architecture', 'fun'],
    lengths: ['30 minute talk'],
  },
  {
    id: 36,
    title: 'A Day In The Life of A Data Scientist',
    description:
      "In this hour long session I&apos;ll walk you through a typical day in the life of a data scientist (me). We&apos;ll look at a real world question and how I go about working out the answer.",
    level: 'Intermediate',
    tags: ['machine learning', 'artificial intelligence'],
    lengths: ['60 minute talk'],
  },
  {
    id: 37,
    title: 'HOW TO HACK AN ELECTION',
    description:
      "Think your democracy is safe? Better think again. In this session I&apos;ll demonstrate the techniques that the 'black hat data scientists' use to get the result they want from any election or referenda. In this entertaining talk, I&apos;ll demonstrate techniques, both at the macro level - how to attack an election systemically - and at the micro level - how I can manipulate individuals to do exactly as I want them to do.",
    level: 'Advanced',
    tags: ['machine learning', 'artificial intelligence'],
    lengths: ['60 minute talk'],
  },
  {
    id: 38,
    title: 'Decision Making in the Face of Uncertainty',
    description:
      'Decision making in the face of uncertainty is one of the hardest things to do. In this session, we\'ll borrow methods from machine learning, statistics, trading and computer science to compose a methodology which will allow you to make the best decision possible given the evidence you have to hand, and to also hedge against you being wrong. Whether you\'re a "techie" or a "civilian" everyone can benefit from learning this important methodology',
    level: 'Advanced',
    tags: ['machine learning', 'artificial intelligence'],
    lengths: ['60 minute talk'],
  },
  {
    id: 39,
    title: 'In Retrospect - Making Retros Great Again',
    description:
      "Many of us are used to working in Agile teams. But as time goes on, do you feel like retrospectives have become boring, uninspiring and less effective? Does it seem like the team are just going through the motions, but the process is failing you? Let&apos;s start from the ground up and fix this for good.\n\nThis interactive session will take a look into the surprising cross-disciplinary history behind retrospectives, leaving you with a deep understanding of why we perform them and how feedback is the \"engine\" of Agile development. You&apos;ll learn how to engage your team in fun retrospectives and you&apos;ll leave with a renewed sense of focus to make Agile work for your team.",
    level: 'Introductory and overview',
    tags: [
      'coreskills/softskills',
      'software methodology/process',
      'leadership',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 40,
    title: 'Open Policy Agent for Developers',
    description:
      'The Open Policy Agent (OPA) is a popular open-source tool that enables policy enforcement across the entire technical stack. Supported by the Cloud Native Computing Foundation (CNCF) is commonly used within Kubernetes but developers can use it to implement policy decisions in their applications, or in external tools. Any type of application can be secured: a small microservice offering an API as well as an LDAP or SSH server. This can greatly simplify the development effort and standardize the approach to policy enforcement in a company. In this talk, we will deep dive on OPA architecture and its implementation. We will look at the best practices and the most common drawbacks. Core of the talk will be a practical demo on how to implement OPA with a sample application.',
    level: 'Introductory and overview',
    tags: ['cloud', 'security'],
    lengths: ['60 minute talk'],
  },
  {
    id: 41,
    title: 'Service Mesh for Security Engineers & Governance',
    description:
      'We’ve often heard the word: “service mesh” and the benefits in it for developers: observability, reliability, canary deployments. But what’s in it for Security engineers ? In this talk we’ll dive deep on the benefits of service meshes for security and governance. We’ll look at things such as encryption, public key infrastructure, authentication and authorization, egress policies, smart firewall rules, certificate management, workload identification, organization policies. We will deep dive on what are the best practices and the most common enterprise requirements. There will also be a practical demo on how to implement these controls with Istio, the most popular service mesh in the industry.',
    level: 'Advanced',
    tags: ['security', 'devsecops', 'observability'],
    lengths: ['30 minute talk'],
  },
  {
    id: 42,
    title: 'Whose fault is this ?',
    description:
      'How many times have you looked at some source code and said: “Who did this?”. Managers have asked themselves the same question and the answer in most cases is “it’s the developer’s fault”. In my career as a consultant, this has happened way too many times. As an industry, we tend to blame the developers that wrote the code and/or worked on the system rather than criticizing the company that allowed this to happen. As engineers, we’re biased towards blaming the human rather than blaming the system, mostly because it’s easier. But where does the responsibility lies? Sometimes the big balls of muds we’re dealing with go beyond the simple “technical debt”. How to recognize this behavior and how to fix it? In this talk, I want to introduce ways and techniques, as an architect, to defend yourself from this and describe which cultural shift is needed in a company to ensure that responsibility is clearly defined.',
    level: 'Introductory and overview',
    tags: ['coreskills/softskills', 'leadership'],
    lengths: ['30 minute talk'],
  },
  {
    id: 43,
    title: 'Creating Games in Unlikely Places',
    description:
      "Game development used to be the exclusive domain of low level programmers, writing in C++ or even Assembly.  However, with the increase of hardware speed, that is no longer true, and today, you can easily use other languages to create games.\n\nIn this talk, we&apos;ll explore what the basic building blocks of creating a game are, and then we&apos;ll implement that using a .Net Console Application.  Then, we&apos;ll have a look at replicating that in front end SPA frameworks, such as React and Blazor.\n\nWe&apos;ll then talk about why this kind of kata is useful in non-game development environments, and how what we&apos;ve learned can be transferred to line of business applications.",
    level: 'Introductory and overview',
    tags: ['ui', 'gaming'],
    lengths: ['60 minute talk'],
  },
  {
    id: 44,
    title:
      'The Future of the Windows Desktop (Using .Net Core 3 to Improve Legacy Apps)',
    description:
      "Do you have a WinForms or WPF app in your organisation? You know the one - it&apos;s been running for about 10 years, and nobody dare touch it in case it remembers it&apos;s due to suddenly fall apart; nobody really knows how it got deployed, or how it ever will again! Worse, when you put WinForms on the job ads, you&apos;re losing around half the candidates because, well, who wants to write WinForms apps in 2019?\n\nIn this talk, we&apos;ll discuss what Microsoft have done to try and bring these (still perfectly valid) technologies under the .Net Core umbrella. We&apos;ll talk about how you can convert existing apps over to .Net Core, how you can build and deploy them using the new available tools. We&apos;ll also see how you can improve them from the outside in, using Xaml Islands.",
    level: 'Intermediate',
    tags: ['maintainence', '.net'],
    lengths: ['60 minute talk'],
  },
  {
    id: 45,
    title: 'Architectural Patterns - A Trilogy of Problems Solved',
    description:
      "In recent years, getting the right software architecture has become so much more important.  Gone are the days when you could simply stand up an n-tier web application and you&apos;re away - any kind of scale, latency, or connectivity issues, and you&apos;re suddenly running into problems around performance, or reliability.\n\nIn this talk, we&apos;ll look at three patterns that are widely used in the industry, and how they can solve real world problems.  First, we&apos;ll identify a specific issue: maybe you&apos;re selling tickets for a popular gig, or maybe you&apos;re stuck in a country with an unreliable internet connection, or you might be dealing with sensitive financial transactions.\n\nOnce we&apos;ve successfully created our problems, we&apos;ll talk about how we can use one or more architectural patterns to solve them.  We&apos;ll discuss how, with each of these solutions, there is a price to pay, and find out what that price may be.",
    level: 'Intermediate',
    tags: ['architecture'],
    lengths: ['60 minute talk'],
  },
  {
    id: 46,
    title: 'Functional Programming with C#',
    description:
      "Functional Programming is becoming increasingly popular and relevant with each year that goes by.  With so much discussion around languages such as F#, Haskell and Erlang, it can seem as though getting started with Functional programming would mean first learning a whole new syntax...but what if it didn&apos;t?\n\nMost .NET developers are familiar with the use of Linq, and basic constructs such as IEnumerable, Func delegates, arrow functions and ternary expressions, but did you know that you can use all of this to implement some of the most powerful patterns and techniques from the world of functional programming?\n\nThis talk will demonstrate how, using only familiar features available in out-of-the-box C#, to write Functional code that is:\n\n* More robust\n* Easier to read\n* Easier to maintain\n\nAs well as these benefits, Functional code is a great enabler for the use of concurrency with Async functions and Serverless applications with technologies such as Azure Functions.  \n\nThis talk might be of interest to anyone looking into moving to a new platform, or in improving the scalability of an existing application, or even just interested in seeing what Functional Programming is all about, but all within the comfort of a familiar language.  \n\nWe might even attempt the impossible, and explain what a Monad is!",
    level: 'Intermediate',
    tags: ['software methodology/process', 'functional', '.net'],
    lengths: ['60 minute talk'],
  },
  {
    id: 47,
    title:
      'Why is a Developer Nothing like an Enchilada? - The Weird Histories of the Words we Use in IT',
    description:
      "In the IT industry we&apos;re surrounded all the time by all sorts of extraordinary words in our everyday working environment - but have you ever considered their origins?\n\nSome are, of course, entirely modern.  Some though date back to the middle ages, and some even to the ancient world!  \n\nIn this talk we&apos;ll look at the stories behind the words we use at work all the time, without even realising what they might actually mean.  \n\nOn our eymologoligical travels, we&apos;ll find out how our work relates to 12th centry Welsh monsters, a 6th centry Persian mathematician and some very silly singing Vikings.\n\nWe&apos;ll answer questions such as: What are Geeks and Nerds really?  What is a C and how can it be sharp?  Was a Firewall ever actually made of fire?  What were bytes taken out of?\n\nAbove all, as the title suggests - Why is a Developer Nothing like an Enchilada?*\n\nAll these questions and more will be answered.  You aren&apos;t going to go away better at your job, but hopefully you&apos;ll gain an appreciation for computer terminology and how it fits into the larger history of the english language\n\n\n* Be warned - the answer is not as interesting as the question!",
    level: 'Introductory and overview',
    tags: ['fun'],
    lengths: ['60 minute talk'],
  },
  {
    id: 48,
    title: 'MongoDB vs SQL Server',
    description:
      'Project Manager - “So team, what technologies are we going to use to write this great new music tracking application?”\n\nDev 1 - “blazor + .net core for the frontend, and SQL Server for the database”\nDev 2 - “SQL Server! – It’s 2020 we should be using MongoDB”\n \nIn this talk, we hope to end this debate once and for all. David and Kev will go head to head showing the advantages (and disadvantages) of their preferred database technology',
    level: 'Introductory and overview',
    tags: ['big data', 'cloud', 'databases'],
    lengths: ['60 minute talk'],
  },
  {
    id: 49,
    title: 'Functional Programming in JavaScript',
    description:
      "Functional Programming is becoming increasingly popular and relevant with each year that goes by. With so much discussion around languages such as F#, Haskell and Erlang, it can seem as though getting started with Functional programming would mean first learning a whole new syntax...but what if it didn&apos;t?\n\nUsing just a few JavaScript libraries, such as RamdaJS, developers can implement some of the most powerful patterns and techniques from the world of functional programming?\n\nThis talk will demonstrate how, using ES6 and a few extra libraries, we can write Functional code that is:\n\nMore robust\n\nEasier to read\n\nEasier to maintain\n\nThis talk might be of interest to anyone looking into moving to a new platform, or in improving the scalability of an existing application, or even just interested in seeing what Functional Programming is all about, but all within the comfort of a familiar language.\n\nWe might even attempt the impossible, and explain what a Monad is!",
    level: 'Intermediate',
    tags: [
      'software methodology/process',
      'functional',
      'javascript',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 50,
    title: 'Automated your common processes with GitHub Actions',
    description:
      'In the past, we all always focused on automating our build and deploy process as part of our DevOps process, using CI/CD tools.\n\nBut why stop there? \n\nThere are plenty of other common actions a development team does every day that are candidates for automation that are not directly code related.\n\nIn this session, I discuss how GitHub Actions can be used to automate many of your processes to make your whole software development cycle more efficient and consistent.',
    level: 'Intermediate',
    tags: ['software methodology/process', 'devops'],
    lengths: ['60 minute talk'],
  },
  {
    id: 51,
    title: 'Design is your new secret weapon',
    description:
      "Design is transforming today&apos;s organizations. The latest research shows design-led companies boast higher revenue growth and time to market than their competitors. Design is one of the most in-demand skills for growing businesses.  \n\nIn this talk, I&apos;ll show you how you can alter your design process to create better products faster, become a VIP in your company & future-proof your career.",
    level: 'Introductory and overview',
    tags: [
      'design',
      'ux',
      'ui',
      'user research',
      'management',
      'product managment',
    ],
    lengths: ['15 minute lightning talk'],
  },
  {
    id: 52,
    title: 'What is Blazor? And why’s it so exciting?',
    description:
      "What started as a prototype in 2017 has become one of the hottest technologies in the .NET ecosystem. Blazor is Microsoft’s new front-end framework for building single page applications using C#, not JavaScript. That’s right, C# running in your browser. No plugins, transpilation or voodoo magic involved - just web standards.\n\nIn this talk, you&apos;ll learn all about this game changing platform and how it brings choice back into front-end development.\n\nStarting from the beginning, you&apos;ll explore Blazor&apos;s flexible architecture and it&apos;s different rendering modes. You&apos;ll learn how C# code is able to run in the browser via a technology called WebAssembly. You&apos;ll also cover Blazor&apos;s component model, syntax, project types and more.\n\nBy the end you&apos;ll have a solid understanding of what Blazor is and how it could be the last framework you&apos;ll ever need!",
    level: 'Introductory and overview',
    tags: ['architecture', 'frontend'],
    lengths: ['60 minute talk'],
  },
  {
    id: 53,
    title: 'Building next generation web apps with Blazor',
    description:
      "The widespread adoption of WebAssembly, by all major browsers, has opened the world of front-end development to languages other than JavaScript. The platform leading the charge is Blazor - a new client-side UI framework from the Microsoft ASP.NET team. Blazor allows developers to write client-side applications using C# which runs inside the browser without needing plugins or transpilation - how cool is that!\n\nIn this code-focused session, we&apos;ll explore the Blazor platform. Starting with the fundamentals, we&apos;ll look at how to organise our applications for better maintainability. Then we&apos;ll look at how to handle user input using forms and validation. We&apos;ll then explore some more advanced topics such as JavaScript interop and authentication and authorisation.",
    level: 'Introductory and overview',
    tags: ['language specific', 'demo', 'frontend'],
    lengths: ['60 minute talk'],
  },
  {
    id: 54,
    title: 'Making a noise with F#',
    description:
      'Interest in functional languages, including F#, is growing, but there are still many impediments to its wider adoption. One problem is the (wrong) perception that F# is language for financial applications.\n\nIn this talk I will attempt to dispel that myth, and show that F# is a true general purpose language. I will show how F# can be used to create a simple audio synthesis application, and how the functional approach (single assignment, immutable data, recursion) provides a great way to model the audio domain.',
    level: 'Intermediate',
    tags: ['hardware', 'demo', 'language specific', 'functional'],
    lengths: ['60 minute talk'],
  },
  {
    id: 55,
    title: 'Thinking Functionally',
    description:
      'The determined programmer can write FORTRAN programs in any language - Ed Post\n\nC# is becoming a true multi-paradigm language.  As well as being a powerful object-oriented language, it is embracing many features that originated in the functional language community.\n\nTo program effectively in a functional language, you need to discard many of the thought processes and habits that you have developed for coding in ‘curly bracket’ languages and understand a new set of idioms and ways to think about code.\n\nIn this session I will talk about some of those fundamental idioms, explain why they exist and how they interact to provide a very different framework for thinking about your code. Even if you never write any F#, these ways of thinking can be used to make your C# code more efficient and more robust.',
    level: 'Introductory and overview',
    tags: ['functional'],
    lengths: ['60 minute talk'],
  },
  {
    id: 56,
    title: 'Learning a new front end framework never Svelte so good!',
    description:
      "Front end developer, full stack or just generally a person existing in the industry you&apos;ve probably heard the meme around having to rewrite your front end every 6 weeks to keep up with the changing face of the front end framework war. But why has our industry had to endure this over past decade? Why does the war wage on and (in this speaker&apos;s opinion) why is Svelte going to win the next battle.\n\nIn this talk we&apos;re going to walk through the implementation of an extremely simple \"cat based\" (I promise) app. We&apos;ll see how it is implemented in plain HTML and CSS, Knockout.js, Angular 1, etc. etc. in an evolution of frameworks. At each stage we&apos;ll talk about why these frameworks were popular at the time and things that they did and didn&apos;t do very well.\n\nFinally we&apos;ll land on Svelte and armed with the knowledge of the rest of the talk you&apos;ll be able to understand why Svelte is such an exciting new option in the front end framework race and we&apos;ll work through the very basics of getting you started with a svelte application.\n\nWhether you&apos;re an experienced developer looking to relive some nostalgia or newly on your development journey and wishing to learn about the modern history of the front end and where it&apos;s led us to, I&apos;m sure you&apos;ll enjoy this talk.",
    level: 'Introductory and overview',
    tags: ['ui', 'language specific', 'demo', 'frontend'],
    lengths: ['60 minute talk'],
  },
  {
    id: 57,
    title: 'Agile had better Shape Up or ship out',
    description:
      "We&apos;ve been struggling for decades to make Agile fit real world projects in a holistic fashion and what do we have? People describing their development processes with terms like Fear Driven Development, Sales Driven Development and \"Agile?! more like Fragile! AMIRITE?!\"\n\nAgile has provided us with many useful and reusable paradigms which we can implement to attempt to deliver software whilst blending customer feedback into our feedback loop. This, in theory, has reduced the feedback loop allowing us to deliver more correct and complete software. \n\nThe problem we&apos;ve been finding as an industry over the past couple of decades is that is that the formula, as prescribed in the manifesto, just doesn&apos;t fit in the ways as we&apos;d hoped in the real world.\n\nEnter Shape Up, a new and exciting way to manage software deliveries put out by the founders of basecamp Jason Fried and David Heinemeier Hansson (DHH). This new framework acknowledges a couple of key things that Agile struggles to address:\n\n1. No software design survives first contact with implementation\n2. Steady incremental progress is far more important that flash in the pan deliveries\n3. The autonomy and morale of your delivery team is the most important factor in producing a high performing team.\n\nIn this talk the speaker will walk you through the high level process of Shape Up, the key differences between it and agile, why in their opinion it works and in what ways they have implemented in their own workplace revealing the benefits and drawbacks of the process described in the book.",
    level: 'Introductory and overview',
    tags: [
      'coreskills/softskills',
      'software methodology/process',
      'management',
      'change management',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 58,
    title: 'Moleculer is [sic]',
    description:
      "Moleculer is a node based microservices framework....and it&apos;s spelt wrong! The speaker stumbled upon moleculer after having tried, and almost failed, at delivering microservices using two other popular node based microserivces framework. Moleculer was exactly the shining ray of hope they needed when they realised that the other frameworks that were being used just weren&apos;t going to cut the mustard.\n\nBut why was Moleculer right for that situation? And how might it be great for your own? In this talk we are going to walk through the main capabilities of the Moleculer, how they can be implemented to great affect and the pitfalls to watch out for when it comes to implementing a Moleculer based microservices system.",
    level: 'Introductory and overview',
    tags: ['architecture', 'language specific', 'microservices'],
    lengths: ['60 minute talk', '30 minute talk'],
  },
  {
    id: 59,
    title: 'I can Vim and so can you',
    description:
      "For at least a couple of years Vim was something that I was interested in attempting to use but I was hopelessly intimidated by the prospect of going up against what seemed like the \"end boss\" of writing code. You&apos;ve probably guessed that I did finally find the courage to take on the Vim monster and by the end of this talk I think you will to.\n\nThe focus of this talk won&apos;t necessarily be for me to espouse the value of vim although you can see if you can try and stop me from doing that anyway! I also won&apos;t be giving you a history lesson from vi in the 70&apos;s right up to vim 8 now. I will assume that if you&apos;re attending that you&apos;ve already seen the youtube videos that I had when I started looking into vim and you&apos;re more or less convinced that vim is something you&apos;d like to take on the challenge of learning but don&apos;t really know how to take the first step.\n\nSo, with that in mind, during this talk I will be walking you through getting vim setup and ready for work on a machine and getting it ready for actual coding. At the end of this talk we will have a machine setup with vim along with some helpful plugins and it will be ready to be used as a real Javascript development environment. We&apos;ll build all this actually in vim so you&apos;ll also get some of your first lessons in using vim and I&apos;ll be happy to try and point out some pitfalls to avoid when you&apos;re beginning your vim journey.\n\nAt the end I can share with you a repo with the dot files we create so you can go home and set the same environment up yourself!",
    level: 'Introductory and overview',
    tags: [
      'software methodology/process',
      'language specific',
      'demo',
      'developer tools',
    ],
    lengths: ['60 minute talk', '30 minute talk'],
  },
  {
    id: 60,
    title: 'Get some clojure',
    description:
      "Clojure was ranked as the second highest-paying programming language in 2019. But aside from its rising rain-making status, it is also an extraordinarily elegant and powerful functional Lisp dialect that leverages the richness and maturity of the JVM. It also promises to change the way we think about coding for concurrency.\n\nIn this talk, I&apos;ll go through some of the basics and some of the more unusual features of the language, which I promise will put a smile on the face of anyone who finds true beauty in the art of code.\n\nWarning: if you&apos;ve got a deep-rooted phobia of parentheses, I recommend you stay away.",
    level: 'Introductory and overview',
    tags: ['language specific', 'clojure'],
    lengths: ['30 minute talk'],
  },
  {
    id: 61,
    title: 'About two weeks?": How to give better estimates',
    description:
      "So it&apos;s that time of the development cycle again that every software engineer hates... the moment when their manager or the product owner asks them to give an estimate. Whether it&apos;s part of a formal, well-established process, or an informal side-of-desk convo, every software developer knows that it&apos;s a Raiders of the Lost Ark of a question, fraught with hidden traps, snake pits and poisoned darts.\n\nThis is a quick-fire session to give you some tips on how to best answer that question, and some ideas on how you can help steer your company towards a more healthy attitude towards estimation.\n\nBy my best estimate, I reckon you&apos;ll give this talk a 7 or 8 out of 10. But we all know it&apos;ll probably end up being a 4 or a 5.",
    level: 'Introductory and overview',
    tags: ['coreskills/softskills', 'software methodology/process'],
    lengths: ['15 minute lightning talk'],
  },
  {
    id: 62,
    title:
      '-1 beers, 0 beers, 999999 beers, abc beers and a pack of nuts',
    description:
      'Choosing the right test data for can be critical for making sure you are getting the most out of QA.\n\nLooking at how using combinatorial testing along with boundary value at Koodoo has enabled us to do the equivalent of 128000 end to end tests in 158 tests run in 30s.\n\nHow this can be applied at all levels of the test pyramid.',
    level: 'Intermediate',
    tags: ['automated testing', 'testing', 'data analytics'],
    lengths: ['30 minute talk'],
  },
  {
    id: 63,
    title:
      'DAPR, CNAB, Porter, OAM, RUDR- OMG! Demystifying cloud native app development and deployment tech',
    description:
      "In recent years we&apos;ve seen a huge uptake of cloud native technologies such as Docker & Kubernetes. In an effort to improve the development and deployment experience we&apos;ve seen the release of a number of frameworks and specifications which aim to simplify developing and deploying applications which target platforms such as Kubernetes.\n\nThis talk will\n- Explain what each of these acronyms are and the problem they are trying to address.\n- Give the audience examples of where they can be used with some demos\n- Which of these technologies work together to create an overall experience for developing and deploying applications.\n\nAfter this talk the audience should have a much better understanding of the cloud native development/deployment landscape and where some of these technologies fit in.",
    level: 'Introductory and overview',
    tags: ['devops', 'cloud'],
    lengths: ['60 minute talk'],
  },
  {
    id: 64,
    title: 'Provisioning your Cloud with .NET',
    description:
      "IAC (Infrastructure as code) has become a mainstay for teams looking to automate their infrastructure deployments however is it actually code or just text?\n\nMost cloud provider provisioning system or tools such as Terraform rely on a DSL (often expressed in JSON) to describe the infrastructure. Most of these approaches have had to shoehorn in some programming constructs (such as conditional logic and loops) into the languages to provide support for more complex scenarios.\n\nThis talk compares provisioning infrastructure using cloud provider approaches, Terraform and Pulumi using mostly Azure for demos\n\nWith a combination of slides and code we&apos;ll see how solutions like Pulumi are providing real code based approaches for provisioning infrastructure and compare this to alternatives from cloud providers. \n\nAfter this talk attendees will have a better idea of the options available for provisioning infrastructure and why they may choose one approach over another.",
    level: 'Introductory and overview',
    tags: ['devops', 'cloud', '.net'],
    lengths: ['60 minute talk'],
  },
  {
    id: 65,
    title: 'Make smartphone-only banks more accessible',
    description:
      "The challenger banks are here! But not if you don&apos;t own a smartphone, like my 73 year old dad. I managed to sell him on the benefits of one of them, but without a smartphone there&apos;s no way he can check his balance or get notifications when payments are made. \n\nIn this talk I&apos;ll be showing how I used Twilio (and a little bit of serverless magic) can be used to make challenger banks more accessible to people (like my dad) who make the choice not to use smartphones.",
    level: 'Introductory and overview',
    tags: ['cloud', 'accessibility'],
    lengths: ['30 minute talk', '15 minute lightning talk'],
  },
  {
    id: 66,
    title: 'The Power of Change: Learning to be a "Weirdo',
    description:
      'Being called a weirdo from an early age but never really understanding why, I talk about how I finally learnt to embrace being different. I weave my personal story with fascinating facts and unique insights into the world of neurodiversity and mental illness. I tell you how I recovered and learnt to live - not a normal life - but an authentic one.',
    level: 'Introductory and overview',
    tags: ['accessibility', 'neurodiversity'],
    lengths: ['60 minute talk'],
  },
  {
    id: 67,
    title: 'The invisible walking stick',
    description:
      "How I built balanced tech teams, or how the myth was busted. It&apos;s not impossible, not if you mean it....",
    level: 'Introductory and overview',
    tags: ['leadership', 'coreskills/softskills'],
    lengths: ['30 minute talk'],
  },
  {
    id: 68,
    title:
      'Affective Computing – bringing humans and machines closer through emotions',
    description:
      'Research have shown that emotions play an integral role in decision making, cognition, perception, learning and more. If we want our computers to be intelligent and be able to interact with us we need to ensure that they are able to recognize, understand and express emotions. This is the basic assumption of the field of Affective Computing. In this talk I will give an overview of Affective computing and how it can be applied in order to make our interaction with machines more suitable to us as humans.\n\nFirst I will give an introduction to the field starting with established findings from the field of psychology on how we best can measure emotions.\n\nThen I will describe how the field of Affective Computing has transformed from its origin in the 90’s until now when it is an established research field. I will highlight some of the technology enablers that has made Affective Computing a hot topic nowadays and give some examples of API and services that we as developers can use as of today.\n\nIn the second part of my talk I will give some examples on application scenarios across various fields (retail, medical, education and social). After that I will be show casing what is in the front line now. I will conclude my presentation with some recommendations on how this affects us as developers going forward.',
    level: 'Introductory and overview',
    tags: ['artificial intelligence', 'machine learning'],
    lengths: ['30 minute talk'],
  },
  {
    id: 69,
    title: 'Machine learning in the browser using TensorFlow.js',
    description:
      'In order to start out with machine learning you typically would need to learn Python, Tensorflow, Jupyter Notebook etc. But what if you could run your machine learning straight in the browser. This can be done through Tensorflow.js. In this session you will get an introduction so that you can use it in your own projects.\n\nThis session will give you an introduction to what Machine learning is and what types of problem you can solve. TensorFlow as a library will be introduced and then TensorFlow.js will be presented with a focus on how you can use a machine learning model in your JavaScript application. \n\nNext, we will build an image classification web app that uses a predefined TensorFlow model. \n\nFinally, some examples on how TensorFlow.js is used in commercial applications will be given.',
    level: 'Introductory and overview',
    tags: ['machine learning', 'javascript'],
    lengths: ['30 minute talk'],
  },
  {
    id: 70,
    title: 'Machine Learning on the edge using TensorFlow Lite',
    description:
      "What if you could perform machine learning on the edge, i.e on your mobile device? This would mean that you no longer would need the roundtrip to the server, no data will leave the device and you don&apos;t even need an internet connection . In this session you will get an introduction to TensorFlow Lite so that you can use it in your own projects.\n\nIn this presentation I will demonstrate how you can take a pre-trained model for image classification and convert it to TensorFlow Lite format. Then I will go through how to deploy to model to the device and finally talk a little bit about optimization options in order to reduce the model size.",
    level: 'Introductory and overview',
    tags: ['machine learning', 'mobile'],
    lengths: ['15 minute lightning talk'],
  },
  {
    id: 71,
    title: 'The History of AI - what can we learn from the past?',
    description:
      'Nowadays AI is all the hype, but what many might not know is that AI is an established discipline originating from a paper from Alan Turing in the 1950s. In this talk I will present the historical milestones of AI from the originating paper up until present days.  In addition we will look into the crystal ball in order to see what the future might have in store.\n\nWe will start out our journey by looking at what happened in a workshop in Dartmouth in the 1950’s which started it all. Then we’ll be reviewing a number of areas where AI initially was put to use between 1950-1970. We’ll cover the AI winter in the 1980’s and its’ reasons. \n\nIn the second part of the talk we’ll cover applications and milestones from the 1990’s and onwards. Finally we’ll look into the crystal ball and try to see where AI might takes us in the future.',
    level: 'Introductory and overview',
    tags: ['artificial intelligence'],
    lengths: ['30 minute talk'],
  },
  {
    id: 72,
    title:
      'Why you should consider Web Assembly in your next frontend project',
    description:
      'During the last decades a growing trend has been to put more and more functionality into the client by using the latest and greatest JavaScript framework. But what if we could be using native code in the browser in order to run computations faster and potentially reuse code from the backend in the frontend. \n\nEnter Web Assembly. Web assembly is a new web standard which enables you to run native code as part of your current JavaScript framework. This talk will give you a thorough understanding of what web assembly is and how you can use it in your project. \n\nWe will cover a practical example writing our web assembly using Rust. We will go through everything from writing your web assembly code to publish it as a npm package and finally use it in an existing web application.',
    level: 'Intermediate',
    tags: ['frontend'],
    lengths: ['30 minute talk'],
  },
  {
    id: 73,
    title: "Bourdieu&apos;s social theory applied to tech",
    description:
      "Every workplace, every community, and in fact every social interaction, is governed by various forces, hidden power structures, implicit oppression and submission. We oppress people by accident, and we are oppressed by others by accident.\n\nBourdieu&apos;s social theory (with concepts like “symbolic violence\", “cultural capital” and “hexis”) explain what is happening. By understanding what he meant, we learn how each of us influences and is influenced by the people around us, in ways that we wouldn&apos;t expect.\n\nThis talk tries to make Bourdieu&apos;s ideas accessible. Learn how to improve your environment immediately; see why meritocracy is a dangerous lie; recognise oppression and submission when it happens; and gain the tools to fight it day to day.",
    level: 'Introductory and overview',
    tags: ['cross discipline', 'change management', 'leadership'],
    lengths: ['60 minute talk'],
  },
  {
    id: 74,
    title: 'How to be remotely productive',
    description:
      'Rush hour\nSad meal deal lunches\nOpen plan offices\nCoronavirus?\n\nGoing to work sucks, let’s be honest. You know what the solution is - you should work from home. But how do you keep yourself productive and on task when you have all your fun toys around and no-one keeping an eye on you?\n\nManagers, you want to hire the best people for your teams, why limit yourself to whoever happens to live in your immediate area? You know what you need to do - hire remote. But how do you build a remote team and keep everyone happy and productive?\n\nLet’s talk about what we can do to make our workplaces more remote-friendly so we can all hang out on Slack in our pjs together :)',
    level: 'Introductory and overview',
    tags: ['coreskills/softskills', 'management'],
    lengths: ['15 minute lightning talk'],
  },
  {
    id: 75,
    title: 'Use your source code to document your application',
    description:
      'As a development team, writing documentation is often not our favorite activity. And keeping it up to date after every code changes is a bigger challenge. Developers claim that the source code is the documentation itself, but do your stakeholders agree, do they actually read the code? And does it show how the part are working together?\n\nWhat if our source code would be the source of our documentation, for the team and our stakeholders?\n\nIn this session we will see how we can utilize Roslyn to generate documentation. Like creating diagrams that display the structure and relationships within an aggregate, or a sequence diagram that displays the flow throughout the application.\n\nWe will dive into the code to see how we can load projects and solutions, use syntax trees to walk through the structure of our source code, and detect branching logic to capture alternate paths. Then we will render this data to other file formats such as PlantUML, Markdown and AsciiDoc.\n\nAfter this session you will be able to let your source code speak in forms that your team and your stakeholders explain to the operation of your application.',
    level: 'Advanced',
    tags: [
      'devops',
      'software methodology/process',
      'design',
      'documentation',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 76,
    title:
      'Make sure no one discover your secrets, start using Azure Key Vault',
    description:
      "No longer store a password or connection string in your source code, configuration file or environment variable!\n\nIn this session we will discover what Azure Key Vault has to offer and how we can use secrets and keys stored in Azure Key Vault in our application without much effort.\n\nWe&apos;ll also focus on more advanced scenarios that Azure Key Vault offers us, such as automatic Storage Account Key regeneration. Because, how many times have you regenerated the key of your Azure Storage account?",
    level: 'Intermediate',
    tags: ['devsecops', 'cloud', 'devops', 'maintainence', 'azure'],
    lengths: ['60 minute talk'],
  },
  {
    id: 77,
    title: 'Infrastructure As Code: Terraform 101',
    description:
      'As a developer, you might dread the thought of being asked to reconfigure servers or deploy new infrastructure but why? Treat your Infrastructure As Code!\n\nIn this talk, we’ll walk through how you can re-use your skills as a developer and apply those to the the concept of Infrastructure As Code. We’ll also cover the various benefits it can bring such as being able to version your infrastructure just like your application code.\n\nWe’ll then learn how we can apply this concept using Terraform by Hashicorp which allows us to manage and stand up your infrastructure using providers such as Microsoft Azure and Cloudflare with ease.\n\nAfter this talk, you’ll have learnt the concept of Infrastructure As Code and how to get started with managing your infrastructure with Terraform.',
    level: 'Introductory and overview',
    tags: ['cloud', 'infrastructure', 'devops', 'cross discipline'],
    lengths: ['60 minute talk'],
  },
  {
    id: 78,
    title: 'Concerning Codepoints: Undertaking Unexpected Unicode',
    description:
      'Unicode has been widely successful at replacing the various different character sets available to developers before its introduction, but it is not without many pitfalls as soon as you need to deal with "non-Latin" data (and even when you don\'t!)\n\nThis talk will demonstrate a few interesting ways that uncommon and unexpected Unicode data can break even the most basic text processing routines, almost certainly including your favourite language\'s defaults.\n\nBy the end I hope you will have a greater awareness of how many edge cases there are in Unicode, and how to avoid at least some of them in your own code.',
    level: 'Introductory and overview',
    tags: ['software methodology/process'],
    lengths: ['30 minute talk'],
  },
  {
    id: 79,
    title:
      'Testing In Production: How To Know When Things Are Wrong Before Your Customers',
    description:
      "How great would it be to know about issues before your customers do?!\n\nIntroducing, testing in production!\n\nIn this talk, we explore how testing in production can help you find issues before your customers do and how we can keep a constant load on your production environment, allowing you to find performance issues too!\n\nWe&apos;ll also walk through building a quick demo application built on Azure, showing how we can use synthetic load on our systems.",
    level: 'Introductory and overview',
    tags: [
      'testing',
      'automated testing',
      'operations',
      'monitoring',
      'observability',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 80,
    title: 'Agile Engineering Live!',
    description:
      "We can&apos;t go on adding three-letter acronyms to DevOps as we collaborate more. 'Agile Engineering' is an alternative term & yet 'Agile' means different things to different people in software engineering. Does this word still help us work more effectively together? Has it served its purpose? \nJoin this discussion as five panel members chat through their experiences from Development, Operations, Architecture, Management, and Recruitment backgrounds. \nDon&apos;t worry, it&apos;s not a standup!",
    level: 'Introductory and overview',
    tags: ['devops', 'coreskills/softskills'],
    lengths: ['60 minute talk'],
  },
  {
    id: 81,
    title: 'Accessibility and Common Sense',
    description:
      "Advertising in print and media shows young, healthy models and actors, laughing and smiling. Those are not real people. Real people face challenges: they squint to read; they fumble with their TV remotes; they are baffled by technology; they can&apos;t hear you; they are getting older. Studies now put people with accessibility needs as the majority. So why would we design products for people in ads? Learn about tested product design changes and feedback received, and how to build better software and websites for a more inclusive world. We&apos;ll look at good accessible design practices that are really just good design. We&apos;ll also look at assistive technologies including the use of AI to make solutions that can be used and loved by real people. Making software that&apos;s accessible has never been easier, makes commercial sense, and benefits everyone.",
    level: 'Intermediate',
    tags: ['accessibility', 'design', 'ui', 'user research'],
    lengths: ['60 minute talk'],
  },
  {
    id: 82,
    title: 'Dotnet tools for the Dotnet developer',
    description:
      'Dotnet tools allow developers to extend the Dotnet CLI with custom integrations through the Nuget package manager.\nDevelopers are able to automate tasks by creating console applications, packaging them up and publishing them for all to use. \n\nAimed primarily at Dotnet developers, this talk will give an introduction into what Dotnet tools are and how to get started using them.',
    level: 'Introductory and overview',
    tags: [
      'coreskills/softskills',
      'accessibility',
      '.net',
      'developer tools',
    ],
    lengths: ['15 minute lightning talk', '30 minute talk'],
  },
  {
    id: 83,
    title: 'Breaking perfectionism and being yourself at work',
    description:
      "There is still a sense of 'I have to be perfect' in our mindset. Never failing. Worried about making mistakes. Worried what people will think of us. Feeling shame about asking stupid questions. How do we break out of this anxious state of perfectionism?",
    level: 'Introductory and overview',
    tags: ['leadership', 'management', 'coreskills/softskills'],
    lengths: ['30 minute talk'],
  },
  {
    id: 84,
    title: 'Websites Live In Homes',
    description:
      'Explaining the different types of website hosting that are out there, using housing as a metaphor. From the student dorm that is Github to the fancy detached house that is a dedicated server to the cabin in the woods that is your in-house server, there are a lot of options for hosting your websites, and a lot of options for places to live.',
    level: 'Introductory and overview',
    tags: ['hardware', 'infrastructure', 'maintainence'],
    lengths: ['15 minute lightning talk'],
  },
  {
    id: 85,
    title: 'Artificial Intelligence and the Rise of the Machines',
    description:
      "Artificial intelligence and machine learning are the latest thing, and have been for the last 60 years! Can AI deliver tangible business benefit this time round, or will it be followed by another winter of discontent? In this talk, we look at how far we have come in the last few decades. Then we&apos;ll look at some of the tools like Azure Machine Learning and also review some of the powerful pre-built models that comprise Microsoft Cognitive Services and see how much can be achieved in just a few minutes with the Custom Vision service. Finally, we&apos;ll look into the future of AI and machine learning to work out how relevant it is to solving practical business problems, the longer term implications, and some of the dangers. There are many ethical and diversity issues and also some worrying existential threats. Yes, it&apos;s scary!",
    level: 'Intermediate',
    tags: ['machine learning', 'artificial intelligence'],
    lengths: ['60 minute talk'],
  },
  {
    id: 86,
    title:
      'Going Serverless: Building Websites using Azure Storage and Azure Functions',
    description:
      'Everybody is talking about "serverless" computing, and building "static" websites is all the rage! Why have a server when you can serve static content? But most websites aren\'t really static are they? No problem - we can build client-side functionality using client-side rendering frameworks like React or Single-page Application frameworks like Angular. Our content authoring can be simplified to just editing Markdown. Any behaviour at the back-end can be implemented using AJAX and a serverless approach like Azure Functions. And to "serve" our static content we can now use a very low-cost option - Azure Storage. Serving content directly from storage (in conjunction with Azure CDN for extra performance if needed) turns out to be an incredibly inexpensive, even compared to App Service. We\'ll look at a number of popular static site generators like Jekyll, Hugo and Gatsby, and consider different approaches to continuous deployment. Then we\'ll look at a super-simple implementation of a some websites using these techniques.',
    level: 'Advanced',
    tags: ['cloud', 'azure'],
    lengths: ['30 minute talk'],
  },
  {
    id: 87,
    title:
      'Ring-fence the Chaos: When Technical Teams Meet Organisational Systems',
    description:
      "This is talk about production team structures, inter & intra team efficiency, workflows, and organisational constraints. If you are interested in learning how to analyse your workplace to increase happiness and efficiency of your technical delivery then this is the session for you.\n\nAn organisation&apos;s technical delivery is not just about code reviews, code maintainability, story points. These are only the day-to-day processes. There are many factors (internal & external) which may affect your team&apos;s output. Do you have inter team dependencies? Do your teams cause bottlenecks for the organisation? How do you deal with forecasting, resourcing, knowledge retention & silos? How do you know if your teams are even configured well? \n\nWhen dealing with a multiple production teams (with possible interdependencies) it is inevitable that you will need to understand which project management methodologies are appropriate for given teams & scenarios, and also be able to drive purposeful organisational change. CTOs, Head of Engineering and Technical Leads - I&apos;m talking to you!\n\nOrganisational constraints are challenging, and your organisation&apos;s different service levels often demand that your teams work differently. In this talk we will discuss how to tackle all of these challenges and more with real world examples. This talk is aimed at technical and non-technical audiences interested in team and organisational efficiencies.",
    level: 'Intermediate',
    tags: [
      'change management',
      'management',
      'leadership',
      'software methodology/process',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 88,
    title: '5G - Fact and Fiction Behind the Hype',
    description:
      "The last few years have seen all kinds of claims for 5G and its potential as a tool for entertainment and businesses alike. Most conversations could swap in 'magic' for 5G and make as much sense. But what does it really offer today, what is still a work in progress, and what kind of timeline will companies that want to use it be looking at? How does it tie in with other technology buzzwords like AI, edge computing, VR and IoT? \nJoin an industry insider for an informal, personal take on this misunderstood (and mis-advertised) substitute for magic.",
    level: 'Introductory and overview',
    tags: ['mobile', 'cross discipline'],
    lengths: ['15 minute lightning talk'],
  },
  {
    id: 89,
    title: '7 Things I am ashamed to admit I still Google',
    description:
      'I have been a professional web developer for 7 years, you’d think I’d know what I was doing by now,\nHere’s a list of 7 very basic things I still google regularly, including stars like “how do I get the length of a string” and “I need to import a CSS file into this HTML...”.',
    level: 'Introductory and overview',
    tags: ['coreskills/softskills', 'cross discipline'],
    lengths: ['15 minute lightning talk'],
  },
  {
    id: 90,
    title:
      'From layers to vertical slices - simplify your code and focus on your features',
    description:
      'We\'ve all experienced that moment when your boss/customer calls you and says;\n\n"This is just a small change, I can\'t imagine it would take more than half an hour or so"\n\nAnd your heart sinks, because you know what these "small" tweaks actually entail.\n\nYou have to find the code, which means navigating all the "layers" of your application.\n\nIf you\'re lucky, you can locate the relevant ASP.NET controller, but you know that\'s only the start.\n\n3 hours later, you\'re knee-deep in your Data Access Layer, desperately trying to figure out where this "small tweak" needs to be made, wondering if it\'s lunchtime yet.\n\nIt doesn\'t have to be this way!\n\nYou can skip a lot of this pain by leveraging the idea of "vertical slices".\n\nWhen you build and architect your application around individual features, magical things start to happen;\n\nYou always know exactly where to look for the code that makes any given feature tick.\n\nYou can use tests to be confident your feature actually does what the user/customer wants it to do (imagine that!).\n\nYou get to work with (and write) simple code.\n\nYou can get all your work done in a few hours and bunk off early (OK, maybe not, but we can dream...).\n\nSo join me as we explore what vertical slices are, how you can approach any feature and specific tips and techniques for making this come to life using ASP.NET Core and MediatR.',
    level: 'Intermediate',
    tags: ['architecture', 'software methodology/process'],
    lengths: ['60 minute talk'],
  },
  {
    id: 91,
    title:
      'Building better ASP.NET web applications in 2020, whatever the framework...',
    description:
      "Keeping up\" as an ASP.NET developer in 2020 is hard...\n\nThere was a time when, as an ASP.NET developer you really didn&apos;t face many choices.\n\nYou used WebForms and the furthest you ventured into the wacky world of javascript was to employ a little JQuery here and there when you needed to spice things up!\n\nNow you face endless choices.\n\nASP.NET or ASP.NET Core?\n\nMvc or Razor Pages?\n\nBlazor or not Blazor?\n\nAnd that&apos;s before you even begin to consider the JS ecosystem and everything that comes with it.\n\nHow are you supposed to know where to begin? And what if you choose \"wrong\"? \n\nWhat if Blazor really is the next big thing and you wait too long to learn it? \n\nOn the other hand, what if it&apos;s a passing fad and you sink hours of your precious time into learning it only to discover it&apos;s another Silverlight, dead within five years?\n\nThankfully, there is no \"right\" choice, and what&apos;s more, if you architect your .NET application right you&apos;ll find UI framework choice is far less important than you might expect.\n\nIn this session we&apos;ll take a whistle-stop tour of ASP.NET development in 2020, compare the available options (MVC, Razor Pages, Blazor) and (crucially) discover how to structure your ASP.NET applications so you don&apos;t have to bet the farm on any one option, now or in the future.",
    level: 'Intermediate',
    tags: ['architecture', 'software methodology/process', '.net'],
    lengths: ['60 minute talk'],
  },
  {
    id: 92,
    title: 'Implementing reliable DDD-based microservices',
    description:
      "Using a microservice architecture is a big move, but totally possible when using the right tools. DDD is one of the key concepts for the maintainability and reliability of microservices. Let&apos;s understand some new concepts and technologies that help us to create well-developed and reliable services.",
    level: 'Intermediate',
    tags: [
      'architecture',
      'software methodology/process',
      'maintainence',
    ],
    lengths: ['30 minute talk'],
  },
  {
    id: 93,
    title: 'How the open-source can change your life for the better',
    description:
      "Investing time on open-source projects might improve your career. This is the history of my life, and I&apos;m gonna share it with you. You don&apos;t have to be big to get benefits from open-source. It has changed my life, and it can change yours too.",
    level: 'Introductory and overview',
    tags: ['open source', 'cross discipline'],
    lengths: ['30 minute talk', '60 minute talk'],
  },
  {
    id: 94,
    title: 'Invest in yourself. Be searchable!',
    description:
      'Did you already search for you on the Web? What did you find? Did you like it? Think that a new potential employee will do the same. So, how are you being shown? Do you invest in your image? You should! You don’t have an idea how is important to invest in your own marketing as a developer.',
    level: 'Introductory and overview',
    tags: ['coreskills/softskills', 'management'],
    lengths: [
      '30 minute talk',
      '60 minute talk',
      '15 minute lightning talk',
    ],
  },
  {
    id: 95,
    title:
      'Teaching a Toddler to Read and Write (well, type) with Javascript',
    description:
      "Since starting a new job working from home, my 3 year old has become very interested in joining meetings and 'helping' me work. I have a broken old Apple keyboard set up next to me so he can press buttons, but it occurred to me - he&apos;s a smarty pants, maybe he really could join in...\nThis talk is the result of a 6 month experiment of me building a simple little JS app and inflicting it on my poor child to see if he can learn to read and write (well, type).",
    level: 'Introductory and overview',
    tags: ['demo', 'javascript'],
    lengths: ['60 minute talk'],
  },
  {
    id: 96,
    title:
      'Creating a hybrid and multi-cloud strategy using Azure API Management',
    description:
      'Many of us are migrating to the cloud, however this transition will take time. So how do we manage and monitor our on-premises services and APIs during this migration? And what if we can never move them to the cloud, either due to technical, procedural or security reasons? Maybe we even want to have a multi-cloud strategy, bringing together the best from all different providers. How can we ensure they are still brought under governance, in a secure manner, and adhering to the policies we want?\n\nThis is where Azure API Management comes in, allowing us to create a vibrant API ecosystem, not matter where our services live. In this session we will dive into the options to manage our APIs in Azure, on-premises in a hybrid environment, on the edge with our devices, or at any other provider in a multi-cloud scenario, all with one seamless experience. Expect a deep-dive into Azure Arc combined with API Management, with best-practices, demos and lessons learned from the field.',
    level: 'Intermediate',
    tags: ['cloud', 'architecture', 'infrastructure', 'azure'],
    lengths: ['60 minute talk'],
  },
  {
    id: 97,
    title:
      'Building better security for your API platform using Azure API Management',
    description:
      'These days we use APIs to expose all our microservices , processes, and data, and all this while working in a PaaS or serverless environment. But how do we ensure this is done in a secure and governed way? \n\nThis is where Azure API Management comes in, where we can create a repository of all our APIs, and make sure to expose all of these securely in a standardized manner. In this session we will dive into the most common security hazards, and see how API Management helps us solve these. You will learn all about the strengths and weaknesses of the product, best practices, and how to harden the defenses of your services.',
    level: 'Intermediate',
    tags: ['security', 'cloud', 'azure'],
    lengths: ['60 minute talk'],
  },
  {
    id: 98,
    title:
      'Building Smarter Solutions Using Azure And Cognitive Services',
    description:
      "There&apos;s a lot of discussion going on around Artificial Intelligence, and for good reason. AI and Cognitive Services are getting more powerful all the time, and it can be confronting to see all these developments. But how can we leverage this power in our own solutions, using it for making the life of our users and customers easier?\n\nIn this session, you will see learn we can get data from the real world, and use this to drive our business, and all this in a serverless manner. Thanks to Microsoft Cognitive Services it&apos;s easy to integrate and work with speech, text, images and videos into our processes. Come and learn how to use this to your own advantage, driving your business forward.",
    level: 'Intermediate',
    tags: ['cloud', 'artificial intelligence', 'azure'],
    lengths: ['60 minute talk'],
  },
  {
    id: 99,
    title: 'A Guide Through The Azure Messaging Services',
    description:
      'Almost any solution we build will have some sort of messaging in their architecture. But how do we choose what type of messaging we need? From messages to events, from streams to publish and subscribe, the options seem overwhelming. In this session we will dive into the various types of messaging, and which services we can leverage in Azure to implement them. Once finished, you the world of messaging is at your feet, and you will be able to counter any type of messaging which comes on your path.',
    level: 'Introductory and overview',
    tags: ['cloud', 'architecture', 'azure'],
    lengths: ['60 minute talk'],
  },
  {
    id: 100,
    title: 'Azure Resource Manager In A Serverless World',
    description:
      'So we have heard about using Infrastructure as Code to deploy our environments and resources, but how do we apply this in a world of Platform as a Service and Serverless? What tooling can we use, and how do we ensure our templates are created correctly?\n\nIn this session you will learn tips, best practices and techniques from real customers on using Azure Resource Manager templates to make your journey as smooth as possible. We will see how to get started on creating templates, how to easily move from portal to Infrastructure as Code, and what tools are available to help us with this. And we will dive even deeper, looking into deployment strategies, template testing and other scenarios.',
    level: 'Introductory and overview',
    tags: ['cloud', 'devops', 'azure'],
    lengths: ['60 minute talk'],
  },
  {
    id: 101,
    title: 'An introduction to Blazor',
    description:
      "Run C# code on your browser, no plug-ins, no extensions and that&apos;s Blazor! Something a lot of developers have been dreaming of.\n\nBlazor is a feature of ASP.NET. It lets you build interactive web UIs using C# instead of JavaScript. Yes, you write your client-side and server-side code in C#!!! It makes use of the latest web standards and requires no additional plug-ins or add-ons to run. Its big selling point is the ability to write rich web UI experiences using HTML, CSS, and C# instead of JavaScript..\n\nMy session will give an introduction to Blazor - discussing what is Blazor, what is Blazor WebAssembly, what is Blazor Server and an overview of Blazor Components. Attendees can gain a good understanding of this game-changing platform which could offer clarity when it comes to UI.",
    level: 'Introductory and overview',
    tags: ['language specific', 'frontend', '.net'],
    lengths: ['60 minute talk'],
  },
  {
    id: 102,
    title: 'Developing Actions on Google with .NET',
    description:
      'Do you own a Google Home? Ever wondered how clever it is? Well, then I can teach you a trick or two to build your own Action on Google.\n\nGoogle Assistant is an artificial intelligence-powered virtual assistant developed by Google that is primarily available on mobile and smart home devices. Its functionality can be extended to do anything from managing your task list, to controlling the brightness of your connected lights to a complex conversational bot which can book your next holiday. In my session I talk about how you can develop an Action on Google using .Net, leveraging the power of DialogFlow, the conversational platform which helps you design and customise your Actions.',
    level: 'Intermediate',
    tags: ['iot', '.net'],
    lengths: ['60 minute talk'],
  },
  {
    id: 103,
    title: 'Want to know about spices? Lets talk to Alexa!',
    description:
      'Alexa is the cloud based, natural voice service from Amazon. It is an intuitive way of interacting with technology - using natural spoken language, and once you are past the learning curve, developing for Alexa can be quite fun. \n\nI come from India. Talk about my home country and you just cannot not talk about spices. Spices might be "the ingredient which adds taste and aroma to your food" but they have a variety of uses from cleaning to being used in quick home remedies. \n\nMy session will combine the two - spices and Alexa. I will talk about developing a custom Alexa skill which can tell you some interesting facts about spices. Attendees can gain knowledge on how to develop a custom skill for Alexa using .Net and of course, some knowledge on spices!',
    level: 'Intermediate',
    tags: ['iot'],
    lengths: ['60 minute talk'],
  },
  {
    id: 104,
    title:
      'You have a blog? Lets turn it into an Alexa Flash Briefing !!!',
    description:
      'A blog is useful for many reasons. It can become a source of leads, it can be the place where you talk about your products/services or it can simply be the place where you have your audience and express your ideas. There are proven success stories with blogging. But what if you can have a wider outreach for your blog? What if your subscribers get to know that there is a new blog post from you while they enjoy their morning brew?\n\nAlexa Flash Briefing is a type of Alexa skill where users can subscribe to a news feed which gives them information updated periodically. In my session, I will be talking about how you can convert your blog into an Alexa Flash Briefing.',
    level: 'Intermediate',
    tags: ['iot'],
    lengths: ['60 minute talk'],
  },
  {
    id: 105,
    title: 'Coding the trolley problem: Ethics in development',
    description:
      "As a developer, are you responsible for what you write? If you&apos;re assigned a ticket that you don&apos;t agree with, what do you do? Where does the buck stop? This talk encourages fellow professionals to examine the issues surrounding what we do and  ask who is ultimately responsible.",
    level: 'Intermediate',
    tags: ['management', 'coreskills/softskills', 'ethics'],
    lengths: ['30 minute talk', '15 minute lightning talk'],
  },
  {
    id: 106,
    title:
      "What&apos;s it worth? How to work out the value of what you&apos;re building",
    description:
      "As creators of software we often come up against the need to put a monetary value against what we&apos;re building. \nYou might need it to understand the value of one development versus another. You might be asked for it by people who have limited understanding of the idea and limited understanding of the software development process. You might need it so you can say \"If you spend X, you will earn Y\".\n\nIf you can&apos;t estimate the value of what you&apos;re building, how do you know it is worth building at all??\n\nIt is impossible to perfectly predict the monetary value of your hodge-podge collection of ideas and requirements, but your gut is telling you it is worth doing and that means something. With the right approach and some well reasoned assumptions you can go from gut to a sensible plan with a pretty graph.\n\nIn this session we will explore a fun, light-weight method of boiling down our idea to a set of assumptions. We will then use those assumptions to model how much a development will cost versus how much it will earn and when it will break even.\n\nAttendees will walk away with a method for turning something that feels like a valuable piece of work into a reasonable estimation of return on investment. The numbers cannot be perfectly accurate, but they will be much closer and better articulated than what your gut is telling you. \n\nThat estimate will be absolutely accurate enough for you to figure out which development is worth doing first and which pricing model makes sense. \n\nAttendees will find this a really useful process for seeing your project from a different perspective, flushing out previously unknown requirements and risks and it will allow you to create some pretty graphs with £ signs on them to appease your non-technical stakeholders.",
    level: 'Introductory and overview',
    tags: ['software methodology/process'],
    lengths: ['30 minute talk', '60 minute talk'],
  },
  {
    id: 107,
    title: 'Hello Git Merging',
    description:
      'When I started using git, everything was fine until I wanted to merge my code. In my attempt to understand the different methods. I wrote Hello World with a bug and then added a new feature to it. This talk is about what I struggled with and learnt when I merged the bug fix and feature together, the various ways it can be done, what the outcomes were and what this meant.',
    level: 'Introductory and overview',
    tags: ['change management', 'software methodology/process'],
    lengths: ['30 minute talk'],
  },
  {
    id: 108,
    title: 'Dungeons, Dragons & Developers',
    description:
      'You enter the dungeon, as the echoes of your footsteps sound around you, something catches your eye - is that… oh, oh no.\n\nYou grab your trusty sword and with your fellow adventurers, you seek to overcome the mighty challenge that lays ahead of you: building software.\n\nThis talk is a look at some of the parallels between Dungeons and Dragons, and software development.\n\nWe’ll see how lessons learned through delving into dungeons and fighting monsters with a party of adventurers can help teams of developers when building software in the real world.\n\nAre you ready to join me in a mighty quest for better software?',
    level: 'Introductory and overview',
    tags: [
      'coreskills/softskills',
      'leadership',
      'management',
      'fun',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 109,
    title: 'Being Heboi - The Beauty of Failure',
    description:
      "It&apos;s not uncommon to hear someone say \"Fail often, fail early\" after a project goes awry in some way. But what happens when you specifically aim to fail? Using the robot fighting phenomenon 'Hebocon' as an example we will discuss the beauty of failure, how lacking skills can empower your team, and learn the intrinsic value of useless things.",
    level: 'Introductory and overview',
    tags: ['coreskills/softskills', 'management', 'leadership'],
    lengths: ['15 minute lightning talk'],
  },
  {
    id: 110,
    title:
      'From Under the Desk to In Your Cloud: The Rise of Low Code Solutions',
    description:
      "Every company has one - a PC under a desk that runs some small yet business critical function. So what happens now in the world of low code solutions in the cloud? The traditional line between IT and Business is moving as technology further embraces users creating their own tools. \nThis talk will explore why providing a space for users to build their own tools is not only useful but essential: bridging the gap between developer and end user, and preventing those 'under desk' solutions from proliferating on your new cloud systems.",
    level: 'Introductory and overview',
    tags: ['cloud', 'management'],
    lengths: ['30 minute talk'],
  },
  {
    id: 111,
    title: 'The Power of Asking the Right Questions',
    description:
      "When we are under pressure to deliver it&apos;s easy to develop, develop, develop but what if we paused to ask; Why? What? How? \n\nWhat if we spent less energy developing solutions and more time searching for the right problems?\n\nIt may sound obvious, but asking better questions leads to better answers. \n\nBut, how do we ask the kinds of questions that enable us to *really* understand users needs, to challenge assumptions, to reframe problems and as a result create better solutions?\n \nThis talk will help you to...\n \n→ Unleash the potential of good questions to build understanding, trigger imagination, and foster collaboration\n\n→ Ask questions more effectively as a way of expressing  genuine curiosity and interest\n\n→ Develop your questioning muscles in order to become a heavy-weight 'Questionologist'\n\nAnd I&apos;ll explain why asking good questions is a uniquely powerful tool for unlocking personal insight and an essential life skill for surviving the 4th Industrial revolution.",
    level: 'Introductory and overview',
    tags: ['coreskills/softskills', 'user research', 'design'],
    lengths: ['30 minute talk'],
  },
  {
    id: 112,
    title: 'Improving the UK’s Driving Test Experience',
    description:
      'The Driver and Vehicle Standards Agency (DVSA) is the Department for Transport’s executive agency responsible for ensuring drivers and vehicles may legally use the UK road networks.\n\nAs part of its five-year strategy to transform into a digitally enabled organisation, it is adopting User-Centred Design and Agile ways of working to deliver better products, services and user experiences.\n\nOver the last 2 years, I’ve been on a journey with the agency -- on a mission to improve the UK’s Driving Test Experience.\n\nEvery year over 1.8 million practical driving tests are conducted in the UK. \n\nThe completely paper-based service has seen little change over the last 25 years and was identified as an area in need of modernisation through the introduction of mobile devices.\n\nBut with a user base potentially reluctant to change and new to technology how do you bring everyone along on that digital transformation journey?\n\nIn this talk, I’ll share… \n\n⏤ the projects highs and lows and show how through continuous user engagement, extensive research and co-creation empowered teams can develop great user experiences and deliver outcomes at pace\n\n⏤ how a government agency is successfully achieving its vision of becoming a digitally enabled organization and re-inventing itself for the future\n\n⏤ why a Government Digital Services Assessment is the best thing that can happen to your project.',
    level: 'Introductory and overview',
    tags: [
      'software methodology/process',
      'user research',
      'design',
      'ui',
      'ux',
    ],
    lengths: ['30 minute talk', '60 minute talk'],
  },
  {
    id: 113,
    title: 'Making Operational Azure Management a breeze.',
    description:
      "Have you just started using the cloud? Perhaps you&apos;ve been using it for a while and have experienced the dreaded resource sprawls or a huge bill at the end of the month.\n\nThe aim of this session is to showcase the all of the components available that allow organisations to embrace power of the cloud once they have invested time in laying down the key foundations for it&apos;s use.\n\nLaying this operational governance foundation will ensure that your development team can then work in an agile way whilst enforcing that they work in accordance with all the governance, compliance & security, whilst ensuring that cost management, resource management and other cloud management aspects are implicitly adhered to as well giving your operations teams fewer headaches",
    level: 'Introductory and overview',
    tags: ['cloud', 'security', 'devops', 'azure'],
    lengths: ['60 minute talk'],
  },
  {
    id: 114,
    title:
      'What is Azure DevOps? Why Should I use this? How do I get started',
    description:
      'Azure DevOps is a platform that can manage the full life cycle of your code from build to release and in this introductory session come and learn more about the power of Azure DevOps.',
    level: 'Introductory and overview',
    tags: ['devops', 'azure'],
    lengths: ['60 minute talk'],
  },
  {
    id: 115,
    title:
      'Using Azure as a Platform for good - The story behind mhasl.me',
    description:
      'In this session I will cover the technical background of a new site that I have developed for sharing stories related to many different aspects of Mental Health and how it is something that affects someone just like you or me\n\nIn this session I will cover\nArchitectural decisions and why I made the decisions I made\nThe Technicals behind the site and the components used as part of the building, maintaining and development of the site, from Azure DevOps to Azure Resources and how I built a repeatable deployment of the Resources that made the site a possibility from the get go \nSecurity Decisions that I made along the way and why I chose them \nLessons learned along the way \nAnd lastly why I think this is a topic that in tech we need to talk more about',
    level: 'Intermediate',
    tags: ['cloud', 'azure'],
    lengths: ['60 minute talk'],
  },
  {
    id: 116,
    title: 'Mental Health: Its Time to Talk',
    description:
      "Mental health affects us all, albeit at varying levels of intensity, be it from having a restless nights sleep or Bi-Polar Disorder and is still a subject that we tend to approach with caution, if we even speak about it at all, whether with our colleagues and managers, doctors and even our closest friends and family.\n\nStarting talking about our mental health is often hard, but it is one of the most powerful tools in your arsenal to managing your own and your team&apos;s mental health and should be discussed in all 1:1s.\n\nCome and gain an insight into some of the things to look out for as preliminary signs that your colleagues, friends, family and perhaps, most importantly, yourself may be suffering, plus how to broach this all-important conversation.",
    level: 'Introductory and overview',
    tags: ['coreskills/softskills', 'mental health'],
    lengths: ['60 minute talk'],
  },
  {
    id: 117,
    title: 'Good Writers Become Great Developers',
    description:
      "Good writing might not be rocket science, but it is the secret ingredient in the recipe for a great developer. If you&apos;re already an experienced developer or a only just starting on the dev journey, by the end of this talk, you&apos;ll come to appreciate the similarities between the two mediums, and be ready to arm yourself with techniques that will help you improve your writing AND development skills.",
    level: 'Introductory and overview',
    tags: [
      'coreskills/softskills',
      'cross discipline',
      'design',
      'fun',
    ],
    lengths: ['15 minute lightning talk', '30 minute talk'],
  },
  {
    id: 118,
    title: "Help I&apos;m your manager!",
    description:
      "Well done, you&apos;ve been promoted and tomorrow you&apos;ll be managing your first ever team. Wait, what on earth do you do?! Management is a whole new skill, which all of you can be great at. But like any skill it needs to be learned and starting this learning halfway through a career can be daunting. As an experienced manager, and former engineer, benefit from my experience of the highs and lows of taking the next step. By the end of this talk you&apos;ll be ready to face your next career challenge.",
    level: 'Intermediate',
    tags: ['management', 'leadership'],
    lengths: ['60 minute talk'],
  },
  {
    id: 119,
    title: 'The Politics of Tool-Shaming',
    description:
      'Most of us have heard it at some point. “WHAT? You use X framework/tool/OS/language?! So… you’re a bad developer then?”\n\nI did not come from a Software Development background into this industry. I was an outsider, but it’s what I wanted to do my whole life. This is my story: how I refocused and retrained in my career to be confronted with a nightmare of gatekeeping, elistism and aggression. I saw what I thought was a problem, and I’d like to propose a solution.\n\nWhat we do is hard. We’re in a young industry full of contradictions and opinions, and sometimes it excludes people, it shapes new developers’ attitudes poorly and it causes people to walk away. In this talk I’ll focus on what I’ve experienced, what others have experienced, what is harmful to your business with this culture and what can be done about it.\n\nPS. I don’t care about emacs or vim. Can you ship it?',
    level: 'Intermediate',
    tags: [
      'software methodology/process',
      'coreskills/softskills',
      'management',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 120,
    title: 'DevSecOps: A view from a startup',
    description:
      'Lessons learned from a DevSecOps perspective in an 18-month old startup.',
    level: 'Introductory and overview',
    tags: ['devsecops'],
    lengths: ['30 minute talk'],
  },
  {
    id: 121,
    title: 'Fancy Bears are not your problem – real-world appsec',
    description:
      "Fancy Bear, Stone Panda, Lazarus, Charming Kitten and Equation Group are Advanced Persistent Threat groups. Woah, sounds scary!\n\nWhat are the threats from these groups? Do we really need to worry about them or do they just make attention-grabbing news stories?\n\nIn this talk, we will explore why APT groups might not be the thing that application developers need to worry about and the things that should get attention in application security. You&apos;ll see some tools and techniques that help find the important problems to work on and the ways to resolve those problems. This is real-world appsec.",
    level: 'Introductory and overview',
    tags: ['security', 'software methodology/process'],
    lengths: ['60 minute talk'],
  },
  {
    id: 122,
    title: 'Authentication for Serverless',
    description:
      'Authentication is a challenge at the best of times and running "serverless" adds some new challenges.\n\nThis session will demonstrate how to authenticate your users and keep your application secure. It will illustrate the threats to your system and how to avoid pitfalls. You\'ll explore some of the options for Azure Functions and considerations for when they might be used.\n\nHow do you choose between home-grown, open-source, Azure or third-party authentication systems? You\'ll learn various ways to implement Authentication for Serverless and how you choose between them.',
    level: 'Intermediate',
    tags: ['security', 'cloud', 'serverless'],
    lengths: ['60 minute talk'],
  },
  {
    id: 123,
    title: 'OWASP ZAP HUD WTF?',
    description:
      "Do you do enough security testing?\n\nOWASP Zed Attack Proxy can help you automatically find security vulnerabilities in your web applications while you are developing and testing, and now it has a Heads Up Display!\n\nIn this talk, you&apos;ll see how the features of ZAP can be used to find issues during development, as you navigate your web application so that you can deploy a better-tested app.",
    level: 'Introductory and overview',
    tags: ['security', 'devsecops', 'testing'],
    lengths: ['15 minute lightning talk'],
  },
  {
    id: 124,
    title: 'An app modernization story with Cloud Run',
    description:
      "Back in 2016, I deployed an ASP.NET monolith app to IIS on Windows. It worked but it was clunky in every sense of the word. Over the years, the app was freed from Windows (thanks to .NET Core), containerized to run consistently in different environments (thanks to Docker) and decomposed into a set of loosely-coupled, event-driven, microservices (thanks to Cloud Run). The end result is a simpler and portable serverless architecture that&apos;s much cheaper to run and maintain. In this talk, we&apos;ll go through the modernization journey, explore the decision points and deep dive into the final architecture and code",
    level: 'Intermediate',
    tags: ['software methodology/process', 'cloud'],
    lengths: ['30 minute talk'],
  },
  {
    id: 125,
    title: 'Serverless containers with Knative and Cloud Run',
    description:
      "When you build an app, you typically need to choose agility with serverless or flexibility with containers but not both. But why does it have to be that way? Wouldn&apos;t it be nice to have the best of both worlds? \n\nIn this talk, we&apos;ll explore the open source project Knative and its managed version Cloud Run. Through a series of demos, we&apos;ll see how these projects enable you to deploy and manage containers in a serverless way on wherever you want, on-prem or in the cloud.",
    level: 'Intermediate',
    tags: ['cloud', 'software methodology/process', 'serverless'],
    lengths: ['60 minute talk'],
  },
  {
    id: 126,
    title: 'Just what is a pod, anyway?',
    description:
      'Kubernetes seems to be everywhere these days and adoption continues to grow daily. Kubernetes can take a way a lot of the hardship of running applications at scale and allow on-call engineers to get more well deserved sleep.\n\nBut as a developer, where do you start? What do you need to know about the platform that runs your code to use it effectively?\n\nKubernetes is a large and and fast-moving project, with more than enough jargon thrown in. It can be overwhelming building your first deployment. But fear not, we’ll guide you through your first steps with Kubernetes and provide you with a groundwork of understanding that can be built on.\n\nBy the end of this talk you’ll no longer be wondering “just what is a pod?“, instead you’ll have an understanding of the building blocks that make up a Kubernetes deployment and be well placed to start your Kubernetes journey.',
    level: 'Introductory and overview',
    tags: ['cloud', 'devops', 'operations', 'infrastructure'],
    lengths: ['15 minute lightning talk', '30 minute talk'],
  },
  {
    id: 127,
    title: 'Mutant Pods',
    description:
      "Kubernetes gives the ability for code to control policy, automating away a lot of that manual deployment checklist. Kubernetes administrators have a lot of power at their fingertips. By leveraging some of the built-in functionality you can give your cluster superpowers.\nAdmission controllers give us the power to validate resources added to Kubernetes against our own custom logic. They also allow us to mutate resources as they are created.\n\nSo just what can we do with this power?\n- Inject values directly into containers at runtime\n- Rewrite all image URLs to pull from a local cache that can be security scanned\n- Ensure resources are appropriately labelled or annotated\nThe list goes on.\n\nWe&apos;ll take a deep dive into how these controllers operate and walk through how they can be used to make things easier for both application developers and cluster administrators.",
    level: 'Advanced',
    tags: ['infrastructure', 'operations', 'devops'],
    lengths: ['60 minute talk'],
  },
  {
    id: 128,
    title: 'Removing application complexity with sidecars',
    description:
      "Modern applications are complex things. It&apos;s not just your business logic you need to think about.\nYou need to collect logs for debugging, you need to collect metrics for performance monitoring, network reties, service discovery, error recovery... the list goes on and seems to keep growing.\n\nBut what if it didn&apos;t need to be like this? What if our applications could be just that and leave the rest to something else.\n\nSay hello to Kubernetes sidecars!\nThis development pattern can offload a lot of this functionality onto standalone applications focused on that one task. Need logs captured and sent off to ElasticSearch? There&apos;s a sidecar for that! Need to scrape and collate metrics from all your applications? Yup, there&apos;s a sidecar for that. Worried about flakey external services and need to build in some retry logic? Sidecars to the rescue!\n\nIn this talk we&apos;ll show some of the off-the-shelf sidecar options available today as well as giving you a run-through on how to build your own.",
    level: 'Intermediate',
    tags: ['devops', 'architecture', 'cloud'],
    lengths: ['30 minute talk', '60 minute talk'],
  },
  {
    id: 129,
    title: 'Surviving the Appocalypse',
    description:
      "It&apos;s Saturday night, 8pm, you&apos;re just about to head out for a lovely meal with friends when suddenly your phone buzzes. You remember with dread that you&apos;re the current on-call engineer. With hesitation you look at your phone...\n\nNo one wants their weekend ruined by application failures. Thankfully Kubernetes provides a lot of fault tolerance and resilience out of the box. Automatic scheduling, enforceable resource limits and automatic application restarts to name just a few.\n\nBut this isn&apos;t magic. For it to really work for you you&apos;ll need to understand how it works and build your applications appropriately.\nTogether we&apos;ll go through each of these features and look at how we can get the best out of them, pulling from real world examples. By the end you should be able to handle just about anything, even an accidental deletion of an cluster control plane in production (yes, this happened to me)!",
    level: 'Intermediate',
    tags: [
      'cloud',
      'architecture',
      'devops',
      'infrastructure',
      'operations',
      'fun',
    ],
    lengths: ['60 minute talk', '30 minute talk'],
  },
  {
    id: 130,
    title: 'Getting started with Web Accessibility Testing',
    description:
      'We all know accessibility is incredibly important, but a lot of us don’t know where to start. The most prevalent accessibility issues are quite easy to fix, and can be caught by automated testing.\n\nIn this short session I’ll go over a few different approaches for accessibility testing in your web application. I’ll cover manual checks, and tools you can use locally or in your CI/CD pipeline.\n\nThis session aimed at everyone that works on the web, and wants to make it a better place. You’ll walk away with some practical steps you can take to start testing and improving your apps’ accessibility.',
    level: 'Introductory and overview',
    tags: ['testing', 'automated testing', 'accessibility'],
    lengths: ['15 minute lightning talk'],
  },
  {
    id: 131,
    title:
      'Machine Learning in C#?! Building Machine Learning pipelines and models using ML.NET',
    description:
      "If you&apos;re a .NET developer, you may be forgiven for thinking that in order to build awesome machine learning applications, you&apos;ll need to brush up on your Python skills in order to use ML libraries, or even worse, buy food for that data scientist in your team until they&apos;ve built an ML model for you.\n\nWith the release of ML.NET, this is no longer the case!\n\nIn this session, I&apos;ll cover what ML.NET is and how you can use it to add machine learning capabilities to your .NET applications. I&apos;ll cover the capabilities that the API offers in terms of preparing our data and evaluating our models. I&apos;ll also talk about the capabilities that the ML.NET Model builder and how that can simplify how we choose what type of model we want to build and I&apos;ll also talk about how we can deploy our models into production.\n\nSo ditch that data scientist (in a nice way of course) and come and see how you can leverage your existing .NET skills to use ML.NET to build some interesting machine learning applications!",
    level: 'Intermediate',
    tags: [
      'machine learning',
      'artificial intelligence',
      'big data',
      'data analytics',
      'language specific',
      'software methodology/process',
      '.net',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 132,
    title:
      'Building Event-driven applications using Azure Cosmos DB and Azure Functions',
    description:
      "Developing event-driven applications using Azure Functions is relatively straight forward. We can also use Cosmos DB as our data-store for our Functions thanks to Cosmos DB supported Triggers and Bindings, as well as use different types of Cosmos DB API&apos;s thanks to Dependency Injection support in Azure Functions.\n\nIn this session, I will show you how you can integrate Cosmos DB into your Azure Functions using Triggers, Bindings and dependency injection. I&apos;ll talk about which situations you would opt for dependency injection and vice-versa. I&apos;ll also cover the do&apos;s and don&apos;ts when developing Azure Functions that use Cosmos DB.\n\nAfter attending this session, you&apos;ll know how you can build event driven applications using Azure Functions and Cosmos DB.",
    level: 'Intermediate',
    tags: [
      'cloud',
      'software methodology/process',
      'big data',
      'language specific',
      'azure',
      'serverless',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 133,
    title: 'Agile and Outsourcing: A How-To Guide',
    description:
      "I have worked in an environment relying heavily on the use of additional resource via supply chain, external suppliers or outsourced teams for several years (the naming convention\nchanges, but the purpose remains the same – gaining the ability to quickly expand and flex our development capacity). I&apos;ve experienced several different types of supplier: some on-site sat with our teams, some off-site but in-country, some in Europe just an hour’s flight away, and some far-shore.\n\nI&apos;ll use this experience in this session to provide a rule book for how to work with outsourced teams: some basic dos and don’ts of how to be successful. We&apos;ll also look at what happens when the rules are broken, and finally, some real world examples of where I did (and didn’t) follow my own rules.\n\nThe following questions will be explored:\n- how many meetings is too many?\n- are fixed price contracts necessary and can they work?\n- how can you build trust in a supplier/customer relationship?\n- how much travel does there need to be?",
    level: 'Introductory and overview',
    tags: ['software methodology/process'],
    lengths: ['30 minute talk'],
  },
  {
    id: 134,
    title: 'Learning from our Serverless mistakes',
    description:
      'From zero experience to building two highly scalable Serverless systems on AWS in .NET  - I dive into the mistakes made and lessons learnt on our journey.',
    level: 'Introductory and overview',
    tags: ['architecture', 'devops', 'cloud', 'serverless'],
    lengths: ['30 minute talk', '15 minute lightning talk'],
  },
  {
    id: 135,
    title: 'Lambdas and streams in practice',
    description:
      'Starting with a brief overview of lambdas and streams, this talk aims to give an in-depth overview of the benefits they can bring to developers in practice. You’re probably familiar with the concept to some degree or other: introduced in Java 8, lambdas and streams were heralded as the revolution that would make Functional Programming practical in Java. But what benefits and pitfalls do they actually bring to developers? How do lambdas differ from anonymous classes? When and how can they improve legibility, maintainability and performance and what pitfalls lurk behind the alluring syntax? When can we use parallel streams to greatest effect, and when are they detrimental? And faced with a panoply of subtly different functional interfaces and associated API calls, not to mention the option of rolling our own, what tips and rules of thumb can help us see the wood for the trees?\n\nThis talk aims to provide concise and pragmatic pointers to those relatively new to the topic, whilst offering some more advanced performance and maintainability guidance for more experienced developers. The talk focuses specifically on Java, but some of the material is likely to be transferrable to other languages.',
    level: 'Intermediate',
    tags: [
      'architecture',
      'performance',
      'language specific',
      'java',
      'serverless',
    ],
    lengths: ['60 minute talk'],
  },
  {
    id: 136,
    title: 'Improving System Resiliency via Chaos Engineering',
    description:
      "Advances in Cloud technology means systems are becoming increasingly more distributed and complex. Large monoliths are being split up into microservices, we&apos;re depending on more remote services and Functions as a Service (FaaS)/Serverless are becoming increasingly common. The very nature of distributed systems mean they&apos;re far more prone to failures than similarly-scoped monoliths; this makes predicting or preventing possible failure modes increasingly more difficult.\n\nIn this talk we&apos;ll look at how we can harness Chaos Engineering, a discipline pioneered by Netflix, to better understand our systems, their failure modes and how we can use this information to improve system overall resiliency and reliability.",
    level: 'Intermediate',
    tags: ['architecture', 'software methodology/process'],
    lengths: ['60 minute talk'],
  },
  {
    id: 137,
    title:
      'Monitoring your Microservics and Infrastructure in a Cloud Native world using Prometheus',
    description:
      "So you&apos;ve deployed your microservices and infrastructure changes, but how do you know they&apos;re functioning as expected? How do you know they&apos;re not causing your users pain?\n\nSince its initial inception in 2012, Prometheus has quickly established itself as the canonical monitoring and alerting tool within the Cloud Native space.\n\nIn this talk we&apos;ll take a hands on approach to monitoring a whole range of applications and services, including:\n\n.NET Core applications\nDocker containers\nDatabases\nEven GitHub repositories and other external APIs",
    level: 'Introductory and overview',
    tags: ['cloud', 'monitoring', 'observability', 'microservices'],
    lengths: ['60 minute talk'],
  },
  {
    id: 138,
    title: 'The State of Resiliency Engineering in Software Systems',
    description:
      "People often believe patterns such as circuit breakers, timeouts and bulkheads to be synonymous with resiliency engineering. Whilst part of the picture, resiliency engineering is a large interesting field that&apos;s slowly changing the way we build software.\n\nIn this talk we&apos;ll look at the current state of affairs of resiliency in the software field and look how pioneering organisations such as Netflix are leaning on the Resiliency Engineering principles and practises to improve greater system robustness and resiliency.",
    level: 'Introductory and overview',
    tags: ['software methodology/process', 'cross discipline'],
    lengths: ['60 minute talk'],
  },
];

export default talks;
