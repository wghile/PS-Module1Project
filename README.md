Link to Live Site here: https://wghile.github.io/darts-PSMod1/

## Overview

This project is my first game built while enrolled in the Per Scholas Software Engineering course. Players will go against the computer to see who can score the most points in a classic game of darts.

## Game Play

There are 5 rounds for the player and computer to score points and turns alternate. Player always goes first. The player and computer both have an accuracy value (between 0 and 1) associated with them and each round the accuracy value of both players will be tested against a random number between 0 and 1. If the accuracy value is higher, the player can select where the dart will be thrown on the board. (On the board, the numbers correlate to the value/points that can be earned for hitting that zone.) If it is lower, the dart will be thrown randomly on the board and the same goes for the computer. To make it challenging, if the computer's accuracy value is higher, they will either hit the bullseye (worth 50 points) or outer ring (worth 25 points). At the end of the 5 rounds, the points will be added up and whoever has the most points will be deemed the winner. Goodluck!

There are many variations of the game that can be played. I just picked the most simple. Here's a list of other dart games: https://www.shotdarts.com/blog/a-starter-for-5-basic-dart-games-you-should-know

Built with HTML, CSS, JavaScript

## Challenges

Designing the board was a VERY tedious process... I wanted to try to replicate a dart board using CSS. The sizing and placement of the different zones (black and white triangles) especially were time-consuming. Also, I'm missing the triple and double rings which were difficult to implement. In terms of styling it was simple to add but given that the z-index would've been higher than the board and the zones, it essentially blocked the zones. So when the player had a chance to 'throw' the dart, it was not registering. (I had built the game so that each zone had a function where depending on the evt.target, the score associated with that zone would be recorded.)

Another challenge I faced was trying to implement animation. To add some dynamics to the page, I think it would've been cool to simulate a dart being thrown or at least appearing on the dartboard with some sort of sound paired along with it. This proved to be more challenging than I thought and I honestly spent too much time on the design.

## Future Work

Similar to what was said in the challenges section...

- Animation

- Finish up the board

  - Might be better to create the board on a separate page, screenshot it and then paste it into the game to avoid issues with the design impedding the functionality

- Another feature I may add is something that replaces the accuracy test. It's not a bad feature but it's just a lot of clicking and prompts that come up and seems kind of boring. Instead I was thinking at the start of each round, the player would have to guess a number and the computer would generate a random number. I'll also have another random number generator between a specific range. If the player's guess is closer, the player can select where they want to throw the dart on the board and the computer's dart will be randomly thrown. And vice versa (including if it was a tie)

## Acknowledgements

Thank you to my instructors Tishana Trainor, Kasper Kain and Manara Ali for their support!
