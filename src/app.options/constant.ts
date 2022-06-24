// FractionDigits for converter
export const defaultFractionDigits = 2;

// win loose count on main page
export const winLooseCount = 3;

// proposals per page on dao info page
export const proposalsOnPageCount = 4;

// news count on news page
export const newsOnPageCount = 120;

// news count on dao info page
export const newsOnDaoPageCount = 12;

// news count on main page
export const newsOnMainPageCount = 4;

// TODO, strings for right sorting
export const sortNewsString = 'published_at,desc';
export const sortProposalsString = 'submittedAt%2Cdesc';

// for save active period and type in localeStorage
export const storageStatisticTypeKey = 'T_';
export const storageStatisticPeriodKey = 'P_';

export const about = {
  whatIs: 'DAO (Decentralized Autonomous Organizations) are a new form of self-governed associations of people dedicated to achieving a specific goal or managing some digital or real-world facility. A DAO consists of a group of people (members), with either open or restricted participation, with equal or differentiated rights. Decisions in a DAO are taken by voting for proposals in which all members or a selected group of members may take part.',
  goal: 'The goal of the DAO Pulse project is to build a public web application that accumulates and stores records about existing DAOs, classifies them using a comprehensive set of attributes, and monitors dynamic properties (members count, TVL, etc.). The data is automatically retrieved from several external sources and processed to produce a consistent view. Also, DAO Pulse Score is calculated based on the data to concisely represent DAO performance.DAO Pulse is not affiliated with any specific DAO projects. The data is presented for informational purposes only. It does not reflect any opinions and should not be considered as investment advice.',
  team: [
    { name: 'Igor Mikhalev', linkedin: 'https://www.linkedin.com/in/mikhalev/'},
    { name: 'Bihao Song', linkedin: 'https://www.linkedin.com/in/bihaosong/'},
    { name: 'Kaj Burchardi', linkedin: 'https://www.linkedin.com/in/kaj-burchardi-b1030242/'},
    { name: 'Raoul Schipper', linkedin: 'https://www.linkedin.com/in/raoulschipper/'},
    { name: 'Igor Struchkov', linkedin: 'https://www.linkedin.com/in/igor-struchkov-7a4994163/'},
    { name: 'Sergey Khrul', linkedin: 'https://www.linkedin.com/in/khrulsergey/'},
    { name: 'Rita Novoselova', linkedin: 'https://www.linkedin.com/in/rita-novosyolova/'},
    { name: 'Andrey Smirnov', linkedin: 'https://www.linkedin.com/in/andrew-smirnov-65714b228/'},
    { name: 'Sebastian Kortmann', linkedin: 'https://www.linkedin.com/in/sebastiankortmann/'},
  ]
};

export const scoreFormula = {
  summand: [
    'w1 * [Total market cap]',
    'w2 * [Trading volume]',
    'w3 * [Token holders]',
    'w4 * [TVL]',
    'w5 * [Total treasury]',
    'w6 * [Proposals created]',
    'w7 * [Proposal votes]',
  ],
  multiplier: {
    w1: 0.000001,
    w2: 0.000001,
    w3: 0.01,
    w4: 0.000001,
    w5: 0.000001,
    w6: 1000,
    w7: 1
  }
};
