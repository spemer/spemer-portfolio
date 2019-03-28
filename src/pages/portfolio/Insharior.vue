<template lang="pug">
  div#page
    div.page__wrapper
      div.page__section
        h3.page__title
          | Insharior: UX Case Study &amp; Design Process
        p.page__subtitle
          | Interior item sharing application
        lightbox.section__image(
          thumbnail="/src/assets/insharior/1.png"
          :images="['/src/assets/insharior/1.png']"
        )

      div.page__section
        h3.section__title
          | Overview
        p.section__paragraph
          | Insharior is a platform to share one’s interior items with low price, for early 20's in South Korea — especially for one person households and young people in South Korean society. They usually move their house within every 1 or 2 years due to their occupational and economic conditions. And those conditions make them hard to settle on one place for a long time, as a result, buying expensive interior items is luxury for them. As a designer, we wanted them to ‘share’ their unnecessary or hard-to-move interior items with low price with other users on our application — Insharior, by providing a platform for sharing their interior items with trust.

      div.page__section
        h3.section__title
          | Problems
        div.section__list
          ol
            li A sharp increase of young one-person households(early 20’s)— and their desire to decorate their own room with unique interior items getting higher day by day.
            li Increase of move due to one-person household’s economic conditions— which makes them hard to move their heavy furniture like bed or couch, or hard to collect interior items.
            li Increase of desire to self-interior between one-person households and economic weaker— even if they have to move their residence often.
        lightbox.section__image.img--50(
          thumbnail="/src/assets/insharior/giphy.gif"
          :images="['/src/assets/insharior/giphy.gif']"
        )
        p.section__paragraph Based on those problems above, our team decided to make an application that resolves the needs by providing a platform to share one’s interior items with trust at a low price — Insharior.

      div.page__section
        h3.section__title Challenge - Threats
        div.section__list
          ol
            li There are already many apps for self-interior on App Store / Google Play Store in South Korea
            li Companies like IKEA, Hanssem(Korean furniture company) provide cheap furniture through offline
            li Lack of expertise and trust - biggest problem of sharing economics, users can easily have doubt about lenders or item's quality

      div.page__section
        h3.section__title How to solve
        div.section__list
          ol
            li Not only provide users know-how about self interior, but also provide platform to 'share' their furniture with trust so they can earn money with that or get unique interior items from other users
            li Integrate with social network services like Facebook and Instagram - enable upload image of their room via SNS to keep DAU(Insharior's main target is young people in South Korea, especially one-person house holds)
            li Authentication via SNS and phone number can improve trust between users
            li To provide accurate and various information, collect and analyze user's taste from their search patterns or tutorial - with data from such processes, show customized information and products on our chat bot or main screen
            li Provide augmented reality feature to place furniture in user's room in advance before they rent it

      div.page__section
        lightbox.section__image(
          thumbnail="/src/assets/insharior/ppt.jpg"
          :images="['/src/assets/insharior/ppt.jpg']"
        )

      div.page__section
        h3.section__title
          | #1. Observation
        p.section__title--small
          | Audience
        p.section__paragraph
          | Insharior’s main targets are young people in society and early 20’s in South Korea. Due to their economic and occupational conditions, move their house in short term(between 1 ~ 2 years) is very common. It’s the biggest reason why they can’t collect interior items in their house, or buy an expensive housewares.

        p.section__title--small
          | Audience — Lifestyle
        div.section__list
          ol
            li Usually spend their time in small rented room
            li Desire to Self-disclosure on SNS platforms
            li Short-term living in their rented room(usually between 1 ~ 2 years)
            li Usually get information about interior from SNS or TV
            li Proper investment is available for their house interior
        lightbox.section__image.img--line(
          thumbnail="/src/assets/insharior/tvshow.jpg"
          :images="['/src/assets/insharior/tvshow.jpg']"
        )

        p.section__title--small
          | Persona
        p.section__paragraph
          | We created some persona to ascertain our concept and make our plans backed up by examples with other characters. Image below is an example of Insharior’s potential user. Watch more persona on Google Drive(in Korean) - Persona 1,2 | Persona 3
        lightbox.section__image.img--line(
          thumbnail="/src/assets/insharior/persona.png"
          :images="['/src/assets/insharior/persona.png']"
        )

        p.section__title--small
          | What they say
        div.section__list
          ul
            li It's hard to decorate my room due to frequent move. It's kind of a heavy economic burden.
            li I do not have much money, but I want to decorate my own room well as other do I can see on Instagram.
            li It's too wasteful and bothersome to buy a new interior item every time I move to another rent room.

      div.page__section
        h3.section__title
          | #2. Ideation
        p.section__quote
          | What if we can get a luxury interior item looks like displayed in a department store, with low price like we can get it in a convenience store?

        p.section__title--small
          | From Audience
        p.section__paragraph
          | Based on our audience above, we set 3 main concepts of Insharior. We wanted to make a platform that provides users can:
        div.section__list
          ol
            li Make a profit with their unused interior items
            li Rent a unique interior items with low price from other users
            li Integrate with other SNS application to share their interior
        lightbox.section__image.img--75(
          thumbnail="/src/assets/insharior/insharior_sns.png"
          :images="['/src/assets/insharior/insharior_sns.png']"
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
          | I wrote some Job stories to regulate our service a better platform for users to interact with other users, sellers and buyers. Here’re some of them.
        div.section__list
          ol
            li When I move to a new empty rent house, I want to rent some interior items and furniture with low price, So I can save my money and have some nice interior items at the same time in my room.
            li When I have to move to other city or rent house in near future, I want to lend my heavy stuffs in my room like furniture, So I can make some money and I don’t need to throw it away.
            li When I moved to a new rent house, I want to see some other people’s way they decorated their house, So I can decorate my room better and share it with others.
        lightbox.section__image.img--75(
          thumbnail="/src/assets/insharior/insharior_circle.png"
          :images="['/src/assets/insharior/insharior_circle.png']"
        )

        p.section__title--small
          | Structure map
        p.section__paragraph
          | Based on the concepts, idea, and job stories above, we made this user flow before We get started, and to make sure our plans being successful and for the strong wireframe. And based on this user flow, I started to create a Lo-fi wireframes and prototypes below.
        lightbox.section__image(
          thumbnail="/src/assets/insharior/userflow.png"
          :images="['/src/assets/insharior/userflow.png']"
        )

        p.section__title--small
          | Product recommendation map
        p.section__paragraph
          | To show users appropriate products based on their taste is very important to increase sales and interaction on application. We collect user’s taste at the first time that user launches Insharior application(see the GIF image at #4. User’s Feedback and Pain Point #1), and from user’s saved product or Hashtag, search history, etc. Based on these personalized data, Insharior can show or recommend personalized products on user’s main screen or show them through our chat bot.
        lightbox.section__image(
          thumbnail="/src/assets/insharior/insharior_recommendation_map.png"
          :images="['/src/assets/insharior/insharior_recommendation_map.png']"
        )
        lightbox.section__image(
          thumbnail="/src/assets/insharior/insharior_buyer.png"
          :images="['/src/assets/insharior/insharior_buyer.png']"
        )

      div.page__section
        h3.section__title
          | #3. Rapid Prototyping
        p.section__title--small
          | Lo-fi Hand Sketch
        lightbox.section__image(
          thumbnail="/src/assets/insharior/wireframe_insharior.jpg"
          :images="['/src/assets/insharior/wireframe_insharior.jpg']"
        )
        p.section__paragraph
          | I need to prove our concepts and ideas, So I sketched some rough black & white hand sketch wireframes. Based on this sketch, we developed our interface design step by step. I’ll let you know how we did it.

        p.section__title--small
          | Lo-Fi Wireframes
        p.section__paragraph
          | Before we get started with user-testing, We created some rough wireframes.
        lightbox.section__image(
          thumbnail="/src/assets/insharior/wireframes.png"
          :images="['/src/assets/insharior/wireframes.png']"
        )
        p.section__paragraph
          | With these wireframes above, we had some user-tests with our college students and classmates, and collected some feedback and opinions to improve our application’s interface and experiences.

      div.page__section
        h3.section__title
          | #4. User Feedback
        p.section__paragraph
          | We’ve created Hi-Fi prototypes based on the wireframes above(#3), also reflected tester’s opinions and feedback for better UX and to make sure our design supported by user’s feedback.
        lightbox.section__image(
          thumbnail="/src/assets/insharior/taste.gif"
          :images="['/src/assets/insharior/taste.gif']"
        )

        p.section__title--small
          | Pain Points & Improvements
        p.section__paragraph
          | We faced with some pain points during user testing. Some of them were critical for both users and Insharior application, And we re-designed them based on user’s feedback and our ideas. (Click image to enlarge)
        lightbox.section__image.img--75(
          thumbnail="/src/assets/insharior/insharior_userflow.png"
          :images="['/src/assets/insharior/insharior_userflow.png']"
        )

        p.section__paragraph
          | Pain Point #1: On ‘Analyze user’s taste’ screen, it’s impossible to know how many steps are left to finish this process due to there’s no any indicator about step. Also user who wants to skip this process can’t skip this screen because there was no any ‘Skip’ or ‘Finish’ button.
        lightbox.section__image(
          thumbnail="/src/assets/insharior/pp_1.png"
          :images="['/src/assets/insharior/pp_1.png']"
        )
        p.section__paragraph
          | Pain Point #2: On ‘Upload items for lend or sell’ screen, users who don’t know about their item’s details like item’s original price, material or date that users bought the item — can’t fill in the form to upload items for lend or sell. So we added ‘Unknown’ button for users who don’t know about the item’s details.
        lightbox.section__image(
          thumbnail="/src/assets/insharior/pp_2.png"
          :images="['/src/assets/insharior/pp_2.png']"
        )
        p.section__paragraph
          | Pain Point #3: On ‘Checkout’ screen, there is no any option to select items for checkout or not. So we added checkbox for each items to make selection which items to be ordered. In addition, we added ‘Item details’ button for users can review the items before they finally checkout the items on shopping cart. We also added number of total items on this screen to make sure how many items going to be processed.
        lightbox.section__image(
          thumbnail="/src/assets/insharior/pp_3.png"
          :images="['/src/assets/insharior/pp_3.png']"
        )
        p.section__paragraph
          | Pain Point #4: When an error occurs during ‘Checkout process’, there was no way to know what kind of error it is. So we added a line of description about the error to let users know about the error, so users can fix or re-enter the forms that error occurs. And we added ‘Save this information for faster checkout next time’ button(checkbox) for user’s convenience.
        lightbox.section__image(
          thumbnail="/src/assets/insharior/pp_4.png"
          :images="['/src/assets/insharior/pp_4.png']"
        )

      div.page__section
        h3.section__title
          | * Chat bot
        p.section__paragraph
          | Insharior's chat bot helps user by recommending products based on user's taste like collected data from user(ex. recently rented product, favorite hashtag, recent viewed product, etc) or user's search patterns. User also can use hashtag to find out similar products by chat bot.
        lightbox.section__image(
          thumbnail="/src/assets/insharior/chat_bot.gif"
          :images="['/src/assets/insharior/chat_bot.gif']"
        )

      div.page__section
        h3.section__title
          | #5. Validation & Iteration
        p.section__paragraph
          | With improved interfaces, we have some more user testings for validate our designs. The chart below is an overview of the results of changes. If testers solve some missions(Pain Points) without struggle, I marked it as "Success"
        lightbox.section__image(
          thumbnail="/src/assets/insharior/beforeAfter.png"
          :images="['/src/assets/insharior/beforeAfter.png']"
        )

      div.page__section
        h3.section__title
          | #6. Final Output
        p.section__paragraph
          | You can check full design of this project on Behance. This project has curated on Interaction and Adobe XD Gallery on Behance. I used Adobe Photoshop, Adobe Illustrator and Adobe Experience Design to create this project. I also made some animated GIF images to explain our application's interaction, and I used ProtoPie to create these micro interactions.
        lightbox.section__image(
          thumbnail="/src/assets/insharior/dribbble.gif"
          :images="['/src/assets/insharior/dribbble.gif']"
        )
        lightbox.section__image(
          thumbnail="/src/assets/insharior/protopie.png"
          :images="['/src/assets/insharior/protopie.png']"
        )
        lightbox.section__image.no-radius(
          thumbnail="/src/assets/insharior/row1.png"
          :images="['/src/assets/insharior/row1.png']"
        )
        lightbox.section__image.no-radius(
          thumbnail="/src/assets/insharior/row2.png"
          :images="['/src/assets/insharior/row2.png']"
        )
        lightbox.section__image.no-radius(
          thumbnail="/src/assets/insharior/row3.png"
          :images="['/src/assets/insharior/row3.png']"
        )
        lightbox.section__image.no-radius(
          thumbnail="/src/assets/insharior/row4.png"
          :images="['/src/assets/insharior/row4.png']"
        )
        lightbox.section__image.no-radius(
          thumbnail="/src/assets/insharior/row5.png"
          :images="['/src/assets/insharior/row5.png']"
        )

      div.page__section
        h3.section__title
          | What I've learnt
        p.section__paragraph
          | Sometimes, we overlook some particular components or features, even though we know the importance of them. User testing is one of the best ways to prevent such unavoidable situations. By testing our prototypes for a number of different people, we can check for an unexpected part, or we can find better ways to improve our design.
        p.section__paragraph
          | Repeating those processes of user testing, implementation and improvement can make our design more solid and user friendly. Problems not found in the first test can be found in the second test. Even if we think that the third and fourth user tests have produced a satisfactory design for everyone, we may notice some other minor problems in the fifth test. Through these processes, we are able to complete a better, more solid and user-centered design.

      div.page__section
        h3.section__title
          | Takeaways
        p.section__paragraph
          | Insharior app is a platform for early 20’s in South Korea — especially for one person households and young people in South Korean society. We hope this application can provide them a new way to get a unique interior items at a low price, and at the same time, earn money and space in their room by lend their old items to others in need.
        p.section__paragraph
          | I designed this application in my college’s UI/UX design class. Hope you enjoyed this article. Thank you so much for watching my project :)
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'insharior',

  metaInfo: {
    title: globalVar.fullname,
    titleTemplate: '%s - Insharior',
  },

}
</script>

<style lang="scss">
</style>
