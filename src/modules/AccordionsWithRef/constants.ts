const data = [
  {
    title: "Wallet #15a4",
    percentage: 0.4,
    amount: 1000,
    assets: [
      {
        name: "Bitcoin",
        amount: 0.5,
        value: 500,
      },
      {
        name: "Ethereum",
        amount: 0.5,
        value: 500,
      },
    ],
  },
  {
    title: "Wallet #22245",
    percentage: 0.6,
    amount: 8513,
    assets: [
      {
        name: "Dogecoin",
        amount: 0.8,
        value: 8513 * 0.8,
      },
      {
        name: "Ethereum",
        amount: 0.1,
        value: 8513 * 0.1,
      },
      {
        name: "Solana",
        amount: 0.1,
        value: 8513 * 0.1,
      },
    ],
  },
  {
    title: "Wallet #8f3c",
    percentage: 0.2,
    amount: 500,
    assets: [
      {
        name: "Bitcoin",
        amount: 0.3,
        value: 150,
      },
      {
        name: "Cardano",
        amount: 500 / 3,
        value: 500 / 3,
      },
    ],
  },
  {
    title: "Wallet #39b2",
    percentage: 0.8,
    amount: 25000,
    assets: [
      {
        name: "Bitcoin",
        amount: 2,
        value: 10000,
      },
      {
        name: "Ethereum",
        amount: 10,
        value: 5000,
      },
      {
        name: "Litecoin",
        amount: 25,
        value: 2500,
      },
    ],
  },
  {
    title: "Wallet #a8d7",
    percentage: 0.1,
    amount: 100,
    assets: [
      {
        name: "Chainlink",
        amount: 1,
        value: 100,
      },
    ],
  },
];

type IWallet = typeof data[0];

export default data;
export type { IWallet };
