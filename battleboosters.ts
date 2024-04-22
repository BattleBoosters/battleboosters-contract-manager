export type Battleboosters = {
  "version": "0.1.0",
  "name": "battleboosters",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authorityBump",
          "type": "u8"
        },
        {
          "name": "bankBump",
          "type": "u8"
        },
        {
          "name": "adminPubkey",
          "type": "publicKey"
        },
        {
          "name": "nftFighterPackPrice",
          "type": "u64"
        },
        {
          "name": "boosterPrice",
          "type": "u64"
        },
        {
          "name": "fighterPackAmount",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initializeRarity",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rarity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fighter",
          "type": {
            "vec": {
              "defined": "RarityFighter"
            }
          }
        },
        {
          "name": "shieldBooster",
          "type": {
            "vec": {
              "defined": "RarityBooster"
            }
          }
        },
        {
          "name": "pointsBooster",
          "type": {
            "vec": {
              "defined": "RarityBooster"
            }
          }
        },
        {
          "name": "probabilityTiers",
          "type": {
            "vec": {
              "defined": "TierProbabilities"
            }
          }
        }
      ]
    },
    {
      "name": "initializePlayer",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "playerPubkey",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "initializeEventLink",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "championsPassAsset",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "championsPassLink",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "rank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createNftCollection",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collectionId",
          "type": {
            "defined": "CollectionType"
          }
        },
        {
          "name": "collectionName",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "fees",
          "type": "u16"
        }
      ]
    },
    {
      "name": "createFighter",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fighter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fighterType",
          "type": {
            "defined": "FighterType"
          }
        },
        {
          "name": "fightMetrics",
          "type": {
            "defined": "FightMetrics"
          }
        }
      ]
    },
    {
      "name": "updateFighter",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fighter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fighterType",
          "type": {
            "defined": "FighterType"
          }
        },
        {
          "name": "fightMetrics",
          "type": {
            "defined": "FightMetrics"
          }
        }
      ]
    },
    {
      "name": "purchaseMysteryBox",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "recipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mysteryBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bankEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "priceFeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "randomnessAccountData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana System program. Used to allocate space on-chain for the randomness_request account."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana Token program. Used to transfer funds to the randomness escrow."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana Associated Token program. Used to create the TokenAccount for the randomness escrow."
          ]
        },
        {
          "name": "rarity",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Rarity PDA"
          ]
        }
      ],
      "args": [
        {
          "name": "bankEscrowBump",
          "type": "u8"
        },
        {
          "name": "requests",
          "type": {
            "vec": {
              "defined": "PurchaseRequest"
            }
          }
        }
      ]
    },
    {
      "name": "adminAirdropCollectorPack",
      "docs": [
        "ONLY FOR TEST PURPOSE"
      ],
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "recipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mysteryBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rarity",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Rarity PDA"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana System program. Used to allocate space on-chain for the randomness_request account."
          ]
        }
      ],
      "args": [
        {
          "name": "boosterMintAlowance",
          "type": "u64"
        },
        {
          "name": "fighterMintAllowance",
          "type": "u64"
        },
        {
          "name": "championsPassMintAllowance",
          "type": "u64"
        }
      ]
    },
    {
      "name": "adminSetRandomness",
      "docs": [
        "ONLY FOR TEST PURPOSE"
      ],
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createMintableGameAsset",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mysteryBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rarity",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "mintableGameAsset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintableGameAssetLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "randomnessAccountData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mintableGameAssetLinkNonce",
          "type": "u64"
        },
        {
          "name": "request",
          "type": {
            "defined": "OpenRequest"
          }
        }
      ]
    },
    {
      "name": "createNewEvent",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "startDate",
          "type": "i64"
        },
        {
          "name": "endDate",
          "type": "i64"
        },
        {
          "name": "tournamentType",
          "type": {
            "defined": "TournamentType"
          }
        },
        {
          "name": "rankReward",
          "type": {
            "vec": {
              "defined": "RankReward"
            }
          }
        }
      ]
    },
    {
      "name": "updateEvent",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "startDate",
          "type": "i64"
        },
        {
          "name": "endDate",
          "type": "i64"
        },
        {
          "name": "tournamentType",
          "type": {
            "defined": "TournamentType"
          }
        },
        {
          "name": "rankReward",
          "type": {
            "vec": {
              "defined": "RankReward"
            }
          }
        }
      ]
    },
    {
      "name": "createNewFightCard",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fightCard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "FightCardData"
          }
        }
      ]
    },
    {
      "name": "updateFightCard",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fightCard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "FightCardData"
          }
        }
      ]
    },
    {
      "name": "joinFightCard",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fighterAsset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shieldBoosterAsset",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "pointsBoosterAsset",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "fighterLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shieldBoosterLink",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "pointsBoosterLink",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "fightCard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fightCardLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fighterColorSide",
          "type": {
            "defined": "FighterColorSide"
          }
        }
      ]
    },
    {
      "name": "collectRewards",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mysteryBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rarity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "adminUpdateRank",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rank",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ranking",
          "type": "u64"
        }
      ]
    },
    {
      "name": "determineRankingPoints",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fightCard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fightCardLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fighterAsset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fighterAssetLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pointsBoosterAsset",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "shieldBoosterAsset",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "fighter",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fighterType",
          "type": {
            "defined": "FighterType"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "eventLinkData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventPubkey",
            "docs": [
              "`Event` PDA public key for direct ref"
            ],
            "type": "publicKey"
          },
          {
            "name": "eventNonceTracker",
            "docs": [
              "Tracker to link the `EventLink` PDA to the `Event` PDA"
            ],
            "type": "u64"
          },
          {
            "name": "championsPassPubkey",
            "docs": [
              "Ensure a champions pass have been used for `MainCard` access",
              "`champions_pass_asset` PDA public key for direct ref"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "championsPassNonceTracker",
            "docs": [
              "Tracker to link the `champions_pass` PDA"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "isConsumed",
            "docs": [
              "Prevents the player to claim multiple time the rewards",
              "If this occurs, it should close and refund the creator of the EventLink PDA?"
            ],
            "type": "bool"
          },
          {
            "name": "isInitialized",
            "docs": [
              "Prevent accidental multiple initializations of a PDA"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "eventData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fightCardNonce",
            "docs": [
              "Represent the current amount of created fight card",
              "On average, a UFC event typically features around 12 to 15 fights",
              "We set it as `u8` because there will be never more than `255` per events in an MMA fight week"
            ],
            "type": "u8"
          },
          {
            "name": "tournamentType",
            "docs": [
              "The type of tournament MainCard, Prelims or Early Prelims"
            ],
            "type": {
              "defined": "TournamentType"
            }
          },
          {
            "name": "startDate",
            "docs": [
              "Start date in seconds"
            ],
            "type": "i64"
          },
          {
            "name": "endDate",
            "docs": [
              "End date in seconds"
            ],
            "type": "i64"
          },
          {
            "name": "rankRewards",
            "docs": [
              "Rank rewards for prize distribution"
            ],
            "type": {
              "vec": {
                "defined": "RankReward"
              }
            }
          },
          {
            "name": "rankNonce",
            "docs": [
              "Represent the current amount of player"
            ],
            "type": "u64"
          },
          {
            "name": "randomness",
            "docs": [
              "Represent the randomness, will be used to derive child randomness for collecting mystery box"
            ],
            "type": {
              "option": "bytes"
            }
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce of the `event`"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "fightCardData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventPubkey",
            "docs": [
              "Public key of the event account this fight card is part of"
            ],
            "type": "publicKey"
          },
          {
            "name": "eventNonceTracker",
            "docs": [
              "Nonce of the event PDA this fight card is part of"
            ],
            "type": "u64"
          },
          {
            "name": "titleFight",
            "docs": [
              "Indicates whether this fight is a title fight"
            ],
            "type": "bool"
          },
          {
            "name": "fighterBlue",
            "docs": [
              "Final fight data about the fighter left position",
              "This is None if the fight have not yet finished"
            ],
            "type": {
              "option": {
                "defined": "SharedStrength"
              }
            }
          },
          {
            "name": "fighterRed",
            "docs": [
              "Final fight data about the fighter right position",
              "This is None if the fight have not yet finished"
            ],
            "type": {
              "option": {
                "defined": "SharedStrength"
              }
            }
          },
          {
            "name": "fightDuration",
            "docs": [
              "Fight duration in seconds"
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "result",
            "docs": [
              "Result of the fight"
            ],
            "type": {
              "option": {
                "defined": "FightCardResult"
              }
            }
          },
          {
            "name": "winner",
            "docs": [
              "Winner of the fight",
              "This is None in case of a draw when fight is finished"
            ],
            "type": {
              "option": {
                "defined": "FighterColorSide"
              }
            }
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce of the `fight_card`"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "fightCardLinkData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fightCardPubkey",
            "docs": [
              "`fight_card` PDA public key for direct ref"
            ],
            "type": "publicKey"
          },
          {
            "name": "fightCardNonceTracker",
            "docs": [
              "Tracker to link the `FightCardLink` PDA to the `FightCard` PDA"
            ],
            "type": "u8"
          },
          {
            "name": "fighterUsed",
            "docs": [
              "The `Pubkey` of the booster used"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "fighterNonceTracker",
            "docs": [
              "Tracker to link the `Fighter` PDA to the `FightCardLink` PDA"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "shieldBoosterUsed",
            "docs": [
              "The `Pubkey` of the booster used"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "shieldBoosterNonceTracker",
            "docs": [
              "Tracker to link the `Booster` PDA to the `FightCardLink` PDA"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "pointsBoosterUsed",
            "docs": [
              "The `Pubkey` of the booster used"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "pointsBoosterNonceTracker",
            "docs": [
              "Tracker to link the `Booster` PDA to the `FightCardLink` PDA"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "fighterColorSide",
            "docs": [
              "The fighter side chosen by the player `Red Gloves` or `Blue Gloves`"
            ],
            "type": {
              "defined": "FighterColorSide"
            }
          },
          {
            "name": "isConsumed",
            "docs": [
              "Prevents the calculation of points for the same fightCard multiple times",
              "If this occurs, it should close and refund the creator of the fighCardLink PDA?"
            ],
            "type": "bool"
          },
          {
            "name": "isInitialized",
            "docs": [
              "Prevent accidental multiple initializations of a PDA"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "fighterData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fighterType",
            "type": {
              "defined": "FighterType"
            }
          },
          {
            "name": "fightMetrics",
            "type": {
              "defined": "FightMetrics"
            }
          }
        ]
      }
    },
    {
      "name": "mintableGameAssetData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isLocked",
            "docs": [
              "is Locked will mean the PDA is in use and cannot be minted or re used"
            ],
            "type": "bool"
          },
          {
            "name": "isBurned",
            "docs": [
              "is Burned will mean the PDA have been used and cannot be minted or re used"
            ],
            "type": "bool"
          },
          {
            "name": "isMinted",
            "docs": [
              "is Minted mean the PDA have been minted"
            ],
            "type": "bool"
          },
          {
            "name": "owner",
            "docs": [
              "owner of the PDA can use it in-game,",
              "on mint the owner is set to None which mean it is not available in the game until re-deposited"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "metadata",
            "docs": [
              "The metadata on-chain, which allow dynamic use on our game"
            ],
            "type": {
              "defined": "NftMetadata"
            }
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce of the `mintable_game_asset`"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "mintableGameAssetLinkData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintableGameAssetPubkey",
            "docs": [
              "`Pubkey` of the mintable_game_asset"
            ],
            "type": "publicKey"
          },
          {
            "name": "mintableGameAssetNonceTracker",
            "docs": [
              "this is the link to the address of the pda"
            ],
            "type": "u64"
          },
          {
            "name": "isFree",
            "docs": [
              "Checks if a PDA is eligible to update its `mintable_game_asset_nonce`.",
              "The PDA becomes eligible upon minting and withdrawing a `mintable_game_asset`,",
              "which break the link with the last `mintable_game_asset_nonce`."
            ],
            "type": "bool"
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce of the `mintable_game_asset_link`"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "mysteryBoxData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fighterMintAllowance",
            "type": "u64"
          },
          {
            "name": "boosterMintAllowance",
            "type": "u64"
          },
          {
            "name": "championsPassMintAllowance",
            "type": "u64"
          },
          {
            "name": "randomnessAccount",
            "type": "publicKey"
          },
          {
            "name": "randomness",
            "type": {
              "option": "bytes"
            }
          },
          {
            "name": "probabilityTier",
            "type": {
              "defined": "TierProbabilities"
            }
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce of the `mystery_box`"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "playerData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "orderNonce",
            "docs": [
              "Represent the nonce of the current amount orders the player have created"
            ],
            "type": "u64"
          },
          {
            "name": "playerGameAssetLinkNonce",
            "docs": [
              "Represent the nonce of the current player game asset link the player have created"
            ],
            "type": "u64"
          },
          {
            "name": "isInitialized",
            "docs": [
              "Prevent accidental multiple initializations of a PDA"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "programData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventNonce",
            "docs": [
              "Represent the current amount of created event"
            ],
            "type": "u64"
          },
          {
            "name": "mintableGameAssetNonce",
            "docs": [
              "Represent the current amount of mintable game asset pack"
            ],
            "type": "u64"
          },
          {
            "name": "adminPubkey",
            "docs": [
              "The authority which are allowed to administrate the contract"
            ],
            "type": "publicKey"
          },
          {
            "name": "fighterPackPrice",
            "docs": [
              "The price in USD of each NFT fighter pack"
            ],
            "type": "u64"
          },
          {
            "name": "boosterPrice",
            "docs": [
              "The price in USD of each NFT booster"
            ],
            "type": "u64"
          },
          {
            "name": "fighterPackAmount",
            "docs": [
              "The amount of fighters contained on each NFT fighter pack"
            ],
            "type": "u8"
          },
          {
            "name": "isInitialized",
            "docs": [
              "This data prevent re-initialization"
            ],
            "type": "bool"
          },
          {
            "name": "authorityBump",
            "docs": [
              "Authority bump"
            ],
            "type": "u8"
          },
          {
            "name": "bankBump",
            "docs": [
              "Bank bump"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "rankData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerAccount",
            "type": "publicKey"
          },
          {
            "name": "rank",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "totalPoints",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "isConsumed",
            "type": "bool"
          },
          {
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "rarityData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fighter",
            "docs": [
              "Rarity tiers for NFTs fighter with associated stats"
            ],
            "type": {
              "vec": {
                "defined": "RarityFighter"
              }
            }
          },
          {
            "name": "shieldBooster",
            "docs": [
              "Rarity tiers for NFTs booster with associated stats"
            ],
            "type": {
              "vec": {
                "defined": "RarityBooster"
              }
            }
          },
          {
            "name": "pointsBooster",
            "docs": [
              "Rarity tiers for NFTs booster with associated stats"
            ],
            "type": {
              "vec": {
                "defined": "RarityBooster"
              }
            }
          },
          {
            "name": "probabilityTiers",
            "docs": [
              "Drop probabilities for each NFTs rarity tier, represented as percentage"
            ],
            "type": {
              "vec": {
                "defined": "TierProbabilities"
              }
            }
          },
          {
            "name": "isInitialized",
            "docs": [
              "This data prevent re-initialization"
            ],
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "RankReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "startRank",
            "type": "u64"
          },
          {
            "name": "endRank",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "prizeAmount",
            "type": "f64"
          },
          {
            "name": "fighterAmount",
            "type": "i16"
          },
          {
            "name": "boosterAmount",
            "type": "i16"
          },
          {
            "name": "championsPassAmount",
            "type": "i16"
          }
        ]
      }
    },
    {
      "name": "SharedStrength",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "takedownsAttempted",
            "type": "u16"
          },
          {
            "name": "takedownsLanded",
            "type": "u16"
          },
          {
            "name": "takedownsSlam",
            "type": "u16"
          },
          {
            "name": "sigClinchHeadStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigClinchHeadStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigClinchBodyStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigClinchBodyStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigClinchLegStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigClinchLegStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigGroundHeadStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigGroundHeadStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigGroundBodyStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigGroundBodyStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigGroundLegStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigGroundLegStrikesLanded",
            "type": "u16"
          },
          {
            "name": "strikingStrength",
            "type": {
              "defined": "StrikingStrength"
            }
          },
          {
            "name": "grapplingStrength",
            "type": {
              "defined": "GrapplingStrength"
            }
          }
        ]
      }
    },
    {
      "name": "StrikingStrength",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "knockdowns",
            "type": "u16"
          },
          {
            "name": "sigDistanceHeadStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigDistanceHeadStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigDistanceBodyStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigDistanceBodyStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigDistanceLegStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigDistanceLegStrikesLanded",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "GrapplingStrength",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reversals",
            "type": "u16"
          },
          {
            "name": "submissions",
            "type": "u16"
          },
          {
            "name": "secondsInControl",
            "type": "u16"
          },
          {
            "name": "advanceToHalfGuard",
            "type": "u16"
          },
          {
            "name": "advanceToSlide",
            "type": "u16"
          },
          {
            "name": "advanceToMount",
            "type": "u16"
          },
          {
            "name": "advanceToBack",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "Metrics",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "points",
            "type": "u32"
          },
          {
            "name": "energy",
            "type": "u32"
          },
          {
            "name": "damage",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "FightMetrics",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "takedownsAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "takedownsLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "takedownsSlam",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchHeadStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchHeadStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchBodyStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchBodyStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchLegStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchLegStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "knockdowns",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceHeadStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceHeadStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceBodyStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceBodyStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceLegStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceLegStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "reversals",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "submissions",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "secondsInControl",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundHeadStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundHeadStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundBodyStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundBodyStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundLegStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundLegStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "advanceToHalfGuard",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "advanceToSlide",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "advanceToMount",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "advanceToBack",
            "type": {
              "defined": "Metrics"
            }
          }
        ]
      }
    },
    {
      "name": "NftMetadata",
      "docs": [
        "Metatada Standards copy on-chain"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "image",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "animationUrl",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "externalUrl",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "attributes",
            "type": {
              "vec": {
                "defined": "Attribute"
              }
            }
          }
        ]
      }
    },
    {
      "name": "Attribute",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "traitType",
            "type": "string"
          },
          {
            "name": "value",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "Stats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "min",
            "type": "u32"
          },
          {
            "name": "max",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "PurchaseRequest",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftType",
            "type": {
              "defined": "NftType"
            }
          },
          {
            "name": "quantity",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "OpenRequest",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftType",
            "type": {
              "defined": "NftType"
            }
          }
        ]
      }
    },
    {
      "name": "FightCardResult",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "KoTko"
          },
          {
            "name": "Decision"
          },
          {
            "name": "Submission"
          },
          {
            "name": "Disqualification"
          },
          {
            "name": "NoContest"
          },
          {
            "name": "Draw"
          },
          {
            "name": "InternalCancellation"
          }
        ]
      }
    },
    {
      "name": "RarityFighter",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Common",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": "Stats"
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Uncommon",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": "Stats"
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Rare",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": "Stats"
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Epic",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": "Stats"
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Legendary",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": "Stats"
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "RarityBooster",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Common",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Uncommon",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Rare",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Epic",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Legendary",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "TierProbabilities",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Tier1",
            "fields": [
              "bytes"
            ]
          },
          {
            "name": "Tier2",
            "fields": [
              "bytes"
            ]
          },
          {
            "name": "Tier3",
            "fields": [
              "bytes"
            ]
          }
        ]
      }
    },
    {
      "name": "TierType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Tier1"
          },
          {
            "name": "Tier2"
          },
          {
            "name": "Tier3"
          }
        ]
      }
    },
    {
      "name": "CollectionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Shield"
          },
          {
            "name": "Points"
          },
          {
            "name": "Fighter"
          },
          {
            "name": "ChampionsPass"
          }
        ]
      }
    },
    {
      "name": "NftType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Booster"
          },
          {
            "name": "Fighter"
          },
          {
            "name": "ChampionsPass"
          }
        ]
      }
    },
    {
      "name": "BoosterType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Points"
          },
          {
            "name": "Shield"
          }
        ]
      }
    },
    {
      "name": "FighterCategory",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Striker"
          },
          {
            "name": "Grappler"
          }
        ]
      }
    },
    {
      "name": "FighterType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Boxing"
          },
          {
            "name": "MuayThai"
          },
          {
            "name": "Taekwondo"
          },
          {
            "name": "Karate"
          },
          {
            "name": "Judo"
          },
          {
            "name": "Wrestling"
          },
          {
            "name": "BrazilianJiuJitsu"
          },
          {
            "name": "Sambo"
          }
        ]
      }
    },
    {
      "name": "FighterColorSide",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "FighterBlue"
          },
          {
            "name": "FighterRed"
          }
        ]
      }
    },
    {
      "name": "TournamentType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "MainCard"
          },
          {
            "name": "Prelims"
          },
          {
            "name": "EarlyPrelims"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "EventCreated",
      "fields": [
        {
          "name": "eventId",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "EventUpdated",
      "fields": [
        {
          "name": "eventId",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "FightCardCreated",
      "fields": [
        {
          "name": "fightCardId",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "FightCardUpdated",
      "fields": [
        {
          "name": "fightCardId",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidOperation",
      "msg": "Custom error message for an invalid operation"
    },
    {
      "code": 6001,
      "name": "Unauthorized",
      "msg": "Unauthorized access attempt"
    },
    {
      "code": 6002,
      "name": "GameAssetLinkNotLinkedToAssetPDA",
      "msg": "The mintable game asset link is not properly linked to the specified mintable game asset PDA"
    },
    {
      "code": 6003,
      "name": "AlreadyInitialized",
      "msg": "Already initialized"
    },
    {
      "code": 6004,
      "name": "UnsupportedNftType",
      "msg": "The provided NFT type is not supported for this operation"
    },
    {
      "code": 6005,
      "name": "InvalidPriceFeed",
      "msg": "Invalid Price Feed"
    },
    {
      "code": 6006,
      "name": "StaleFeed",
      "msg": "Feed has not been updated in 5 minutes"
    },
    {
      "code": 6007,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds"
    },
    {
      "code": 6008,
      "name": "InsufficientAmount",
      "msg": "Insufficient amount in purchase request"
    },
    {
      "code": 6009,
      "name": "RandomnessUnavailable",
      "msg": "Randomness unavailable for now"
    },
    {
      "code": 6010,
      "name": "NoMatchingRarityFound",
      "msg": "No matching rarity found"
    },
    {
      "code": 6011,
      "name": "WrongPlayerGameAssetLinkNonce",
      "msg": "The nonce must not exceed the last known nonce in the player's state"
    },
    {
      "code": 6012,
      "name": "NotFreePDA",
      "msg": "This player game asset pda is not free"
    },
    {
      "code": 6013,
      "name": "NotEnoughAllowance",
      "msg": "Not enough allowance to generate mintable game asset"
    },
    {
      "code": 6014,
      "name": "EventAlreadyStarted",
      "msg": "The event has already started"
    },
    {
      "code": 6015,
      "name": "EventStillRunning",
      "msg": "The event is still in progress. Please try again after it concludes on approximately"
    },
    {
      "code": 6016,
      "name": "RarityAccountRequired",
      "msg": "Attach rarity account to this transaction"
    },
    {
      "code": 6017,
      "name": "FightCardLinkedToGameAsset",
      "msg": "Fight card link already has a game asset, or game asset nonce is missing"
    },
    {
      "code": 6018,
      "name": "EventLinkedToGameAsset",
      "msg": "Event card link already has a game asset, or game asset nonce is missing"
    },
    {
      "code": 6019,
      "name": "BoosterTypeNotFound",
      "msg": "Booster type not found"
    },
    {
      "code": 6020,
      "name": "NonMainCardEvent",
      "msg": "Champion's pass not required for non-main card events"
    },
    {
      "code": 6021,
      "name": "MintableAssetHasNoOwner",
      "msg": "This mintable game asset has no owner"
    },
    {
      "code": 6022,
      "name": "MintableAssetBurned",
      "msg": "This mintable game asset is burnt"
    },
    {
      "code": 6023,
      "name": "MintableAssetLocked",
      "msg": "This mintable game asset is locked"
    },
    {
      "code": 6024,
      "name": "MintableAssetMintedAndUnavailable",
      "msg": "This mintable game asset has been minted as an NFT and is no longer available for in-game use"
    },
    {
      "code": 6025,
      "name": "MintableAssetLinkRequired",
      "msg": "This mintable game asset link is missing"
    },
    {
      "code": 6026,
      "name": "ProbabilityTierNotFound",
      "msg": "The probability tier was not found"
    },
    {
      "code": 6027,
      "name": "RankPointsIsNone",
      "msg": "Rank point is required"
    },
    {
      "code": 6028,
      "name": "RankIsNone",
      "msg": "Rank is required"
    },
    {
      "code": 6029,
      "name": "ConsumedAlready",
      "msg": "The requested operation has already been consumed"
    },
    {
      "code": 6030,
      "name": "RandomnessIsNone",
      "msg": "Randomness is required to collect your reward. Please request randomness and try again."
    },
    {
      "code": 6031,
      "name": "FailedToParseValue",
      "msg": "Failed to parse value"
    },
    {
      "code": 6032,
      "name": "MissingChampionsPassAsset",
      "msg": "Champion's pass asset is missing"
    },
    {
      "code": 6033,
      "name": "MissingChampionsPassLink",
      "msg": "Champion's pass link is missing"
    },
    {
      "code": 6034,
      "name": "RandomnessAlreadyRevealed",
      "msg": "Randomness already revealed"
    },
    {
      "code": 6035,
      "name": "RandomnessNotResolved",
      "msg": "Randomness is not yet resolved"
    }
  ]
};

export const IDL: Battleboosters = {
  "version": "0.1.0",
  "name": "battleboosters",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authorityBump",
          "type": "u8"
        },
        {
          "name": "bankBump",
          "type": "u8"
        },
        {
          "name": "adminPubkey",
          "type": "publicKey"
        },
        {
          "name": "nftFighterPackPrice",
          "type": "u64"
        },
        {
          "name": "boosterPrice",
          "type": "u64"
        },
        {
          "name": "fighterPackAmount",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initializeRarity",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rarity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fighter",
          "type": {
            "vec": {
              "defined": "RarityFighter"
            }
          }
        },
        {
          "name": "shieldBooster",
          "type": {
            "vec": {
              "defined": "RarityBooster"
            }
          }
        },
        {
          "name": "pointsBooster",
          "type": {
            "vec": {
              "defined": "RarityBooster"
            }
          }
        },
        {
          "name": "probabilityTiers",
          "type": {
            "vec": {
              "defined": "TierProbabilities"
            }
          }
        }
      ]
    },
    {
      "name": "initializePlayer",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "playerPubkey",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "initializeEventLink",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "championsPassAsset",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "championsPassLink",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "rank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createNftCollection",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collectionId",
          "type": {
            "defined": "CollectionType"
          }
        },
        {
          "name": "collectionName",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "fees",
          "type": "u16"
        }
      ]
    },
    {
      "name": "createFighter",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fighter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fighterType",
          "type": {
            "defined": "FighterType"
          }
        },
        {
          "name": "fightMetrics",
          "type": {
            "defined": "FightMetrics"
          }
        }
      ]
    },
    {
      "name": "updateFighter",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fighter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fighterType",
          "type": {
            "defined": "FighterType"
          }
        },
        {
          "name": "fightMetrics",
          "type": {
            "defined": "FightMetrics"
          }
        }
      ]
    },
    {
      "name": "purchaseMysteryBox",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "recipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mysteryBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bankEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "priceFeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "randomnessAccountData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana System program. Used to allocate space on-chain for the randomness_request account."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana Token program. Used to transfer funds to the randomness escrow."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana Associated Token program. Used to create the TokenAccount for the randomness escrow."
          ]
        },
        {
          "name": "rarity",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Rarity PDA"
          ]
        }
      ],
      "args": [
        {
          "name": "bankEscrowBump",
          "type": "u8"
        },
        {
          "name": "requests",
          "type": {
            "vec": {
              "defined": "PurchaseRequest"
            }
          }
        }
      ]
    },
    {
      "name": "adminAirdropCollectorPack",
      "docs": [
        "ONLY FOR TEST PURPOSE"
      ],
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "recipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mysteryBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rarity",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Rarity PDA"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana System program. Used to allocate space on-chain for the randomness_request account."
          ]
        }
      ],
      "args": [
        {
          "name": "boosterMintAlowance",
          "type": "u64"
        },
        {
          "name": "fighterMintAllowance",
          "type": "u64"
        },
        {
          "name": "championsPassMintAllowance",
          "type": "u64"
        }
      ]
    },
    {
      "name": "adminSetRandomness",
      "docs": [
        "ONLY FOR TEST PURPOSE"
      ],
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createMintableGameAsset",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mysteryBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rarity",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "mintableGameAsset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintableGameAssetLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "randomnessAccountData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mintableGameAssetLinkNonce",
          "type": "u64"
        },
        {
          "name": "request",
          "type": {
            "defined": "OpenRequest"
          }
        }
      ]
    },
    {
      "name": "createNewEvent",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "startDate",
          "type": "i64"
        },
        {
          "name": "endDate",
          "type": "i64"
        },
        {
          "name": "tournamentType",
          "type": {
            "defined": "TournamentType"
          }
        },
        {
          "name": "rankReward",
          "type": {
            "vec": {
              "defined": "RankReward"
            }
          }
        }
      ]
    },
    {
      "name": "updateEvent",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "startDate",
          "type": "i64"
        },
        {
          "name": "endDate",
          "type": "i64"
        },
        {
          "name": "tournamentType",
          "type": {
            "defined": "TournamentType"
          }
        },
        {
          "name": "rankReward",
          "type": {
            "vec": {
              "defined": "RankReward"
            }
          }
        }
      ]
    },
    {
      "name": "createNewFightCard",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fightCard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "FightCardData"
          }
        }
      ]
    },
    {
      "name": "updateFightCard",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fightCard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "FightCardData"
          }
        }
      ]
    },
    {
      "name": "joinFightCard",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fighterAsset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shieldBoosterAsset",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "pointsBoosterAsset",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "fighterLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shieldBoosterLink",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "pointsBoosterLink",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "fightCard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fightCardLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fighterColorSide",
          "type": {
            "defined": "FighterColorSide"
          }
        }
      ]
    },
    {
      "name": "collectRewards",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mysteryBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rarity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "adminUpdateRank",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rank",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ranking",
          "type": "u64"
        }
      ]
    },
    {
      "name": "determineRankingPoints",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fightCard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fightCardLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fighterAsset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fighterAssetLink",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pointsBoosterAsset",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "shieldBoosterAsset",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "fighter",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fighterType",
          "type": {
            "defined": "FighterType"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "eventLinkData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventPubkey",
            "docs": [
              "`Event` PDA public key for direct ref"
            ],
            "type": "publicKey"
          },
          {
            "name": "eventNonceTracker",
            "docs": [
              "Tracker to link the `EventLink` PDA to the `Event` PDA"
            ],
            "type": "u64"
          },
          {
            "name": "championsPassPubkey",
            "docs": [
              "Ensure a champions pass have been used for `MainCard` access",
              "`champions_pass_asset` PDA public key for direct ref"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "championsPassNonceTracker",
            "docs": [
              "Tracker to link the `champions_pass` PDA"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "isConsumed",
            "docs": [
              "Prevents the player to claim multiple time the rewards",
              "If this occurs, it should close and refund the creator of the EventLink PDA?"
            ],
            "type": "bool"
          },
          {
            "name": "isInitialized",
            "docs": [
              "Prevent accidental multiple initializations of a PDA"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "eventData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fightCardNonce",
            "docs": [
              "Represent the current amount of created fight card",
              "On average, a UFC event typically features around 12 to 15 fights",
              "We set it as `u8` because there will be never more than `255` per events in an MMA fight week"
            ],
            "type": "u8"
          },
          {
            "name": "tournamentType",
            "docs": [
              "The type of tournament MainCard, Prelims or Early Prelims"
            ],
            "type": {
              "defined": "TournamentType"
            }
          },
          {
            "name": "startDate",
            "docs": [
              "Start date in seconds"
            ],
            "type": "i64"
          },
          {
            "name": "endDate",
            "docs": [
              "End date in seconds"
            ],
            "type": "i64"
          },
          {
            "name": "rankRewards",
            "docs": [
              "Rank rewards for prize distribution"
            ],
            "type": {
              "vec": {
                "defined": "RankReward"
              }
            }
          },
          {
            "name": "rankNonce",
            "docs": [
              "Represent the current amount of player"
            ],
            "type": "u64"
          },
          {
            "name": "randomness",
            "docs": [
              "Represent the randomness, will be used to derive child randomness for collecting mystery box"
            ],
            "type": {
              "option": "bytes"
            }
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce of the `event`"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "fightCardData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventPubkey",
            "docs": [
              "Public key of the event account this fight card is part of"
            ],
            "type": "publicKey"
          },
          {
            "name": "eventNonceTracker",
            "docs": [
              "Nonce of the event PDA this fight card is part of"
            ],
            "type": "u64"
          },
          {
            "name": "titleFight",
            "docs": [
              "Indicates whether this fight is a title fight"
            ],
            "type": "bool"
          },
          {
            "name": "fighterBlue",
            "docs": [
              "Final fight data about the fighter left position",
              "This is None if the fight have not yet finished"
            ],
            "type": {
              "option": {
                "defined": "SharedStrength"
              }
            }
          },
          {
            "name": "fighterRed",
            "docs": [
              "Final fight data about the fighter right position",
              "This is None if the fight have not yet finished"
            ],
            "type": {
              "option": {
                "defined": "SharedStrength"
              }
            }
          },
          {
            "name": "fightDuration",
            "docs": [
              "Fight duration in seconds"
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "result",
            "docs": [
              "Result of the fight"
            ],
            "type": {
              "option": {
                "defined": "FightCardResult"
              }
            }
          },
          {
            "name": "winner",
            "docs": [
              "Winner of the fight",
              "This is None in case of a draw when fight is finished"
            ],
            "type": {
              "option": {
                "defined": "FighterColorSide"
              }
            }
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce of the `fight_card`"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "fightCardLinkData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fightCardPubkey",
            "docs": [
              "`fight_card` PDA public key for direct ref"
            ],
            "type": "publicKey"
          },
          {
            "name": "fightCardNonceTracker",
            "docs": [
              "Tracker to link the `FightCardLink` PDA to the `FightCard` PDA"
            ],
            "type": "u8"
          },
          {
            "name": "fighterUsed",
            "docs": [
              "The `Pubkey` of the booster used"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "fighterNonceTracker",
            "docs": [
              "Tracker to link the `Fighter` PDA to the `FightCardLink` PDA"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "shieldBoosterUsed",
            "docs": [
              "The `Pubkey` of the booster used"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "shieldBoosterNonceTracker",
            "docs": [
              "Tracker to link the `Booster` PDA to the `FightCardLink` PDA"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "pointsBoosterUsed",
            "docs": [
              "The `Pubkey` of the booster used"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "pointsBoosterNonceTracker",
            "docs": [
              "Tracker to link the `Booster` PDA to the `FightCardLink` PDA"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "fighterColorSide",
            "docs": [
              "The fighter side chosen by the player `Red Gloves` or `Blue Gloves`"
            ],
            "type": {
              "defined": "FighterColorSide"
            }
          },
          {
            "name": "isConsumed",
            "docs": [
              "Prevents the calculation of points for the same fightCard multiple times",
              "If this occurs, it should close and refund the creator of the fighCardLink PDA?"
            ],
            "type": "bool"
          },
          {
            "name": "isInitialized",
            "docs": [
              "Prevent accidental multiple initializations of a PDA"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "fighterData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fighterType",
            "type": {
              "defined": "FighterType"
            }
          },
          {
            "name": "fightMetrics",
            "type": {
              "defined": "FightMetrics"
            }
          }
        ]
      }
    },
    {
      "name": "mintableGameAssetData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isLocked",
            "docs": [
              "is Locked will mean the PDA is in use and cannot be minted or re used"
            ],
            "type": "bool"
          },
          {
            "name": "isBurned",
            "docs": [
              "is Burned will mean the PDA have been used and cannot be minted or re used"
            ],
            "type": "bool"
          },
          {
            "name": "isMinted",
            "docs": [
              "is Minted mean the PDA have been minted"
            ],
            "type": "bool"
          },
          {
            "name": "owner",
            "docs": [
              "owner of the PDA can use it in-game,",
              "on mint the owner is set to None which mean it is not available in the game until re-deposited"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "metadata",
            "docs": [
              "The metadata on-chain, which allow dynamic use on our game"
            ],
            "type": {
              "defined": "NftMetadata"
            }
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce of the `mintable_game_asset`"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "mintableGameAssetLinkData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintableGameAssetPubkey",
            "docs": [
              "`Pubkey` of the mintable_game_asset"
            ],
            "type": "publicKey"
          },
          {
            "name": "mintableGameAssetNonceTracker",
            "docs": [
              "this is the link to the address of the pda"
            ],
            "type": "u64"
          },
          {
            "name": "isFree",
            "docs": [
              "Checks if a PDA is eligible to update its `mintable_game_asset_nonce`.",
              "The PDA becomes eligible upon minting and withdrawing a `mintable_game_asset`,",
              "which break the link with the last `mintable_game_asset_nonce`."
            ],
            "type": "bool"
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce of the `mintable_game_asset_link`"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "mysteryBoxData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fighterMintAllowance",
            "type": "u64"
          },
          {
            "name": "boosterMintAllowance",
            "type": "u64"
          },
          {
            "name": "championsPassMintAllowance",
            "type": "u64"
          },
          {
            "name": "randomnessAccount",
            "type": "publicKey"
          },
          {
            "name": "randomness",
            "type": {
              "option": "bytes"
            }
          },
          {
            "name": "probabilityTier",
            "type": {
              "defined": "TierProbabilities"
            }
          },
          {
            "name": "nonce",
            "docs": [
              "Nonce of the `mystery_box`"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "playerData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "orderNonce",
            "docs": [
              "Represent the nonce of the current amount orders the player have created"
            ],
            "type": "u64"
          },
          {
            "name": "playerGameAssetLinkNonce",
            "docs": [
              "Represent the nonce of the current player game asset link the player have created"
            ],
            "type": "u64"
          },
          {
            "name": "isInitialized",
            "docs": [
              "Prevent accidental multiple initializations of a PDA"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "programData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventNonce",
            "docs": [
              "Represent the current amount of created event"
            ],
            "type": "u64"
          },
          {
            "name": "mintableGameAssetNonce",
            "docs": [
              "Represent the current amount of mintable game asset pack"
            ],
            "type": "u64"
          },
          {
            "name": "adminPubkey",
            "docs": [
              "The authority which are allowed to administrate the contract"
            ],
            "type": "publicKey"
          },
          {
            "name": "fighterPackPrice",
            "docs": [
              "The price in USD of each NFT fighter pack"
            ],
            "type": "u64"
          },
          {
            "name": "boosterPrice",
            "docs": [
              "The price in USD of each NFT booster"
            ],
            "type": "u64"
          },
          {
            "name": "fighterPackAmount",
            "docs": [
              "The amount of fighters contained on each NFT fighter pack"
            ],
            "type": "u8"
          },
          {
            "name": "isInitialized",
            "docs": [
              "This data prevent re-initialization"
            ],
            "type": "bool"
          },
          {
            "name": "authorityBump",
            "docs": [
              "Authority bump"
            ],
            "type": "u8"
          },
          {
            "name": "bankBump",
            "docs": [
              "Bank bump"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "rankData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerAccount",
            "type": "publicKey"
          },
          {
            "name": "rank",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "totalPoints",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "isConsumed",
            "type": "bool"
          },
          {
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "rarityData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fighter",
            "docs": [
              "Rarity tiers for NFTs fighter with associated stats"
            ],
            "type": {
              "vec": {
                "defined": "RarityFighter"
              }
            }
          },
          {
            "name": "shieldBooster",
            "docs": [
              "Rarity tiers for NFTs booster with associated stats"
            ],
            "type": {
              "vec": {
                "defined": "RarityBooster"
              }
            }
          },
          {
            "name": "pointsBooster",
            "docs": [
              "Rarity tiers for NFTs booster with associated stats"
            ],
            "type": {
              "vec": {
                "defined": "RarityBooster"
              }
            }
          },
          {
            "name": "probabilityTiers",
            "docs": [
              "Drop probabilities for each NFTs rarity tier, represented as percentage"
            ],
            "type": {
              "vec": {
                "defined": "TierProbabilities"
              }
            }
          },
          {
            "name": "isInitialized",
            "docs": [
              "This data prevent re-initialization"
            ],
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "RankReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "startRank",
            "type": "u64"
          },
          {
            "name": "endRank",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "prizeAmount",
            "type": "f64"
          },
          {
            "name": "fighterAmount",
            "type": "i16"
          },
          {
            "name": "boosterAmount",
            "type": "i16"
          },
          {
            "name": "championsPassAmount",
            "type": "i16"
          }
        ]
      }
    },
    {
      "name": "SharedStrength",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "takedownsAttempted",
            "type": "u16"
          },
          {
            "name": "takedownsLanded",
            "type": "u16"
          },
          {
            "name": "takedownsSlam",
            "type": "u16"
          },
          {
            "name": "sigClinchHeadStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigClinchHeadStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigClinchBodyStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigClinchBodyStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigClinchLegStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigClinchLegStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigGroundHeadStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigGroundHeadStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigGroundBodyStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigGroundBodyStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigGroundLegStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigGroundLegStrikesLanded",
            "type": "u16"
          },
          {
            "name": "strikingStrength",
            "type": {
              "defined": "StrikingStrength"
            }
          },
          {
            "name": "grapplingStrength",
            "type": {
              "defined": "GrapplingStrength"
            }
          }
        ]
      }
    },
    {
      "name": "StrikingStrength",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "knockdowns",
            "type": "u16"
          },
          {
            "name": "sigDistanceHeadStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigDistanceHeadStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigDistanceBodyStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigDistanceBodyStrikesLanded",
            "type": "u16"
          },
          {
            "name": "sigDistanceLegStrikesAttempted",
            "type": "u16"
          },
          {
            "name": "sigDistanceLegStrikesLanded",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "GrapplingStrength",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reversals",
            "type": "u16"
          },
          {
            "name": "submissions",
            "type": "u16"
          },
          {
            "name": "secondsInControl",
            "type": "u16"
          },
          {
            "name": "advanceToHalfGuard",
            "type": "u16"
          },
          {
            "name": "advanceToSlide",
            "type": "u16"
          },
          {
            "name": "advanceToMount",
            "type": "u16"
          },
          {
            "name": "advanceToBack",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "Metrics",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "points",
            "type": "u32"
          },
          {
            "name": "energy",
            "type": "u32"
          },
          {
            "name": "damage",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "FightMetrics",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "takedownsAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "takedownsLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "takedownsSlam",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchHeadStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchHeadStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchBodyStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchBodyStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchLegStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigClinchLegStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "knockdowns",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceHeadStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceHeadStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceBodyStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceBodyStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceLegStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigDistanceLegStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "reversals",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "submissions",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "secondsInControl",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundHeadStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundHeadStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundBodyStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundBodyStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundLegStrikesAttempted",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "sigGroundLegStrikesLanded",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "advanceToHalfGuard",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "advanceToSlide",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "advanceToMount",
            "type": {
              "defined": "Metrics"
            }
          },
          {
            "name": "advanceToBack",
            "type": {
              "defined": "Metrics"
            }
          }
        ]
      }
    },
    {
      "name": "NftMetadata",
      "docs": [
        "Metatada Standards copy on-chain"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "image",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "animationUrl",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "externalUrl",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "attributes",
            "type": {
              "vec": {
                "defined": "Attribute"
              }
            }
          }
        ]
      }
    },
    {
      "name": "Attribute",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "traitType",
            "type": "string"
          },
          {
            "name": "value",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "Stats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "min",
            "type": "u32"
          },
          {
            "name": "max",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "PurchaseRequest",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftType",
            "type": {
              "defined": "NftType"
            }
          },
          {
            "name": "quantity",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "OpenRequest",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftType",
            "type": {
              "defined": "NftType"
            }
          }
        ]
      }
    },
    {
      "name": "FightCardResult",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "KoTko"
          },
          {
            "name": "Decision"
          },
          {
            "name": "Submission"
          },
          {
            "name": "Disqualification"
          },
          {
            "name": "NoContest"
          },
          {
            "name": "Draw"
          },
          {
            "name": "InternalCancellation"
          }
        ]
      }
    },
    {
      "name": "RarityFighter",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Common",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": "Stats"
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Uncommon",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": "Stats"
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Rare",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": "Stats"
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Epic",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": "Stats"
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Legendary",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": "Stats"
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "RarityBooster",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Common",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Uncommon",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Rare",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Epic",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          },
          {
            "name": "Legendary",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": "Stats"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "TierProbabilities",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Tier1",
            "fields": [
              "bytes"
            ]
          },
          {
            "name": "Tier2",
            "fields": [
              "bytes"
            ]
          },
          {
            "name": "Tier3",
            "fields": [
              "bytes"
            ]
          }
        ]
      }
    },
    {
      "name": "TierType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Tier1"
          },
          {
            "name": "Tier2"
          },
          {
            "name": "Tier3"
          }
        ]
      }
    },
    {
      "name": "CollectionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Shield"
          },
          {
            "name": "Points"
          },
          {
            "name": "Fighter"
          },
          {
            "name": "ChampionsPass"
          }
        ]
      }
    },
    {
      "name": "NftType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Booster"
          },
          {
            "name": "Fighter"
          },
          {
            "name": "ChampionsPass"
          }
        ]
      }
    },
    {
      "name": "BoosterType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Points"
          },
          {
            "name": "Shield"
          }
        ]
      }
    },
    {
      "name": "FighterCategory",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Striker"
          },
          {
            "name": "Grappler"
          }
        ]
      }
    },
    {
      "name": "FighterType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Boxing"
          },
          {
            "name": "MuayThai"
          },
          {
            "name": "Taekwondo"
          },
          {
            "name": "Karate"
          },
          {
            "name": "Judo"
          },
          {
            "name": "Wrestling"
          },
          {
            "name": "BrazilianJiuJitsu"
          },
          {
            "name": "Sambo"
          }
        ]
      }
    },
    {
      "name": "FighterColorSide",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "FighterBlue"
          },
          {
            "name": "FighterRed"
          }
        ]
      }
    },
    {
      "name": "TournamentType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "MainCard"
          },
          {
            "name": "Prelims"
          },
          {
            "name": "EarlyPrelims"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "EventCreated",
      "fields": [
        {
          "name": "eventId",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "EventUpdated",
      "fields": [
        {
          "name": "eventId",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "FightCardCreated",
      "fields": [
        {
          "name": "fightCardId",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "FightCardUpdated",
      "fields": [
        {
          "name": "fightCardId",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidOperation",
      "msg": "Custom error message for an invalid operation"
    },
    {
      "code": 6001,
      "name": "Unauthorized",
      "msg": "Unauthorized access attempt"
    },
    {
      "code": 6002,
      "name": "GameAssetLinkNotLinkedToAssetPDA",
      "msg": "The mintable game asset link is not properly linked to the specified mintable game asset PDA"
    },
    {
      "code": 6003,
      "name": "AlreadyInitialized",
      "msg": "Already initialized"
    },
    {
      "code": 6004,
      "name": "UnsupportedNftType",
      "msg": "The provided NFT type is not supported for this operation"
    },
    {
      "code": 6005,
      "name": "InvalidPriceFeed",
      "msg": "Invalid Price Feed"
    },
    {
      "code": 6006,
      "name": "StaleFeed",
      "msg": "Feed has not been updated in 5 minutes"
    },
    {
      "code": 6007,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds"
    },
    {
      "code": 6008,
      "name": "InsufficientAmount",
      "msg": "Insufficient amount in purchase request"
    },
    {
      "code": 6009,
      "name": "RandomnessUnavailable",
      "msg": "Randomness unavailable for now"
    },
    {
      "code": 6010,
      "name": "NoMatchingRarityFound",
      "msg": "No matching rarity found"
    },
    {
      "code": 6011,
      "name": "WrongPlayerGameAssetLinkNonce",
      "msg": "The nonce must not exceed the last known nonce in the player's state"
    },
    {
      "code": 6012,
      "name": "NotFreePDA",
      "msg": "This player game asset pda is not free"
    },
    {
      "code": 6013,
      "name": "NotEnoughAllowance",
      "msg": "Not enough allowance to generate mintable game asset"
    },
    {
      "code": 6014,
      "name": "EventAlreadyStarted",
      "msg": "The event has already started"
    },
    {
      "code": 6015,
      "name": "EventStillRunning",
      "msg": "The event is still in progress. Please try again after it concludes on approximately"
    },
    {
      "code": 6016,
      "name": "RarityAccountRequired",
      "msg": "Attach rarity account to this transaction"
    },
    {
      "code": 6017,
      "name": "FightCardLinkedToGameAsset",
      "msg": "Fight card link already has a game asset, or game asset nonce is missing"
    },
    {
      "code": 6018,
      "name": "EventLinkedToGameAsset",
      "msg": "Event card link already has a game asset, or game asset nonce is missing"
    },
    {
      "code": 6019,
      "name": "BoosterTypeNotFound",
      "msg": "Booster type not found"
    },
    {
      "code": 6020,
      "name": "NonMainCardEvent",
      "msg": "Champion's pass not required for non-main card events"
    },
    {
      "code": 6021,
      "name": "MintableAssetHasNoOwner",
      "msg": "This mintable game asset has no owner"
    },
    {
      "code": 6022,
      "name": "MintableAssetBurned",
      "msg": "This mintable game asset is burnt"
    },
    {
      "code": 6023,
      "name": "MintableAssetLocked",
      "msg": "This mintable game asset is locked"
    },
    {
      "code": 6024,
      "name": "MintableAssetMintedAndUnavailable",
      "msg": "This mintable game asset has been minted as an NFT and is no longer available for in-game use"
    },
    {
      "code": 6025,
      "name": "MintableAssetLinkRequired",
      "msg": "This mintable game asset link is missing"
    },
    {
      "code": 6026,
      "name": "ProbabilityTierNotFound",
      "msg": "The probability tier was not found"
    },
    {
      "code": 6027,
      "name": "RankPointsIsNone",
      "msg": "Rank point is required"
    },
    {
      "code": 6028,
      "name": "RankIsNone",
      "msg": "Rank is required"
    },
    {
      "code": 6029,
      "name": "ConsumedAlready",
      "msg": "The requested operation has already been consumed"
    },
    {
      "code": 6030,
      "name": "RandomnessIsNone",
      "msg": "Randomness is required to collect your reward. Please request randomness and try again."
    },
    {
      "code": 6031,
      "name": "FailedToParseValue",
      "msg": "Failed to parse value"
    },
    {
      "code": 6032,
      "name": "MissingChampionsPassAsset",
      "msg": "Champion's pass asset is missing"
    },
    {
      "code": 6033,
      "name": "MissingChampionsPassLink",
      "msg": "Champion's pass link is missing"
    },
    {
      "code": 6034,
      "name": "RandomnessAlreadyRevealed",
      "msg": "Randomness already revealed"
    },
    {
      "code": 6035,
      "name": "RandomnessNotResolved",
      "msg": "Randomness is not yet resolved"
    }
  ]
};
