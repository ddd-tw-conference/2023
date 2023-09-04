// speakersData.js
const agendaData = [
  {
    id: 'room30201',
    name: '蒼時弦也',
    level: '入門',
    topic: '導入 Domain-Driven Design 的最佳時機',
    intro: '能用不同的角度思考 Domain-Driven Design 適用的情境，以及如何跟不同的體系、理論搭配應用。',
    content: '兩年前認識到 Domain-Driven Design 後就開始積極在不同的產品、專案上做嘗試，然而似乎沒有想像中的順利。',
    content2: '在經過一段時間的試驗後發現，不同階段的產品在應用 Domain-Driven Design 上也許需要做不同的調整，我將以一個剛接觸不久的工程師角度，結合自己的開發經驗來說明每個階段該思考的問題。',
    website: ''
  },
  {
    id: 'ol06',
    name: 'Arthur',
    level: '入門',
    topic: 'DDD戰術-柔型要術',
    intro: '在本次議程中，我將介紹DDD的戰術完整內容,會眾能夠在聽完議程後,了解幾個項目:',
    intro2: '1. DDD戰術Pattern的脈絡',
    intro3: '2. 柔性設計',
    content: 'DDD的戰術內容詳解,包含所有的戰術樣式以及柔性設計的應用。',
    website: 'https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215'
  },
  {
    id: 'room30204',
    name: 'Chris Simon',
    level: '進階',
    topic: 'When Customers Don\'t Share a Language',
    intro: 'An example of a strategic modelling journey, encouragement to commit to \'evolving order\' in both large and small scale structures and advice on how to do so.',
    content: 'In 2015 we launched an innovative new product into the Australian Fintech landscape - a healthcare & disability insurance claiming platform to simplify life for support providers, recipients and insurers.',
    content2: 'It was intended that a heterogeneous group of support providers and insurers would engage with the platform - from doctors to physiotherapists to disability support workers on one side, and private insurers & state or federal government departments on the other.',
    content3: 'Although the high level process for each of these groups was similar, the extant rules, terminology and UX scenarios varied.',
    content4: 'In this talk, we\'ll do a deep dive of the modelling journey we went on, starting with aligning the model with our first customer, evolving it with our second, and radically reinventing it with our third.',
    content5: 'We\'ll explore how the context map evolved from being aligned with user channels to being aligned with insurer subdomains and how we balanced the tradeoffs between specificity and genericness in the tactical pattern implementation within core domain contexts.'
  },
  {
    id: 'room20205',
    name: 'David Ko',
    level: '入門',
    topic: '如何利用 Example Mapping 來釐清需求',
    intro: '(1) 如何用 Example Mapping 列出範例',
    intro2: '(2) 有哪些方式可以輔助開立範例',
    intro3: '(3) 如何整合到開發流程中',
    content: '需求不清楚或是變動, 常常是專案失敗最主要的原因之一. 因此, 如果確認大家對需求有共同了解, 是專案經理, 開發人員, 系統分析師, 和測試人員為重要的功課.',
    content2: '在 DDD 中有個 Example Mapping, 他可以用來整理出需求可能的案例. 同樣在敏捷中的實例化需求 (Spec by Example)他們也利用 Example Mapping 來處理需求的範例',
    content3: '在這次的工作坊. 我們將讓你了解 用範例描述需求的重點為何. 有哪些開發範例的方式可以使用, 以及討論如何在開發流程中加入此實踐 (Practice)',
    website: ''
  },
  {
    id: 'room30205',
    name: '王威',
    level: '進階',
    topic: '用 Constructor theory實現架構演進和治理',
    intro: '在当今快速发展的科技领域中，我们经常面临着架构演进和治理方面的挑战。然而，随着Constructor Theory的出现，我们有了一个全新的解决方案，它将为我们带来前所未有的机会。构造理论（Constructor Theory）作为一种新兴的物理理论，提供了一种不同于传统理论的思维模式和工具。它探索了构造的基本原理，即事物如何由基本元素和规则组合而成，以及如何通过构造转换和操作来改变和塑造现实。Constructor Theory不仅仅关注物质的构造，还关注信息和计算的构造过程。 在本次演讲中，我将首先简要介绍Constructor Theory的基本原理和概念，以及与传统物理理论的区别和优势。随后，我将重点探讨Constructor Theory在架构演进和治理方面的应用。我们将了解如何利用Constructor Theory的思维模式和工具来解决传统架构演进面临的问题和挑战，以及如何利用它来提高架构的效率、可扩展性和可维护性。 通过本次演讲，我希望能够激发大家对Constructor Theory在架构演进和治理领域的兴趣，并且让大家意识到它所带来的潜在机遇。无论您是一位技术专家、架构师，还是对科学和创新感兴趣的观众，我相信本次演讲都将为您带来新的思考和启发。',
    content: '1. 架构演进的挑战 (1). 传统架构演进面临的问题和挑战 (2). 架构的重要性及其对组织发展的影响 2. Constructor Theory简介 (1). Constructor Theory的基本原理和理念 (2). Constructor Theory与传统物理理论的区别和优势 3. 架构演进中的Constructor Theory应用 (1). 架构演进的目标与需求 (2). Constructor Theory如何帮助解决架构演进中的复杂性和不确定性 (3). 实例展示：使用Constructor Theory指导架构演进的案例研究 (4). 架构演进与治理的协同作用及其对组织效能的影响',
    website: ''
  },
  {
    id: 'ol04',
    name: 'Ean',
    level: '入門',
    topic: '單兵作戰: 以領域驅動設計 (DDD) 改善既有進銷存管理系統的策略與實踐',
    intro: '對於不清楚領域知識的老舊系統，知道一個切入點',
    content: '在這場演講中，將分享作為一人團隊，對一家受到經濟環境影響，需提升效率且面臨舊有進銷存管理系統不再符合業務需求的公司，進行系統改善與增修，如何透過領域驅動設計 (DDD) 與容器化技術，改進一家公司的舊有進銷存管理系統。',
    content2: '這不僅包括理解與解決業務問題，還包括新舊系統並行運作、資料庫無法修改等限制下，各種限制之下找出最佳解決方案。這個專案目前正在進行中，分享到目前為止的經驗。',
    website: ''
  },
  {
    id: 'ol03',
    name: 'Fong',
    level: '進階',
    topic: '你真的懂 SOLID 原則嗎？',
    intro: '- 深入學習 SOLID 原則的內容',
    intro2: '- 如何在軟體開發中辨識 SOLID 的使用時機',
    intro3: '- 了解 DDD 的戰術設計與 SOLID 之間的關係',
    content: 'SOLID 是業界廣爲人知的開發原則，但真的理解甚至遵守的團隊寥寥無幾。但問題是，網路上找到的解釋多半是零散的說明，而非整合式的情境應用說明。',
    content2: '在本次演講中，我將爲各位介紹 SOLID 核心概念與實際應用，不只了解何時用、怎麼用，甚至是「何時要違反」。',
    content3: '以及更進一步，如何跟 DDD 的設計結合，讓軟體「更軟」、更容易擁抱改變！',
    website: 'https://hackernoon.com/you-dont-understand-the-single-responsibility-principle-abfdd005b137',
    website2: 'https://www.youtube.com/watch?v=RtqKN9xEK0c'
  },
  {
    id: 'ol05',
    name: 'James',
    level: '進階',
    topic: 'DDD中的橋樑：透過有效建模與設計，從戰略走向戰術',
    intro: '',
    content: '在Domain-Driven Design (DDD) 的世界中，戰略和戰術經常被廣泛討論。然而，如何將這兩者緊密連接，特別是在建模和設計的過程中，這部分往往被忽略或輕描淡寫。這次的演講，我們將深入探討這個至關重要的"橋樑"部分，使用建模和設計方法來連接戰略和戰術，確保整個過程的連貫性和一致性。將為聽眾提供一種可能的視角。',
    website: ''
  },
  {
    id: 'room30203',
    name: '程章尧',
    level: '進階',
    topic: 'DDD Applied - Introducing TDD while breaking down legacy monolith',
    intro: '',
    content: 'Legacy系統通常以其複雜性、單體結構和缺乏適當測試而聞名。在採用領域驅動設計（DDD）對這類系統進行重構和現代化時，測試驅動開發在確保質量、增強架構設計和保持功能與數據一致性方面起著重要作用。然而，在缺乏現有測試的傳統單體應用中引入測試可能會面臨挑戰。除了利用Strangler Fig模式，還可以應用多種測試技術，包括測試金字塔、契約測試和全程測試，以克服這些障礙並簡化現代化流程。',
    website: ''
  },
  {
    id: 'room30302',
    name: '黃健旻',
    level: '入門',
    topic: '在 Spring Boot 3 + Java 17 中實戰 Domain Driven Design + Clean Architecture',
    intro: 'Spring Boot 3 + Java 17 為 JVM 生態系帶來一系列的更新，其中也包含性能部分的升級，Spring Native on GraalVM。不過，使用此技術棧會有一些語言與支援函式庫的取捨。在這個議程中，我們會展示用 Domain Driven Desgin + Clean Architecture 開發的專案如何巧妙地解決這個問題。',
    content: '解釋 Spring Boot 3 + Java 17 的優點與挑戰',
    content2: '快速同步大家對於 Domain Driven Desgin + Clean Architecture 的認知',
    content3: '展示使用 Domain Driven Desgin + Clean Architecture 開發的專案和如何解決遇到的挑戰',
    website: ''
  },
  {
    id: 'room30305',
    name: '倪國凱',
    level: '入門',
    topic: '這些年我們所追的微服務',
    intro: '微服務近幾年是業界關注的議題，Domain Driven Design 也因為微服務而受到大量的關注。到底這些導入的案子，有哪些成功或是失敗的經驗？想要導入為服務，企業會選擇從什麼系統開始，又是以什麼方式導入？ 新系統導入的時候，我們可以沒有包袱地好好進行從頭進行分析與設計。那麽，如果一個企業已經有著許多的既有系統，如何協助其進行技術的轉型？ 本講者整理公司多個團隊所見、所聞，分享目前公司的客戶如何看待微服務，他們怎麼做？我們怎麼建議？',
    content: '1. 微服務簡介',
    content2: '2. 關於現況的故事',
    content3: '3. 我們的經驗學習與建議',
    content4: '4. Q&A',
    website: ''
  },
  {
    id: 'ol01',
    name: 'Kim',
    level: '進階',
    topic: 'Value Flywheel Effect : 那些藏在價值飛輪下你該知道的策略',
    intro: '',
    content: '在這個演講當中，主要會提及企業希望提升競爭力的過程中，可以通過可視化、通盤觀察企業核心競爭力的綜合整理，並且通過大規模的善用科技來推進這些改造與轉變。在雲服務時代中，有幾個經典的市場上的案例可以作為分享。主題內容包含但不限於 Wardley Mapping、Sense-making approach ，以及基於 Working Backward 的思維來做可參考執行的發展模式。',
    websiteName: 'The value flywheel effect',
    website: 'https://www.amazon.com/dp/B09V1RLRGG'
  },
  {
    id: 'room20207',
    name: 'Kuma Syu',
    level: '入門',
    topic: '「Code with Me」--- 我們寫了一支 API',
    intro: 'Unit Test 與 Pair Programming 實戰體驗',
    content: '從一個非常簡單，但日常工作上很有可能遇到的案例出發，與 Kuma 一同體驗用 Pair 的方式，如何透過適當的 Unit Test 來驅動出所需的程式功能',
    website: ''
  },
  {
    id: 'room20204',
    name: 'Lex Liu',
    level: '入門',
    topic: '動動手手練練 Event Sourcing',
    intro: '本次將分享一個 event sourcing 的練習題，並帶著大家走過，透過練習題讓聽眾學習並思考公司是否有遇過適合使用 event sourcing 解決的問題。',
    content: 'Event sourcing 簡介',
    content2: '練習題：保齡球 in golang',
    content3: '其他應用範例',
    website: 'https://www.tenlong.com.tw/products/9789864343874',
    website2: 'https://www.tenlong.com.tw/products/9787121224485',
    website3: 'https://www.tenlong.com.tw/products/9781098127602',
    website4: 'https://www.youtube.com/playlist?list=PLThyvG1mlMzkRKJnhzvxtSAbY8oxENLUQ'
  },
  {
    id: 'ol07',
    name: 'Michael',
    level: '入門',
    topic: 'Domain Storytelling— One-size-fits-all 串連產品服務的需求、設計、開發與測試',
    intro: '產品設計與開發的踏實做法。',
    intro2: 'Domain Storytelling方法與工具的了解。',
    intro3: '如何讓產品設計到系統開發，平順銜接又可時時核對。',
    content: '產品服務從需求、設計、開發、測試到上線，有賴不同職能角色彼此不斷同步資訊與協作，但我們卻經常為了確保資訊的傳遞與確認，而忙於在不同工具、方法與文件間轉換與轉譯。產品設計的原由、價值，以及商業流程的共識與聚焦，反而成為其次。所以產品服務測試或上線時，常發生做出來的跟想要的有不少差距。',
    content2: '若有一種方法與流程，讓不同職能角色，可以一起使用、討論與聚焦，不論是需求的釐清、設計產品服務流程、開發系統的設計、測試案例的進行，都可以延伸進行，讓所有參與的同事或夥伴都能夠一同不斷的聚焦共識，就能大幅降低上面所提到，要的與做的差距。',
    content3: 'Domain Storytelling就是這樣的一個方法與工具，不論有沒有技術背景，都能透過這個方法工具，做資訊的傳達與同步，並且進行自己職能的實作延伸。',
    website: 'https://domainstorytelling.org/',
    website2: 'https://www.amazon.com/Domain-Storytelling-Collaborative-Domain-Driven-Addison-Wesley/dp/0137458916'
  },
  {
    id: 'room30306',
    name: 'Miles',
    level: '入門',
    topic: '在風雨交加的航道上探索 DDD：從困惑到啟發',
    intro: '自從初次聽到 DDD 的概念，我對這種方法感到神秘而難以理解，但最近終於有機會開始深入研究 DDD 並嘗試在維護的產品上應用它。然而，這個過程並不順利，但透過這段經驗，我學到了許多寶貴的教訓，並開始能夠應用。在這個演講中，我將與大家分享我所學到的經驗。',
    content: '1. 初次接觸 DDD',
    content2: '2. 框架與 DDD 的關係',
    content3: '3. 在單人的 side project 實施 DDD',
    content4: '4. 在企業的專案裡實施 DDD',
    content5: '5. 從困惑到啟發',
    website: 'https://www.tenlong.com.tw/products/9787121224485'
  },
  {
    id: 'room30304',
    name: '雷N',
    level: '入門',
    topic: '探索系統的可觀測性',
    intro: '討論，設計，實踐，探索，回饋',
    content: '探討如何利用事件風暴的方法找出關鍵的業務事件流程與內容，並從中識別和建立對業務運營有實際影響的指標與事件追蹤。也會講到可觀測性的基本組成與概念。',
    content2: '首先，Event Storming作為一種模型化與視覺化的大腦風暴方法，它的目的是將事件的理解融入業務模型中。這意味著我們在理解和討論業務需求時，會主動尋找和定義出一系列的"事件"。這些"事件"是系統中的關鍵活動，並且會留下"記錄"或"日誌"。',
    content3: '接著，在現代的系統架構下（容器化、Severless），當我們轉向12-Factor App的Log觀念，我們將更深入地理解事件在系統中的角色。在此架構中，事件（或logs）不僅是靜態的記錄，而且是一種動態的資料流，它反映了系統在特定時間點的狀態。',
    content4: '再來，這樣的觀念將我們引向了可觀測性工程。在這裡，日誌（或事件）只是我們試圖理解並改進系統行為的一種手段。除了logs之外，metrics和traces也是我們用來獲取系統全面瞭解的重要數據來源。可觀測性工程的實踐就是要將這些數據集中並有效利用，以便我們能在運行中的系統中找出問題並改善其性能。',
    content5: '最後，OpenTelemetry就是一個實現可觀測性工程的工具，它將logs、metrics和traces結合在一起，讓我們可以有一個統一而全面的視角來觀察和理解我們的系統。這種全面性使我們能更好地理解事件（即日誌中記錄的）如何影響我們的系統，並為我們提供了改進性能的策略。',
    content6: '透過上述的探討，我們可以看到Event Storming、12-Factor App的Log觀念、可觀測性工程和OpenTelemetry之間存在一種演進和深化的關係，並且這些主題都圍繞著一個核心問題：如何更好地理解和改進我們的系統。',
    website: ''
  },
  {
    id: 'room20201',
    name: 'Nina',
    level: '入門',
    topic: 'Event Storming實戰經驗分享',
    intro: '在追尋未知Domain的旅程中，我們帶著名為Event Storming的利器踏上了這段冒險。然而，這利器需要不斷磨合和熟悉，才能真正發揮其效用。在這場演講中，我們將分享實際在工作中使用Event Storming遇到的瓶頸，以及我們如何突破，並促進團隊的溝通及協作。',
    content: '- 為何我們選擇Event Storming來輔助領域驅動設計（DDD）',
    content2: '- Event Storming解密：從畫圖到挖寶',
    content3: '- 一趟Event Storming的血淚史',
    content4: '- 啟示與結語',
    website: '',
    book: 'Domain-Driven Design: The First 15 Years” by Essays from the DDD Community',
    book2: '“Domain-Driven Design: Tackling Complexity in the Heart of Software” by Eric Evans'
  },
  {
    id: 'room20202',
    name: 'Soking',
    level: '入門',
    topic: '偷偷將 Event Storming 簡化運用於需求探索的資訊架構設計工作坊',
    intro: '了解如何提供「結構化的內容」，讓資訊產品在運作的過程可以有效的重複使用、組合、分拆利用。',
    intro2: '幫助設計師在介面設計之前，可以使用視覺化討論法，引導利害關係人與技術夥伴一起討論抽象的資訊架構議題，減少觀落陰。',
    content: '資訊架構這個技能，是許多設計師既熟係又陌生的一門領域，其實只要參與產品開發，資訊架構的問題幾乎如影隨形出現在產品的方方面面上，但真的要定義這是一份什麼工作，卻又難以回答。',
    content2: '就好像搬家，你有對於生活情境的想像，也有一些自己的家具，然後你要觀察即將搬進去的房間格局，思考你的生活動線，這個居住空間會有哪些使用情境，然後把家具試著擺放進去，再測試看看是否如你預期，然後還要決定這麼多衣服、書本、雜物要如何收納進這整個空間。',
    content3: '換到軟體開發的資訊架構設計工作也是一樣的，當你接手軟體的需求之後，首先要確認的是什麼角色？因為什麼原因？要做哪些事情？會使用到什麼機制功能？需要哪些資訊？',
    content4: '在打開設計軟體畫圖之前，你還要整理資訊的來源、結構與格局這塊工作要處理，就像炒菜之前你得要備料一樣。',
    content5: '負責「設計」流程的人，如果沒有整理以上資訊的能力，就像廚師沒有能力對食材調味，也辨識不出什麼樣的食材搭配在一起是能夠吃的。',
    content6: '我將在本次工作坊中介紹視覺化的討論方式，讓資訊架構這個抽象的主題，可以很容易被利害關係人理解以及運用在需求討論之中。',
    website: '',
    book: '內容即未來：數字產品規劃與建模'
  },
  {
    id: 'room30307',
    name: '劉宥辰',
    level: '入門',
    topic: '從混亂到組織：DDD與Clean Architecture的持續精進挑戰之道',
    intro: '在Clean Architecture分層架構模式中的每一層都有特定的角色和職責，其中業務層扮演重要角色，負責處理軟體特定的業務邏輯，如何配合DDD的戰術設計運用其中，讓程式碼就能說出業務領域內的知識情境。 在這場分享，我們將分享實際在工作中遇到的架構壞味道，以及我們如何思考討論，並調整改進業務層的戰術設計。',
    content: 'Hello! Clean Architecture，隨著業務迭代慢慢浮現的程式碼壞味道 - 從服務導向(Service-Oriented)的思維調整為情境導向(Use Case)的思考方式 - 運用DDD戰術設計建模領域核心基礎 - 搭配DDD建模的調整Clean Architecture專案結構演進 - 一路走來的經歷心得結語',
    website: 'https://www.tenlong.com.tw/products/9786263331815'
  },
  {
    id: 'room30303',
    name: 'Stephen Tung',
    level: '進階',
    topic: 'The Superpowers of Event Sourcing',
    intro: '',
    content: 'Why is Event Sourcing so powerful? There was a time when I found myself trying to answer this seemingly simple question for various people in my life, including my boss, peers, senior and junior developers, and even my wife. Despite my unwavering belief in its potential to solve the world\'s problems, I struggled to explain the “why” adequately.',
    content2: 'What is the essence of Event Sourcing? and What makes it so Powerful?',
    content3: 'Join me, if you\'re trying to unravel the complexity behind the world of Event Sourcing, or just eager to persuade your boss (or spouse) to support your next Event Sourcing project!',
    website: ''
  },
  {
    id: 'room30206',
    name: '高松',
    level: '入門',
    topic: '複雜遺留系統的現代化改造方法與實踐',
    intro: 'DDD和Event Storming都是目前主流的微服務拆分和設計方法之一，本次演講將介紹VMware Tanzu Labs在應用DDD和Event Storming把遺留系統改造成微服務架構過程中的方法和實踐。同時，介紹如何應用精益（ Lean ）產品管理的相關實踐，來低風險漸進式地進行改造。',
    content: '1.如何利用Event Storming快速了解和梳理遺留系統的業務',
    content2: '2.如何識別和劃分微服務',
    content3: '3.如何快速建立新系統的概念性微服務架構',
    content4: '4.何時考慮具體的技術層面的微服務設計（比如微服務設計模式）',
    content5: '5.如何應用精益思維來降低整個改造的風險',
    website: ''
  },
  {
    id: 'room30207',
    name: '陳建村',
    level: '進階',
    topic: '用模式語言解壓縮CQRS：以ezKanban系統為例',
    intro: '了解在套用DDD與Clean Architecture的情境下，哪些設計模式可以支持CQRS的實作',
    content: 'CQRS在概念上是一個簡單的設計模式，但實務上套用CQRS經常與DDD、Event Sourcing與軟體架構糾纏在一起，產生相互衝突的設計作用力。本演講採用模式語言方法，將CQRS作為一個高階模式加以展開，並介紹支持CQRS的其他較小設計模式。',
    website: ''
  },
  {
    id: 'room30301',
    name: 'Vlad Khononov',
    level: '入門',
    topic: '軟件設計中的平衡耦合',
    intro: '我們習慣將耦合視為必要的惡魔。因此，我們致力於將系統拆分為最小的服務，一直追求解耦合的目標。但是，我們遵循這種推理結果是什麼呢？與其得到可演進的系統樂土，許多"解耦合一切"的努力直接導致分散式單體應用的束縛。我們能做得更好嗎？如果在分散式系統中處理耦合的方法更好呢？或者，如果我們不是抵制耦合，而是將其作為設計系統的啟發式方法來使用，以實現系統的演進和可維護性？這正是您在此次演講中將學到的內容：什麼是耦合，以及如何將其作為設計工具。我們將從時間的長河出發，探索評估耦合的不同模型。接著，我們將結合現有的知識，形成一個完整的模型——一個用於評估系統分解成組件的簡單功能。這個功能將允許您評估演進系統所需的預期工作量，並將其作為優化架構設計決策的啟發式方法。最終，我們將使用耦合功能來展示核心 DDD 模式和實踐的精髓。',
    content: '1.什麼是耦合',
    content2: '2.耦合的維度',
    content3: '3.將耦合的維度結合成平衡函數',
    content4: '4.使用平衡耦合函數解釋 DDD 模式',
    website: ''
  },
  {
    id: 'ol02',
    name: '水球潘',
    level: '入門',
    topic: '在自己的新創導入 DDD 來迭代開發一個有夠複雜的線上遊戲教育創新產品',
    intro: '0. DDD 基本知識在融會貫通上的複習：戰略 x 戰術 x UL',
    intro2: '1. 對 DDD 在不同領域（e.g., 遊戲業）實踐上的認知',
    intro3: '2. 在人、時間、資源有限的情況下，DDD 是否有助新創半導入期階段？',
    intro4: '3. 新創導入 DDD 的基本 SOP',
    intro5: '4. 如何和不同領域的人（如遊戲美術、設計師）一同 DDD？',
    content: '大家好，我是水球潘。',
    content2: '領域驅動設計的知識脈絡廣大，苦思了非常久⋯⋯！於是最後我決定要和大家分享後者：「我是如何在我自己的創業中，落地領域驅動設計的心法和技法，帶領團隊持續掌握產品的意義和複雜的概念。」',
    content3: '我自己出來創業已經一年半左右了，上半年我致力於打造專屬於軟體技能成長的線上課程：「軟體設計模式精通之旅」。為了能在最短的時間內驗證我的市場潛力，上半年時我將重心放在試場上，開發出第一款課程平台，並也成功地收到 200 位左右的學生在線上每週與我學習。不過接下來才是挑戰。',
    content4: '而我司的夢想是希望能在這之上打造出一款「新型教育產品」，做出一個全新的遊戲化線上課程平台，來 do something great！',
    content5: '既然年會舉辦在九月，那就和我司的 Product Roadmap 挺契合的，我們目前正在實踐 DDD 並且產品面臨高速迭代當中，在九月份時就很剛好地會累積一些 DDD 在實踐上的心得，到時就能分享給大家這份 DDD 落地創業日誌！',
    content6: '於是在這場分享中，我會分享我們公司在以下面向的實踐：',
    content7: '1. 戰略設計：課程平台本身充斥著在新創衝刺期「發散已久」的超複雜線上課程平台知識。接下來我想要梳理清楚的 Bounded Context、建立 Ubiquitous Language，並在新舊兩個版本的平台 BC 做足一定的掌握來避免 wastes。',
    content8: '2. 戰術設計 x 線上遊戲：由於我司開發的是「線上遊戲」，所以我即將探索戰術設計在線上遊戲的實踐。遊戲和商業應用情境的戰術設計是大有不同的，因為線上遊戲聚合根的生命週期來得要長上許多，且礙於效能疑慮，對於「交易邊界」的拿捏挺不一樣的。',
    content9: '3. 團隊認知維度全面提升：DDD 最隱晦的價值是什麼？那就是讓團隊「全員認知維度提升」。只有當認知的維度提升後，才能一起從軟體的開發中感受到更多的意義，並善用 DDD 團隊建模培養團隊全員探索產品的 Mindset，從中提升大家寫程式的正確率和維護性。',
    content10: '如果各位想用 45 分鐘去享受一場接受軟體工程 x 創業故事洗禮的旅程，歡迎來演講現場與我交流喔。',
    website: ''
  },
  {
    id: 'room30202',
    name: '魏宣德',
    name2: '邱凡遠',
    level: '入門',
    topic: 'Don’t Forget UCD & Balanced Teams: Reap the Full Benefits with Modern Development Practices',
    intro: 'Domain-Driven Design (DDD) is really good at understanding business domains, but alone it does not fully enable organizations to continually meet the changing software needs of tomorrow. This talk will showcase how we combine DDD with other agile practices like User-Centered Design (UCD) and Balanced Teams to achieve two things: (1) an evolutionary architecture that supports guided and incremental change, and (2) A team that continuously discovers and delivers outcomes at speed in an increasingly ambiguous world. We will cover case studies, statistical evidence, and anecdotal experiences that show how these practices help your team and business go fast, forever. Finally, you’ll take away tactics for you and your team to grow and nurture these practices within your organization.',
    content: 'Introduction What are UCD and Balanced Teams? Without UCD and Balanced Teams, we miss out on half of the value of “Design” in DDD Why does this matter? How do UCD and Balanced Teams work hand-in-hand w/ DDD at a meta level? How do UCD and Balanced Teams work hand-in-hand w/ DDD at a day-to-day level? But what if we… We don’t have Designers or the funds to hire any? We have difficult/large numbers of dependencies? We have a product already well underway? We have difficult stakeholders/partners? We have difficult teammates?',
    website: 'https://www.youtube.com/watch?v=Z_Q4Q8rCVpU https://tanzu.vmware.com/content/white-papers/vmware-tanzu-labs-product-manager-playbook ',
    website2: 'https://tanzu.vmware.com/content/guides/tanzu-design-guide'
  },
];

export default agendaData;
