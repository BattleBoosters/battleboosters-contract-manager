/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/battleboosters.json`.
 */
export type Battleboosters = {
  "address": "87NrgFw8UwRoP79qaMpTN7mipE9MAn5LjAZytxNiFh5g",
  "metadata": {
    "name": "battleboosters",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "adminUpdateRank",
      "discriminator": [
        240,
        125,
        101,
        219,
        96,
        99,
        183,
        119
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "event.nonce",
                "account": "eventData"
              }
            ]
          }
        },
        {
          "name": "rank",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "rank.nonce",
                "account": "rankData"
              }
            ]
          }
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
      "name": "collectRewards",
      "discriminator": [
        63,
        130,
        90,
        197,
        39,
        16,
        143,
        176
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "bank",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  98,
                  97,
                  110,
                  107
                ]
              }
            ]
          }
        },
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "event.nonce",
                "account": "eventData"
              }
            ]
          }
        },
        {
          "name": "rank",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "rank.nonce",
                "account": "rankData"
              }
            ]
          }
        },
        {
          "name": "playerAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "player_account.creator",
                "account": "playerData"
              }
            ]
          }
        },
        {
          "name": "mysteryBox",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  121,
                  115,
                  116,
                  101,
                  114,
                  121,
                  66,
                  111,
                  120
                ]
              },
              {
                "kind": "account",
                "path": "player_account.order_nonce",
                "account": "playerData"
              },
              {
                "kind": "account",
                "path": "rank.player_account",
                "account": "rankData"
              }
            ]
          }
        },
        {
          "name": "rarity",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "priceFeed"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "createFighter",
      "discriminator": [
        9,
        111,
        153,
        57,
        63,
        65,
        20,
        13
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "fighterBase",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "fighterType",
          "type": {
            "defined": {
              "name": "fighterType"
            }
          }
        },
        {
          "name": "fightMetrics",
          "type": {
            "defined": {
              "name": "fightMetrics"
            }
          }
        }
      ]
    },
    {
      "name": "createMintableGameAsset",
      "discriminator": [
        81,
        235,
        120,
        49,
        179,
        46,
        229,
        127
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "playerAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "playerPubkey"
              }
            ]
          }
        },
        {
          "name": "mysteryBox",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  121,
                  115,
                  116,
                  101,
                  114,
                  121,
                  66,
                  111,
                  120
                ]
              },
              {
                "kind": "account",
                "path": "mystery_box.nonce",
                "account": "mysteryBoxData"
              },
              {
                "kind": "arg",
                "path": "playerPubkey"
              }
            ]
          }
        },
        {
          "name": "rarity",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mintableGameAsset",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "program.mintable_game_asset_nonce",
                "account": "programData"
              }
            ]
          }
        },
        {
          "name": "mintableGameAssetLink",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "mintableGameAssetLinkNonce"
              },
              {
                "kind": "arg",
                "path": "playerPubkey"
              }
            ]
          }
        },
        {
          "name": "randomnessAccountData"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "mintableGameAssetLinkNonce",
          "type": "u64"
        },
        {
          "name": "playerPubkey",
          "type": "pubkey"
        },
        {
          "name": "request",
          "type": {
            "defined": {
              "name": "openRequest"
            }
          }
        }
      ]
    },
    {
      "name": "createNewEvent",
      "discriminator": [
        186,
        196,
        122,
        146,
        129,
        222,
        197,
        89
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "program.event_nonce",
                "account": "programData"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
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
            "defined": {
              "name": "tournamentType"
            }
          }
        },
        {
          "name": "rankReward",
          "type": {
            "vec": {
              "defined": {
                "name": "rankReward"
              }
            }
          }
        }
      ]
    },
    {
      "name": "createNewFightCard",
      "discriminator": [
        173,
        69,
        244,
        229,
        222,
        115,
        213,
        127
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "event.nonce",
                "account": "eventData"
              }
            ]
          }
        },
        {
          "name": "fightCard",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  103,
                  104,
                  116,
                  67,
                  97,
                  114,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "event.fight_card_nonce",
                "account": "eventData"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "fightCardData"
            }
          }
        }
      ]
    },
    {
      "name": "createNftCollection",
      "discriminator": [
        39,
        179,
        4,
        147,
        128,
        226,
        252,
        134
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "mintAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  65,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "minter",
          "writable": true
        },
        {
          "name": "metadata",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "metadataProgram"
              },
              {
                "kind": "account",
                "path": "minter"
              }
            ],
            "program": {
              "kind": "account",
              "path": "metadataProgram"
            }
          }
        },
        {
          "name": "masterEdition",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "metadataProgram"
              },
              {
                "kind": "account",
                "path": "minter"
              },
              {
                "kind": "const",
                "value": [
                  101,
                  100,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              }
            ],
            "program": {
              "kind": "account",
              "path": "metadataProgram"
            }
          }
        },
        {
          "name": "tokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "mintAuthority"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "minter"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenRecord",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "metadataProgram"
              },
              {
                "kind": "account",
                "path": "minter"
              },
              {
                "kind": "const",
                "value": [
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  114,
                  101,
                  99,
                  111,
                  114,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "tokenAccount"
              }
            ],
            "program": {
              "kind": "account",
              "path": "metadataProgram"
            }
          }
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "sysvarInstructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "metadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        }
      ],
      "args": [
        {
          "name": "collectionId",
          "type": {
            "defined": {
              "name": "collectionType"
            }
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
      "name": "determineRankingPoints",
      "discriminator": [
        99,
        146,
        70,
        230,
        97,
        164,
        131,
        195
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "event.nonce",
                "account": "eventData"
              }
            ]
          }
        },
        {
          "name": "rank",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "rank.nonce",
                "account": "rankData"
              }
            ]
          }
        },
        {
          "name": "playerAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "rank.player_account",
                "account": "rankData"
              }
            ]
          }
        },
        {
          "name": "fightCard",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  103,
                  104,
                  116,
                  67,
                  97,
                  114,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "fight_card.nonce",
                "account": "fightCardData"
              }
            ]
          }
        },
        {
          "name": "fightCardLink",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  103,
                  104,
                  116,
                  67,
                  97,
                  114,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "fightCard"
              },
              {
                "kind": "account",
                "path": "rank.player_account",
                "account": "rankData"
              }
            ]
          }
        },
        {
          "name": "fighterAsset",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "fight_card_link.fighter_nonce_tracker",
                "account": "fightCardLinkData"
              }
            ]
          }
        },
        {
          "name": "fighterAssetLink",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "fighter_asset_link.nonce",
                "account": "mintableGameAssetLinkData"
              },
              {
                "kind": "account",
                "path": "rank.player_account",
                "account": "rankData"
              }
            ]
          }
        },
        {
          "name": "pointsBoosterAsset",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "fight_card_link.points_booster_nonce_tracker",
                "account": "fightCardLinkData"
              }
            ]
          }
        },
        {
          "name": "shieldBoosterAsset",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "fight_card_link.shield_booster_nonce_tracker",
                "account": "fightCardLinkData"
              }
            ]
          }
        },
        {
          "name": "fighterBase",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "fighterType",
          "type": {
            "defined": {
              "name": "fighterType"
            }
          }
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "bank",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  98,
                  97,
                  110,
                  107
                ]
              }
            ]
          }
        },
        {
          "name": "mintAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  65,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
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
          "type": "pubkey"
        },
        {
          "name": "nftFighterPrice",
          "type": "u64"
        },
        {
          "name": "boosterPrice",
          "type": "u64"
        },
        {
          "name": "env",
          "type": {
            "defined": {
              "name": "env"
            }
          }
        }
      ]
    },
    {
      "name": "initializeEventLink",
      "discriminator": [
        105,
        55,
        238,
        224,
        120,
        243,
        238,
        72
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "event.nonce",
                "account": "eventData"
              }
            ]
          }
        },
        {
          "name": "eventLink",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "creator"
              }
            ]
          }
        },
        {
          "name": "championsPassAsset",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "champions_pass_asset.nonce",
                "account": "mintableGameAssetData"
              }
            ]
          }
        },
        {
          "name": "championsPassLink",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "champions_pass_link.nonce",
                "account": "mintableGameAssetLinkData"
              },
              {
                "kind": "account",
                "path": "creator"
              }
            ]
          }
        },
        {
          "name": "rank",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "event.rank_nonce",
                "account": "eventData"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializePlayer",
      "discriminator": [
        79,
        249,
        88,
        177,
        220,
        62,
        56,
        128
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "playerAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "playerPubkey"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "playerPubkey",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initializeRarity",
      "discriminator": [
        119,
        117,
        115,
        5,
        171,
        36,
        214,
        66
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "rarity",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "fighter",
          "type": {
            "vec": {
              "defined": {
                "name": "rarityFighter"
              }
            }
          }
        },
        {
          "name": "shieldBooster",
          "type": {
            "vec": {
              "defined": {
                "name": "rarityBooster"
              }
            }
          }
        },
        {
          "name": "pointsBooster",
          "type": {
            "vec": {
              "defined": {
                "name": "rarityBooster"
              }
            }
          }
        },
        {
          "name": "probabilityTiers",
          "type": {
            "vec": {
              "defined": {
                "name": "tierProbabilities"
              }
            }
          }
        }
      ]
    },
    {
      "name": "joinFightCard",
      "discriminator": [
        214,
        115,
        47,
        10,
        251,
        30,
        0,
        114
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "event.nonce",
                "account": "eventData"
              }
            ]
          }
        },
        {
          "name": "fighterAsset",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "fighter_asset.nonce",
                "account": "mintableGameAssetData"
              }
            ]
          }
        },
        {
          "name": "shieldBoosterAsset",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "shield_booster_asset.nonce",
                "account": "mintableGameAssetData"
              }
            ]
          }
        },
        {
          "name": "pointsBoosterAsset",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "points_booster_asset.nonce",
                "account": "mintableGameAssetData"
              }
            ]
          }
        },
        {
          "name": "fighterLink",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "fighter_link.nonce",
                "account": "mintableGameAssetLinkData"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "shieldBoosterLink",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "shield_booster_link.nonce",
                "account": "mintableGameAssetLinkData"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "pointsBoosterLink",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "points_booster_link.nonce",
                "account": "mintableGameAssetLinkData"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "fightCard",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  103,
                  104,
                  116,
                  67,
                  97,
                  114,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "fight_card.nonce",
                "account": "fightCardData"
              }
            ]
          }
        },
        {
          "name": "fightCardLink",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  103,
                  104,
                  116,
                  67,
                  97,
                  114,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "fightCard"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "eventLink",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "fighterColorSide",
          "type": {
            "defined": {
              "name": "fighterColorSide"
            }
          }
        }
      ]
    },
    {
      "name": "purchaseMysteryBox",
      "discriminator": [
        228,
        131,
        158,
        90,
        37,
        255,
        179,
        187
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "recipient",
          "writable": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "playerAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "recipient"
              }
            ]
          }
        },
        {
          "name": "mysteryBox",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  121,
                  115,
                  116,
                  101,
                  114,
                  121,
                  66,
                  111,
                  120
                ]
              },
              {
                "kind": "account",
                "path": "player_account.order_nonce",
                "account": "playerData"
              },
              {
                "kind": "account",
                "path": "recipient"
              }
            ]
          }
        },
        {
          "name": "bank",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  98,
                  97,
                  110,
                  107
                ]
              }
            ]
          }
        },
        {
          "name": "priceFeed"
        },
        {
          "name": "rarity",
          "docs": [
            "Rarity PDA"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program. Used to allocate space on-chain for the randomness_request account."
          ],
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "requests",
          "type": {
            "vec": {
              "defined": {
                "name": "purchaseRequest"
              }
            }
          }
        }
      ]
    },
    {
      "name": "refundMintableGameAsset",
      "discriminator": [
        24,
        14,
        147,
        16,
        147,
        80,
        128,
        114
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "playerAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "playerPubkey"
              }
            ]
          }
        },
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "event.nonce",
                "account": "eventData"
              }
            ]
          }
        },
        {
          "name": "fightCard",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  103,
                  104,
                  116,
                  67,
                  97,
                  114,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "fight_card.nonce",
                "account": "fightCardData"
              }
            ]
          }
        },
        {
          "name": "fightCardLink",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  103,
                  104,
                  116,
                  67,
                  97,
                  114,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "fightCard"
              },
              {
                "kind": "arg",
                "path": "playerPubkey"
              }
            ]
          }
        },
        {
          "name": "fighterAsset",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "fight_card_link.fighter_nonce_tracker",
                "account": "fightCardLinkData"
              }
            ]
          }
        },
        {
          "name": "pointsBoosterAsset",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "fight_card_link.points_booster_nonce_tracker",
                "account": "fightCardLinkData"
              }
            ]
          }
        },
        {
          "name": "shieldBoosterAsset",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "fight_card_link.shield_booster_nonce_tracker",
                "account": "fightCardLinkData"
              }
            ]
          }
        },
        {
          "name": "pointsBoosterLink",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "pointsGameAssetLinkNonce"
              },
              {
                "kind": "arg",
                "path": "playerPubkey"
              }
            ]
          }
        },
        {
          "name": "shieldBoosterLink",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  97,
                  98,
                  108,
                  101,
                  71,
                  97,
                  109,
                  101,
                  65,
                  115,
                  115,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "shieldGameAssetLinkNonce"
              },
              {
                "kind": "arg",
                "path": "playerPubkey"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "pointsGameAssetLinkNonce",
          "type": "u64"
        },
        {
          "name": "shieldGameAssetLinkNonce",
          "type": "u64"
        },
        {
          "name": "playerPubkey",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateEvent",
      "discriminator": [
        70,
        108,
        211,
        125,
        171,
        176,
        25,
        217
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "event.nonce",
                "account": "eventData"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
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
            "defined": {
              "name": "tournamentType"
            }
          }
        },
        {
          "name": "rankReward",
          "type": {
            "vec": {
              "defined": {
                "name": "rankReward"
              }
            }
          }
        }
      ]
    },
    {
      "name": "updateFightCard",
      "discriminator": [
        69,
        72,
        227,
        75,
        153,
        84,
        168,
        66
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "event.nonce",
                "account": "eventData"
              }
            ]
          }
        },
        {
          "name": "fightCard",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  103,
                  104,
                  116,
                  67,
                  97,
                  114,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "event"
              },
              {
                "kind": "account",
                "path": "fight_card.nonce",
                "account": "fightCardData"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "fightCardData"
            }
          }
        }
      ]
    },
    {
      "name": "updateFighter",
      "discriminator": [
        53,
        196,
        203,
        31,
        20,
        178,
        120,
        59
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "fighterBase",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "fighterType",
          "type": {
            "defined": {
              "name": "fighterType"
            }
          }
        },
        {
          "name": "fightMetrics",
          "type": {
            "defined": {
              "name": "fightMetrics"
            }
          }
        }
      ]
    },
    {
      "name": "updateProgram",
      "discriminator": [
        3,
        92,
        74,
        10,
        160,
        253,
        41,
        249
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "updateRandomnessMysteryBox",
      "discriminator": [
        223,
        227,
        116,
        212,
        13,
        196,
        7,
        85
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true
        },
        {
          "name": "mysteryBox",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  121,
                  115,
                  116,
                  101,
                  114,
                  121,
                  66,
                  111,
                  120
                ]
              },
              {
                "kind": "arg",
                "path": "mysteryBoxNonce"
              },
              {
                "kind": "arg",
                "path": "playerPubkey"
              }
            ]
          }
        },
        {
          "name": "randomnessAccountData"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "mysteryBoxNonce",
          "type": "u64"
        },
        {
          "name": "playerPubkey",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateRarity",
      "discriminator": [
        147,
        186,
        251,
        93,
        110,
        169,
        167,
        155
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "program",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "rarity",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  116,
                  116,
                  108,
                  101,
                  66,
                  111,
                  111,
                  115,
                  116,
                  101,
                  114,
                  115
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "fighter",
          "type": {
            "vec": {
              "defined": {
                "name": "rarityFighter"
              }
            }
          }
        },
        {
          "name": "shieldBooster",
          "type": {
            "vec": {
              "defined": {
                "name": "rarityBooster"
              }
            }
          }
        },
        {
          "name": "pointsBooster",
          "type": {
            "vec": {
              "defined": {
                "name": "rarityBooster"
              }
            }
          }
        },
        {
          "name": "probabilityTiers",
          "type": {
            "vec": {
              "defined": {
                "name": "tierProbabilities"
              }
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "eventData",
      "discriminator": [
        245,
        224,
        183,
        136,
        42,
        117,
        154,
        170
      ]
    },
    {
      "name": "eventLinkData",
      "discriminator": [
        193,
        99,
        88,
        72,
        6,
        110,
        80,
        254
      ]
    },
    {
      "name": "fightCardData",
      "discriminator": [
        90,
        129,
        42,
        94,
        234,
        251,
        33,
        197
      ]
    },
    {
      "name": "fightCardLinkData",
      "discriminator": [
        136,
        209,
        219,
        104,
        221,
        9,
        154,
        126
      ]
    },
    {
      "name": "fighterBaseData",
      "discriminator": [
        158,
        1,
        213,
        217,
        248,
        200,
        176,
        196
      ]
    },
    {
      "name": "mintableGameAssetData",
      "discriminator": [
        118,
        177,
        226,
        114,
        166,
        10,
        82,
        74
      ]
    },
    {
      "name": "mintableGameAssetLinkData",
      "discriminator": [
        32,
        117,
        221,
        195,
        102,
        239,
        141,
        255
      ]
    },
    {
      "name": "mysteryBoxData",
      "discriminator": [
        69,
        179,
        146,
        53,
        214,
        180,
        141,
        124
      ]
    },
    {
      "name": "playerData",
      "discriminator": [
        197,
        65,
        216,
        202,
        43,
        139,
        147,
        128
      ]
    },
    {
      "name": "priceUpdateV2",
      "discriminator": [
        34,
        241,
        35,
        99,
        157,
        126,
        244,
        205
      ]
    },
    {
      "name": "programData",
      "discriminator": [
        211,
        243,
        91,
        186,
        23,
        190,
        190,
        4
      ]
    },
    {
      "name": "rankData",
      "discriminator": [
        166,
        103,
        37,
        133,
        225,
        155,
        12,
        196
      ]
    },
    {
      "name": "rarityData",
      "discriminator": [
        155,
        162,
        42,
        196,
        94,
        55,
        239,
        58
      ]
    }
  ],
  "events": [
    {
      "name": "eventCreated",
      "discriminator": [
        59,
        186,
        199,
        175,
        242,
        25,
        238,
        94
      ]
    },
    {
      "name": "eventUpdated",
      "discriminator": [
        238,
        86,
        17,
        103,
        12,
        182,
        141,
        61
      ]
    },
    {
      "name": "fightCardCreated",
      "discriminator": [
        149,
        171,
        104,
        164,
        225,
        10,
        38,
        56
      ]
    },
    {
      "name": "fightCardUpdated",
      "discriminator": [
        60,
        242,
        246,
        85,
        64,
        170,
        247,
        52
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidOperation",
      "msg": "Custom error message for an invalid operation"
    },
    {
      "code": 6001,
      "name": "unauthorized",
      "msg": "Unauthorized access attempt"
    },
    {
      "code": 6002,
      "name": "gameAssetLinkNotLinkedToAssetPda",
      "msg": "The mintable game asset link is not properly linked to the specified mintable game asset PDA"
    },
    {
      "code": 6003,
      "name": "alreadyInitialized",
      "msg": "Already initialized"
    },
    {
      "code": 6004,
      "name": "unsupportedNftType",
      "msg": "The provided NFT type is not supported for this operation"
    },
    {
      "code": 6005,
      "name": "invalidPriceFeed",
      "msg": "Invalid Price Feed"
    },
    {
      "code": 6006,
      "name": "staleFeed",
      "msg": "Feed has not been updated in 5 minutes"
    },
    {
      "code": 6007,
      "name": "insufficientFunds",
      "msg": "Insufficient funds"
    },
    {
      "code": 6008,
      "name": "insufficientAmount",
      "msg": "Insufficient amount in purchase request"
    },
    {
      "code": 6009,
      "name": "randomnessUnavailable",
      "msg": "Randomness unavailable for now"
    },
    {
      "code": 6010,
      "name": "noMatchingRarityFound",
      "msg": "No matching rarity found"
    },
    {
      "code": 6011,
      "name": "wrongPlayerGameAssetLinkNonce",
      "msg": "The nonce must not exceed the last known nonce in the player's state"
    },
    {
      "code": 6012,
      "name": "notFreePda",
      "msg": "This player game asset pda is not free"
    },
    {
      "code": 6013,
      "name": "notEnoughAllowance",
      "msg": "Not enough allowance to generate mintable game asset"
    },
    {
      "code": 6014,
      "name": "eventAlreadyStarted",
      "msg": "The event has already started"
    },
    {
      "code": 6015,
      "name": "eventStillRunning",
      "msg": "The event is still in progress. Please try again after it concludes on approximately"
    },
    {
      "code": 6016,
      "name": "rarityAccountRequired",
      "msg": "Attach rarity account to this transaction"
    },
    {
      "code": 6017,
      "name": "fightCardLinkedToGameAsset",
      "msg": "Fight card link already has a game asset, or game asset nonce is missing"
    },
    {
      "code": 6018,
      "name": "eventLinkedToGameAsset",
      "msg": "Event card link already has a game asset, or game asset nonce is missing"
    },
    {
      "code": 6019,
      "name": "boosterTypeNotFound",
      "msg": "Booster type not found"
    },
    {
      "code": 6020,
      "name": "nonMainCardEvent",
      "msg": "Champion's pass not required for non-main card events"
    },
    {
      "code": 6021,
      "name": "mintableAssetHasNoOwner",
      "msg": "This mintable game asset has no owner"
    },
    {
      "code": 6022,
      "name": "mintableAssetBurned",
      "msg": "This mintable game asset is burnt"
    },
    {
      "code": 6023,
      "name": "mintableAssetLocked",
      "msg": "This mintable game asset is locked"
    },
    {
      "code": 6024,
      "name": "mintableAssetMintedAndUnavailable",
      "msg": "This mintable game asset has been minted as an NFT and is no longer available for in-game use"
    },
    {
      "code": 6025,
      "name": "mintableAssetLinkRequired",
      "msg": "This mintable game asset link is missing"
    },
    {
      "code": 6026,
      "name": "probabilityTierNotFound",
      "msg": "The probability tier was not found"
    },
    {
      "code": 6027,
      "name": "rankPointsIsNone",
      "msg": "Rank point is required"
    },
    {
      "code": 6028,
      "name": "rankIsNone",
      "msg": "Rank is required"
    },
    {
      "code": 6029,
      "name": "consumedAlready",
      "msg": "The requested operation has already been consumed"
    },
    {
      "code": 6030,
      "name": "randomnessIsNone",
      "msg": "Randomness is required. Please request randomness and try again."
    },
    {
      "code": 6031,
      "name": "failedToParseValue",
      "msg": "Failed to parse value"
    },
    {
      "code": 6032,
      "name": "missingChampionsPassAsset",
      "msg": "Champion's pass asset is missing"
    },
    {
      "code": 6033,
      "name": "missingChampionsPassLink",
      "msg": "Champion's pass link is missing"
    },
    {
      "code": 6034,
      "name": "randomnessAlreadyRevealed",
      "msg": "Randomness already revealed"
    },
    {
      "code": 6035,
      "name": "randomnessNotResolved",
      "msg": "Randomness is not yet resolved"
    },
    {
      "code": 6036,
      "name": "randomnessNotMatchingProvided",
      "msg": "Wrong randomness account provided"
    },
    {
      "code": 6037,
      "name": "feedUnreachable",
      "msg": "Feed is unreachable"
    },
    {
      "code": 6038,
      "name": "mintableAssetHasOwner",
      "msg": "This mintable game asset has owner"
    },
    {
      "code": 6039,
      "name": "noRecentBlockhashes",
      "msg": "No recent blockhashes"
    }
  ],
  "types": [
    {
      "name": "attribute",
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
      "name": "collectionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "shield"
          },
          {
            "name": "points"
          },
          {
            "name": "fighter"
          },
          {
            "name": "championsPass"
          }
        ]
      }
    },
    {
      "name": "env",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "dev"
          },
          {
            "name": "prod"
          }
        ]
      }
    },
    {
      "name": "eventCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventId",
            "type": "u64"
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
              "defined": {
                "name": "tournamentType"
              }
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
                "defined": {
                  "name": "rankReward"
                }
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
      "name": "eventLinkData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventPubkey",
            "docs": [
              "`Event` PDA public key for direct ref"
            ],
            "type": "pubkey"
          },
          {
            "name": "eventNonceTracker",
            "docs": [
              "Tracker to link the `EventLink` PDA to the `Event` PDA"
            ],
            "type": "u64"
          },
          {
            "name": "rankNonce",
            "docs": [
              "User rank nonce to recreate the pda"
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
              "option": "pubkey"
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
      "name": "eventUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "fightCardCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fightCardId",
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
            "type": "pubkey"
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
                "defined": {
                  "name": "sharedStrength"
                }
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
                "defined": {
                  "name": "sharedStrength"
                }
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
                "defined": {
                  "name": "fightCardResult"
                }
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
                "defined": {
                  "name": "fighterColorSide"
                }
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
            "type": "pubkey"
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
              "option": "pubkey"
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
            "name": "fighterLinkUsed",
            "docs": [
              "The `Pubkey` of the fighter link used"
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "fighterLinkUsedNonceTracker",
            "docs": [
              "Tracker to link the `FighterLink` PDA to the `FightCardLink` PDA"
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
              "option": "pubkey"
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
              "option": "pubkey"
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
              "defined": {
                "name": "fighterColorSide"
              }
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
      "name": "fightCardResult",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "koTko"
          },
          {
            "name": "decision"
          },
          {
            "name": "submission"
          },
          {
            "name": "disqualification"
          },
          {
            "name": "noContest"
          },
          {
            "name": "draw"
          },
          {
            "name": "internalCancellation"
          }
        ]
      }
    },
    {
      "name": "fightCardUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fightCardId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "fightMetrics",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "takedownsAttempted",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "takedownsLanded",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "takedownsSlam",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigClinchHeadStrikesAttempted",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigClinchHeadStrikesLanded",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigClinchBodyStrikesAttempted",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigClinchBodyStrikesLanded",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigClinchLegStrikesAttempted",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigClinchLegStrikesLanded",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "knockDowns",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigDistanceHeadStrikesAttempted",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigDistanceHeadStrikesLanded",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigDistanceBodyStrikesAttempted",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigDistanceBodyStrikesLanded",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigDistanceLegStrikesAttempted",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigDistanceLegStrikesLanded",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "reversals",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "submissions",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "secondsInControl",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigGroundHeadStrikesAttempted",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigGroundHeadStrikesLanded",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigGroundBodyStrikesAttempted",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigGroundBodyStrikesLanded",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigGroundLegStrikesAttempted",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "sigGroundLegStrikesLanded",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "advanceToHalfGuard",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "advanceToSide",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "advanceToMount",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          },
          {
            "name": "advanceToBack",
            "type": {
              "defined": {
                "name": "metrics"
              }
            }
          }
        ]
      }
    },
    {
      "name": "fighterBaseData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fighterType",
            "type": {
              "defined": {
                "name": "fighterType"
              }
            }
          },
          {
            "name": "fightMetrics",
            "type": {
              "defined": {
                "name": "fightMetrics"
              }
            }
          }
        ]
      }
    },
    {
      "name": "fighterColorSide",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "fighterBlue"
          },
          {
            "name": "fighterRed"
          }
        ]
      }
    },
    {
      "name": "fighterType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "boxing"
          },
          {
            "name": "muayThai"
          },
          {
            "name": "taekwondo"
          },
          {
            "name": "karate"
          },
          {
            "name": "judo"
          },
          {
            "name": "wrestling"
          },
          {
            "name": "brazilianJiuJitsu"
          },
          {
            "name": "sambo"
          }
        ]
      }
    },
    {
      "name": "grapplingStrength",
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
      "name": "metrics",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "points",
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
              "option": "pubkey"
            }
          },
          {
            "name": "metadata",
            "docs": [
              "The metadata on-chain, which allow dynamic use on our game"
            ],
            "type": {
              "defined": {
                "name": "nftMetadata"
              }
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
            "type": "pubkey"
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
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "probabilityTier",
            "type": {
              "defined": {
                "name": "tierProbabilities"
              }
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
      "name": "nftMetadata",
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
                "defined": {
                  "name": "attribute"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "nftType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "booster"
          },
          {
            "name": "fighter"
          },
          {
            "name": "championsPass"
          }
        ]
      }
    },
    {
      "name": "openRequest",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftType",
            "type": {
              "defined": {
                "name": "nftType"
              }
            }
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
            "name": "creator",
            "type": "pubkey"
          },
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
      "name": "priceFeedMessage",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feedId",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "price",
            "type": "i64"
          },
          {
            "name": "conf",
            "type": "u64"
          },
          {
            "name": "exponent",
            "type": "i32"
          },
          {
            "name": "publishTime",
            "docs": [
              "The timestamp of this price update in seconds"
            ],
            "type": "i64"
          },
          {
            "name": "prevPublishTime",
            "docs": [
              "The timestamp of the previous price update. This field is intended to allow users to",
              "identify the single unique price update for any moment in time:",
              "for any time t, the unique update is the one such that prev_publish_time < t <= publish_time.",
              "",
              "Note that there may not be such an update while we are migrating to the new message-sending logic,",
              "as some price updates on pythnet may not be sent to other chains (because the message-sending",
              "logic may not have triggered). We can solve this problem by making the message-sending mandatory",
              "(which we can do once publishers have migrated over).",
              "",
              "Additionally, this field may be equal to publish_time if the message is sent on a slot where",
              "where the aggregation was unsuccesful. This problem will go away once all publishers have",
              "migrated over to a recent version of pyth-agent."
            ],
            "type": "i64"
          },
          {
            "name": "emaPrice",
            "type": "i64"
          },
          {
            "name": "emaConf",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "priceUpdateV2",
      "docs": [
        "A price update account. This account is used by the Pyth Receiver program to store a verified price update from a Pyth price feed.",
        "It contains:",
        "- `write_authority`: The write authority for this account. This authority can close this account to reclaim rent or update the account to contain a different price update.",
        "- `verification_level`: The [`VerificationLevel`] of this price update. This represents how many Wormhole guardian signatures have been verified for this price update.",
        "- `price_message`: The actual price update.",
        "- `posted_slot`: The slot at which this price update was posted."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "writeAuthority",
            "type": "pubkey"
          },
          {
            "name": "verificationLevel",
            "type": {
              "defined": {
                "name": "verificationLevel"
              }
            }
          },
          {
            "name": "priceMessage",
            "type": {
              "defined": {
                "name": "priceFeedMessage"
              }
            }
          },
          {
            "name": "postedSlot",
            "type": "u64"
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
              "Represent the current amount of mintable game asset"
            ],
            "type": "u64"
          },
          {
            "name": "adminPubkey",
            "docs": [
              "Represent the current amount in circulation of game assets",
              "The authority which are allowed to administrate the contract"
            ],
            "type": "pubkey"
          },
          {
            "name": "fighterPrice",
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
          },
          {
            "name": "env",
            "type": {
              "defined": {
                "name": "env"
              }
            }
          }
        ]
      }
    },
    {
      "name": "purchaseRequest",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftType",
            "type": {
              "defined": {
                "name": "nftType"
              }
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
      "name": "rankData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerAccount",
            "type": "pubkey"
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
      "name": "rankReward",
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
      "name": "rarityBooster",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "common",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              }
            ]
          },
          {
            "name": "uncommon",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              }
            ]
          },
          {
            "name": "rare",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              }
            ]
          },
          {
            "name": "epic",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              }
            ]
          },
          {
            "name": "legendary",
            "fields": [
              {
                "name": "value",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              }
            ]
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
                "defined": {
                  "name": "rarityFighter"
                }
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
                "defined": {
                  "name": "rarityBooster"
                }
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
                "defined": {
                  "name": "rarityBooster"
                }
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
                "defined": {
                  "name": "tierProbabilities"
                }
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
    },
    {
      "name": "rarityFighter",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "common",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              }
            ]
          },
          {
            "name": "uncommon",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              }
            ]
          },
          {
            "name": "rare",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              }
            ]
          },
          {
            "name": "epic",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              }
            ]
          },
          {
            "name": "legendary",
            "fields": [
              {
                "name": "power",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              },
              {
                "name": "lifespan",
                "type": {
                  "defined": {
                    "name": "stats"
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "sharedStrength",
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
            "name": "takedownsSlams",
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
              "defined": {
                "name": "strikingStrength"
              }
            }
          },
          {
            "name": "grapplingStrength",
            "type": {
              "defined": {
                "name": "grapplingStrength"
              }
            }
          }
        ]
      }
    },
    {
      "name": "stats",
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
      "name": "strikingStrength",
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
      "name": "tierProbabilities",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "tier1",
            "fields": [
              "bytes"
            ]
          },
          {
            "name": "tier2",
            "fields": [
              "bytes"
            ]
          },
          {
            "name": "tier3",
            "fields": [
              "bytes"
            ]
          }
        ]
      }
    },
    {
      "name": "tournamentType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "mainCard"
          },
          {
            "name": "prelims"
          },
          {
            "name": "earlyPrelims"
          }
        ]
      }
    },
    {
      "name": "verificationLevel",
      "docs": [
        "Pyth price updates are bridged to all blockchains via Wormhole.",
        "Using the price updates on another chain requires verifying the signatures of the Wormhole guardians.",
        "The usual process is to check the signatures for two thirds of the total number of guardians, but this can be cumbersome on Solana because of the transaction size limits,",
        "so we also allow for partial verification.",
        "",
        "This enum represents how much a price update has been verified:",
        "- If `Full`, we have verified the signatures for two thirds of the current guardians.",
        "- If `Partial`, only `num_signatures` guardian signatures have been checked.",
        "",
        "# Warning",
        "Using partially verified price updates is dangerous, as it lowers the threshold of guardians that need to collude to produce a malicious price update."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "partial",
            "fields": [
              {
                "name": "numSignatures",
                "type": "u8"
              }
            ]
          },
          {
            "name": "full"
          }
        ]
      }
    }
  ]
};
