export const blogViewCopy = {
  th: {
    eyebrow: "Knowledge Hub",
    heroTitle: "บทความและอินไซต์เพื่อธุรกิจสิ่งทอของคุณ",
    heroDescription:
      "คัดสรรองค์ความรู้ด้านการพิมพ์ผ้าที่อ่านง่ายและนำไปใช้ได้จริง ตั้งแต่นวัตกรรมเครื่องจักรจนถึงการดูแลคุณภาพงานผลิต.",
    featureBadge: "เรื่องเด่น",
    highlightListTitle: "หัวข้อที่น่าสนใจ",
    highlightDescription:
      "อัปเดตเทรนด์และคู่มือปฏิบัติที่ได้รับความนิยมจากผู้อ่าน",
    allArticlesTitle: "บทความทั้งหมด",
    allArticlesDescription:
      "เรียงตามวันที่เผยแพร่เพื่อให้คุณไม่พลาดทุกประเด็นสำคัญ",
    readFullCta: "อ่านบทความ",
    pageStatus: (page, total, totalPosts) =>
      `หน้า ${page} จาก ${total} (ทั้งหมด ${totalPosts} บทความ)`,
    previous: "ก่อนหน้า",
    next: "ถัดไป",
    emptyState:
      "ไม่มีบทความให้แสดงในขณะนี้ โปรดกลับมาใหม่อีกครั้งในภายหลัง",
    emptyList: "ยังไม่มีบทความอื่นในขณะนี้",
  },
  en: {
    eyebrow: "Knowledge Hub",
    heroTitle: "Articles and insights for your textile business",
    heroDescription:
      "Curated textile printing knowledge you can act on—from machinery upgrades to production quality playbooks.",
    featureBadge: "Featured",
    highlightListTitle: "Popular topics",
    highlightDescription:
      "Trending stories and practical guides loved by our readers",
    allArticlesTitle: "All articles",
    allArticlesDescription:
      "Sorted by publish date so you can catch every headline",
    readFullCta: "Read article",
    pageStatus: (page, total, totalPosts) =>
      `Page ${page} of ${total} (${totalPosts} articles)`,
    previous: "Previous",
    next: "Next",
    emptyState: "No articles are available right now. Please check back soon.",
    emptyList: "There are no additional articles yet.",
  },
};

export const blogArticleCopy = {
  th: {
    backLabel: "กลับหน้าบทความทั้งหมด",
    summaryLabel: "เรื่องเด่น",
    takeawaysTitle: "ประเด็นที่ควรนำไปต่อยอด",
    relatedTitle: "บทความที่เกี่ยวข้อง",
    relatedDescription:
      "เจาะลึกเนื้อหาที่เชื่อมโยงกับหัวข้อนี้ เพื่อช่วยให้คุณวางแผนการผลิตได้รอบด้าน",
    advisoryTitle: "สนใจปรึกาทีมผู้เชี่ยวชาญ",
    advisoryDescription:
      "ติดต่อเราเพื่อวางแผนการผลิต ทดลองสี หรือขอใบเสนอราคาเฉพาะสำหรับโปรเจกต์ของคุณ",
    advisoryCta: "นัดหมายทีมฝ่ายขาย",
  },
  en: {
    backLabel: "Back to all articles",
    summaryLabel: "Feature",
    takeawaysTitle: "Key takeaways",
    relatedTitle: "Related articles",
    relatedDescription:
      "Dive deeper into connected topics so you can plan production with confidence.",
    advisoryTitle: "Talk with our specialists",
    advisoryDescription:
      "Reach out to plan production, run colour trials, or request a tailored quotation for your next project.",
    advisoryCta: "Book a sales consultation",
  },
};

