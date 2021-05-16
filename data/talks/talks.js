const talks = [
  {
    "id": 1,
    "title": "What does the 'Coach' in 'Quality Coach' mean?",
    "description": "“Quality Coach” seems to be a role that is becoming more prominent in orgs and teams across the globe. It’s something that many testers have naturally evolved into or aspire to become. \n\nThese days, many Testers seem to have a decent enough grasp on the “Quality” part of the job title. These days, most Testers understand that testing is more than test cases, that automation does not solve all problems, that having some technical skills & appreciation augments their work, that testing can occur before a product is built and after it has been released in production and so on & so on.\n\nBeing able to ship products of high enough quality is not just a matter of following instructions. It takes people, working together, in uncertain conditions to achieve the goal. Let’s break that down:\n\nPeople - Which means relationships, emotions, value systems, personal goals, skills thoughts, ideas and probably a whole lot more!\nUncertain conditions - What do we know? What do we know we don’t know? What do we need to know? Do we perceive the situation in the same way? Is there a common cause? How is disagreement handled? What about conflict?\n\nThat’s where the “Coach” part of the title comes in.\n\nCoaching can help overcome these challenges by supporting individuals, groups, teams and organisations to understand themselves and their work from new perspectives. It’s not “just soft skills” either! Coaching is a thought-provoking and creative process that inspires\npeople to maximize their personal and professional potential.\n\nIn this talk I will talk about what the work of a professional coach looks like and how it might manifest itself in the Quality Coach role.",
    "level": "Introductory and overview",
    "tags": [
      "coreskills/softskills",
      "testing",
      "leadership"
    ],
    "lengths": [
      "30 minute talk",
      "60 minute talk"
    ]
  },
  {
    "id": 2,
    "title": "Design Patterns Using Azure Service Bus",
    "description": "Azure Service Bus is a message broker, but it's a lot more than that - there's a lot of features that you may not be aware of.  There are a set of problems that people face over and over, and solve in the same way - basically design patterns, but in Azure Service Bus.\n\nIn this talk, we'll discuss some patterns that you may be able to use in a Service Bus implementation that you currently have: we'll talk about concepts such as handling failure, implementing a chain of responsibility pattern, and how you can use Service Bus to act as a middleware in-between an API call.\n",
    "level": "Intermediate",
    "tags": [
      "cloud"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 3,
    "title": "The Wheels on The Bus - Azure Service Bus - 0 to 60 in Under an Hour",
    "description": "Message brokers are everywhere these days: if you're working in any kind of enterprise development then you've probably used one recently. However, the theory behind this technology is not new. In the talk, we'll start from first principles: what problems are we trying to solve, and why is this a good solution (or when is it not), and how does all this fit in with Microservices.\n\nThe number of options available today if you're choosing a message broker are staggering, but we'll then talk about Azure Service Bus specifically, showing how we can set-up a brand new service bus instance, and interface with it in C# in only a few lines of code.\n\nFinally, we'll have a look at the problem of getting a reply from your message, and see how this can change the way that we write service calls in applications.\n",
    "level": "Introductory and overview",
    "tags": [
      "cloud",
      ".net"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 4,
    "title": "Deep Dive into Azure Service Bus",
    "description": "After you set-up Azure Service Bus, and you've familiarised yourself with what a queue and a topic is, you'll notice that there'll a dizzying array of extra features.  In this talk we'll discuss some of these additional features.\n \nOnce we're familiar with the concepts of features such as: scheduled and deferred messages, sessions, auto forwarding, auto delete, batching, and transactions, we'll see some code samples using a C# client, and discuss some real life use cases for these features.\n",
    "level": "Intermediate",
    "tags": [
      "cloud",
      ".net"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 5,
    "title": "The [SourceCode] Generation Game",
    "description": "Source code generation has been a big part of my programming career and with C# Source Generators having arrived in .NET 5, it looks like it is going to become even bigger.\n\nWhilst there is a lot of excitement around Source Generators in .NET 5, this talk presents an overview of source code generation, how it has played out over the last 20 years of .NET and, where it is going in the future.\n\nThis talk will cover the following:\n\n* Why do we want or need source code generators?\n* A short history of source code generation in .NET.\n* Metadata and Templates\n* How Object Relational Mappers fit into the picture.\n* Generating API clients past, present, and future.\n* Source code generation vs IL weaving.\n* The introduction of Source Generators in .NET 5.\n* Pain vs Gain - Debugging source generators and the code they generate.\n* What’s new in source code generation in .NET 6.\n* Computer – make it so” … machine learning and code generation.\n",
    "level": "Introductory and overview",
    "tags": [
      "language specific",
      "software methodology/process",
      "architecture",
      "maintenance",
      ".net",
      "languages"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 6,
    "title": "A Few Tricks and Tips for the .NET DI Container",
    "description": "In this talk I present a handful of techniques to optimise your use of the .NET Dependency Injection container\n\n* Avoiding unintended multiple registrations\n* Registering one class with multiple interfaces\n* Registering multiple classes for a single interface \n* Registering functions without an interface or class\n* Creating named or keyed dependencies\n* Simulating property injection",
    "level": "Intermediate",
    "tags": [
      "software methodology/process",
      "architecture",
      ".net",
      "languages"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 7,
    "title": "Adding accessibility to the development process",
    "description": "As developers, we recognise that accessibility and inclusion should be at the heart of what we develop. We also know that we need to create and test that our solutions are accessible as soon as we can. As with everything in development detecting issues nearer to the development process saves time, and therefore budget, than detecting them at go live.\n\nIn this session, we explore how Visual Studio can be used for accessibility checking, and I will share my journey with adding accessibility checking into the Azure DevOps Pipeline.",
    "level": "Introductory and overview",
    "tags": [
      "accessibility",
      "devops",
      "automated testing",
      "testing"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 8,
    "title": "Accessibility - A .NET Developers perspective",
    "description": "In this talk I will explore and demonstrate why accessibility is important for consumers and users; why the whole development team should consider accessibility and inclusion. I will also share some tips and also demo tools that will aid in accessibility testing.",
    "level": "Introductory and overview",
    "tags": [
      "accessibility",
      "testing",
      ".net",
      "automated testing"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 9,
    "title": "Building next generation web apps with Blazor",
    "description": "The widespread adoption of WebAssembly, by all major browsers, has opened the world of front-end development to languages other than JavaScript. The platform leading the charge is Blazor - a new client-side UI framework from the Microsoft ASP.NET team. Blazor allows developers to write client-side applications using C# which runs inside the browser without needing plugins or transpilation - how cool is that!\n\nIn this code-focused session, we'll explore the Blazor platform. Starting with the fundamentals, we'll look at how to organise our applications for better maintainability. Then we'll look at how to handle user input using forms and validation. We'll then explore some more advanced topics such as JavaScript interop and authentication and authorisation.",
    "level": "Intermediate",
    "tags": [
      "ui",
      ".net"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 10,
    "title": "Building a Robot Arm with .NET 5, Raspberry Pi, Blazor and SignalR",
    "description": "In this session I'll take you through everything you need to build a robot arm with a Raspberry Pi, .NET 5 a Blazor App and SignalR.\n\nWe'll begin by seeing how easy it is to install .NET 5. \n\nThen we'll see how we've connected up the various components to our Raspberry Pi.\n\nNext we'll spin up a console application to explore how we can control the GPIO on the Pi.\n\nWe'll then examine the code to start moving the connected servos for our Raspberry pi based Robot Arm.\n\nWe'll then look at a simple Blazor and SignalR app to control the robot remotely.\n\nFinally we'll look at some other technology to interact with the robot including the Uno Platform and a VR App with Unity!\n\nThis session will appeal to all knowledge levels. A working knowledge of programming will help, but all the code will be shared on GitHub!",
    "level": "Intermediate",
    "tags": [
      "iot",
      "hardware",
      "ar/vr",
      "unity",
      "demo",
      ".net",
      "languages"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 11,
    "title": "WSL2: Past, Present & Future",
    "description": "Windows Subsystem for Linux is not something new, but it is still relatively unheard of among a lot of people that I talk to. We will go on a journey starting with the origins of WSL, through to the current state of WSL and WSL2, before finishing with what is yet to come.\n\nThere will be lots of hands on demos and code examples for you to get your teeth into. These demos will help to show anyone who is yet to come across WSL and WSL2 just how powerful it really is.",
    "level": "Introductory and overview",
    "tags": [
      "demo",
      "testing"
    ],
    "lengths": [
      "30 minute talk",
      "60 minute talk"
    ]
  },
  {
    "id": 12,
    "title": "Open Banking vs. DeFi; The technological future of finance?",
    "description": "Crypto Currencies. Open API's. Democratising FInance. Which approach to Open Finance will ultimately succeed and what does that mean for technology in the future.",
    "level": "Intermediate",
    "tags": [
      "blockchain",
      "leadership",
      "api"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 13,
    "title": "Could CyberSecurity be for You?",
    "description": "Explore the world of cybersecurity. I'll share the basics around:\n- why security matters\n- where security fits in the Software Development Life Cycle\n- the job market for cybersecurity professionals\n- some roles you can have as a cybersecurity professional\n- how you can start engaging with cybersecurity as a developer/software engineer",
    "level": "Introductory and overview",
    "tags": [
      "security",
      "devsecops",
      "secops"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 14,
    "title": "Nitty-Gitty: Master Git from the Inside",
    "description": "You already use git, but you're still scared of it? Is git more a set of spells than a tool to you?\nLearn in this live demo how git works from the inside and reason all your git problems away.",
    "level": "Intermediate",
    "tags": [
      "cross discipline"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 15,
    "title": "Domain Name S...omething?",
    "description": "DNS? CNAME? You want A Record, which record? \nIf all this is confusing to you, come explore with me the journey of a URL, and see how all these pieces fit together. ",
    "level": "Introductory and overview",
    "tags": [
      "devsecops",
      "devops"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 16,
    "title": "Should you write UI tests?",
    "description": "UI testing is a point of conflict amongst app developers. When asked in a recent poll on whether app devs write them, over half don't! \n\nWe all understand the importance of writing great unit tests for your APIs so why should your UI not benefit from the same care?\n\nThis session will explore the benefits of writing UI tests. We'll show you how to get started with UI testing with Selenium and C#. Plus, a look at how you can make your UI testing process maintainable with speed with code re-use. ",
    "level": "Introductory and overview",
    "tags": [
      "ui",
      "automated testing",
      "testing",
      ".net",
      "languages"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 17,
    "title": "Mental Health: Its Time to Talk",
    "description": "Mental health affects us all, albeit at varying levels of intensity, be it from having a restless nights sleep or Bi-Polar Disorder and is still a subject that we tend to approach with caution, if we even speak about it at all, whether with our colleagues and managers, doctors and even our closest friends and family.\n\nStarting talking about our mental health is often hard, but it is one of the most powerful tools in your arsenal to managing your own and your team's mental health and should be discussed in all 1:1s.\n\nCome and gain an insight into some of the things to look out for as preliminary signs that your colleagues, friends, family and perhaps, most importantly, yourself may be suffering, plus how to broach this all-important conversation.",
    "level": "Introductory and overview",
    "tags": [
      "mental health",
      "coreskills/softskills"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 18,
    "title": "Using Azure as a Platform for good - The story behind mhasl.me",
    "description": "In this session I will cover the technical background of a new site that I have developed for sharing stories related to many different aspects of Mental Health and how it is something that affects someone just like you or me\n\nIn this session I will cover\nArchitectural decisions and why I made the decisions I made\nThe Technicals behind the site and the components used as part of the building, maintaining and development of the site, from Azure DevOps to Azure Resources and how I built a repeatable deployment of the Resources that made the site a possibility from the get go \nSecurity Decisions that I made along the way and why I chose them \nLessons learned along the way \nAnd lastly why I think this is a topic that in tech we need to talk more about",
    "level": "Introductory and overview",
    "tags": [
      "cloud",
      "architecture",
      "change management",
      "devops"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 19,
    "title": "Making Operational Azure Management a breeze.",
    "description": "Have you just started using the cloud? Perhaps you've been using it for a while and have experienced the dreaded resource sprawls or a huge bill at the end of the month.\n\nThe aim of this session is to showcase the all of the components available that allow organisations to embrace power of the cloud once they have invested time in laying down the key foundations for it's use.\n\nLaying this operational governance foundation will ensure that your development team can then work in an agile way whilst enforcing that they work in accordance with all the governance, compliance & security, whilst ensuring that cost management, resource management and other cloud management aspects are implicitly adhered to as well giving your operations teams fewer headaches",
    "level": "Introductory and overview",
    "tags": [
      "cloud",
      "management",
      "devops",
      "operations"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 20,
    "title": "Tales from the field, building the.geekbook.club",
    "description": "In this session I will cover the technical background of a new site that I have developed for sharing and finding book reviews.\n\nIn this session I will cover\nArchitecture \nDevelopment process\nSecurity Decisions that I made along the way and why I chose them\nLessons learned along the way\nHow you can get involved\n\nAnd lastly why I think we all need to take a little bit of time away from screens and get stuck into a good book every so often\n",
    "level": "Advanced",
    "tags": [
      "cloud",
      "software methodology/process",
      "architecture"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 21,
    "title": ".NET Core Data Security : Hope is not a Strategy",
    "description": "Not encrypting your data is a risky move and just relying on the hope that you won't get hacked and compromised is not a strategy.\n\nAs a software developer, you have a duty to your employer to secure and protect their data. In this talk, you will learn how to use the .NET Framework to protect your data to satisfy confidentiality, integrity, non-repudiation, and authentication.\n\nThis talk covers random number generation, hashing, authenticated hashing, and password-based key derivation functions. The talk also covers both symmetric and asymmetric encryption using DES, Triple DES, AES (ECB and GCM), and RSA. You then learn how to combine these all together to produce a hybrid encryption scheme which includes AES, RSA, HMACS, and Digital Signatures.\n",
    "level": "Intermediate",
    "tags": [
      "security",
      ".net",
      "languages"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 22,
    "title": "Fighting Back Against a Distracted World - Increasing your Focus and Self-motivation",
    "description": "We live in an age of technical wonder with the internet, high-end games, and streaming service all vying for our attention. We have never had so many significant innovations available at our fingertips, accessible 24 by 7. There is a big problem, though. With all these systems, we are becoming increasingly distracted, making it hard to focus on issues for an extended period. If left unchecked, this can affect our work, careers, and self-confidence. We need to be able to break this cycle from throwing us into a spiral of distraction while still being able to enjoy all these innovations.\n\nWhen I first went self-employed, I thought I had the ultimate freedom to do what I wanted, when I wanted. To a degree, I did, but I didn’t have anyone looking over me, holding me to account. I started to become distracted. After I while, I decided things had to change. I started on a quest to become more productive, focused, and increase my motivation; while still enjoy the occasional Netflix binge.\n\nIn this talk, I want to share my story of personal distraction, low motivation, and increased project anxiety. I will share how I broke this cycle and got my creative and productive mojo back.\n\nThis talk is aimed at anyone that strives to be more productive but struggles with distractions daily. In the talk, I will cover subjects such as\n\n- Distraction and procrastination\n- Finding meaning in your work\n- Increasing self-motivation\n- Understanding your locus of control\n- Productivity and time management\n- Controlling social media addiction\n\nI consider myself now to be very productive, but it was a battle getting there. Let me share my story, in the hope that I can also help you be productive and confident.",
    "level": "Introductory and overview",
    "tags": [
      "coreskills/softskills"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 23,
    "title": "Hacking Humans : Social Engineering Techniques and How to Protect Against Them",
    "description": "Social engineering is one of the biggest threats to our organisations as attackers use manipulation techniques to coerce people into revealing secrets about our companies to allow attackers to gain access to critical systems.\n\nIn this talk we will look at some of the techniques used in social engineering and look at how to guard yourself against them. We will cover subjects like pre-texting, elicitation and body language as techniques for manipulating people.",
    "level": "Introductory and overview",
    "tags": [
      "security",
      "coreskills/softskills"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 24,
    "title": "The Path to Freedom - Taking your Side Projects Full Time",
    "description": "As developers, it is very common for us to have side projects that we like to work on outside of our day jobs. It's part of the way we motivate ourselves, learn and grow as developers.\n \nFor some of us, we dream of taking our projects full time so that we can work for ourselves. For others, we want to work for ourselves as consultants. The one thing we have in common is that we want more freedom of our destiny, whether that is financial freedom, or to have the ability to pick and choose what we work on and when.\n \nTaking that first step to work for ourselves is both exciting and terrifying. I know, because I did it. I quit my full-time job to become a full-time Pluralsight Author, writer, and trainer. \n \nIn this workshop, I want to take you through the path to freedom and give lots of practical advice on what you can expect, what you need to do, and how you transition to complete work-based freedom.\n \nSome of the subjects I will talk about are:\n \n- The Pros and Cons of working for yourself\n- When NOT to work for your self\n- Active vs Passive Income\n- Defining your income strategy\n- Preparation before quitting your job\n- Finances and cost control\n- What to charge for your products or services\n- Productivity, procrastination, and Focus\n- The working environment and loneliness\n \nNo matter whether you want to work for yourself now, or you aspire to sometime in the future, let me share my experiences and guide you through the process of becoming a self-employed independent worker.",
    "level": "Introductory and overview",
    "tags": [
      "coreskills/softskills",
      "management"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 25,
    "title": "What do you mean by “is”?",
    "description": "A discussion on what \"state\" means in a distributed/microservices architecture with some thought experiments to explain the problems.",
    "level": "Introductory and overview",
    "tags": [
      "performance"
    ],
    "lengths": [
      "15 minute lightning talk"
    ]
  },
  {
    "id": 26,
    "title": "How to ruin kid's games with machine learning",
    "description": "Winter lockdown with a small child has meant one thing in our house - trains. We have a huge amount of Brio (that magnetic wooden train set you used to play with in the Early Learning Centre) and every day means a new track taking over our living room. Train tracks designed by a 4yo can be quite random and not very satisfying to actually play with - lines that disappear under the sofa, bridges to nowhere and surprise turntables in the middle of a track.\nSo I started to build my own tracks (when he was asleep, to prevent ‘helping’), but it was pretty labour-intensive and it turns out I prefer to spend my evenings doing… well almost anything else. So instead I developed an algorithm to generate tracks and then trained a 4yo-opinion-based ML model to determine whether the tracks were ‘fun’ or not.\n\nThis is the story of how I learned that ‘developing an algorithm’ is not as easy as it sounds, and that ‘fun’ has different meanings depending on whether you are 4, 34 or a computer.",
    "level": "Introductory and overview",
    "tags": [
      "machine learning",
      "demo"
    ],
    "lengths": [
      "60 minute talk",
      "30 minute talk"
    ]
  },
  {
    "id": 27,
    "title": "Functional Programming with C#",
    "description": "Functional Programming is becoming increasingly popular and relevant with each year that goes by.  With so much discussion around languages such as F#, Haskell and Erlang, it can seem as though getting started with Functional programming would mean first learning a whole new syntax...but what if it didn't?\n\nMost .NET developers are familiar with the use of Linq, and basic constructs such as IEnumerable, Func delegates, arrow functions and ternary expressions, but did you know that you can use all of this to implement some of the most powerful patterns and techniques from the world of functional programming?\n\nThis talk will demonstrate how, using only familiar features available in out-of-the-box C#, to write Functional code that is:\n\n* More robust\n* Easier to read\n* Easier to maintain\n\nAs well as these benefits, Functional code is a great enabler for the use of concurrency with Async functions and Serverless applications with technologies such as Azure Functions.  \n\nThis talk might be of interest to anyone looking into moving to a new platform, or in improving the scalability of an existing application, or even just interested in seeing what Functional Programming is all about, but all within the comfort of a familiar language.  \n\nWe might even attempt the impossible, and explain what a Monad is!",
    "level": "Intermediate",
    "tags": [
      "software methodology/process",
      "languages",
      ".net"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 28,
    "title": "Pride & Prejudice & C#",
    "description": "Who doesn't like Jane Austen?  She's kick-arse and awesome.  The only problem though, is that she didn't write a great deal.  Just 6  (ish) books?  Not enough!  In this talk I'm going to show how, with a bit of C#, some relatively simple maths, and a bit of Blue-Peter-Style creativity, we can automatically generate as much Jane Austen as anyone in their right mind would ever want.  I might even show you how this is useful in your day job as well!",
    "level": "Intermediate",
    "tags": [
      "machine learning",
      ".net",
      "languages"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 29,
    "title": "SOLID Principles in 5 Nightmares",
    "description": "The 5 SOLID principles - popularised by \"Uncle\" Bob Martin in some of his highly influential books on Object Orientated Software development - are rarely cited directly but they are nevertheless at the heart of a lot of the thinking that goes into modern software development.\n\nThese principles have been around in some form or other ever since the 1980s, but continue to be just as relevant today as they were then.\n\nIn this talk, we're going to look at each of the 5 SOLID principles, these being:\n\n* Single Dependency Principle\n* Open/Close Principle\n* Liskov Substitution Principle\n* Interface Segregation Principle\n* Dependency Inversion Principle\n\nSee what he did there with the names?\n\nWe'll look at each in turn, with the help of some slightly imaginative examples taken from a popular SF franchise.  What are they, what nightmare scenarios can occur if they aren't followed, and how they can subsequently be applied.",
    "level": "Introductory and overview",
    "tags": [
      "software methodology/process"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 30,
    "title": "Why is a Developer Nothing like an Enchilada?",
    "description": "In the IT industry we're surrounded all the time by all sorts of extraordinary words in our everyday working environment - but have you ever considered their origins?\n\nSome are, of course, entirely modern.  Some though date back to the middle ages, and some even to the ancient world!  \n\nIn this talk we'll look at the stories behind the words we use at work all the time, without even realising what they might actually mean.  \n\nOn our etymological travels, we'll find out how our work relates to 12th century Welsh monsters, a 6th century Persian mathematician and some very silly, singing Vikings.\n\nWe'll answer questions such as: What are Geeks and Nerds really?  What is a C and how can it be sharp?  Was a Firewall ever actually made of fire?  What were bytes taken out of?\n\nAbove all, as the title suggests - Why is a Developer Nothing like an Enchilada?*\n\nAll these questions and more will be answered.  You aren't going to go away better at your job, but hopefully you'll gain an appreciation for computer terminology and how it fits into the larger history of the English language\n\n\n* Be warned - the answer is not as interesting as the question!",
    "level": "Introductory and overview",
    "tags": [
      "languages"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 31,
    "title": "I approve this talk! Creating a slack app in .NET",
    "description": "With so many of us using collaboration tools in remote environments there's a regular need to get more automation out of the tools we use.\nWith the help of some open source packages I've built we'll build a Slack App using .NET Core and create a custom approval process - showing how to communicate with users and add your own logic to this popular collaboration tool.",
    "level": "Intermediate",
    "tags": [
      "cloud",
      "languages",
      ".net"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 32,
    "title": "Beyond \"Hello World\" - Better Projects for learning a new Programming Languages",
    "description": "When it comes to tech, I feel most of us learn by doing.  Talks, Youtube videos, books - these are all good - but fundamentally it's not until we've got our hands dirty, so to speak, that we really know a new programming language.\n\nThere's a tradition of writing \"hello world\" as your first application.  This is almost as old as the Software Developer career path, but honest it's not much of an achievement, and you'll still find you don't know what you're doing to your own satisfaction.\n\nIn this talk, I'm going to propose all sorts of simple projects you can try as an alternative to Hello World that'll really give you a better feel for whichever language you've chosen to learn.\n\nI'll look into:\n\n* Games.  There are all sorts of simple, but nevertheless interesting, games you can design without needing to worry much about learning a graphics library you're less likely to use in your private life.  \n\n* Projects.  Silly, yet interesting projects you can develop & maybe even show off a bit once they're working\n\n* Art.  Create some interesting artistic effects without spending too much time.\n\n* Community challenges.  Look a the various coding challenges that are to be found all over the internet.\n\nThis talk will be entirely language independent.  It's for anyone that's keen to learn, but wants a few ideas for direction.",
    "level": "Introductory and overview",
    "tags": [
      "coreskills/softskills"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 33,
    "title": "Blazor, GraphQL and a headless CMS",
    "description": "Blazor is one of the most exciting technology at the moment. In my talk I introduce Blazor, GraphQL and Umbraco Heartcore, the headless offering of Umbraco CMS. I will explain the basic concepts and show you how you can create a SIngle Page Application using Blazor and integrate it with a CMS using the GraphQL API from Umbraco Heartcore.",
    "level": "Intermediate",
    "tags": [
      "web",
      ".net",
      "languages",
      "api"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 34,
    "title": "GraphQL in .Net Core",
    "description": "GraphQL is a cool kid on the block. It's a term that is gaining traction these days and the tech stack is getting quite popular. In this session, Poornima will introduce GraphQL as a concept. From there on, we will look at how we can create a GraphQL service and consume that GraphQL service in a Blazor App",
    "level": "Intermediate",
    "tags": [
      "web",
      "api",
      "languages"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 35,
    "title": "REST, GraphQL and gRPC : A Comparison",
    "description": "Be it any industry, applications need to talk to each other. So, developers often build bridges – Application Programming Interfaces (API) – to allow one system to communicate to another. \n\nOver time, different API architectural styles have been released. Each of them has its own characteristics, patterns of data exchange, pros, and cons. REST, GraphQL and gRPC are three main options when it comes to API development and implementation In my session  I will cover what REST, GraphQL, and gRPC are, how APIs can be implemented using each of these, and give you a comparison between them.\n",
    "level": "Intermediate",
    "tags": [
      "web",
      "api"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 36,
    "title": "Resilience Engineering - the next step for DevOps?",
    "description": "Resilience Engineering (RE) is a field of cross-disciplinary applied research that focusses on complex sociotechnical systems and how they detect, respond and adapt to change and failures. This talk looks at what RE is (and why that can be controversial), and how you can apply some of the principles in your organisations.",
    "level": "Intermediate",
    "tags": [
      "devsecops",
      "secops",
      "management",
      "leadership",
      "cross discipline",
      "devops",
      "observability",
      "monitoring",
      "performance",
      "change management",
      "maintenance",
      "infrastructure",
      "operations",
      "software methodology/process",
      "coreskills/softskills"
    ],
    "lengths": [
      "60 minute talk",
      "30 minute talk"
    ]
  },
  {
    "id": 37,
    "title": "Design for Developers",
    "description": "Have you ever found yourself not just having to build the product, but in the absence of an actual designer, you’re the one who ends up having to throw together a design for it too? Want to gain the magic design powers to transform that average screen into a beautiful interface?\n\nPeople have often told me they’d never be able to design interfaces because it’s too subjective and a completely different mindset to coding. Well I’m here to tell you that UI design isn’t as complex as it looks when you’ve got the right tools to hand – and it really isn't a magical dark art, I promise!\n\nIn this talk, I will help you understand some of the main design principles that you can apply across UI design. Such as Typography, Emphasis, Hierarchy, Layout, Spacing, Size, Depth and Colour.\n\nWe’ll be discussing these principles and, through visual demonstrations and examples, show how you can implement these principles across typical UI components such as forms, cards, dashboards and other interface elements . There may even be some *live designing* to help demonstrate.\n\nWhether you’re the ‘dev-signer’ or you’re just somebody who would like to learn some fundamental design skills to widen your knowledge – you should then leave feeling well equipped with new design skills to apply day to day!",
    "level": "Intermediate",
    "tags": [
      "design",
      "ux",
      "ui",
      "web"
    ],
    "lengths": [
      "60 minute talk",
      "30 minute talk"
    ]
  },
  {
    "id": 38,
    "title": "Getting Started with Unity and AR/VR for the .NET Developer",
    "description": "We all see the cool demos of how augmented and virtual reality are going to be the future of our interaction with devices, but it often feels like there’s a significant barrier to getting started in building these types of apps.\n\nThis session is here to help. If you’ve ever thought about developing for Oculus Quest/Rift S, HTC VIVE or the Windows Mixed Reality headsets, but haven’t known where to start, this is the session for you.\n\nAt DDD, I will present what I learned building a small game, set in a mysterious dungeon using Unity and the SteamVR/MRTK plugins. We'll explore how to import assets from the Unity store, how to implement locomotion techniques and interactions using the motion/touch controllers, including some tips for optimising performance and avoid motion sickness.\n\nCome along, there’ll be .NET code, demos and we’ll have some fun looking at how you can get started on your first VR/AR project.",
    "level": "Introductory and overview",
    "tags": [
      "ar/vr",
      ".net"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 39,
    "title": "Innovate with empathy",
    "description": "\nWhat if a deeper understanding of who your idea, service, product, or company serves is the innovative thing to do? What if your next level of growth is actually more reliant on what you don't know vs. what you do know?\n\nInnovate with Empathy is a dynamic talk that introduces the scalable power of Empathy Research. We'll help you shine a light on the hidden (and often unspoken) needs of your audience, target market, and stakeholders. But what's knowing without being able to do? We'll build on new understanding and introduce you to the world of Empathy Mapping, how to use it and what to do with the flood of new ideas, insights, and strategies it brings!\n\n",
    "level": "Introductory and overview",
    "tags": [
      "change management",
      "leadership",
      "design"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 40,
    "title": "Just go with the Flow",
    "description": "Page Object Model is a standard design pattern for UI automated test suites providing a good degree of maintainability against selectors on a page changing. However given the number of ways people can travel through an application can change we have found an additional layer of abstraction, managing these user journeys or flow, helps reduce the maintenance and speed up test case production",
    "level": "Introductory and overview",
    "tags": [
      "automated testing",
      "testing"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 41,
    "title": "The Spirit of Creativity and our Legacy to the World",
    "description": "We define creativity as “the tendency to generate or recognise ideas, alternatives, or possibilities that may be useful in solving problems, communicating with others, and entertaining ourselves and others”. The ability to be creative is one of the best gifts we have as a species, and technology boosts that ability with the myriad of tools available to us. \n\nUnfortunately, the pressures of everyday life, the bombardment of social media, and the influx of AI generated advertisement, do a magnificent job at squashing our ability to be creative and realise our potential.\n\nIn this talk, I want to talk about why creativity is important and how we can push back against everything that tries to stifle our ability to create.\n\n\nIn this talk I will touch on:\n\n- What is creativity and why is it important?\n- Why social media is affecting our ability to create and innovate.\n- The permanence of art , and why technology can be a hindrance, and not a help.\n- Recognising what you want your legacy to the world to be.\n- Productivity techniques to enable creativity and why they go against the grain of traditional productivity techniques.\n- Creating a home/work environment that is conducive to being creative.",
    "level": "Introductory and overview",
    "tags": [
      "coreskills/softskills"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 42,
    "title": "THE critical question(s) in a tech start-up's lifecycle",
    "description": "What is THE most important question to answer for a tech start-up?\nIs it the same for every tech startup? \nDoes it change over the course of a tech start-up's lifecycle? \n\nUsing a real-life case study, this talk will explore how THE critical question to answer for a tech start-up evolves as the company grows and progresses, and how THE critical question should be known and obsessed over by every single employee in the company.",
    "level": "Intermediate",
    "tags": [
      "coreskills/softskills",
      "leadership",
      "cross discipline",
      "management"
    ],
    "lengths": [
      "30 minute talk",
      "15 minute lightning talk"
    ]
  },
  {
    "id": 43,
    "title": "Delivering a Serverless architecture via DevOPS",
    "description": "For many solutions a fully serverless infrastructure can save you money but at the same time be highly scalable.  A discussion on the pro's on cons of a serverless architecture, when to use one and more importantly when not to.  The discussion will include a live demo building a 3 tier web application using serverless technologies.",
    "level": "Intermediate",
    "tags": [
      "devops",
      "architecture"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 44,
    "title": "Deploying Code to Auto Scaled Web Servers",
    "description": "This session will look at the different methods available to upgrade your live auto scaled web servers.  The discussion will cover golden Immutable and idempotence solutions",
    "level": "Intermediate",
    "tags": [
      "cloud",
      "devops",
      "infrastructure",
      "web"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 45,
    "title": "Designing the Unknown",
    "description": "Not your ordinary data migration project...\n\nWith only one chance to move all our data from a mysterious legacy system, to a rapidly evolving, untested in the wild 'new' system a team of four intrepid developers(ish) set out to build a foolproof migration pipeline under upredictable and challenging circumstances.\n\nThis is the stort of what we did and why, all the things we did right (and the many things we did wrong).",
    "level": "Introductory and overview",
    "tags": [
      "architecture"
    ],
    "lengths": [
      "60 minute talk",
      "30 minute talk"
    ]
  },
  {
    "id": 46,
    "title": "Communication stories",
    "description": "Communication is everywhere so yours better be good.\n\nCreating a value system that allows you effectively communicate on topics, within conversation and about your work is key.",
    "level": "Introductory and overview",
    "tags": [
      "design",
      "leadership"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 47,
    "title": "We Do Data - Building Modern Data Pipelines",
    "description": "As we know, data is the fuel powering modern businesses but how do we make sure that the fuel keeps flowing, and the pump is always primed?\n\nIn this session you will learn how we used Python, Google Cloud, Microsoft Azure and a SQL database to build a robust event-based data pipeline to power the data analytics for one of the UK's leading FinTech’s.\n\nAfter this session you will understand the possibilities open to you and have a framework to create your own version to enable near real time analytics in your own company.\n",
    "level": "Intermediate",
    "tags": [
      "big data",
      "devops",
      "cloud",
      "databases"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 48,
    "title": "A journey of Innovation",
    "description": "Innovation is important, but how do you go about applying it? I want to talk about a lightning bulb moment I had.  It connected the dots of innovation, the power of communities and helping other people.  \n\nIn this talk you will learn:\n*What innovation is and why it is important.\n*What design thinking is and the benefits of using it.\n* How you can create a culture of innovation.\n* Tips for getting started with innovating in your day to day.",
    "level": "Introductory and overview",
    "tags": [
      "testing",
      "design"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 49,
    "title": "Emotional Intelligence Leadership during a global pandemic",
    "description": "Emotional intelligence (otherwise known as emotional quotient or EQ) was popularised by Daniel Goleman in his book \"Emotional Intelligence, Why it can matter more than IQ.\" But what is emotional intelligence and why is it important for leaders?\n\nDuring this pandemic I have observed my own rollercoaster of emotions and the emotions of my team members.  I want to share my experiences of how I have a lead a team through this time and how improving my emotional intelligence had a positive knock on effect on my team.\n\nIn this talk I will explore the following by sharing my experiences of leading through a global pandemic:\n\n* What emotions there are by exploring the Emotion wheel.\n* The four basic components of emotional intelligence.\n* The benefits of having emotional intelligence as a leader.\n* Tips on how to improve your emotional intelligence.\n\n",
    "level": "Introductory and overview",
    "tags": [
      "leadership",
      "management"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 50,
    "title": "Testing from AI, XAI perspective",
    "description": "In this presentation we will present one of the most interesting topics now - Explainable AI (XAI) - an emerging field in machine learning that aims to address how black box decisions of AI systems are made.\n\n- Explainable AI: what is that and why we should be interested in it\n",
    "level": "Introductory and overview",
    "tags": [
      "artificial intelligence",
      "testing"
    ],
    "lengths": [
      "30 minute talk",
      "15 minute lightning talk"
    ]
  },
  {
    "id": 51,
    "title": ".NET on tiny IOT Meadow Boards.",
    "description": "It's a fact that DotNET has been around for 20 years and was once just the preserve of Windows, but has in recent years moved to Mobile using Mono and Xamarin, but still big powerful systems and processors.  \nHowever, thanks to the work of WildernessLabs there is now the Meadow F7 board, a small form factor IOT board based around the Adafruit Feather.  This means you can now write your Dot NET C#/F# code and truly run anywhere.\nThe idea of this talk is to show that your existing DotNET skills can be used on IOT platforms without the scary Arduino version of C, you really do now have the skills to write code that will run anywhere.\nI am just a DotNET dev like you, I don’t work for WildernessLabs and this is not going to be a sales talk about the Meadow system, I backed the Kickstarter and I just enjoy playing with IOT.  I want to show you that it’s scary and you too have the skills to diving in and get that LED blinking after that you can automate the home.\n\nWe'll discuss:\n-        The process of setting up the Meadow board and getting that first Hello World Blinky light going.  \n-        Brief explanation of the board and tooling\n-        Demo a more complex system where the board is battery powered measuring sensor values and reporting this to an Azure function for processing.\n\n\n",
    "level": "Introductory and overview",
    "tags": [
      "hardware",
      "iot",
      ".net",
      "languages"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 52,
    "title": "Xamarin File->New to on your Mobile device",
    "description": "Xamarin and Mobile apps may look and feel scary, how do I write C# code on my Windows/Mac machine to target a Mobile device from Apple or Android even the new Surface Neo/Duo?\n\nWhat special skills do I need and how can I get my code running on my phone?\n\nI have a killer idea that will take over the world, but I just don't know where to start?\n\nOur company wants an App rather than a mobile ready web page so that it works offline, we need access to the device hardware like the sensors, but we don’t know how?\nWe don’t want to build an IOS app then an Android App we want to build a Cross Platform application, but we are a DotNET shop?\n\nIf these are questions you have pondered, then we will take you from File->New to running app on your device.  \n\nAlong the way we will talk about the basics of a Xamarin Application and the development cycle including recent changes like Hot Reload and Hot Restart to speed up that cycle. \n\nWe will then finish with a look at AppCenter which is used to distribute your application to a test team so you can get that all important feedback on your killer idea.\n\nAttendees will learn about and complete the following:\n- How to install the required Visual Studio tools for Mobile development.\n- Introduction to Xamarin and the templates like Shell and Xamarin.Forms\n- Build out a working Application including the use of Xamarin Essentials to access the device hardware, for example the Accelerometer, GPS, Torch and Network stack.\n- Package and build the application locally so you can run on the emulator and your own connected Device.\n- Connecting your application via GitHub  to AppCenter so that the application is built in the cloud and pushed to your test team every time you commit.\n\nSkills and Equipment required:\n-        C# Skills to a beginner/Intermediate level\n-        Basic knowledge of XAML\n-        How to use GitHub tooling\n-        Pc/Mac for development work\n-        Mobile device Android or IOS\n",
    "level": "Intermediate",
    "tags": [
      "cloud",
      "mobile",
      "ios",
      "android",
      "ui",
      "ux",
      "devops",
      ".net"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 53,
    "title": "Building a Mobile Flight Simulator",
    "description": "Rebuilding the British Airways Mobile Flight simulator that is used to teach aviation STEM subjects to children or be a centre piece at a Corporate event.\n\nThe simulator is based on a Boeing 787 and is fitted into the back of a trailer that can be best descirbed as a burger van.  In here you enter the world of flight sitting next to a BA line pilot while you try and land a 200Tonne aircraft.\n\nIn building the simulator there is a lot of IOT for the controls and instruments as well as a bespoke Application written to enable the Instructor to be able to control the simulator.  This App can control where the Aircraft is, the weather and even throw in an emergency or two.\n\nIn this talk I will cover the details of the Simulator and how we built it as well as the Tech used, I will even show the DotNet code that went into the Instructors station.\n\nCome along and really get your geek on with Aviation, Code and IOT all in one talk.\n\nWalk away having learnt how to build your own simulator seen how you can control a simulated world from DotNet and a little IOT as well.",
    "level": "Introductory and overview",
    "tags": [
      "hardware",
      "iot",
      "mobile",
      "design",
      "gaming"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 54,
    "title": "3D printed Bionic Hand a little IOT and a Xamarin Mobile App",
    "description": "Description\nMeet Kayden, a local 15yr old young man and close family friend, who was born with no left forearm and hand. \nThe National Health Service (NHS) is an amazing service in the UK, however their prosthetic provision is both basic and expensive (to the NHS).\nSurely with modern technology we can not only improve the lives of young people like Kayden but also demonstrate how we can do it more cost effectively than current options.\nThis talk details how I set about building on the wonderful work of the OpenBionics team to provide Kayden with an alternative to the NHS prosthesis.\nWe'll discuss:\n\n- How 3D printing of parts for the hand can be much more effective (cost and function) than fibre glass moulds\n\n- Using home 3D printing we can create a viable articulated hand\n\n- Using off the shelf commodity IoT boards from Adafruit can be used to program the hand (and how this is more viable than alternative approaches) but more recently in the project moving to the new WildernessLabs F7 board so that the whole project in DotNet.\n\n- Creating a Xamarin application to connect via Bluetooth and provide customisation and control options for the hand and the challenges of UI design for those with accessibility issues.\n\n- How this option can reduce the costs from £000's to several hundred £s and is being done as an Open Source project which will hopefully lead to designs and kits being available for others around the world to build their own.\nAttendees will learn about and see demos of:\n\n- The 3D printed hand and related components\n- Programming of the IoT board and sensors (In DotNet and C#)\n- Creation of the Xamarin application to customise the hand.\n- Bluetooth connection options.\n\nPlease note: Kayden and his family have given express permission to use his name and images for this talk.\n",
    "level": "Introductory and overview",
    "tags": [
      "iot",
      "mobile",
      "3d modelling",
      "ios",
      "android",
      ".net"
    ],
    "lengths": [
      "60 minute talk",
      "30 minute talk"
    ]
  },
  {
    "id": 55,
    "title": "How to build a simple Marvel search engine using Blazor (in less than an hour)",
    "description": "Building for the web really ought to be fun. Nothing beats the feeling of seeing a feature spring to life in the browser.\n\nOn a good day, there's nothing you cannot do, no feature you cannot build, you can bend the browser to your will!\n\nThen there's those 'other' days; those days when endless problems, unexpected errors and framework gotchas stand between you and success.\n\nOn the one hand, you know what you want to build, roughly what it should look like and how you want it to respond to your users' actions.\n\nOn the other hand... CSS, javascript, NPM.\n\nWon't somebody please bring back the fun!\n\nWell fear not, your cries for help have been heard.\n\nBlazor is here to save the day and, with the help of their trusty sidekick, Tailwind CSS, will have you back up and running in no time.\n\nJoin me as we see just how quickly we can spin up a Blazor search engine (using the Marvel API). If we get this right, the search engine will work, humanity will be saved and we can all breathe a big sigh of relief.\n\nWhat happens if we fail? Well let's just hope we don't find out.",
    "level": "Introductory and overview",
    "tags": [
      "software methodology/process",
      "ux",
      "design",
      "languages"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 56,
    "title": "The Easy Road to Computer Vision",
    "description": "Okay, so you heard about all this amazing AI and machine learning, which is the latest thing, despite having been invented in the 1950s. You're embarking on your computer vision journey, but you don't have time to become an expert. You just want to be able to identify dogs, or cats, or citrus fruits or something. A great place to start is Azure Cognitive Services - you can get things moving in no time. But there's a snag; you need to have a network connection - not so great if you want to use it on the road. Oh, and Azure Cognitive Services isn't free. Duh. \n\nOf course you could run it in a container, but guess what; it still phones home to update its billing account. Looks like Microsoft thought this one through. So how can you run your object detection and image classification locally, without a network connection, and without having to keep topping up your Azure account? Let's take Azure Cognitive Services out for a spin, and build world-class custom vision models, then deploy them locally. Once we've stumped up for the initial training, it's going to be unlimited mileage.",
    "level": "Intermediate",
    "tags": [
      "artificial intelligence",
      "machine learning",
      "cloud",
      "mobile"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 57,
    "title": "Giving back to the Open Source community",
    "description": "How many of us have consumed something valuable from the Open Source community? How many of us can say we have given back to that community?\n\nThis talk is aimed at exploring ways in which we can give back to the wonderful efforts of the Open Source community.\n\nAre you willing to help out those tired maintainers?",
    "level": "Introductory and overview",
    "tags": [
      "cross discipline",
      "open source"
    ],
    "lengths": [
      "30 minute talk",
      "15 minute lightning talk"
    ]
  },
  {
    "id": 58,
    "title": "ESB - The Good Parts",
    "description": "In 2004 David Chappell wrote \"Enterprise Service Bus: Theory in Practice\".  In it, Chappell outlined the ESB architectural style and the problems it could solve for SOA architectures. ESBs were the high-water mark of SOA and many regard them as being the point that SOA 'jumped the shark'. In reaction Jim Webber created the Guerilla SOA movement which in turn created the \"Smart Endpoints and Dumb Pipes\" constraint of microservices. Microservices were pitched as a reaction to the excesses of SOA with ESB era.\n\nBut was it all bad? \n\nAs we work with microservices in the enterprise many of our architectural challenges remain those that Chappell described in his book. In this talk, I want to look at those \"good parts\" and review the patterns that Chappell provides for solving them with our current context.\n\nAt the end we will discuss the \"naughty parts\" of ESB and how we can avoid falling into the same trap with microservices.",
    "level": "Intermediate",
    "tags": [
      "architecture",
      "devops"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 59,
    "title": "Azure Functions: a guide to getting started",
    "description": "Working with an existing system and its architecture can be a challenge, especially when it comes to adopting newer technologies. What may originally have been an appropriate architecture, may not now easily accommodate these newer technologies\n\nDo we tackle the problem by refactoring our system, or do we need an overhaul?\n\nMore often than not, business critical features don't allow for a rewrite nor a rebuild, so we are faced with shoehorning new features  into the existing project using the older framework or architecture.\n\nThis is where serverless technologies, such as Azure Functions,  can come to the rescue.\n\nBy using Azure Functions you can create solutions using modern .NET/C# features without necessarily touching older parts of our existing software.\n\nIn this session I will show you how to build a service using Azure Functions. \n\nWe will use a variety of function triggers such as HTTP and Queue, combining them together into a self contained service that can co-exist with our existing  project.\n\nWe'll also cover security, developing functions locally, architecture and much more.\n",
    "level": "Introductory and overview",
    "tags": [
      "architecture",
      "devops",
      ".net"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 60,
    "title": "Identity and Blazor",
    "description": "Whenever I have to implement Identity into an application I groan inwardly. \n\nHowever, it is something I am always having to dom and I can guarantee most of you have had to do it too!\n\nIn this talk, we'll cover the different options for Identity with Blazor, both server and WASM, and the different considerations for each.\n",
    "level": "Intermediate",
    "tags": [
      "security",
      ".net",
      "languages"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 61,
    "title": "Get Rid of Your IAM Users: Federation in AWS through SSO & Okta",
    "description": "Taking Okta as a use case, we'll explore how federation can simplify, centralize, automate, and secure the identity and access management for all your AWS accounts, all at once.",
    "level": "Intermediate",
    "tags": [
      "security",
      "devsecops",
      "secops",
      "cloud"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 62,
    "title": "Everything You Need to Know About Configuration in .NET",
    "description": "We will delve into the intricate details of the new ways to configure .Net applications with ease and flexibility in mind.\n\nWe’ll take a look at why we need configuration in our application and the types of things that should be configurable. We will then dive into the great developer story that Microsoft has built for .NET to allow us to provide configuration at easily apply configuration in our applications. Starting with the minimal approach, we will explore scenarios where our configuration practices will take advantage of type safety focusing on the IOptions pattern. There are also lots of other scenarios that we’ll cover that you most likely have never touched such as user secrets and validation!\n",
    "level": "Intermediate",
    "tags": [
      "web",
      ".net"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 63,
    "title": "Good Writers Become Better Developers",
    "description": "Good writing might not be rocket science, but it is the secret ingredient in the recipe for a great developer. If you're already an experienced developer or a only just starting on the dev journey, by the end of this talk, you'll come to appreciate the similarities between the two mediums, and be ready to arm yourself with techniques that will help you improve your writing AND development skills.",
    "level": "Introductory and overview",
    "tags": [
      "coreskills/softskills",
      "cross discipline"
    ],
    "lengths": [
      "15 minute lightning talk",
      "30 minute talk"
    ]
  },
  {
    "id": 64,
    "title": "Testing your ASP.NET Core APIs",
    "description": "Testing is becoming one of the most essential skills for developers. We’re pushing quality to the forefront of software development so that we can have more stable builds and faster release cycles.\nIn this talk, we’ll cover how we can test our ASP.NET Core APIs function correctly at a level that includes the APIs supporting infrastructures, such as the database, file system, and network. We’ll go into the use of the in-memory test server which will host our APIs and how we can configure it for our test runs.\n",
    "level": "Intermediate",
    "tags": [
      "automated testing",
      "testing",
      ".net",
      "api"
    ],
    "lengths": [
      "30 minute talk",
      "60 minute talk"
    ]
  },
  {
    "id": 65,
    "title": "A more flexible way to store your data with MongoDB",
    "description": "If you've been anywhere near software development, the norm is to store your data in a relational form, but what if there was a different way?\n\nWe will take a look at the history of MongoDB and why it continues to be a trending database year on year. We will then go into the advantages of having a flexible document model and how we can utilize MongoDB for our application storage.",
    "level": "Introductory and overview",
    "tags": [
      "databases"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 66,
    "title": "Embracing Skynet - An exploration of GPT-3 and its potential applications",
    "description": "GPT-3 or Generative Pre-trained Transformer 3 (GPT-3) is an autoregressive language model that uses deep learning to produce human-like text. \n\nA few weeks ago, I was lucky enough to be accepted into the developer beta release of the pre-trained GPT-3 API and have been marvelling at the shockingly good performance of its generative capabilities. \n\nThis lightning talk should serve as a quick intro to the API itself (including a quick demo) and an exploration of some of the creative applications people have managed to find for this powerful technology so far.  ",
    "level": "Intermediate",
    "tags": [
      "demo",
      "machine learning"
    ],
    "lengths": [
      "15 minute lightning talk",
      "30 minute talk"
    ]
  },
  {
    "id": 67,
    "title": "Repeatable cloud infrastructure with Terraform",
    "description": "I once managed a farm of ~150 dedicated servers in various locations around the world, before Ansible and Chef were well known. It was completely manual. Small variations in the version of the operating system created issues when running shell scripts across the fleet in any autonomous way. Had I had the opportunity to use a better tool it would have made this job much easier.\n\nYou can encounter the same issue with cloud services today. You can create infrastructure manually using the management consoles provided or run the occasional CLI command but if your manager asked you to boot up a second environment it can quite quickly become a nightmare, and no doubt the configuration will be different to the original environment.\n\nYou could solve this by using something like CloudFormation or Azure Resource Manager, however the JSON & YAML formats provided can be confusing and almost unreadable for any sizable infrastructure. Additionally, you have to learn a new syntax for each cloud.\nEnter Terraform, a simple tool for creating reproducible, repeatable multi-cloud infrastructure.",
    "level": "Introductory and overview",
    "tags": [
      "devops",
      "cloud"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 68,
    "title": "Designing great software by designing great teams",
    "description": "Conway's law states that \"Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure\"\n\nYou may well have been faced with this challenge, but it also represents an opportunity.\n\nWhen we decide on the structure of our development organisations we are, in effect, designing our software. So how can we use our knowledge of great software design to create organisations that can build that great software?\n\nIn this talk I'll talk about how teams are structured, the pathways of communication, motivations, definitions of success and failure and our ongoing people management processes are ultimately reflected in the software we build, and how using this knowledge can lead to great places to work that build great software.",
    "level": "Introductory and overview",
    "tags": [
      "leadership",
      "coreskills/softskills",
      "management",
      "architecture"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 69,
    "title": "Up and running with Blazor - A whistle-stop tour of Blazor's component model",
    "description": "Building 'modern' web applications is all about components.\n\nDone 'right' components are a powerful way to take your UI design (or mockup), break it down into smaller pieces and get those pieces built (in a way which won't come back to haunt you in a few months).\n\nWhere javascript has leaned on components for years (with frameworks like React, Vue, and Angular all using them), ASP.NET has lagged behind... until now.\n\nBlazor comes with its own powerful and extensible component model, and it's turning out to be a really productive way to build web applications. \n\nIn this talk we'll explore the key parts of that component model, and see (with the help of a few examples) how Blazor helps you build entire applications, one simple component at a time.",
    "level": "Introductory and overview",
    "tags": [
      "software methodology/process",
      "ui",
      "ux",
      "languages",
      ".net"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 70,
    "title": "DevOps: The Good, The Bad and The Ugly",
    "description": "Cloud and DevOps is sold as the silver bullet for reliable, scalable architecture. \"Save money on infrastructure costs\" they say, \"more secure using our shared responsibility model\" they shout.\n\nNo one tells you the horror stories. \n\nThis talk will give you a warts and all overview of how we migrated over 100 enterprise applications to the cloud. You'll learn what we did well, what we didn't do so well and what we completely messed up! ",
    "level": "Introductory and overview",
    "tags": [
      "devsecops",
      "devops"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 71,
    "title": "Deploying to the cloud with Pulumi",
    "description": "Modern applications tend to be deployed to public clouds - whilst one can do this from a CLI or using the cloud's web portal the need to have automated, repeatable, deployments means we have to use CloudFormation or ARM and those are... not nice!\n\nThere is a better way - using Pulumi you can write your deployment using code in a language you understand (Go, Typescript, Python, or .NET) rather than as a wall of YAML or json. \n\nThis talk will show how to build a small \"stack\" of services using Pulumi and to deploy same to Azure and then to AWS - and aims to give you an understanding of what Pulumi is and why it is useful.\n",
    "level": "Introductory and overview",
    "tags": [
      "devops",
      "cloud"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 72,
    "title": "Serverless with Azure",
    "description": "The Serverless architectural style allows you to build event-based architecture that are scalable and cost-effective without having the operational overhead of managing servers. \n\nThis session will take you give you a brief overview of Serverless options within Azure  including :\n *  Serverless Patterns and Architectures\n*   the limitations of the different Azure Serverless options\n*   securing Serverless solutions\n*   economics of Serverless Solutions\n*   why we chose Serverless options over container orchestration options and what we conceded in that decision\n\n",
    "level": "Introductory and overview",
    "tags": [
      "cloud",
      "software methodology/process",
      "architecture"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 73,
    "title": "How I jilted Python at the alter and eloped with Go instead",
    "description": "Python is the poster child language of the moment but...\n\nA fifteen minute opinionated rant about programing and programming languages",
    "level": "Introductory and overview",
    "tags": [
      "cross discipline",
      "languages"
    ],
    "lengths": [
      "15 minute lightning talk"
    ]
  },
  {
    "id": 74,
    "title": "Bird spotting on a Raspberry Pi with IoT Hub and Cognitive services",
    "description": "In this session we'll explore writing .Net code and deploying on a Raspberry Pi, interfacing with the hardware and Azure IoT Hub in the cloud. In this fun and introductory session we will take pictures when motion is detected in front of the camera, upload them to Azure IoT hub and then trigger an azure function to interrogate Azure cognitive services for the contents of the picture. We will show how messages could be sent back to the raspberry pi to take actions based on what has been spotted.",
    "level": "Introductory and overview",
    "tags": [
      "iot",
      "machine learning",
      ".net"
    ],
    "lengths": [
      "30 minute talk",
      "60 minute talk",
      "15 minute lightning talk"
    ]
  },
  {
    "id": 75,
    "title": "A taste of observability with Honeycomb",
    "description": "I discovered proper logging relatively late in my career - pretty much just in time for the cloud and more distributed services to make tracing problems significantly more interesting.\n\nWhat we need now is \"Observability\" - whatever that may be.\n\nHoneycomb is a SaaS tool for observability so...\n\nI aim to introduce observability, suggest why you should care, and demonstrate wiring up a small application to honeycomb to see what happens",
    "level": "Introductory and overview",
    "tags": [
      "cloud",
      "devops",
      "observability"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 76,
    "title": "The Power of Working with Legacy Systems",
    "description": "Legacy Systems can sometimes come with a lot of baggage and if you’ve ever been tasked to work on one in your career you’ll know that sometimes it’s not always straightforward and can be a daunting experience. This talk will take you on a philosophical journey using Joseph Campbell’s Monomyth to describe what it can be like when working with Legacy Systems and how they can unlock the hero within all of us.",
    "level": "Introductory and overview",
    "tags": [
      "software methodology/process"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 77,
    "title": "The Curious Incident in your Software in the Day-Time",
    "description": "Your day was going so well, and then your cloud provider has just had a service outage, or you find a serious software bug that might be causing data loss or data leakage, or even worse, it's a full-on security breach.\n\nSo what do you do now?  How do handle your incident response?  What roles should people assume and when and what do you tell your colleagues and your customers?  And what do you do once it's all over?\n\nIt may never happen, but if it does you'll be glad you thought about it beforehand.",
    "level": "Introductory and overview",
    "tags": [
      "security",
      "coreskills/softskills",
      "leadership",
      "management"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 78,
    "title": "Give your CMS site a serverless supercharge",
    "description": "Leveraging the power of the cloud, serverless static websites (aka JAMstack) are much cheaper, faster and more secure than traditional sites.\n\nFind out why, learn how to get started, and get a practical demonstration of how to enhance a simple CMS site. We'll be using Azure Static Web Apps, Hugo and Wordpress with a dash of JavaScript and Azure Functions, but the same principles apply whatever technologies you choose.\n\nCome along on a journey to the future of the web!",
    "level": "Intermediate",
    "tags": [
      "cloud",
      "architecture"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 79,
    "title": "Onion Architecture with DDD and CQRS",
    "description": "Explaining how I reason about the building blocks of Onion Architecture, Domain-Driven Design and Command Query Responsibility Segregation in an event-driven micro-services architecture. How it all fits together in my head, the concepts they share, and the mistakes I've made along the way.\n\nExamples using modern C# but can be applied to other languages and frameworks.",
    "level": "Intermediate",
    "tags": [
      "architecture"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 80,
    "title": "Introduction to Microsoft Teams app development",
    "description": "Microsoft Teams is everywhere now. This session is an introduction to Teams app development. It will outline the different types of applications that can be developed for Teams and the approaches you can take.",
    "level": "Introductory and overview",
    "tags": [
      "cloud",
      "architecture"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 81,
    "title": "You don't need logging code",
    "description": "How Aspect-Oriented Programming and a fair bit of Reflection can remove the need for any log lines in your code, yet still provide valuable and consistent logs.\n\nOpinion on how log lines can indicate a mismatch between how a human breaks down a problem and how the code is structured.",
    "level": "Intermediate",
    "tags": [
      "languages",
      "architecture"
    ],
    "lengths": [
      "30 minute talk",
      "60 minute talk"
    ]
  },
  {
    "id": 82,
    "title": "A functional approach to client applications with MVU",
    "description": "The default pattern for client applications is currently MVVM, which can work really well.\n\nBut there is another way - we can take a function approach: Model, View, Update\n\nIn a code first session we'll build a vaguely useful application in F# talking about why I like both functional programming, and MVU as an approach",
    "level": "Introductory and overview",
    "tags": [
      "ui",
      "web"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 83,
    "title": "Magic Unit Tests with Auto-mocking",
    "description": "Tests are code too, and should follow the same principals. In this talk, I show you how to write neat and concise unit tests in C#, only setting up the things they care about, using AutoFixture, auto-mocking, FluentAssertions, customisations for your internal shared frameworks, custom assertions, and taking advantage of the type system.",
    "level": "Intermediate",
    "tags": [
      "testing",
      "languages",
      ".net"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 84,
    "title": "We need to talk about technical debt",
    "description": "I hate technical debt!\n\nTechnical debt is a popular metaphor used in most delivery teams. It’s a powerful way to describe complicated problems, convey the importance of building things right, and describes the cumulative effect of taking shortcuts. As engineers we all appreciate why preventing and paying down technical debt is important, but its often not something ‘the business’ really appreciates or seemingly cares about.\n\nMore and more we see the backlog sliced in 2 different sections, the first being the business value adding work, the second being the technical debt work. This is also accompanied with some kind of rule that says ‘we can spend 10% of our time on technical debt’. It always feels like technical debt is just ‘something the devs go on about’, and not something that adds business value.\n\nThis talk is to try to convince you to think about technical debt differently and eliminate it from your backlogs. To do this we’ll have to explore what ends up in the technical debt bucket, why its such a problem and what we can do about it. We’ll also talk about risk, the part it has to play and how it should be your best friend when managing complicated problem domains and systems. My goal is make risk exciting, useful and fundamental in what we do….which may sound crazy, but just stick with me!\n\nTechnical debt shouldn’t be something just the dev’s care about, its something everyone should care about.",
    "level": "Intermediate",
    "tags": [
      "software methodology/process",
      "management",
      "leadership"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 85,
    "title": "Food; Time poor techie's guide",
    "description": "Cooking as much as possible, healthy as possible, tasty as possible without spending the time in the kitchen!",
    "level": "Introductory and overview",
    "tags": [
      "coreskills/softskills"
    ],
    "lengths": [
      "15 minute lightning talk"
    ]
  },
  {
    "id": 86,
    "title": "Senior By Default",
    "description": "In June 2020 the team manager and tech lead both announced they were leaving the company, making me the most senior developer there. Overnight I went from a simple developer to leading a multi-disciplined team responsible for mission-critical business systems.\n \nIn this presentation, I will talk about my first year in charge, my triumphs, and my mistakes.  I will talk about the processes I implemented to keep myself sane and ensure the team I now lead continued to drive our software forward and serve business objectives. Along the way, I hope to impart some key lessons that I learned that may help anyone who is looking to move up to a senior position. \n \nThis is a talk for those looking to take on management or tech lead responsibilities and for any tech professionals who through no fault of their own have found themselves in a leadership position.  \n",
    "level": "Introductory and overview",
    "tags": [
      "coreskills/softskills",
      "software methodology/process",
      "management",
      "leadership",
      "change management"
    ],
    "lengths": [
      "30 minute talk",
      "15 minute lightning talk"
    ]
  },
  {
    "id": 87,
    "title": "Distributed Tracing in dotnet core using OpenTelemetry",
    "description": "Distributed Tracing has been around for a while, but was always quite niche, reserved for the Netflix and Amazon's of the world.  With your company likely looking more at Microservices as a path forward to scale and modernisation, you will almost certainly start to think about debugging and monitoring this in production.\n\nLuckily, there's a new(ish) project that is here to help, and provide familiar hooks into your applications to get the vital information you need.\n\nWe'll walk through what distributed tracing is, and then run through some examples of how to get started with it in your dotnet core applications.\n\nFinally, we'll demo a few different backends for storing and visualizing the data, Jaegar (OpenSource) and Honeycomb.io (Hosted)",
    "level": "Introductory and overview",
    "tags": [
      "observability"
    ],
    "lengths": [
      "30 minute talk"
    ]
  },
  {
    "id": 88,
    "title": "The Culture of DDD",
    "description": "As engineers, it is all too easy to get lost in the technical details of DDD. When integrating DDD into your workflow it is important to keep in mind the culture surrounding it.\n\nIn this talk I will be discussing what is meant by \"the culture of DDD\", and how to embed it into your ways of working to truly enable and realise the power of an effective domain design.",
    "level": "Introductory and overview",
    "tags": [
      "coreskills/softskills",
      "design",
      "architecture",
      "software methodology/process",
      "leadership"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 89,
    "title": "RegEx Is Your Friend",
    "description": "RegEx is scary. At least, if you ask Google, that's what you might think (257,000). And slow (441,000). In fact, regular expressions are neither of these, and indeed are a powerful tool in your utility belt.\n\nIn \"RegEx Is Your Friend\", We will look at some real-world usable examples of how RegEx can be used in a way that's fast, explaining how the different parts of regular expressions work and execute to make it understandable for all.\n\nNo matter if you don't know your '$' from your '^', you are not sure when to use RegEx (and when not to), or you just need to find a way to make your RegEx run faster, there will be useful help and tips for everyone.",
    "level": "Intermediate",
    "tags": [
      "cross-discipline",
      "web"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 90,
    "title": "\"We need a bigger boat\" - Introduction to application scaling",
    "description": "At one time or another, every developer comes across the same problem - their application starts getting slower, then starts falling over, then isn't available at all.\n\nOften, this comes down to too many users, too much stored data - in other words a scaling problem.\n\nLooking at a range of options, from horizontal and vertical scaling, to caching, sharding and optimisation, we will discuss approaches to scaling that can be used on new applications, and also some that can be retro-fitted to existing applications.",
    "level": "Introductory and overview",
    "tags": [
      "devops",
      "performance",
      "infrastructure"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 91,
    "title": "Why I !love the not operator",
    "description": "The more I think about the not operator, the more I find to dislike. I want to share with you this displeasure, so you can also learn to hate such a useful and ubiquitous tool.",
    "level": "Introductory and overview",
    "tags": [
      "languages"
    ],
    "lengths": [
      "15 minute lightning talk"
    ]
  },
  {
    "id": 92,
    "title": "Learning Machine Learning",
    "description": "Most companies collect data. This is a rich data source, and one that is often under-used. We know there should be ways of using this data to improve our products and to make our user's lives better - how and where to start, now that's a totally different question!\n\nIn this talk we will look at a real world experiment with machine learning to use 20 million historical purchases to prevent fraud in the future - different algorithms tried, (many) failed experiments, the situation today and ethical considerations in machine learning.",
    "level": "Introductory and overview",
    "tags": [
      "machine learning",
      "data analytics"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 93,
    "title": "Who will Index the Indexes? Performing an Index Audit",
    "description": "We've all been in this situation - a slow running query, compromising our application. A quick EXPLAIN and we realise - no index! A quick ALTER later and the world is good again.\n\nIndexes improve read performance, but what about writes? Every index means there is more work to do on every write - and if we're not careful rather than fix our performance issue, we've just moved it from one location to another.\n\nOver time the number of indexes is likely to grow - do you understand what all the indexes on your system are for, or even if they are still used? In this talk, we will look at how to perform an index audit on a production mySQL database, some of the common tools for doing so, and some of the potential pitfalls to watch out for.",
    "level": "Introductory and overview",
    "tags": [
      "devops",
      "databases"
    ],
    "lengths": [
      "60 minute talk"
    ]
  },
  {
    "id": 94,
    "title": "EventSourcing with CosmosDB Serverless",
    "description": "In this talk we'll walk through how to get a simple event sourcing strategy in place with Cosmos, Azure Functions and Azure API Management with a fully consumption/serverless model.\n\nEventSourcing is the strategy of storing your system's data as a stream of events, instead of a static representation of state.  This can seem like a complicated strategy, however it doesn't have to be that way.\n\nWith the introduction of serverless models for CosmosDb and Azure API Management, you can now have a fully serverless API layer using  EventSourcing that's both cost effective and globally resilient.\n\nWe'll cover some of the limitations of the approach, and some of the gotcha's with utilising the SQL Containers in Cosmos.",
    "level": "Intermediate",
    "tags": [
      "cloud",
      "architecture",
      ".net"
    ],
    "lengths": [
      "30 minute talk"
    ]
  }
];

export default talks;
