# One Line, Big Laugh

[![One Line, Big Laugh](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![Rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/toirant/u-coral-404-one-line-big-laugh-328fb857/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![Reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/toirant/u-coral-404-one-line-big-laugh-328fb857/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

An entry for the [One Line, Big Laugh](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857) bounty on make.fun.

## The entry

> My ancestors survived famine, plague, and war so I could panic-buy a $40 candle called 'Emotional Support Beach.'

One line, 113 characters — the grand sweep of human survival undercut by a panic-bought scented candle.

## How it works

`main.ts` writes that single line to `/output/entry.txt` (creating `/output` if needed) and validates it in code before and after writing: UTF-8, 1–200 characters, a single line, not whitespace-only, and no leading or trailing whitespace. The written file is read back and re-validated so a partial write cannot pass silently.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
