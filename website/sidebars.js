/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  buildDecentralizedAppsSidebar: [
    {
      type: 'doc',
      id: 'for-devs/gentle-introduction-dapps',
      label: 'A gentle introduction to Arbitrum',
    },
    {
      type: 'category',
      label: 'Product introductions',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'stylus/stylus-gentle-introduction',
          label: 'Stylus',
        },
        {
          type: 'doc',
          id: 'orbit-gentle-introduction',
          label: 'Orbit',
        },
      ],
    },
    {
      type: 'category',
      label: 'Use the bridge',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'getting-started-users',
          label: 'Quickstart',
        },
        {
          type: 'doc',
          label: 'Troubleshooting',
          id: 'for-users/troubleshooting-users',
        },
        {
          type: 'doc',
          id: 'bridge-tokens/concepts/usdc-concept',
          label: 'Concept: USDC on Arbitrum One',
        },
      ],
    },
    {
      type: 'category',
      label: 'Build dApps and smart contracts',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Quickstarts',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'for-devs/quickstart-solidity-hardhat',
              label: 'Build your first dApp (Solidity)',
            },
            {
              type: 'doc',
              id: 'stylus/stylus-quickstart',
              label: 'Write a smart contract (Rust, via Stylus)',
            },
          ],
        },
        {
          type: 'category',
          label: 'Comparing Arbitrum and Ethereum',
          items: [
            {
              type: 'doc',
              label: 'Comparison overview',
              id: 'for-devs/concepts/differences-between-arbitrum-ethereum/overview',
            },
            {
              type: 'doc',
              label: 'Block numbers and time',
              id: 'for-devs/concepts/differences-between-arbitrum-ethereum/block-numbers-and-time',
            },
            {
              type: 'doc',
              label: 'RPC methods',
              id: 'for-devs/concepts/differences-between-arbitrum-ethereum/rpc-methods',
            },
            {
              type: 'doc',
              label: 'Solidity support',
              id: 'for-devs/concepts/differences-between-arbitrum-ethereum/solidity-support',
            },
          ],
        },
        {
          type: 'category',
          label: 'Dev nodes',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'How to: Run a dev node (Solidity)',
              id: 'node-running/how-tos/local-dev-node',
            },
            {
              type: 'doc',
              label: 'How to: Run a dev node (Stylus)',
              id: 'stylus/how-tos/local-stylus-dev-node',
            },
          ],
        },
        {
          type: 'category',
          label: 'Gas and fees',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'How to: Estimate gas (Solidity)',
              id: 'devs-how-tos/how-to-estimate-gas',
            },
            {
              type: 'doc',
              label: 'Introduction: Gas and ink (Stylus)',
              id: 'stylus/concepts/stylus-gas',
            },
            {
              type: 'doc',
              id: 'stylus/reference/opcode-hostio-pricing',
              label: 'Reference: Opcode and host I/O gas costs (Stylus)',
            },
          ],
        },
        {
          type: 'category',
          label: 'Oracles',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Introduction: Oracles',
              id: 'for-devs/concepts/oracles',
            },
            {
              type: 'doc',
              label: 'How to: Use oracles',
              id: 'devs-how-tos/how-to-use-oracles',
            },
            {
              type: 'doc',
              label: 'Reference: Oracles',
              id: 'for-devs/dev-tools-and-resources/oracles',
            },
          ],
        },
        {
          type: 'category',
          label: 'Precompiles',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Introduction: Precompiles',
              id: 'for-devs/concepts/precompiles',
            },
            {
              type: 'doc',
              label: 'Reference: Precompiles',
              id: 'for-devs/dev-tools-and-resources/precompiles',
            },
          ],
        },
        {
          type: 'category',
          label: 'Chains and testnets',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Introduction: Arbitrum chains',
              id: 'for-devs/concepts/public-chains',
            },
            {
              type: 'doc',
              label: 'Reference: Stylus testnets',
              id: 'stylus/reference/testnet-information',
            },
          ],
        },
        {
          type: 'category',
          label: 'Cross-chain messaging',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Introduction: Cross-chain messaging',
              id: 'for-devs/cross-chain-messsaging',
            },
          ],
        },
        {
          type: 'category',
          label: 'Token bridging',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Introduction: Token bridging',
              id: 'for-devs/concepts/token-bridge/token-bridge-overview',
            },
            {
              type: 'doc',
              label: 'How to: Bridge tokens (overview)',
              id: 'devs-how-tos/bridge-tokens/how-to-bridge-tokens-overview',
            },
            {
              type: 'doc',
              label: 'How to: Bridge tokens (standard gateway)',
              id: 'devs-how-tos/bridge-tokens/how-to-bridge-tokens-standard',
            },
            {
              type: 'doc',
              label: 'How to: Bridge tokens (generic-custom gateway)',
              id: 'devs-how-tos/bridge-tokens/how-to-bridge-tokens-generic-custom',
            },
            {
              type: 'doc',
              label: 'How to: Bridge tokens (custom gateway)',
              id: 'devs-how-tos/bridge-tokens/how-to-bridge-tokens-custom-gateway',
            },
            {
              type: 'doc',
              label: 'Concept: Bridging Ether',
              id: 'for-devs/concepts/token-bridge/token-bridge-ether',
            },
            {
              type: 'doc',
              label: 'Concept: Bridging ERC-20 tokens',
              id: 'for-devs/concepts/token-bridge/token-bridge-erc20',
            },
          ],
        },
        {
          type: 'category',
          label: 'Smart contract languages',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'How to: Add a new smart contract language (Stylus)',
              id: 'stylus/how-tos/adding-support-for-new-languages',
            },
          ],
        },
        {
          type: 'category',
          label: 'Optimizations and best practices',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'How to: Reduce the size of WASM binaries (Stylus)',
              id: 'stylus/how-tos/optimizing-binaries',
            },
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Introduction: NodeInterface',
              id: 'for-devs/concepts/nodeinterface',
            },
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Troubleshooting (Solidity)',
              id: 'for-devs/troubleshooting-building',
            },
            {
              type: 'doc',
              label: 'Troubleshooting (Stylus)',
              id: 'stylus/troubleshooting-building-stylus',
            },
          ],
        },
        {
          type: 'category',
          label: 'Developer reference (General)',
          items: [
            {
              type: 'doc',
              id: 'node-running/node-providers',
              label: 'RPC endpoints and providers',
            },
            {
              type: 'doc',
              label: 'Smart contract addresses',
              id: 'for-devs/useful-addresses',
            },
            {
              type: 'doc',
              label: 'Chain Params',
              id: 'for-devs/chain-params',
            },
            {
              type: 'doc',
              label: 'NodeInterface',
              id: 'for-devs/dev-tools-and-resources/nodeinterface',
            },
            {
              type: 'doc',
              label: 'Development frameworks',
              id: 'for-devs/dev-tools-and-resources/development-frameworks',
            },
            {
              type: 'doc',
              label: 'Web3 libraries and tools',
              id: 'for-devs/dev-tools-and-resources/web3-libraries-tools',
            },
            {
              type: 'doc',
              label: 'Monitoring tools and block explorers',
              id: 'for-devs/dev-tools-and-resources/monitoring-tools-block-explorers',
            },
            {
              type: 'doc',
              label: 'Debugging tools',
              id: 'for-devs/dev-tools-and-resources/debugging-tools',
            },

            {
              type: 'doc',
              id: 'mainnet-risks',
              label: 'Mainnet risks',
            },
          ],
        },
        {
          type: 'category',
          label: 'Developer reference (Stylus)',
          items: [
            {
              type: 'doc',
              id: 'stylus/reference/rust-sdk-guide',
              label: 'Stylus Rust SDK',
            },
            {
              type: 'doc',
              id: 'stylus/reference/stylus-sdk',
              label: 'Stylus SDK repositories',
            },
            {
              type: 'link',
              label: 'Rust crate docs',
              href: 'https://docs.rs/stylus-sdk/latest/stylus_sdk/index.html',
            },
            {
              type: 'link',
              label: 'Source code repository',
              href: 'https://github.com/OffchainLabs/stylus',
            },
          ],
        },
        {
          type: 'link',
          label: 'Arbitrum SDK',
          href: '/sdk',
        },
        {
          type: 'link',
          label: 'Tutorials',
          href: 'https://github.com/OffchainLabs/arbitrum-tutorials',
        },
        {
          type: 'doc',
          id: 'learn-more/faq',
          label: 'Frequently asked questions',
        },
        {
          type: 'doc',
          id: 'intro/glossary',
          label: 'Glossary',
        },
      ],
    },
    {
      type: 'category',
      label: 'Run nodes and Orbit chains',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'node-running/gentle-introduction-run-node',
          label: 'Introduction: Nodes',
        },
        {
          type: 'doc',
          id: 'node-running/quickstart-running-a-node',
          label: 'Quickstart: Choose a node type',
        },
        {
          type: 'doc',
          id: 'launch-orbit-chain/orbit-quickstart',
          label: 'Quickstart: Launch an Orbit chain',
        },
        {
          type: 'category',
          label: 'Custom chains (Orbit)',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'launch-orbit-chain/concepts/chain-ownership',
              label: 'Introduction: Orbit chain ownership',
            },
            {
              type: 'doc',
              id: 'launch-orbit-chain/how-tos/customize-deployment-configuration',
              label: `How to: Customize your chain's deployment config`,
            },
            {
              type: 'doc',
              id: 'launch-orbit-chain/how-tos/add-orbit-chain-to-bridge-ui',
              label: `How to: Add your testnet chain to Arbitrum's bridge`,
            },
            {
              type: 'doc',
              id: 'launch-orbit-chain/how-tos/customize-stf',
              label: `How to: Customize your chain's behavior`,
            },
            {
              type: 'doc',
              id: 'launch-orbit-chain/how-tos/customize-precompile',
              label: `How to: Customize your chain's precompiles`,
            },
            {
              type: 'doc',
              id: 'launch-orbit-chain/concepts/custom-gas-token-sdk',
              label: 'Reference: SDK support for chains with custom gas tokens',
            },
            {
              type: 'doc',
              id: 'launch-orbit-chain/reference/command-line-options',
              label: 'Reference: Command-line options',
            },
            {
              type: 'doc',
              id: 'launch-orbit-chain/concepts/public-preview-expectations',
              label: 'Reference: Orbit public preview',
            },
            {
              type: 'doc',
              id: 'launch-orbit-chain/troubleshooting-building-orbit',
              label: 'Troubleshooting your Orbit chain',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data availability servers',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'node-running/how-tos/running-a-daserver',
              label: 'How to: Run a Data Availability Server (DAS)',
            },
          ],
        },
        {
          type: 'category',
          label: 'Sequencers',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'node-running/how-tos/running-a-feed-relay',
              label: 'How to: Run a feed relay',
            },
            {
              type: 'doc',
              id: 'node-running/how-tos/read-sequencer-feed',
              label: 'How to: Read the sequencer feed',
            },
            {
              type: 'doc',
              id: 'node-running/how-tos/running-a-sequencer-coordinator-manager',
              label: 'How to: Run a sequencer coordination manager',
            },
          ],
        },
        {
          type: 'category',
          label: 'Other node types',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'node-running/how-tos/running-an-orbit-node',
              label: 'How to: Run a full node (Orbit)',
            },
            {
              type: 'doc',
              id: 'node-running/how-tos/running-a-full-node',
              label: 'How to: Run a full node (One, Nova)',
            },
            {
              type: 'doc',
              id: 'node-running/how-tos/running-a-classic-node',
              label: 'How to: Run a Classic node',
            },
            {
              type: 'doc',
              id: 'node-running/how-tos/running-an-archive-node',
              label: 'How to: Run an archive node',
            },
            {
              type: 'doc',
              id: 'node-running/how-tos/running-a-validator',
              label: 'How to: Run a validator',
            },

            {
              type: 'doc',
              id: 'node-running/how-tos/local-dev-node',
              label: 'How to: Run a local dev node',
            },
          ],
        },
        {
          type: 'category',
          label: 'Nitro',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'node-running/how-tos/build-nitro-locally',
              label: 'How to: Build Nitro locally',
            },
            {
              type: 'doc',
              id: 'node-running/how-tos/migrate-state-and-history-from-classic',
              label: 'How to: Migrate to Nitro from Classic',
            },
          ],
        },
        {
          type: 'doc',
          id: 'node-running/troubleshooting-running-nodes',
          label: 'Troubleshooting your node',
        },
        {
          type: 'doc',
          label: 'Frequently asked questions',
          id: 'node-running/faq',
        },
      ],
    },
    {
      type: 'category',
      label: 'Learn how Arbitrum works',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Introductory concepts',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'why-nitro',
              label: 'Why Nitro?',
            },
            {
              type: 'doc',
              id: 'tx-lifecycle',
              label: 'Transaction lifecycle',
            },
            {
              type: 'doc',
              id: 'sequencer',
              label: 'Sequencer',
            },
            {
              type: 'doc',
              id: 'inside-anytrust',
              label: 'AnyTrust protocol',
            },
            {
              type: 'category',
              label: 'Gas / fees',
              items: [
                {
                  type: 'doc',
                  id: 'arbos/gas',
                  label: 'L2 gas',
                },
                {
                  type: 'doc',
                  id: 'arbos/l1-pricing',
                  label: 'L1 pricing',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Advanced concepts',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'inside-arbitrum-nitro/inside-arbitrum-nitro',
              label: 'Deep dive: Inside Arbitrum',
            },
            {
              type: 'link',
              href: 'https://github.com/OffchainLabs/nitro/blob/master/docs/Nitro-whitepaper.pdf',
              label: 'Deeper dive: Whitepaper',
            },
            {
              type: 'doc',
              id: 'assertion-tree',
              label: 'Assertion tree',
            },
            {
              type: 'category',
              label: 'Cross-chain messaging',
              items: [
                {
                  type: 'doc',
                  id: 'arbos/l1-to-l2-messaging',
                  label: 'L1-to-L2 messaging',
                },
                {
                  type: 'doc',
                  id: 'arbos/l2-to-l1-messaging',
                  label: 'L2-to-L1 messaging',
                },
              ],
            },
            {
              type: 'category',
              label: 'ArbOS',
              items: [
                {
                  type: 'doc',
                  id: 'arbos/arbos',
                  label: 'ArbOS',
                },
                {
                  type: 'doc',
                  id: 'arbos/geth',
                  label: 'Geth',
                },
              ],
            },
            {
              type: 'category',
              label: 'Fraud proofs',
              items: [
                {
                  type: 'doc',
                  id: 'proving/challenge-manager',
                  label: 'Interactive challenges',
                },
                {
                  type: 'doc',
                  id: 'proving/osp-assumptions',
                  label: 'One step proof assumptions',
                },
                {
                  type: 'doc',
                  id: 'proving/wasm-to-wavm',
                  label: 'Wasm To WAVM',
                },
                {
                  type: 'doc',
                  id: 'proving/wavm-custom-opcodes',
                  label: 'Custom WAVM opcodes',
                },
                {
                  type: 'doc',
                  id: 'proving/wavm-floats',
                  label: 'WAVM floats',
                },
                {
                  type: 'doc',
                  id: 'proving/wavm-modules',
                  label: 'WAVM modules',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contribute',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'for-devs/contribute',
        },
        {
          type: 'category',
          label: 'Third-party docs',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'for-devs/third-party-docs',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Audit reports',
          id: 'audit-reports',
        },
      ],
    },
    /*
    {
      type: "doc",
      id: "node-running/node-providers",
      label: "Third-party node providers"
    },
    */
  ],
  bridgeTokensSidebar: [],
  runNodesSidebar: [],
  learnMoreSidebar: [],
};

module.exports = sidebars;
