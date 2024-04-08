export const tree: QuestionNode = {
  type: "q",
  value: "1. Do you prefer your coffee hot or cold?",
  children: [
    {
      type: "a",
      value: "hot",
      children: {
        type: "q",
        value:
          "2. Are you in the mood for coffee or would you prefer a non-coffee option?",
        children: [
          {
            type: "a",
            value: "coffee",
            children: {
              type: "q",
              value:
                "3. Do you prefer your coffee to be purely coffee-based or mixed with other flavors?",
              children: [
                {
                  type: "a",
                  value: "pure",
                  recipes: [
                    "espresso",
                    "v60",
                    "aeropress",
                    "prensa_francesa",
                    "clever",
                    "bunn",
                    "americano",
                  ],
                  children: {
                    type: "q",
                    value:
                      "2. Do you prefer your coffee to be strong and intense or smooth and mild?",
                    children: [
                      {
                        type: "a",
                        value: "strong",
                        recipes: ["espresso", "aeropress", "prensa_francesa"],
                        children: {
                          type: "q",
                          value:
                            "3. Are you looking for a traditional coffee experience or something more unique?",
                          children: [
                            {
                              type: "a",
                              value: "traditional",
                              recipes: ["espresso", "v60", "bunn", "americano"],
                            },
                            {
                              type: "a",
                              value: "unique",
                              recipes: [
                                "aeropress",
                                "prensa_francesa",
                                "clever",
                              ],
                            },
                          ],
                        },
                      },
                      {
                        type: "a",
                        value: "mild",
                        recipes: ["americano", "v60", "clever", "bunn"],
                        children: {
                          type: "q",
                          value:
                            "3. Are you looking for a traditional coffee experience or something more unique?",
                          children: [
                            {
                              type: "a",
                              value: "traditional",
                              recipes: ["espresso", "v60", "bunn", "americano"],
                            },
                            {
                              type: "a",
                              value: "unique",
                              recipes: [
                                "aeropress",
                                "prensa_francesa",
                                "clever",
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  type: "a",
                  value: "mixed",
                  recipes: ["cappuccino", "latte", "flat_white", "mocha"],
                  children: {
                    type: "q",
                    value:
                      "3. Are you looking for a traditional coffee experience or something more unique?",
                    children: [
                      {
                        type: "a",
                        value: "traditional",
                        recipes: ["cappuccino", "latte", "flat_white"],
                      },
                      {
                        type: "a",
                        value: "unique",
                        recipes: ["mocha"],
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: "a",
            value: "non-coffee",
            recipes: [
              "cha_camomila",
              "cha_preto",
              "hot_choco_40",
              "hot_choco_70",
            ],
            children: {
              type: "q",
              value:
                "3. Are you looking for a traditional coffee experience or something more unique?",
              children: [
                {
                  type: "a",
                  value: "traditional",
                  recipes: ["cha_camomila", "hot_choco_40"],
                },
                {
                  type: "a",
                  value: "unique",
                  recipes: ["cha_preto", "hot_choco_70"],
                },
              ],
            },
          },
        ],
      },
    },
    {
      type: "a",
      value: "cold",
      children: {
        type: "q",
        value:
          "2. Are you in the mood for coffee or would you prefer a non-coffee option?",
        children: [
          {
            type: "a",
            value: "coffee",
            children: {
              type: "q",
              value:
                "3. Do you prefer your coffee to be purely coffee-based or mixed with other flavors?",
              children: [
                {
                  type: "a",
                  value: "pure",
                  recipes: ["iced_americano"],
                },
                {
                  type: "a",
                  value: "mixed",
                  recipes: [
                    "tonic",
                    "orange_tonic",
                    "iced_latte",
                    "affogato",
                    "iced_caramel_latte",
                  ],
                  children: {
                    type: "q",
                    value:
                      "2. Do you prefer your coffee to be strong and intense or smooth and mild?",
                    children: [
                      {
                        type: "a",
                        value: "strong",
                        recipes: ["tonic", "orange_tonic"],
                      },
                      {
                        type: "a",
                        value: "mild",
                        recipes: [
                          "iced_latte",
                          "affogato",
                          "iced_caramel_latte",
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          }, //coffee
          {
            type: "a",
            value: "non-coffee",
            recipes: ["matcha", "cold_choco_40", "cold_choco_70", "soda"],
            children: {
              type: "q",
              value:
                "3. Are you looking for a traditional coffee experience or something more unique?",
              children: [
                {
                  type: "a",
                  value: "traditional",
                  recipes: ["soda", "cold_choco_40"],
                },
                {
                  type: "a",
                  value: "unique",
                  recipes: ["matcha", "cold_choco_70"],
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export type QuestionNode = {
  type: "q";
  value: string;
  children: [AnswareNode, AnswareNode];
};
export type AnswareNode = {
  type: "a";
  value: string;
  recipes?: string[];
  children?: QuestionNode;
};

export type ResultCount = {
  [x: string]: number;
};
