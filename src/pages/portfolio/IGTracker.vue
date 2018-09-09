<template lang="pug">
  div#page
    div.page__wrapper
      div.page__section
        h3.page__title
          | IGTracker  -  UX Case Study
        p.page__subtitle
          | Instagram tracking application
        lightbox.section__image(
          thumbnail="/src/assets/igtracker/header.png"
          :images="['/src/assets/igtracker/header.png']"
        )

      div.page__section
        h3.section__title
          | Inspiration
        p.section__paragraph
          | Lots of teens using SNS applications nowadays. They love to use SNS applications like Twitter, Facebook and Instagram. And they really care about their account’s popularity and interest about their account from others. Most of the teens that using SNS believe about ripple effects from their SNS account, and they spend a lot of time to attract more followers on their account.

      div.page__section
        h3.section__title
          | Design Process
        p.section__paragraph
          | I followed IDEO’s Human-Centered Design process to make my design backed up by feedback, researches and user testing.
        lightbox.section__image(
          thumbnail="/src/assets/igtracker/process.png"
          :images="['/src/assets/igtracker/process.png']"
        )

      div.page__section
        h3.section__title
          | #1. Observation
        p.section__title--small
          | Goal & Audience
        p.section__paragraph
          | IGTracker’s goal is very straightforward and simple — To analyze and track user’s Instagram account’s statistics like Followers, Following, Likes, Comments, etc. Our main target are teens, mostly from USA and aged between 13~25. Also main audience of Instagram, Snapchat and Facebook. Above all, Instagram is the most popular and active application between those targets. We aim our targets by providing an application, which can deeply analyzing their Instagram account’s statistics.

        p.section__quote
          | “Try to understand people through observing them. For example, if you’re designing a vacuum cleaner, watch people vacuum.”

        p.section__title--small
          | Results of surveys by LendEDU
        p.section__paragraph
          | Question 1: Do you make an intentional effort to like people’s Instagram posts who like yours?
        lightbox.section__image(
          thumbnail="/src/assets/igtracker/survey1.png"
          :images="['/src/assets/igtracker/survey1.png']"
        )
        p.section__paragraph
          | Question 2: Do you know someone who deletes Facebook or Instagram posts if they don’t get enough likes?
        lightbox.section__image(
          thumbnail="/src/assets/igtracker/survey2.png"
          :images="['/src/assets/igtracker/survey2.png']"
        )
        p.section__paragraph
          | According to the survey by LendEDU above, it seems most of young people really cares about their Instagram account's popularity. We can find out that those Instagram users check the popularity of posts they posted. They are accustomed to do such 'work'. However, what if they can check and review their accounts overall history of statistics on a single screen, instead of checking their posts one by one?

        p.section__title--small
          | Persona
        p.section__paragraph
          | I created a potential user of IGTracker based on our main target that I write on above paragraph. Image below is a persona of the potential IGTracker’s user.
        lightbox.section__image(
          thumbnail="/src/assets/igtracker/persona.png"
          :images="['/src/assets/igtracker/persona.png']"
        )

        p.section__title--small
          | Platform
        p.section__paragraph
          | Basically, Insharior is a ‘sharing economy’ application. Users of Insharior share their interior items on Insharior. We provide this platform with clean and intuitive interface and experience. Integrate it with other SNS like Facebook, Instagram and Twitter is available. We’re going to customize the user-front view, by using collected data from chat-bot and big data. Sharing economy applications like AirBnb, Uber, Lyft and SolarCity have a great ripple effects. They don’t have their own contents, only provide a platform for users, but makes world-class profits.
        p.section__quote
          | “The share economy blows up the industrial model of companies owning and people consuming.” — Forbes, Jan.

        p.section__title--small
          | Job Stories
        p.section__paragraph
          | I used Jobs to be done framework to understand better our mission as a sight of actual users of our application, IGTracker.
        div.section__list
          ol
            li When I managing my Instagram account, I want to take care about my feeds and followers, So I can keep my followers following on me.
            li When I upload a new post on my Instagram, I want to get lots of Likes on it, So I can make my account more popular.
            li When someone unfollow my Instagram account without any single word, I want to track those people who unfollowed me, So I can unfollow them either or try harder to keep my followers following me.
        lightbox.section__image(
          thumbnail="/src/assets/igtracker/igtracker_logo.png"
          :images="['/src/assets/igtracker/igtracker_logo.png']"
        )

      div.page__section
        h3.section__title
          | #2. Ideation
        p.section__title--small
          | Main purpose
        p.section__paragraph
          | IGTracker’s main purpose is to provide insights of user’s Instagram account. IGTracker analyze the account’s status like it’s Followers, Blocked users, Comments and likes. And show those information with graph and chart with clean and intuitive user interface.

        p.section__title--small
          | Brainstorming
        p.section__paragraph
          | Our team began to brainstorming the ideas, based on observations and experiences on prior step. We focused on our target’s needs and desires. There are some points on our main targets(Teens based in USA, aged between 13~25):
        div.section__list
          ol
            li They are used to making social networks with mobile applications like Snapchat, Instagram, Musical.ly and Houseparty.
            li They love interactions and gestures like Swiping, Pinching, Expanding, Animations and those are completely natural to them.
            li They are expert on those operation system, applications and interactions, but still don’t want to be difficult by complex and hard UX.
        lightbox.section__image(
          thumbnail="/src/assets/igtracker/igtracker_map.png"
          :images="['/src/assets/igtracker/igtracker_map.png']"
        )

        p.section__title--small
          | Quick UI Concepts
        p.section__paragraph
          | IGTracker is going to release only for iOS platform. Based on iOS Human Interface Guidelines, our team started to make some guidelines for IGTracker application:
        div.section__list
          ol
            li White/negative space clean design, with bold fonts and emoji(Inspired by Snapchat).
            li Organized, spaced and easy to read with contrast colors, with the minimalist approach for readable data and graph at a glance.
            li Focus on young designs and not only functional design due to our main targets have standards from other applications like Instagram, Snapchat or Facebook.

      div.page__section
        h3.section__title
          | #3. Rapid Prototyping
        p.section__title--small
          | Lo-Fi Prototypes
        p.section__paragraph
          | For a quick user testing, our team created some rough prototypes. With InVision application, made them clickable, and started to test it with some testers who love to use Instagram, and care about their popularity. To make sure that our solution is on our target, we focused not to make a detailed and perfect solution and prototypes. (Click image to enlarge )
        lightbox.section__image(
          thumbnail="/src/assets/igtracker/lofi.png"
          :images="['/src/assets/igtracker/lofi.png']"
        )

        p.section__title--small
          | _a. Dashboard
        p.section__paragraph
          | After the user logs in, this screen is the first screen that user see. In this screen, we summarize the main information that the user needs by graphs:
        div.section__list
          ol
            li Followers Growth
            li Unfollowed Me
            li Not Following Me Back
            li Blocked Me
            li Deleted Comments/Likes
        p.section__paragraph
          | It’s not a scrollable screen. We are showing fixed number of mandatory items, to give the user the feel of control on what’s happening with user’s account analytics, on a high level.
        p.section__paragraph
          | For the very first time, we had more graphs on the main screen for more insight than the current design. However, after thinking carefully about what really users need, we decided to offer only 5 graphs in total: 'Followers Growth', 'Unfollowed Me', 'Not Following Me Back', 'Blocked Me' and 'Deleted Comments/Likes'.


</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'igtracker',

  metaInfo: {
    title: globalVar.fullname,
    titleTemplate: '%s - Igtracker',
  },

}
</script>

<style lang="scss">

</style>