export const blogPosts = [
  {
    slug: "digital-printing-trends-2024",
    cover: "/hero-textile.svg",
    date: "2024-05-12",
    featured: true,
    topics: ["digital", "innovation", "sustainability"],
    translations: {
      th: {
        title: "เทรนด์การพิมพ์ดิจิทัลปี 2024 ที่โรงงานต้องรู้",
        excerpt:
          "สำรวจนวัตกรรมล่าสุดของการพิมพ์ผ้าดิจิทัล ตั้งแต่หมึกสูตรใหม่ ไปจนถึงระบบอัตโนมัติที่ช่วยลดการสูญเสียและเพิ่มความสม่ำเสมอของสี.",
        category: "นวัตกรรม",
        tags: ["ดิจิทัล", "ความยั่งยืน"],
        readingTime: "4 นาที",
        author: "ทีมกลยุทธ์ดิจิทัล",
        authorRole: "ฝ่ายพัฒนานวัตกรรม",
        content: [
          {
            heading: "เทคโนโลยีที่น่าจับตา",
            paragraphs: [
              "ปี 2024 เป็นปีที่เครื่องพิมพ์ดิจิทัลรุ่นใหม่เริ่มนำ AI มาช่วยปรับค่าการพิมพ์แบบเรียลไทม์ ลดปัญหาสีเพี้ยนและของเสียได้อย่างเห็นผล.",
              "แบรนด์ระดับโลกให้ความสำคัญกับหมึกสูตรน้ำและกระบวนการที่ลดการใช้น้ำ ดังนั้นโรงงานจำเป็นต้องเตรียมโครงสร้างพื้นฐานรองรับมาตรฐานด้านสิ่งแวดล้อมที่เข้มงวดขึ้น.",
            ],
          },
          {
            heading: "สิ่งที่ต้องลงทุน",
            paragraphs: [
              "นอกจากเครื่องจักรแล้ว ระบบจัดการข้อมูลการพิมพ์ (Print MIS) และการเชื่อมต่อ IoT ช่วยให้วิเคราะห์ประสิทธิภาพได้ละเอียดขึ้น.",
            ],
            bullets: [
              "ติดตั้งเซ็นเซอร์วัดความชื้นและอุณหภูมิภายในไลน์ผลิต",
              "ใช้ซอฟต์แวร์จัดคิวงานอัตโนมัติลดเวลารอเครื่อง",
              "วางแผนฝึกอบรมทีมงานเรื่องสีและหมึกสูตรใหม่",
            ],
          },
          {
            heading: "สรุปแผนดำเนินการ",
            paragraphs: [
              "เริ่มจากการประเมินเครื่องจักรที่มีอยู่และกำหนด KPI ด้านคุณภาพและของเสีย จากนั้นกำหนด Roadmap การอัปเกรดในช่วง 12 เดือนโดยจัดลำดับความสำคัญของโครงการที่มีผลตอบแทนเร็วที่สุด.",
            ],
          },
        ],
        keyTakeaways: [
          "ติดตามเทคโนโลยีที่ผสาน AI และระบบอัตโนมัติ",
          "ลงทุนในโครงสร้างพื้นฐานข้อมูลเพื่อบริหารต้นทุน",
          "ยกระดับมาตรฐานสิ่งแวดล้อมเพื่อรองรับลูกค้าระดับสากล",
        ],
      },
      en: {
        title: "Digital textile printing trends to watch in 2024",
        excerpt:
          "Explore the latest innovations in digital textile printing, from next-gen inks to automation that reduces waste and keeps colours consistent.",
        category: "Innovation",
        tags: ["Digital", "Sustainability"],
        readingTime: "4 min read",
        author: "Digital strategy team",
        authorRole: "Innovation office",
        content: [
          {
            heading: "Technologies on the horizon",
            paragraphs: [
              "In 2024, new generations of digital printers are embedding AI to tune print settings in real time, cutting colour drift and waste in measurable ways.",
              "Global brands are prioritising water-based inks and processes that lower water usage, so mills need infrastructure ready for tighter environmental standards.",
            ],
          },
          {
            heading: "Where to invest",
            paragraphs: [
              "Beyond hardware, a connected Print MIS and IoT sensors unlock granular performance analysis across every press run.",
            ],
            bullets: [
              "Install sensors to monitor humidity and temperature along the production line.",
              "Adopt automated scheduling tools to keep presses running with minimal idle time.",
              "Plan training programmes so teams can master new ink chemistries and colour workflows.",
            ],
          },
          {
            heading: "Action plan",
            paragraphs: [
              "Start by auditing current equipment and defining KPIs for quality and waste. Then build a 12-month upgrade roadmap, prioritising projects that return value the fastest.",
            ],
          },
        ],
        keyTakeaways: [
          "Track AI-enabled and automated technologies closely.",
          "Invest in data infrastructure to control costs.",
          "Raise environmental standards to serve international clients.",
        ],
      },
    },
  },
  {
    slug: "color-management-workflow",
    cover: "/window.svg",
    date: "2024-04-26",
    topics: ["color", "fashion", "quality"],
    translations: {
      th: {
        title: "จัดการสีอย่างมืออาชีพสำหรับงานพิมพ์แฟชั่น",
        excerpt:
          "ขั้นตอนการควบคุมสีแบบครบวงจร ตั้งแต่การเตรียมไฟล์ การเลือกผ้า ไปจนถึงการตรวจสอบคุณภาพให้ได้สีตามแบรนด์.",
        category: "เทคนิค",
        tags: ["จัดการสี", "แฟชั่น"],
        readingTime: "6 นาที",
        author: "ห้องปฏิบัติการสี",
        authorRole: "ฝ่ายควบคุมคุณภาพ",
        content: [
          {
            heading: "ตั้งต้นด้วยโปรไฟล์สีที่ถูกต้อง",
            paragraphs: [
              "การใช้โปรไฟล์ ICC ที่อัปเดตและตรงกับชนิดผ้าจะช่วยให้สีออกมาสม่ำเสมอในทุกล็อตการผลิต.",
              "ควรมีขั้นตอนตรวจสอบไฟล์จากนักออกแบบก่อนส่งเข้าระบบ RIP เพื่อตรวจจับสีที่อยู่นอกขอบเขตการพิมพ์.",
            ],
          },
          {
            heading: "เวิร์กโฟลว์การทดสอบ",
            paragraphs: [
              "เก็บตัวอย่างผ้าทดสอบและค่าการตั้งเครื่องทุกครั้งที่เปลี่ยนงาน เพื่อสร้างฐานข้อมูลเปรียบเทียบ.",
            ],
            bullets: [
              "ใช้แถบควบคุมสี (Color Control Strip) ในทุกงาน",
              "ตรวจวัดค่า Delta E ไม่เกิน 2 สำหรับงานแฟชั่น",
              "บันทึกอุณหภูมิและความชื้นของห้องพิมพ์",
            ],
          },
          {
            heading: "ทำงานร่วมกับฝ่ายออกแบบ",
            paragraphs: [
              "สื่อสารขอบเขตสีและข้อจำกัดของวัสดุกับนักออกแบบ พร้อมแนะนำการเลือกแพนโทนทดแทนที่ใกล้เคียงที่สุด.",
            ],
          },
        ],
        keyTakeaways: [
          "ใช้โปรไฟล์ ICC เฉพาะสำหรับแต่ละวัสดุ",
          "วัดผลความคลาดเคลื่อนของสีทุกล็อต",
          "ตั้งระบบสื่อสารระหว่างฝ่ายผลิตและออกแบบ",
        ],
      },
      en: {
        title: "Professional colour management for fashion printing",
        excerpt:
          "A full workflow for colour control—from file preparation and fabric selection to quality checks that keep every drop on brand.",
        category: "Technique",
        tags: ["Colour lab", "Fashion"],
        readingTime: "6 min read",
        author: "Colour laboratory",
        authorRole: "Quality assurance team",
        content: [
          {
            heading: "Start with the right profiles",
            paragraphs: [
              "Updated ICC profiles tailored to each fabric type keep colours consistent across every production batch.",
              "Add a designer preflight step before files enter the RIP to flag out-of-gamut colours early.",
            ],
          },
          {
            heading: "Testing workflow",
            paragraphs: [
              "Log strike-off samples and machine settings whenever jobs change so you can build a reliable reference library.",
            ],
            bullets: [
              "Place a colour control strip on every job.",
              "Target a Delta E below 2 for fashion collections.",
              "Record the press room's temperature and humidity.",
            ],
          },
          {
            heading: "Partner with design",
            paragraphs: [
              "Communicate material limits and colour ranges with designers, and suggest the closest Pantone alternatives when needed.",
            ],
          },
        ],
        keyTakeaways: [
          "Use ICC profiles specific to each substrate.",
          "Measure colour deviation on every batch.",
          "Create a tight feedback loop between production and design.",
        ],
      },
    },
  },
  {
    slug: "eco-friendly-inks",
    cover: "/globe.svg",
    date: "2024-03-30",
    topics: ["eco", "certification", "operations"],
    translations: {
      th: {
        title: "เลือกหมึกพิมพ์ที่เป็นมิตรต่อสิ่งแวดล้อม",
        excerpt:
          "ทำความรู้จักหมึกพิมพ์สูตรน้ำและสารตั้งต้นที่ลดของเสีย ช่วยให้โรงงานผ่านมาตรฐานการผลิตที่เข้มงวด.",
        category: "ความยั่งยืน",
        tags: ["อีโค", "การรับรอง"],
        readingTime: "5 นาที",
        author: "ทีมความยั่งยืน",
        authorRole: "ฝ่ายพัฒนาผลิตภัณฑ์",
        content: [
          {
            heading: "เข้าใจประเภทของหมึก",
            paragraphs: [
              "หมึกสูตรน้ำ (Water-based) และหมึกที่ปลอดจากสารฟอร์มัลดีไฮด์กำลังเป็นมาตรฐานใหม่สำหรับการส่งออก.",
              "ควรขอใบรับรองมาตรฐานเช่น OEKO-TEX® หรือ Bluesign® เพื่อสร้างความมั่นใจให้ลูกค้า.",
            ],
          },
          {
            heading: "จัดการของเสียให้เป็นศูนย์",
            paragraphs: [
              "ระบบบำบัดน้ำเสียควรปรับปรุงให้รองรับสารประกอบจากหมึกสูตรใหม่ และจัดทำคู่มือให้พนักงานใช้หมึกอย่างมีประสิทธิภาพ.",
            ],
            bullets: [
              "ตั้งเกณฑ์การเบิกหมึกตามปริมาณงานจริง",
              "ติดตามอัตราการสูญเสียหมึกต่อเมตรพิมพ์",
              "รีไซเคิลภาชนะบรรจุหมึกตามคู่มือผู้ผลิต",
            ],
          },
          {
            heading: "สื่อสารความยั่งยืน",
            paragraphs: [
              "จัดทำ Fact Sheet อธิบายข้อดีของหมึกที่ใช้ พร้อมตัวชี้วัดสิ่งแวดล้อมเพื่อให้ทีมขายนำเสนอแก่ลูกค้าได้ง่าย.",
            ],
          },
        ],
        keyTakeaways: [
          "เลือกหมึกที่ได้รับรองมาตรฐานสากล",
          "ปรับปรุงระบบบำบัดและการจัดการหมึก",
          "สื่อสารจุดแข็งด้านสิ่งแวดล้อมกับลูกค้า",
        ],
      },
      en: {
        title: "Choosing eco-friendly printing inks",
        excerpt:
          "Get to know water-based inks and low-impact chemistries that cut waste and help your mill meet stricter production standards.",
        category: "Sustainability",
        tags: ["Eco", "Certification"],
        readingTime: "5 min read",
        author: "Sustainability team",
        authorRole: "Product development",
        content: [
          {
            heading: "Understand your ink options",
            paragraphs: [
              "Water-based and formaldehyde-free inks are becoming the new baseline for export programmes.",
              "Ask for certifications such as OEKO-TEX® or Bluesign® to reassure brand partners.",
            ],
          },
          {
            heading: "Drive waste to zero",
            paragraphs: [
              "Upgrade wastewater treatment so it can handle new ink chemistries, and create shop-floor guides that promote efficient ink usage.",
            ],
            bullets: [
              "Set draw-down limits based on actual job volume.",
              "Track ink waste per printed metre.",
              "Recycle ink containers according to supplier guidance.",
            ],
          },
          {
            heading: "Communicate sustainability",
            paragraphs: [
              "Prepare a fact sheet outlining your ink benefits alongside environmental metrics so sales teams can brief customers quickly.",
            ],
          },
        ],
        keyTakeaways: [
          "Source inks backed by international certifications.",
          "Modernise treatment systems and ink handling.",
          "Promote your environmental strengths to clients.",
        ],
      },
    },
  },
  {
    slug: "rotary-vs-digital",
    cover: "/file.svg",
    date: "2024-02-18",
    topics: ["production", "roi", "strategy"],
    translations: {
      th: {
        title: "เปรียบเทียบงานพิมพ์โรตารี่และดิจิทัล เลือกอย่างไรให้เหมาะ",
        excerpt:
          "สรุปข้อดี ข้อจำกัด และการประยุกต์ใช้ของแต่ละเทคโนโลยี เพื่อช่วยให้คุณตัดสินใจลงทุนได้อย่างมั่นใจ.",
        category: "การลงทุน",
        tags: ["การลงทุน", "การผลิต"],
        readingTime: "7 นาที",
        author: "ฝ่ายวางแผนการผลิต",
        authorRole: "ทีมกลยุทธ์โรงงาน",
        content: [
          {
            heading: "ข้อได้เปรียบของโรตารี่",
            paragraphs: [
              "เหมาะสำหรับงานปริมาณมากและลวดลายที่ซ้ำต่อเนื่อง ด้วยต้นทุนต่อเมตรที่ต่ำเมื่อผลิตในปริมาณสูง.",
            ],
            bullets: [
              "ความเร็วสูงถึง 80 เมตรต่อนาที",
              "เหมาะกับสีพื้นและลายแถว",
              "ต้องใช้แม่พิมพ์และเวลาเตรียมงานมากกว่า",
            ],
          },
          {
            heading: "ความยืดหยุ่นของดิจิทัล",
            paragraphs: [
              "รองรับงานที่ต้องการรายละเอียดสูงและล็อตขนาดเล็ก ปรับเปลี่ยนดีไซน์ได้รวดเร็วโดยไม่ต้องทำแม่พิมพ์.",
            ],
            bullets: [
              "เปลี่ยนแบบได้รวดเร็ว ลดเวลาขึ้นงาน",
              "ทดลองสีและลายใหม่ได้ทันที",
              "ต้นทุนต่อเมตรคงที่แม้ปริมาณน้อย",
            ],
          },
          {
            heading: "กลยุทธ์การลงทุน",
            paragraphs: [
              "ผสมผสานสองเทคโนโลยีให้เหมาะกับพอร์ตสินค้า โดยใช้โรตารี่สำหรับล็อตหลัก และดิจิทัลสำหรับคอลเลกชันพิเศษหรือการปรับแต่งเฉพาะราย.",
            ],
            bullets: [
              "วิเคราะห์ประเภทงานและปริมาณเฉลี่ยรายเดือน",
              "ประเมินความพร้อมของทีมสำหรับการดูแลเครื่องแต่ละชนิด",
              "ตั้ง KPI ด้านของเสียและเวลาตอบสนองลูกค้า",
            ],
          },
        ],
        keyTakeaways: [
          "โรตารี่ตอบโจทย์ล็อตใหญ่ที่ต้องการความคุ้มทุน",
          "ดิจิทัลเพิ่มความเร็วและความยืดหยุ่นในการออกแบบ",
          "การผสมผสานช่วยบริหารความเสี่ยงและตอบสนองตลาดเร็ว",
        ],
      },
      en: {
        title: "Rotary vs. digital printing—choosing the right fit",
        excerpt:
          "A clear look at the strengths, limits, and best applications for each technology so you can invest with confidence.",
        category: "Investment",
        tags: ["ROI", "Production"],
        readingTime: "7 min read",
        author: "Production planning unit",
        authorRole: "Factory strategy team",
        content: [
          {
            heading: "Rotary advantages",
            paragraphs: [
              "Best suited for high-volume, repeating patterns with low cost per metre once you scale production.",
            ],
            bullets: [
              "Run speeds up to 80 metres per minute.",
              "Excels at solids and banded layouts.",
              "Requires more time and tooling for screen preparation.",
            ],
          },
          {
            heading: "Digital flexibility",
            paragraphs: [
              "Ideal for detailed artwork and smaller runs, enabling fast design changes without new screens.",
            ],
            bullets: [
              "Switch designs quickly and reduce setup time.",
              "Test new colours and motifs instantly.",
              "Cost per metre stays consistent, even at lower volumes.",
            ],
          },
          {
            heading: "Investment strategy",
            paragraphs: [
              "Blend both technologies to suit your range—use rotary for core SKUs and digital for special editions or personalised runs.",
            ],
            bullets: [
              "Analyse job types and average monthly volumes.",
              "Assess team readiness to maintain each platform.",
              "Set KPIs for waste and customer response times.",
            ],
          },
        ],
        keyTakeaways: [
          "Rotary delivers ROI on large, repeat orders.",
          "Digital brings speed and design agility.",
          "Combining both manages risk and keeps you market-ready.",
        ],
      },
    },
  },
  {
    slug: "rotary-vs-digital-2",
    cover: "/file.svg",
    date: "2024-02-18",
    topics: ["production", "roi", "strategy"],
    translations: {
      th: {
        title: "เปรียบเทียบงานพิมพ์โรตารี่และดิจิทัล เลือกอย่างไรให้เหมาะ",
        excerpt:
          "สรุปข้อดี ข้อจำกัด และการประยุกต์ใช้ของแต่ละเทคโนโลยี เพื่อช่วยให้คุณตัดสินใจลงทุนได้อย่างมั่นใจ.",
        category: "การลงทุน",
        tags: ["การลงทุน", "การผลิต"],
        readingTime: "7 นาที",
        author: "ฝ่ายวางแผนการผลิต",
        authorRole: "ทีมกลยุทธ์โรงงาน",
        content: [
          {
            heading: "ข้อได้เปรียบของโรตารี่",
            paragraphs: [
              "เหมาะสำหรับงานปริมาณมากและลวดลายที่ซ้ำต่อเนื่อง ด้วยต้นทุนต่อเมตรที่ต่ำเมื่อผลิตในปริมาณสูง.",
            ],
            bullets: [
              "ความเร็วสูงถึง 80 เมตรต่อนาที",
              "เหมาะกับสีพื้นและลายแถว",
              "ต้องใช้แม่พิมพ์และเวลาเตรียมงานมากกว่า",
            ],
          },
          {
            heading: "ความยืดหยุ่นของดิจิทัล",
            paragraphs: [
              "รองรับงานที่ต้องการรายละเอียดสูงและล็อตขนาดเล็ก ปรับเปลี่ยนดีไซน์ได้รวดเร็วโดยไม่ต้องทำแม่พิมพ์.",
            ],
            bullets: [
              "เปลี่ยนแบบได้รวดเร็ว ลดเวลาขึ้นงาน",
              "ทดลองสีและลายใหม่ได้ทันที",
              "ต้นทุนต่อเมตรคงที่แม้ปริมาณน้อย",
            ],
          },
          {
            heading: "กลยุทธ์การลงทุน",
            paragraphs: [
              "ผสมผสานสองเทคโนโลยีให้เหมาะกับพอร์ตสินค้า โดยใช้โรตารี่สำหรับล็อตหลัก และดิจิทัลสำหรับคอลเลกชันพิเศษหรือการปรับแต่งเฉพาะราย.",
            ],
            bullets: [
              "วิเคราะห์ประเภทงานและปริมาณเฉลี่ยรายเดือน",
              "ประเมินความพร้อมของทีมสำหรับการดูแลเครื่องแต่ละชนิด",
              "ตั้ง KPI ด้านของเสียและเวลาตอบสนองลูกค้า",
            ],
          },
        ],
        keyTakeaways: [
          "โรตารี่ตอบโจทย์ล็อตใหญ่ที่ต้องการความคุ้มทุน",
          "ดิจิทัลเพิ่มความเร็วและความยืดหยุ่นในการออกแบบ",
          "การผสมผสานช่วยบริหารความเสี่ยงและตอบสนองตลาดเร็ว",
        ],
      },
      en: {
        title: "Rotary vs. digital printing—choosing the right fit",
        excerpt:
          "A clear look at the strengths, limits, and best applications for each technology so you can invest with confidence.",
        category: "Investment",
        tags: ["ROI", "Production"],
        readingTime: "7 min read",
        author: "Production planning unit",
        authorRole: "Factory strategy team",
        content: [
          {
            heading: "Rotary advantages",
            paragraphs: [
              "Best suited for high-volume, repeating patterns with low cost per metre once you scale production.",
            ],
            bullets: [
              "Run speeds up to 80 metres per minute.",
              "Excels at solids and banded layouts.",
              "Requires more time and tooling for screen preparation.",
            ],
          },
          {
            heading: "Digital flexibility",
            paragraphs: [
              "Ideal for detailed artwork and smaller runs, enabling fast design changes without new screens.",
            ],
            bullets: [
              "Switch designs quickly and reduce setup time.",
              "Test new colours and motifs instantly.",
              "Cost per metre stays consistent, even at lower volumes.",
            ],
          },
          {
            heading: "Investment strategy",
            paragraphs: [
              "Blend both technologies to suit your range—use rotary for core SKUs and digital for special editions or personalised runs.",
            ],
            bullets: [
              "Analyse job types and average monthly volumes.",
              "Assess team readiness to maintain each platform.",
              "Set KPIs for waste and customer response times.",
            ],
          },
        ],
        keyTakeaways: [
          "Rotary delivers ROI on large, repeat orders.",
          "Digital brings speed and design agility.",
          "Combining both manages risk and keeps you market-ready.",
        ],
      },
    },
  },
  {
    slug: "rotary-vs-digital-3",
    cover: "/file.svg",
    date: "2024-02-18",
    topics: ["production", "roi", "strategy"],
    translations: {
      th: {
        title: "เปรียบเทียบงานพิมพ์โรตารี่และดิจิทัล เลือกอย่างไรให้เหมาะ",
        excerpt:
          "สรุปข้อดี ข้อจำกัด และการประยุกต์ใช้ของแต่ละเทคโนโลยี เพื่อช่วยให้คุณตัดสินใจลงทุนได้อย่างมั่นใจ.",
        category: "การลงทุน",
        tags: ["การลงทุน", "การผลิต"],
        readingTime: "7 นาที",
        author: "ฝ่ายวางแผนการผลิต",
        authorRole: "ทีมกลยุทธ์โรงงาน",
        content: [
          {
            heading: "ข้อได้เปรียบของโรตารี่",
            paragraphs: [
              "เหมาะสำหรับงานปริมาณมากและลวดลายที่ซ้ำต่อเนื่อง ด้วยต้นทุนต่อเมตรที่ต่ำเมื่อผลิตในปริมาณสูง.",
            ],
            bullets: [
              "ความเร็วสูงถึง 80 เมตรต่อนาที",
              "เหมาะกับสีพื้นและลายแถว",
              "ต้องใช้แม่พิมพ์และเวลาเตรียมงานมากกว่า",
            ],
          },
          {
            heading: "ความยืดหยุ่นของดิจิทัล",
            paragraphs: [
              "รองรับงานที่ต้องการรายละเอียดสูงและล็อตขนาดเล็ก ปรับเปลี่ยนดีไซน์ได้รวดเร็วโดยไม่ต้องทำแม่พิมพ์.",
            ],
            bullets: [
              "เปลี่ยนแบบได้รวดเร็ว ลดเวลาขึ้นงาน",
              "ทดลองสีและลายใหม่ได้ทันที",
              "ต้นทุนต่อเมตรคงที่แม้ปริมาณน้อย",
            ],
          },
          {
            heading: "กลยุทธ์การลงทุน",
            paragraphs: [
              "ผสมผสานสองเทคโนโลยีให้เหมาะกับพอร์ตสินค้า โดยใช้โรตารี่สำหรับล็อตหลัก และดิจิทัลสำหรับคอลเลกชันพิเศษหรือการปรับแต่งเฉพาะราย.",
            ],
            bullets: [
              "วิเคราะห์ประเภทงานและปริมาณเฉลี่ยรายเดือน",
              "ประเมินความพร้อมของทีมสำหรับการดูแลเครื่องแต่ละชนิด",
              "ตั้ง KPI ด้านของเสียและเวลาตอบสนองลูกค้า",
            ],
          },
        ],
        keyTakeaways: [
          "โรตารี่ตอบโจทย์ล็อตใหญ่ที่ต้องการความคุ้มทุน",
          "ดิจิทัลเพิ่มความเร็วและความยืดหยุ่นในการออกแบบ",
          "การผสมผสานช่วยบริหารความเสี่ยงและตอบสนองตลาดเร็ว",
        ],
      },
      en: {
        title: "Rotary vs. digital printing—choosing the right fit",
        excerpt:
          "A clear look at the strengths, limits, and best applications for each technology so you can invest with confidence.",
        category: "Investment",
        tags: ["ROI", "Production"],
        readingTime: "7 min read",
        author: "Production planning unit",
        authorRole: "Factory strategy team",
        content: [
          {
            heading: "Rotary advantages",
            paragraphs: [
              "Best suited for high-volume, repeating patterns with low cost per metre once you scale production.",
            ],
            bullets: [
              "Run speeds up to 80 metres per minute.",
              "Excels at solids and banded layouts.",
              "Requires more time and tooling for screen preparation.",
            ],
          },
          {
            heading: "Digital flexibility",
            paragraphs: [
              "Ideal for detailed artwork and smaller runs, enabling fast design changes without new screens.",
            ],
            bullets: [
              "Switch designs quickly and reduce setup time.",
              "Test new colours and motifs instantly.",
              "Cost per metre stays consistent, even at lower volumes.",
            ],
          },
          {
            heading: "Investment strategy",
            paragraphs: [
              "Blend both technologies to suit your range—use rotary for core SKUs and digital for special editions or personalised runs.",
            ],
            bullets: [
              "Analyse job types and average monthly volumes.",
              "Assess team readiness to maintain each platform.",
              "Set KPIs for waste and customer response times.",
            ],
          },
        ],
        keyTakeaways: [
          "Rotary delivers ROI on large, repeat orders.",
          "Digital brings speed and design agility.",
          "Combining both manages risk and keeps you market-ready.",
        ],
      },
    },
  },
  {
    slug: "rotary-vs-digital-4",
    cover: "/file.svg",
    date: "2024-02-18",
    topics: ["production", "roi", "strategy"],
    translations: {
      th: {
        title: "เปรียบเทียบงานพิมพ์โรตารี่และดิจิทัล เลือกอย่างไรให้เหมาะ",
        excerpt:
          "สรุปข้อดี ข้อจำกัด และการประยุกต์ใช้ของแต่ละเทคโนโลยี เพื่อช่วยให้คุณตัดสินใจลงทุนได้อย่างมั่นใจ.",
        category: "การลงทุน",
        tags: ["การลงทุน", "การผลิต"],
        readingTime: "7 นาที",
        author: "ฝ่ายวางแผนการผลิต",
        authorRole: "ทีมกลยุทธ์โรงงาน",
        content: [
          {
            heading: "ข้อได้เปรียบของโรตารี่",
            paragraphs: [
              "เหมาะสำหรับงานปริมาณมากและลวดลายที่ซ้ำต่อเนื่อง ด้วยต้นทุนต่อเมตรที่ต่ำเมื่อผลิตในปริมาณสูง.",
            ],
            bullets: [
              "ความเร็วสูงถึง 80 เมตรต่อนาที",
              "เหมาะกับสีพื้นและลายแถว",
              "ต้องใช้แม่พิมพ์และเวลาเตรียมงานมากกว่า",
            ],
          },
          {
            heading: "ความยืดหยุ่นของดิจิทัล",
            paragraphs: [
              "รองรับงานที่ต้องการรายละเอียดสูงและล็อตขนาดเล็ก ปรับเปลี่ยนดีไซน์ได้รวดเร็วโดยไม่ต้องทำแม่พิมพ์.",
            ],
            bullets: [
              "เปลี่ยนแบบได้รวดเร็ว ลดเวลาขึ้นงาน",
              "ทดลองสีและลายใหม่ได้ทันที",
              "ต้นทุนต่อเมตรคงที่แม้ปริมาณน้อย",
            ],
          },
          {
            heading: "กลยุทธ์การลงทุน",
            paragraphs: [
              "ผสมผสานสองเทคโนโลยีให้เหมาะกับพอร์ตสินค้า โดยใช้โรตารี่สำหรับล็อตหลัก และดิจิทัลสำหรับคอลเลกชันพิเศษหรือการปรับแต่งเฉพาะราย.",
            ],
            bullets: [
              "วิเคราะห์ประเภทงานและปริมาณเฉลี่ยรายเดือน",
              "ประเมินความพร้อมของทีมสำหรับการดูแลเครื่องแต่ละชนิด",
              "ตั้ง KPI ด้านของเสียและเวลาตอบสนองลูกค้า",
            ],
          },
        ],
        keyTakeaways: [
          "โรตารี่ตอบโจทย์ล็อตใหญ่ที่ต้องการความคุ้มทุน",
          "ดิจิทัลเพิ่มความเร็วและความยืดหยุ่นในการออกแบบ",
          "การผสมผสานช่วยบริหารความเสี่ยงและตอบสนองตลาดเร็ว",
        ],
      },
      en: {
        title: "Rotary vs. digital printing—choosing the right fit",
        excerpt:
          "A clear look at the strengths, limits, and best applications for each technology so you can invest with confidence.",
        category: "Investment",
        tags: ["ROI", "Production"],
        readingTime: "7 min read",
        author: "Production planning unit",
        authorRole: "Factory strategy team",
        content: [
          {
            heading: "Rotary advantages",
            paragraphs: [
              "Best suited for high-volume, repeating patterns with low cost per metre once you scale production.",
            ],
            bullets: [
              "Run speeds up to 80 metres per minute.",
              "Excels at solids and banded layouts.",
              "Requires more time and tooling for screen preparation.",
            ],
          },
          {
            heading: "Digital flexibility",
            paragraphs: [
              "Ideal for detailed artwork and smaller runs, enabling fast design changes without new screens.",
            ],
            bullets: [
              "Switch designs quickly and reduce setup time.",
              "Test new colours and motifs instantly.",
              "Cost per metre stays consistent, even at lower volumes.",
            ],
          },
          {
            heading: "Investment strategy",
            paragraphs: [
              "Blend both technologies to suit your range—use rotary for core SKUs and digital for special editions or personalised runs.",
            ],
            bullets: [
              "Analyse job types and average monthly volumes.",
              "Assess team readiness to maintain each platform.",
              "Set KPIs for waste and customer response times.",
            ],
          },
        ],
        keyTakeaways: [
          "Rotary delivers ROI on large, repeat orders.",
          "Digital brings speed and design agility.",
          "Combining both manages risk and keeps you market-ready.",
        ],
      },
    },
  },
  {
    slug: "rotary-vs-digital-5",
    cover: "/file.svg",
    date: "2024-02-18",
    topics: ["production", "roi", "strategy"],
    translations: {
      th: {
        title: "เปรียบเทียบงานพิมพ์โรตารี่และดิจิทัล เลือกอย่างไรให้เหมาะ",
        excerpt:
          "สรุปข้อดี ข้อจำกัด และการประยุกต์ใช้ของแต่ละเทคโนโลยี เพื่อช่วยให้คุณตัดสินใจลงทุนได้อย่างมั่นใจ.",
        category: "การลงทุน",
        tags: ["การลงทุน", "การผลิต"],
        readingTime: "7 นาที",
        author: "ฝ่ายวางแผนการผลิต",
        authorRole: "ทีมกลยุทธ์โรงงาน",
        content: [
          {
            heading: "ข้อได้เปรียบของโรตารี่",
            paragraphs: [
              "เหมาะสำหรับงานปริมาณมากและลวดลายที่ซ้ำต่อเนื่อง ด้วยต้นทุนต่อเมตรที่ต่ำเมื่อผลิตในปริมาณสูง.",
            ],
            bullets: [
              "ความเร็วสูงถึง 80 เมตรต่อนาที",
              "เหมาะกับสีพื้นและลายแถว",
              "ต้องใช้แม่พิมพ์และเวลาเตรียมงานมากกว่า",
            ],
          },
          {
            heading: "ความยืดหยุ่นของดิจิทัล",
            paragraphs: [
              "รองรับงานที่ต้องการรายละเอียดสูงและล็อตขนาดเล็ก ปรับเปลี่ยนดีไซน์ได้รวดเร็วโดยไม่ต้องทำแม่พิมพ์.",
            ],
            bullets: [
              "เปลี่ยนแบบได้รวดเร็ว ลดเวลาขึ้นงาน",
              "ทดลองสีและลายใหม่ได้ทันที",
              "ต้นทุนต่อเมตรคงที่แม้ปริมาณน้อย",
            ],
          },
          {
            heading: "กลยุทธ์การลงทุน",
            paragraphs: [
              "ผสมผสานสองเทคโนโลยีให้เหมาะกับพอร์ตสินค้า โดยใช้โรตารี่สำหรับล็อตหลัก และดิจิทัลสำหรับคอลเลกชันพิเศษหรือการปรับแต่งเฉพาะราย.",
            ],
            bullets: [
              "วิเคราะห์ประเภทงานและปริมาณเฉลี่ยรายเดือน",
              "ประเมินความพร้อมของทีมสำหรับการดูแลเครื่องแต่ละชนิด",
              "ตั้ง KPI ด้านของเสียและเวลาตอบสนองลูกค้า",
            ],
          },
        ],
        keyTakeaways: [
          "โรตารี่ตอบโจทย์ล็อตใหญ่ที่ต้องการความคุ้มทุน",
          "ดิจิทัลเพิ่มความเร็วและความยืดหยุ่นในการออกแบบ",
          "การผสมผสานช่วยบริหารความเสี่ยงและตอบสนองตลาดเร็ว",
        ],
      },
      en: {
        title: "Rotary vs. digital printing—choosing the right fit",
        excerpt:
          "A clear look at the strengths, limits, and best applications for each technology so you can invest with confidence.",
        category: "Investment",
        tags: ["ROI", "Production"],
        readingTime: "7 min read",
        author: "Production planning unit",
        authorRole: "Factory strategy team",
        content: [
          {
            heading: "Rotary advantages",
            paragraphs: [
              "Best suited for high-volume, repeating patterns with low cost per metre once you scale production.",
            ],
            bullets: [
              "Run speeds up to 80 metres per minute.",
              "Excels at solids and banded layouts.",
              "Requires more time and tooling for screen preparation.",
            ],
          },
          {
            heading: "Digital flexibility",
            paragraphs: [
              "Ideal for detailed artwork and smaller runs, enabling fast design changes without new screens.",
            ],
            bullets: [
              "Switch designs quickly and reduce setup time.",
              "Test new colours and motifs instantly.",
              "Cost per metre stays consistent, even at lower volumes.",
            ],
          },
          {
            heading: "Investment strategy",
            paragraphs: [
              "Blend both technologies to suit your range—use rotary for core SKUs and digital for special editions or personalised runs.",
            ],
            bullets: [
              "Analyse job types and average monthly volumes.",
              "Assess team readiness to maintain each platform.",
              "Set KPIs for waste and customer response times.",
            ],
          },
        ],
        keyTakeaways: [
          "Rotary delivers ROI on large, repeat orders.",
          "Digital brings speed and design agility.",
          "Combining both manages risk and keeps you market-ready.",
        ],
      },
    },
  },
  {
    slug: "rotary-vs-digital-6",
    cover: "/file.svg",
    date: "2024-02-18",
    topics: ["production", "roi", "strategy"],
    translations: {
      th: {
        title: "เปรียบเทียบงานพิมพ์โรตารี่และดิจิทัล เลือกอย่างไรให้เหมาะ",
        excerpt:
          "สรุปข้อดี ข้อจำกัด และการประยุกต์ใช้ของแต่ละเทคโนโลยี เพื่อช่วยให้คุณตัดสินใจลงทุนได้อย่างมั่นใจ.",
        category: "การลงทุน",
        tags: ["การลงทุน", "การผลิต"],
        readingTime: "7 นาที",
        author: "ฝ่ายวางแผนการผลิต",
        authorRole: "ทีมกลยุทธ์โรงงาน",
        content: [
          {
            heading: "ข้อได้เปรียบของโรตารี่",
            paragraphs: [
              "เหมาะสำหรับงานปริมาณมากและลวดลายที่ซ้ำต่อเนื่อง ด้วยต้นทุนต่อเมตรที่ต่ำเมื่อผลิตในปริมาณสูง.",
            ],
            bullets: [
              "ความเร็วสูงถึง 80 เมตรต่อนาที",
              "เหมาะกับสีพื้นและลายแถว",
              "ต้องใช้แม่พิมพ์และเวลาเตรียมงานมากกว่า",
            ],
          },
          {
            heading: "ความยืดหยุ่นของดิจิทัล",
            paragraphs: [
              "รองรับงานที่ต้องการรายละเอียดสูงและล็อตขนาดเล็ก ปรับเปลี่ยนดีไซน์ได้รวดเร็วโดยไม่ต้องทำแม่พิมพ์.",
            ],
            bullets: [
              "เปลี่ยนแบบได้รวดเร็ว ลดเวลาขึ้นงาน",
              "ทดลองสีและลายใหม่ได้ทันที",
              "ต้นทุนต่อเมตรคงที่แม้ปริมาณน้อย",
            ],
          },
          {
            heading: "กลยุทธ์การลงทุน",
            paragraphs: [
              "ผสมผสานสองเทคโนโลยีให้เหมาะกับพอร์ตสินค้า โดยใช้โรตารี่สำหรับล็อตหลัก และดิจิทัลสำหรับคอลเลกชันพิเศษหรือการปรับแต่งเฉพาะราย.",
            ],
            bullets: [
              "วิเคราะห์ประเภทงานและปริมาณเฉลี่ยรายเดือน",
              "ประเมินความพร้อมของทีมสำหรับการดูแลเครื่องแต่ละชนิด",
              "ตั้ง KPI ด้านของเสียและเวลาตอบสนองลูกค้า",
            ],
          },
        ],
        keyTakeaways: [
          "โรตารี่ตอบโจทย์ล็อตใหญ่ที่ต้องการความคุ้มทุน",
          "ดิจิทัลเพิ่มความเร็วและความยืดหยุ่นในการออกแบบ",
          "การผสมผสานช่วยบริหารความเสี่ยงและตอบสนองตลาดเร็ว",
        ],
      },
      en: {
        title: "Rotary vs. digital printing—choosing the right fit",
        excerpt:
          "A clear look at the strengths, limits, and best applications for each technology so you can invest with confidence.",
        category: "Investment",
        tags: ["ROI", "Production"],
        readingTime: "7 min read",
        author: "Production planning unit",
        authorRole: "Factory strategy team",
        content: [
          {
            heading: "Rotary advantages",
            paragraphs: [
              "Best suited for high-volume, repeating patterns with low cost per metre once you scale production.",
            ],
            bullets: [
              "Run speeds up to 80 metres per minute.",
              "Excels at solids and banded layouts.",
              "Requires more time and tooling for screen preparation.",
            ],
          },
          {
            heading: "Digital flexibility",
            paragraphs: [
              "Ideal for detailed artwork and smaller runs, enabling fast design changes without new screens.",
            ],
            bullets: [
              "Switch designs quickly and reduce setup time.",
              "Test new colours and motifs instantly.",
              "Cost per metre stays consistent, even at lower volumes.",
            ],
          },
          {
            heading: "Investment strategy",
            paragraphs: [
              "Blend both technologies to suit your range—use rotary for core SKUs and digital for special editions or personalised runs.",
            ],
            bullets: [
              "Analyse job types and average monthly volumes.",
              "Assess team readiness to maintain each platform.",
              "Set KPIs for waste and customer response times.",
            ],
          },
        ],
        keyTakeaways: [
          "Rotary delivers ROI on large, repeat orders.",
          "Digital brings speed and design agility.",
          "Combining both manages risk and keeps you market-ready.",
        ],
      },
    },
  },
  {
    slug: "rotary-vs-digital-8",
    cover: "/file.svg",
    date: "2024-02-18",
    topics: ["production", "roi", "strategy"],
    translations: {
      th: {
        title: "เปรียบเทียบงานพิมพ์โรตารี่และดิจิทัล เลือกอย่างไรให้เหมาะ",
        excerpt:
          "สรุปข้อดี ข้อจำกัด และการประยุกต์ใช้ของแต่ละเทคโนโลยี เพื่อช่วยให้คุณตัดสินใจลงทุนได้อย่างมั่นใจ.",
        category: "การลงทุน",
        tags: ["การลงทุน", "การผลิต"],
        readingTime: "7 นาที",
        author: "ฝ่ายวางแผนการผลิต",
        authorRole: "ทีมกลยุทธ์โรงงาน",
        content: [
          {
            heading: "ข้อได้เปรียบของโรตารี่",
            paragraphs: [
              "เหมาะสำหรับงานปริมาณมากและลวดลายที่ซ้ำต่อเนื่อง ด้วยต้นทุนต่อเมตรที่ต่ำเมื่อผลิตในปริมาณสูง.",
            ],
            bullets: [
              "ความเร็วสูงถึง 80 เมตรต่อนาที",
              "เหมาะกับสีพื้นและลายแถว",
              "ต้องใช้แม่พิมพ์และเวลาเตรียมงานมากกว่า",
            ],
          },
          {
            heading: "ความยืดหยุ่นของดิจิทัล",
            paragraphs: [
              "รองรับงานที่ต้องการรายละเอียดสูงและล็อตขนาดเล็ก ปรับเปลี่ยนดีไซน์ได้รวดเร็วโดยไม่ต้องทำแม่พิมพ์.",
            ],
            bullets: [
              "เปลี่ยนแบบได้รวดเร็ว ลดเวลาขึ้นงาน",
              "ทดลองสีและลายใหม่ได้ทันที",
              "ต้นทุนต่อเมตรคงที่แม้ปริมาณน้อย",
            ],
          },
          {
            heading: "กลยุทธ์การลงทุน",
            paragraphs: [
              "ผสมผสานสองเทคโนโลยีให้เหมาะกับพอร์ตสินค้า โดยใช้โรตารี่สำหรับล็อตหลัก และดิจิทัลสำหรับคอลเลกชันพิเศษหรือการปรับแต่งเฉพาะราย.",
            ],
            bullets: [
              "วิเคราะห์ประเภทงานและปริมาณเฉลี่ยรายเดือน",
              "ประเมินความพร้อมของทีมสำหรับการดูแลเครื่องแต่ละชนิด",
              "ตั้ง KPI ด้านของเสียและเวลาตอบสนองลูกค้า",
            ],
          },
        ],
        keyTakeaways: [
          "โรตารี่ตอบโจทย์ล็อตใหญ่ที่ต้องการความคุ้มทุน",
          "ดิจิทัลเพิ่มความเร็วและความยืดหยุ่นในการออกแบบ",
          "การผสมผสานช่วยบริหารความเสี่ยงและตอบสนองตลาดเร็ว",
        ],
      },
      en: {
        title: "Rotary vs. digital printing—choosing the right fit",
        excerpt:
          "A clear look at the strengths, limits, and best applications for each technology so you can invest with confidence.",
        category: "Investment",
        tags: ["ROI", "Production"],
        readingTime: "7 min read",
        author: "Production planning unit",
        authorRole: "Factory strategy team",
        content: [
          {
            heading: "Rotary advantages",
            paragraphs: [
              "Best suited for high-volume, repeating patterns with low cost per metre once you scale production.",
            ],
            bullets: [
              "Run speeds up to 80 metres per minute.",
              "Excels at solids and banded layouts.",
              "Requires more time and tooling for screen preparation.",
            ],
          },
          {
            heading: "Digital flexibility",
            paragraphs: [
              "Ideal for detailed artwork and smaller runs, enabling fast design changes without new screens.",
            ],
            bullets: [
              "Switch designs quickly and reduce setup time.",
              "Test new colours and motifs instantly.",
              "Cost per metre stays consistent, even at lower volumes.",
            ],
          },
          {
            heading: "Investment strategy",
            paragraphs: [
              "Blend both technologies to suit your range—use rotary for core SKUs and digital for special editions or personalised runs.",
            ],
            bullets: [
              "Analyse job types and average monthly volumes.",
              "Assess team readiness to maintain each platform.",
              "Set KPIs for waste and customer response times.",
            ],
          },
        ],
        keyTakeaways: [
          "Rotary delivers ROI on large, repeat orders.",
          "Digital brings speed and design agility.",
          "Combining both manages risk and keeps you market-ready.",
        ],
      },
    },
  },
  {
    slug: "rotary-vs-digital-9",
    cover: "/file.svg",
    date: "2024-02-18",
    topics: ["production", "roi", "strategy"],
    translations: {
      th: {
        title: "เปรียบเทียบงานพิมพ์โรตารี่และดิจิทัล เลือกอย่างไรให้เหมาะ",
        excerpt:
          "สรุปข้อดี ข้อจำกัด และการประยุกต์ใช้ของแต่ละเทคโนโลยี เพื่อช่วยให้คุณตัดสินใจลงทุนได้อย่างมั่นใจ.",
        category: "การลงทุน",
        tags: ["การลงทุน", "การผลิต"],
        readingTime: "7 นาที",
        author: "ฝ่ายวางแผนการผลิต",
        authorRole: "ทีมกลยุทธ์โรงงาน",
        content: [
          {
            heading: "ข้อได้เปรียบของโรตารี่",
            paragraphs: [
              "เหมาะสำหรับงานปริมาณมากและลวดลายที่ซ้ำต่อเนื่อง ด้วยต้นทุนต่อเมตรที่ต่ำเมื่อผลิตในปริมาณสูง.",
            ],
            bullets: [
              "ความเร็วสูงถึง 80 เมตรต่อนาที",
              "เหมาะกับสีพื้นและลายแถว",
              "ต้องใช้แม่พิมพ์และเวลาเตรียมงานมากกว่า",
            ],
          },
          {
            heading: "ความยืดหยุ่นของดิจิทัล",
            paragraphs: [
              "รองรับงานที่ต้องการรายละเอียดสูงและล็อตขนาดเล็ก ปรับเปลี่ยนดีไซน์ได้รวดเร็วโดยไม่ต้องทำแม่พิมพ์.",
            ],
            bullets: [
              "เปลี่ยนแบบได้รวดเร็ว ลดเวลาขึ้นงาน",
              "ทดลองสีและลายใหม่ได้ทันที",
              "ต้นทุนต่อเมตรคงที่แม้ปริมาณน้อย",
            ],
          },
          {
            heading: "กลยุทธ์การลงทุน",
            paragraphs: [
              "ผสมผสานสองเทคโนโลยีให้เหมาะกับพอร์ตสินค้า โดยใช้โรตารี่สำหรับล็อตหลัก และดิจิทัลสำหรับคอลเลกชันพิเศษหรือการปรับแต่งเฉพาะราย.",
            ],
            bullets: [
              "วิเคราะห์ประเภทงานและปริมาณเฉลี่ยรายเดือน",
              "ประเมินความพร้อมของทีมสำหรับการดูแลเครื่องแต่ละชนิด",
              "ตั้ง KPI ด้านของเสียและเวลาตอบสนองลูกค้า",
            ],
          },
        ],
        keyTakeaways: [
          "โรตารี่ตอบโจทย์ล็อตใหญ่ที่ต้องการความคุ้มทุน",
          "ดิจิทัลเพิ่มความเร็วและความยืดหยุ่นในการออกแบบ",
          "การผสมผสานช่วยบริหารความเสี่ยงและตอบสนองตลาดเร็ว",
        ],
      },
      en: {
        title: "Rotary vs. digital printing—choosing the right fit",
        excerpt:
          "A clear look at the strengths, limits, and best applications for each technology so you can invest with confidence.",
        category: "Investment",
        tags: ["ROI", "Production"],
        readingTime: "7 min read",
        author: "Production planning unit",
        authorRole: "Factory strategy team",
        content: [
          {
            heading: "Rotary advantages",
            paragraphs: [
              "Best suited for high-volume, repeating patterns with low cost per metre once you scale production.",
            ],
            bullets: [
              "Run speeds up to 80 metres per minute.",
              "Excels at solids and banded layouts.",
              "Requires more time and tooling for screen preparation.",
            ],
          },
          {
            heading: "Digital flexibility",
            paragraphs: [
              "Ideal for detailed artwork and smaller runs, enabling fast design changes without new screens.",
            ],
            bullets: [
              "Switch designs quickly and reduce setup time.",
              "Test new colours and motifs instantly.",
              "Cost per metre stays consistent, even at lower volumes.",
            ],
          },
          {
            heading: "Investment strategy",
            paragraphs: [
              "Blend both technologies to suit your range—use rotary for core SKUs and digital for special editions or personalised runs.",
            ],
            bullets: [
              "Analyse job types and average monthly volumes.",
              "Assess team readiness to maintain each platform.",
              "Set KPIs for waste and customer response times.",
            ],
          },
        ],
        keyTakeaways: [
          "Rotary delivers ROI on large, repeat orders.",
          "Digital brings speed and design agility.",
          "Combining both manages risk and keeps you market-ready.",
        ],
      },
    },
  },
];

export const getLocalizedPosts = (language) =>
  blogPosts.map((post) => ({
    slug: post.slug,
    cover: post.cover,
    date: post.date,
    featured: Boolean(post.featured),
    topics: post.topics,
    ...post.translations[language],
  }));

export const getLocalizedPost = (slug, language) => {
  const base = blogPosts.find((post) => post.slug === slug);
  if (!base) {
    return undefined;
  }

  return {
    slug: base.slug,
    cover: base.cover,
    date: base.date,
    featured: Boolean(base.featured),
    topics: base.topics,
    ...base.translations[language],
  };
};
