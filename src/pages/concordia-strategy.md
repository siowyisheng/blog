---
title: "Concordia strategy"
date: "2018-05-04"
category: "games"
---

![Corcordia cover](https://i.ebayimg.com/images/g/ub4AAOSwmZdZilhN/s-l500.jpg "Concordia cover")

Concordia is a good board game.

## Abbreviations

#### General
* opt = Option
* act = Action
* bld = Build(a house)
* spw = Spawn(a colonist)
* mov = Movement

#### Number or symbolic
* -X = Spend resource X
* +X = In combination with resource X
* nX = Variable amount of X

#### Money and goods (1 character)
* $ = Sestertii
* B = Brick
* F = Food
* T = Tool
* W = Wine
* C = Cloth
* ? = Any of B/F/T/W/C
* ?? = Some number of B/F/T/W/C

#### Personality cards (2 letters)
* TR = Tribune
* AR = Architect
* PR = Prefect
* CL = Colonist
* ME = Mercator
* DI = Diplomat
* SE = Senator
* CS = Consul
* SP-X = Specialist producing good X

#### Others (starts with 'x')
* xC = Colonist
* xH = House
* xH-X = House producing good X
* xP = Province
* xPC = Personality card
* xPM = Praefectus Magnus card
* xSH = Storehouse space

## VP sources

It's often useful to start planning from the end of the game backwards. At game end, we want to have the most VP.

#### VP per personality card

Card | VP | VP with low effort | Calculation | Comment
---|---|---|---|---
JUPITER | 0-15 | 6 | 1VP/non-B xH.
SATURNUS | 0-11/12 | 6 | 1VP/xPR with a xH.
MERCURIUS | 2-10 | 6 | 2VP/xH type.
MARS | 4-12 | 8 | 2VP/xC.
VESTA | 0-X | 2 | 1VP/10$ | Poor conversion rate.



Then we look at the $ costs of each common action related to the VP sources.

But first, we need to have some meaningful exchange rate between other resources and $. There are multiple ways of assigning these exchange rates. For example, although C sells for 7$, We could say that requiring 1 cloth is actually requiring _more_ than 7$, since we need that 7$ to be exactly in the form of C, and it costs ME steps to convert resources.

But to keep it simple, I will just use the ME exchange rates and account for liquidity and flexibility issues later on.

#### Dollar costs of common actions

ACTION|COST($)
---|---
Build xH-B|5
Build xH-F|9
Build xH-T|11
Build xH-W|13
Build xH-C|15
Spawn xC|9

#### Resource lifecycles

RESOURCE|GAINED BY|CONSUMED BY|OWNERSHIP BONUS
---|---|---|---
$|TR, PR($), CL($), ME, ME + ??|AR(xH), ME(buy)|-
xH-B|AR -1$ -F |-|B when PR
xH-F|AR -2$ -B -F |-|F when PR
xH-T|AR -3$ -B -T |-|T when PR
xH-W|AR -4$ -B -W |-|W when PR
xH-C|AR -5$ -B -C |-|C when PR
<Tooltip text="Colonist">xC</Tooltip>|TR -F -T, CL -nF -nT|-|AR mov step/opt, bld opt, CL($)
B|PR, PR +xH-B, ME -3n$, SP-B|AR(xH-F/T/W/C), ME, SE|-
F|PR, PR +xH-F, ME -4n$, SP-F|AR(xH-B/F), ME, SE|-
T|PR, PR +xH-T, ME -5n$, SP-T|AR(xH-T), ME, SE|-
W|PR, PR +xH-W, ME -6n$, SP-W|AR(xH-W), ME, SE|-
C|PR, PR +xH-C, ME -7n$, SP-C|AR(xH-C), ME, SE|-
xPC|SE -??, CS -??|-|act opt
xSH|TR -F -T, CL -F -T|-|goods capacity
xPM|-|PR|-





## On usage of the Praefectus Magnus card
It is beneficial to have procced the card more than other players. You will never have fewer procs relative to other plays after proccing the card. Also, it's also beneficial to proc it early to accumulate ownership bonuses. For these reasons, it's best to generally proc the card as soon as possible. The exceptions are for tactical reasons, like denying the downstream opponents certain bonus resources, or for endgame tiebreaker purposes.

