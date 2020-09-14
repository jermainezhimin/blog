---
title: "📝 Tech Hiring Checklist (from an engineer)"
summary: "What to do when setting up technical recruiting."
date: "2020-09-13"
---

The process of interviewing software engineering is controversial, and personally, many companies don’t execute or design it well. Now the tables have turned and I’ve got to play technical interviewer at CrowdAI; This is my checklist for designing future hiring processes(_and hopefully provide a better experience_) 😊:
1. 📲 Hosting initial phone screen
2. ✍️ Creating a coding challenge 
3. 🗣️ Running a coding interview

> Well prepared interviewers are very important, it shows proper planning, communication and execution on the company’s part. The hiring process(_from start to end_) should close in `3 days` if you’re hiring for a startup. When you creep up onto the large corp's timeline of `1 month`, you’ve lost most eligible candidates (_i.e always assume they are interviewing everywhere_). Large corps (_read `FAANG`_) can easily beat your compensation and no one wants to lose money working for you. 💸

## 📲 HOSTING INITIAL PHONE SCREEN
When preparing for the first conversation, do your homework on your own company. This translates into the following questions that should be provided in the initial company spiel/pitch:

1. What is the agenda of the phone screen? Plan to slot in some time where the candidate can walk you through their background (_ask specific questions if you’re technical enough_)
2. What does the company do in one sentence? This is a `We sell X and we have a competitive edge because we do Y / nobody does Y` statement. 
3. How does the company sell `X`? This is a good transition to talk about the product and how users might use them. If the company is out of stealth, how many customers you have and what are some prominent ones?
5. What is the technical stack of the company and the team this position is for? I like mentioning `we use X in the web’s frontend, Y as web’s backend and Z for miscellaneous micro-services; these are orchestrated by A and deployed on B` before transitioning to what they will specifically be working on (_i.e. frontend, backend or what product scope_)
6. How is the engineering team structured (_i.e how many engineering teams are there and how are they divided_) and what is the team sizes?  
7. What is the interviewing process?

This is a great way to link up the big picture/company mission and how the candidate will contribute to it. Anything less errs on a clumsy pitch which doesn’t convey enough excitement for someone else to join your company/team. 

>If you’re in charge of communication with candidates, keep the candidate fully aware of what’s to come (_primarily via emails_). This means always letting the candidate know: 
>1. Who they are interviewing with; Sending over their names and `LinkedIn` profile is great.
>2. What the rough agenda of the call. If it’s a code screen, walking them through what will happen is required(_i.e what cloud `IDE` or type of technical question to expect_). You don’t want to surprise your unprepared candidates with a domain specific codescreen (_i.e `react`/`rails`_).

## ✍️ CREATING A CODING CHALLENGE
Coding challenges aren’t the best way to estimate a candidate’s technical ability; but it can provide an estimate(_read wild estimate 🤪_). It is important to mention that there are other important facets of great engineers that are hard to measure(_but should be evaluated for during the onsite_). 

>Great engineers build great teams, bad engineers flip binary trees 🌳

This is a good article by [@lethain](https://twitter.com/Lethain) on a more in-depth read for [what is a appropriate programming problem](https://lethain.com/appropriate-programming-problems/). A rule of thumb, better coding challenges should:

1. Be straight forward and have a clear goal. The challenge and expected outcome should be able to be concise enought to be read out loud by the interviewer. If the coding challenge starts with a `README.md` for the candidates, it’s too complicated.
2. Clearly provide a yes / no answer to whether the candidate should move forward. This involves getting all decision makers on board with the coding challenge.
3. Not require too much code to solve. Aiming for about `2` lines per minute, this translates to about `60` lines of code for a `30` minute challenge.
4. Not require knowledge of a specific trick to solve (_unless initially communicated explicitly_). 
5. Not to be worked on the whiteboard (_period, we don’t code on the whiteboard_)

Each challenge should have a scoring rubric (_to synchronize expectations and scoring_) and a guide for interviewers to follow (_to ensure the interview experience is consistent_). Before the challenge can be used in the hiring pipeline, be sure it's socialized with stakeholders and get a collective thumbup 👍. 

>All interviewers executing this challenge should experience it as an interviewee to better understand how to guide the candidate through it.

There are the requirements for each document and resource:
1. Codescreen scoring rubric (_see an example by [medium](https://medium.engineering/engineering-interviews-grading-rubric-8b409bec021f)_)
    - What are the different attributes to score the candidate on? For each attribute, there should be a `-1/0/+1` scale representing if the candidate `does not have/maybe/has` attribute respectively. Each scale should have a write up on what constitutes a `-1/0/+1`. 
    - Be sure to grade soft skills like awareness and communication.
    - I specifically chose the `-1/0/+1` range to makes scoring easy, having larger scale creates a blurring effect where a candidate might fall into 2 bands of the scale. 
    - What constitutes a pass/fail? How can we aggregate the score above to create a passing score? 
2. Codescreen guide
    - What the agenda for the codescreen?
    - What is the intention of this codescreen? This should include what the challenge is trying to achieve.
    - What should the interviewer do before to prep for the interview? How to get the coding environment ready, test out the environment, get familiar with the challenge, etc
    - What should the interviewer point out during the interview?  What parts of the environment to go through so the candidate is comfortable working there?
    - If there are technical questions to be asked, be sure to also fill in the possible directions answer can be made (not the answers). 
3. Cloud coding environment
    - For pure scripting, use [Repl.it](repl.it)
    - For `React` projects, use [CodeSandbox](codesandbox.io)

> It's a nice fallback to provide a git repository for running the challenge locally if the cloud coding environment fails.

## 🗣️ RUNNING A CODING CHALLENGE
Coding challenges are a little easier to run than the initial phone screen since the context has been setup. A caveat is that this portion of the interview is important for showcasing engineering culture. The best way to do this is being genuine(_it's obvious when you say something you don't believe_), entering the call with a positive outlook and always assuming postitive intention.

Typically, an interviewer will:
1. Introduce yourself(_i.e `my name is X and I'm a Y working on the Z team`_).
2. Walk the candidate through the agenda of the call.
3. Start screen sharing and walk through the cloud `IDE` and the coding challenge.
4. Allow the candidate to clear up and doubt/questions on the intent/goal before explicitly starting the timer and mentioning when then challenge ends. 
5. While the challenge is running, keep an eye on what the candidate is doing and try to nudge them in the right direction if required.
6. If you need to stop a candidate, be polite, don't emphasize any failure. I like to say `Unfortunately,we ran out of time. Before we wrap up, is there any questions about the company I could answer?`
7. Let the candidate know when they will hear about next steps and thank them for their time!

> Be aware of micro-aggressive behaviour. This includes looking irritated / doing something else when someone else is coding OR using pointed language.

Interviewing is alot of work but like every skill, keep practising to be good at it! Hopefully, there is a light at the end of your hiring funnel 🥁 💥
