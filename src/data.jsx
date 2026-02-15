const newsData = {
  status: "ok",
  totalResults: 20,
  articles: [

    {
      source: { id: "forbes", name: "Forbes" },
      author: "Siladitya Ray",
      title: "Winklevoss Twins Donate $2 Million in Bitcoin to Trump",
      description: "Crypto billionaires announce major bitcoin donation supporting Trump.",
      url: "https://www.forbes.com/",
      urlToImage: "https://imageio.forbes.com/specials-images/imageserve/66750618cf14c5b05e0af09e/0x0.jpg",
      publishedAt: "2024-06-21T04:50:52Z",
      category: "business"
    },

    {
      source: { id: "livemint", name: "LiveMint" },
      author: "Vikash Kumar Jain",
      title: "AI and Blockchain for Unclaimed Asset Recovery",
      description: "AI and blockchain solutions can streamline unclaimed investment recovery.",
      url: "https://www.livemint.com/",
      urlToImage: "https://www.livemint.com/lm-img/img/2024/06/20/1600x900/Vikash_Kumar_Jain.jpg",
      publishedAt: "2024-06-21T04:47:43Z",
      category: "technology"
    },

    {
      source: { id: "toi", name: "Times of India" },
      author: "TOI Business Desk",
      title: "Winklevoss Twins Donate $2M in Bitcoin to Trump",
      description: "Gemini founders contribute bitcoin to Trump's presidential campaign.",
      url: "https://timesofindia.indiatimes.com/",
      urlToImage: "https://static.toiimg.com/photo/msid-111153747.cms",
      publishedAt: "2024-06-21T02:49:44Z",
      category: "business"
    },

    {
      source: { id: "rollingstone", name: "Rolling Stone" },
      author: "Andrew Perez",
      title: "Trump Seeks Billionaire Donor Support",
      description: "Major campaign donors increase support amid policy promises.",
      url: "https://www.rollingstone.com/",
      urlToImage: "https://www.rollingstone.com/wp-content/uploads/2024/06/trump-money-2.jpg",
      publishedAt: "2024-06-21T02:48:27Z",
      category: "general"
    },

    {
      source: { id: "benzinga", name: "Benzinga" },
      author: "Aniket Verma",
      title: "Bitcoin and Ethereum Trade in Tight Range",
      description: "Crypto market remains cautious amid economic uncertainty.",
      url: "https://www.benzinga.com/",
      urlToImage: "https://cdn.benzinga.com/files/images/story/crypto.jpeg",
      publishedAt: "2024-06-21T01:53:47Z",
      category: "business"
    },

    {
      source: { id: "independent", name: "The Independent" },
      author: "Josh Marcus",
      title: "Debate Over Trump-Linked Crypto Coin",
      description: "Questions rise about origins of controversial crypto token.",
      url: "https://www.independent.co.uk/",
      urlToImage: "https://static.independent.co.uk/trump-crypto.jpg",
      publishedAt: "2024-06-20T23:03:02Z",
      category: "technology"
    },

    {
      source: { id: "theguardian", name: "The Guardian" },
      author: "Callum Jones",
      title: "Winklevoss Twins Back Trump with Bitcoin",
      description: "Crypto executives pledge financial support for campaign.",
      url: "https://www.theguardian.com/",
      urlToImage: "https://i.guim.co.uk/img/media/crypto.jpg",
      publishedAt: "2024-06-20T22:04:20Z",
      category: "general"
    },

    {
      source: { id: "coindesk", name: "CoinDesk" },
      author: "Jesse Hamilton",
      title: "Gemini Founders Donate $1M Each",
      description: "Crypto leaders contribute major bitcoin donations.",
      url: "https://www.coindesk.com/",
      urlToImage: "https://www.coindesk.com/resizer/image.jpg",
      publishedAt: "2024-06-20T21:56:32Z",
      category: "business"
    },

    {
      source: { id: "breitbart", name: "Breitbart" },
      author: "Sean Moran",
      title: "Crypto Founders Donate $2M to Trump",
      description: "Gemini founders cite regulatory concerns.",
      url: "https://www.breitbart.com/",
      urlToImage: "https://media.breitbart.com/media/crypto.jpg",
      publishedAt: "2024-06-20T22:00:59Z",
      category: "general"
    },

    {
      source: { id: "dailydot", name: "Daily Dot" },
      author: "Marlon Ettinger",
      title: "Crypto Influencer Ignores NFT Lawsuit",
      description: "Legal battle highlights risks in NFT industry.",
      url: "https://www.dailydot.com/",
      urlToImage: "https://uploads.dailydot.com/2024/06/logan-paul-crypto.jpg",
      publishedAt: "2024-06-20T22:13:23Z",
      category: "technology"
    },

    {
      source: { id: "benzinga", name: "Benzinga" },
      author: "Kaitlyn Wolf",
      title: "Challenges Facing Prop Trading Industry",
      description: "Industry faces credibility issues amid rapid expansion.",
      url: "https://www.benzinga.com/general/",
      urlToImage: "https://cdn.benzinga.com/files/images/story/earn2trade.png",
      publishedAt: "2024-06-20T22:28:52Z",
      category: "business"
    },

    {
      source: { id: "it_chosun", name: "IT Chosun" },
      author: "Jess Won",
      title: "600 Digital Assets Face Qualification Review",
      description: "South Korea to review crypto listings under new regulation.",
      url: "https://it.chosun.com/",
      urlToImage: "https://cdn.it.chosun.com/news/photo/crypto.jpg",
      publishedAt: "2024-06-21T02:45:40Z",
      category: "technology"
    },

    {
      source: { id: "guardian", name: "The Guardian" },
      author: "Reuters",
      title: "Crypto Industry Intensifies Political Influence",
      description: "Digital asset firms expand campaign funding efforts.",
      url: "https://www.theguardian.com/",
      urlToImage: "https://i.guim.co.uk/img/media/politics.jpg",
      publishedAt: "2024-06-20T20:00:00Z",
      category: "business"
    },

    {
      source: { id: "benzinga", name: "Benzinga" },
      author: "Market Analyst",
      title: "Crypto Market Cap Slips 0.6%",
      description: "Global crypto market sees slight pullback.",
      url: "https://www.benzinga.com/",
      urlToImage: "https://cdn.benzinga.com/files/images/story/market.jpg",
      publishedAt: "2024-06-20T19:30:00Z",
      category: "business"
    },

    {
      source: { id: "coindesk", name: "CoinDesk" },
      author: "Crypto Reporter",
      title: "Fairshake PAC Raises $169M",
      description: "Crypto political action committee expands funding.",
      url: "https://www.coindesk.com/",
      urlToImage: "https://www.coindesk.com/resizer/pac.jpg",
      publishedAt: "2024-06-20T18:00:00Z",
      category: "business"
    },

    {
      source: { id: "independent", name: "The Independent" },
      author: "Political Desk",
      title: "Crypto Becomes Major Election Issue",
      description: "Digital currency emerges as key 2024 election topic.",
      url: "https://www.independent.co.uk/",
      urlToImage: "https://static.independent.co.uk/election.jpg",
      publishedAt: "2024-06-20T17:00:00Z",
      category: "general"
    },

    {
      source: { id: "guardian", name: "The Guardian" },
      author: "Business Staff",
      title: "Crypto Leaders Criticize Regulations",
      description: "Executives warn against restrictive crypto policies.",
      url: "https://www.theguardian.com/",
      urlToImage: "https://i.guim.co.uk/img/media/crypto2.jpg",
      publishedAt: "2024-06-20T16:30:00Z",
      category: "business"
    },

    {
      source: { id: "benzinga", name: "Benzinga" },
      author: "Crypto Analyst",
      title: "Whale Activity Signals Potential Reversal",
      description: "Large investor flows hint at possible crypto rebound.",
      url: "https://www.benzinga.com/",
      urlToImage: "https://cdn.benzinga.com/files/images/story/whale.jpg",
      publishedAt: "2024-06-20T15:45:00Z",
      category: "business"
    },

    {
      source: { id: "rollingstone", name: "Rolling Stone" },
      author: "Politics Team",
      title: "Campaign Funding Hits Record Levels",
      description: "Election financing sees surge from tech donors.",
      url: "https://www.rollingstone.com/",
      urlToImage: "https://www.rollingstone.com/wp-content/uploads/2024/06/campaign.jpg",
      publishedAt: "2024-06-20T15:00:00Z",
      category: "general"
    },

    {
      source: { id: "forbes", name: "Forbes" },
      author: "Business Reporter",
      title: "Crypto Executives Increase Political Donations",
      description: "Digital asset leaders expand influence in US politics.",
      url: "https://www.forbes.com/",
      urlToImage: "https://imageio.forbes.com/specials-images/imageserve/crypto.jpg",
      publishedAt: "2024-06-20T14:30:00Z",
      category: "business"
    }

  ]
};

export default newsData;
