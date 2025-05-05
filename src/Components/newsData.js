const newsData = [
    {
      id: 1,
      headline: "Global Economy Faces Slowdown in 2024",
      details: "Economists warn of a potential global slowdown next year due to geopolitical tensions and inflationary pressures.",
      category: ["economics", "general"]
    },
    {
      id: 2,
      headline: "New AI Technology Revolutionizes Medicine",
      details: "AI-powered diagnostic tools are expected to transform healthcare, offering quicker and more accurate disease detection for patients worldwide.",
      category: ["technology"]
    },
    {
      id: 3,
      headline: "Oscar Nominees Announced for 2024",
      details: "The 2024 Oscar nominees feature diverse talent and groundbreaking films, highlighting a progressive shift in the entertainment industry.",
      category: ["entertainment"]
    },
    {
      id: 4,
      headline: "Prime Minister Introduces New Tax Policy",
      details: "The government has unveiled a new tax regime aiming to boost public welfare and economic stability, effective next fiscal year.",
      category: ["politics", "economics"]
    },
    {
      id: 5,
      headline: "SpaceX Launches New Mars Mission",
      details: "SpaceX successfully launches its latest spacecraft, inching closer to its goal of Mars colonization in the next decade.",
      category: ["technology"]
    },
    {
      id: 6,
      headline: "Bollywood Star Wins International Award",
      details: "A leading Bollywood actor has been honored at an international film festival for their groundbreaking performance in a biographical drama.",
      category: ["entertainment"]
    },
    {
      id: 7,
      headline: "Major Cyberattack Hits Global Banks",
      details: "Hackers target financial institutions in a widespread cyberattack, exposing vulnerabilities in outdated security systems.",
      category: ["technology", "economics"]
    },
    {
      id: 8,
      headline: "Wildlife Conservation Efforts Show Progress",
      details: "Global wildlife populations have started to recover thanks to strengthened conservation efforts and stricter anti-poaching laws.",
      category: ["general"]
    },
    {
      id: 9,
      headline: "Parliament Passes Landmark Education Bill",
      details: "A new education bill has been passed to provide free quality education to underprivileged children across the nation.",
      category: ["politics"]
    },
    {
      id: 10,
      headline: "Cryptocurrency Markets Crash Overnight",
      details: "Cryptocurrencies experience a significant crash, with Bitcoin falling by 30%, causing panic among investors globally.",
      category: ["economics", "technology"]
    },
    {
      id: 11,
      headline: "Celebrities Join Forces for Charity Concert",
      details: "Renowned musicians and actors unite for a charity concert to raise funds for disaster-stricken regions.",
      category: ["entertainment", "general"]
    },
    {
      id: 12,
      headline: "Scientists Discover New Species in Amazon",
      details: "A team of biologists has discovered a new amphibian species deep within the Amazon rainforest.",
      category: ["general"]
    },
    {
      id: 13,
      headline: "Stock Market Rebounds After Volatile Week",
      details: "Global stock markets see a surprising recovery after a week of extreme volatility fueled by investor uncertainty.",
      category: ["economics"]
    },
    {
      id: 14,
      headline: "Streaming Services Announce Price Hikes",
      details: "Major streaming platforms have announced increased subscription fees, citing higher production costs for original content.",
      category: ["entertainment"]
    },
    {
      id: 15,
      headline: "Electric Vehicles Gain Traction in Europe",
      details: "Electric vehicle sales in Europe have surged, fueled by government incentives and growing environmental awareness.",
      category: ["technology", "economics"]
    },
    {
      id: 16,
      headline: "New Policy to Reduce Carbon Emissions",
      details: "The government has introduced measures aimed at reducing carbon emissions by 40% over the next decade.",
      category: ["politics"]
    },
    {
      id: 17,
      headline: "Hollywood Icon Announces Retirement",
      details: "A legendary Hollywood actor announces their retirement, ending an illustrious career spanning over four decades.",
      category: ["entertainment"]
    },
    {
      id: 18,
      headline: "5G Technology Expands Globally",
      details: "The rollout of 5G networks is accelerating worldwide, promising faster internet speeds and new tech innovations.",
      category: ["technology"]
    },
    {
      id: 19,
      headline: "New Trade Deal Strengthens Global Relations",
      details: "A historic trade deal has been signed between major economies, aiming to boost cooperation and economic growth.",
      category: ["economics", "politics"]
    },
    {
      id: 20,
      headline: "Major Film Studio Unveils Summer Blockbusters",
      details: "A leading film studio has announced its summer blockbuster lineup, promising action-packed entertainment for fans.",
      category: ["entertainment"]
    },
    {
      id: 21,
      headline: "New Research Reveals Ancient Civilizations",
      details: "Archaeologists uncover remains of an advanced ancient civilization, rewriting historical timelines and offering new insights.",
      category: ["general"]
    },
    {
      id: 22,
      headline: "Government Launches Rural Development Program",
      details: "A new initiative aims to boost rural infrastructure, healthcare, and education, improving the lives of millions in remote areas.",
      category: ["politics", "general"]
    },
    {
      id: 23,
      headline: "Sports Team Wins National Championship",
      details: "The underdog team clinches the national championship after a thrilling final match, surprising fans and critics alike.",
      category: ["general"]
    },
    {
      id: 24,
      headline: "Tech Startups Flourish in Asia",
      details: "Asia's tech startup ecosystem is thriving, with record-breaking investments and innovative products entering global markets.",
      category: ["technology", "economics"]
    },
    {
      id: 25,
      headline: "New Legislation Supports Small Businesses",
      details: "A new law provides tax incentives and grants for small businesses, aiming to drive economic growth and innovation.",
      category: ["politics", "economics"]
    },
    {
      id: 26,
      headline: "Innovative Film Wins Festival Award",
      details: "A groundbreaking film exploring social issues wins the top prize at a prestigious international film festival.",
      category: ["entertainment"]
    },
    {
      id: 27,
      headline: "Climate Change Summit Yields Promising Results",
      details: "Global leaders agree on key initiatives to combat climate change, focusing on renewable energy and carbon reduction.",
      category: ["politics", "general"]
    },
    {
      id: 28,
      headline: "Tech Giant Unveils New VR Platform",
      details: "A leading tech company launches an advanced VR platform, set to revolutionize gaming, education, and remote work.",
      category: ["technology"]
    },
    {
      id: 29,
      headline: "Economy Boosted by Tourism Surge",
      details: "Tourism sees a post-pandemic rebound, boosting the hospitality industry and contributing to national economic recovery.",
      category: ["economics", "general"]
    },
    {
      id: 30,
      headline: "Historic Election Sets Record Turnout",
      details: "A record number of citizens participate in a historic election, shaping the future of the nation's governance.",
      category: ["politics"]
    },
    {
      id: 31,
      headline: "Scientists Develop Eco-Friendly Packaging",
      details: "New biodegradable packaging materials are introduced, aiming to reduce plastic waste and promote sustainability.",
      category: ["technology", "general"]
    },
    {
      id: 32,
      headline: "Cultural Festival Celebrates Diversity",
      details: "A week-long festival showcasing art, music, and cuisine highlights cultural diversity and unity in a globalized world.",
      category: ["entertainment", "general"]
    },
    {
      id: 33,
      headline: "Health Experts Warn of New Epidemic",
      details: "Doctors raise concerns over the rapid spread of a new virus, urging governments to strengthen healthcare systems.",
      category: ["general"]
    },
    {
      id: 34,
      headline: "Tech Firm Acquires AI Startup",
      details: "A major tech company acquires a promising AI startup, signaling a push toward innovative machine learning applications.",
      category: ["technology", "economics"]
    },
    {
      id: 35,
      headline: "Government Reduces Fuel Prices",
      details: "Fuel prices have been cut significantly, offering relief to citizens and boosting consumer spending.",
      category: ["economics", "politics"]
    },
    {
      id: 36,
      headline: "Famous Actor Stars in Historical Drama",
      details: "A renowned actor takes on a challenging role in a historical drama, expected to win critical acclaim.",
      category: ["entertainment"]
    },
    {
      id: 37,
      headline: "Global Tech Firms Pledge Carbon Neutrality",
      details: "Top tech companies commit to achieving carbon neutrality by 2030, investing in renewable energy and sustainable practices.",
      category: ["technology", "general"]
    },
    {
      id: 38,
      headline: "Economic Forum Highlights Global Challenges",
      details: "World leaders discuss critical global economic challenges, from inflation to trade imbalances, at a major forum.",
      category: ["economics", "politics"]
    },
    {
      id: 39,
      headline: "Online Education Platforms See Growth",
      details: "E-learning platforms report increased enrollment as more students and professionals opt for remote education opportunities.",
      category: ["technology", "general"]
      },
      {
      id: 40,
      headline: "New Electric Plane Breaks Aviation Records",
      details: "The world’s first fully electric aircraft sets a new record for longest flight, marking a milestone in sustainable aviation.",
      category: ["technology"]
      },
      {
      id: 41,
      headline: "New Cultural Policy Promotes Heritage Preservation",
      details: "A government policy aims to protect historical monuments and promote cultural heritage through increased funding and tourism.",
      category: ["politics", "general"]
      },
      {
      id: 42,
      headline: "Breakthrough in Renewable Energy Storage",
      details: "Scientists develop an advanced energy storage system that could make renewable energy sources more reliable and efficient.",
      category: ["technology"]
      },
      {
      id: 43,
      headline: "Famous Comedian Announces World Tour",
      details: "A renowned comedian has announced an international stand-up tour, promising laughter and entertainment for fans worldwide.",
      category: ["entertainment"]
      },
      {
      id: 44,
      headline: "High Inflation Affects Global Markets",
      details: "Soaring inflation rates lead to price hikes and economic uncertainty, affecting global markets and consumers alike.",
      category: ["economics"]
      },
      {
      id: 45,
      headline: "Gaming Industry Sees Record Revenue",
      details: "The gaming industry achieves record-breaking revenues, fueled by new releases and growing popularity of esports.",
      category: ["entertainment", "economics"]
      },
      {
      id: 46,
      headline: "New Policy Supports Renewable Energy Startups",
      details: "The government introduces subsidies and grants for startups working on renewable energy solutions.",
      category: ["politics", "technology"]
      },
      {
      id: 47,
      headline: "New Study Reveals Effects of Social Media",
      details: "A recent study highlights the mental health impacts of social media, urging users to adopt healthier online habits.",
      category: ["general"]
      },
      {
      id: 48,
      headline: "Major Film Festival Opens in Cannes",
      details: "The Cannes Film Festival kicks off with an impressive lineup of films, attracting celebrities and movie enthusiasts worldwide.",
      category: ["entertainment"]
      },
      {
      id: 49,
      headline: "New Economic Pact Strengthens Regional Ties",
      details: "Neighboring countries sign an economic pact to enhance trade, infrastructure, and mutual cooperation for growth.",
      category: ["politics", "economics"]
      },
      {
      id: 50,
      headline: "Tech Innovations Drive Health Sector Growth",
      details: "Advancements in medical technology, from wearable devices to AI diagnostics, are reshaping global healthcare systems.",
      category: ["technology", "general"]
      }
      ];
      
      export default newsData