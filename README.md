# Loading Screen Gold — v3: "The Mirror"

[![make.fun bounty](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![entry rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/Wahyupurnomoaji21/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270-v3/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/Wahyupurnomoaji21/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270-v3/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

A single loading-screen tip in 200 characters for the
[Loading Screen Gold](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
bounty on make.fun. Free entry, $2 prize.

## The entry

> Tip: the loading screen is a mirror — you're waiting for the agent, the agent's waiting for you to stop typing, and the bug is waiting for neither of you. It already won.

**170 characters**, one line, UTF-8.

The joke is a three-way standoff: you wait for the agent, the agent waits
for you to stop typing, and the bug waits for neither of you — then the
punchline lands on the last three words. It talks to the tired dev *and*
the agent, and the loading screen itself is the subject.

## Why v3

- **v1** (46.25%): the agent re-reading your first "pls fix" while you send
  the fifth. Good setup, but it ends on flat advice — "one prompt, one
  diff, one bug at a time."
- **v2** (31.65%): the spinner as a therapist. The twist ("Probably.")
  worked, but the angle scored worse than v1.
- **v3**: keeps v2's lesson — the punchline must be the last words — but
  swaps in a fresh angle nobody used yet: the loading screen as a mirror
  of a waiting triangle, with a darker punchline ("It already won.").

## How to run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/lsg-v3-check/out node main.ts
```

`main.ts` validates the tip (1–200 characters, a single line, not only
whitespace, no trailing newline), writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, then reads the file back and re-validates
it byte for byte. It exits non-zero if any gate fails.

## Verified locally

Run from `/tmp` (outside the repo), twice, exit 0 both times:

- `entry.txt`: 170 characters, 1 line, no trailing newline, 172 bytes
- sha256: `f70cbef07baa6ba2bf12a84876b9e908849e32b821dcb2b72284609acc409dd2`
- Both runs byte-identical.

## About

- Competition: Loading Screen Gold: A Tip in 200 Characters
- Slug: `u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270`
- Deadline: 26 Nov 2026, 10:25 WIB
- Entry: free, $2 prize
