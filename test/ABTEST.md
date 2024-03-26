# A/B Testing for Tastebuds

## A/B Test 1
Karina Larochelle

**A/B Test Name:** Appetizing Color

**User Story Number:** US 4 Main Functionality

**Hypothesis:** After looking into color theory and what each color means when associated with food we discovered that there are particular colors associated with appetizing foods versus not appetizing. Currently, our app has a sky blue background for every screen which based off the relationship between food and color, this could steer customers away from our app. Blue is not commonly found in nature, therefore it can lead users to think of an app that is unappetizing. We are proposing a version that is red which is one of the chief food colors. Red evokes the tastebuds and stimulates the appetite. 

**Experiment:** All audiences should be able to view the experiment because this metric is directly related to user engagement, and restricting access could skew results. We will allocate 50% of our user base to the experiment, randomly assigning users to either the control group (sky blue background) or the variant group (red background).

**Tracking using Firebase Analytics:**
* Track user engagement metrics such as time spent on each screen, number of interactions, and screen transitions for both the control and variant groups.
* Monitor user behavior, including session duration and frequency of app usage.
Analyze retention rates to determine if the color change affects user retention over time.

**Variations:*** 
* Control Group: Users assigned to this group will experience the current app design with a sky blue background on all screens.
* Variant Group: Users assigned to this group will see a variant of the app design with a red background on all screens.
Additionally, we'll develop a color palette comparison to highlight the differences and ensure consistency across the app. Detailed diagrams will illustrate how the color variation will be implemented in key user interface elements, considering accessibility standards. We'll conduct a visual impact analysis to assess the effect on user perception and engagement, ensuring the chosen colors stimulate appetite and maintain aesthetic appeal. Feedback collection methods will be employed to gather user preferences and insights throughout the experiment.

## A/B Test 2
A/B Test Name: Enhance User Experience with Preferred Feature

User Story Number: US-4

Metric (from the HEART grid): Engagement & Happiness

Hypothesis:
Problem: We're unsure which of two new features (Feature A & Feature B) users find more engaging and valuable.
Impact: Understanding user preference can help us prioritize development efforts and optimize the overall user experience.
Solution: Presenting both features to different user segments will reveal which one drives higher engagement and user satisfaction.
Experiment

Audience:
We will target this experiment towards all active users of the app.
We will allocate 50% of users to see either Variation A or Variation B.
Rationale:  Including all active users ensures a broad sample size and avoids skewing results towards a specific user segment.  A 50/50 split allows for a balanced comparison.

Tracking with Firebase Analytics:
We will track the following events:
"Feature X Viewed" (for both Feature A & B)
"Interaction with Feature X" (e.g., clicks, time spent)
User surveys or feedback prompts related to feature experience.
Success Metrics:
Primary: The primary success metric will be a combination of engagement metrics for each feature (e.g., number of times viewed, time spent interacting). Variation with higher engagement wins.
Secondary: We can also monitor user feedback received through surveys or prompts to gauge their satisfaction with each feature.
Variations

Variation A (Control): Users will see Feature A prominently displayed within the app interface.

Variation B (Treatment): Users will see Feature B prominently displayed within the app interface.

Design Considerations:
Both features should be presented clearly and concisely within the app interface. Utilize compelling visuals and brief descriptions to highlight the purpose and value proposition of each feature. Ensure a seamless user experience regardless of which variation users encounter.


## A/B Test 3 (Font)
Aidan Sussillo

**A/B Test Name:**  
- Font Impact Test on User Adoption

**User Story Number:**  
- US4

**Metric (from the HEART grid):**  
- Adoption: This will be measured by the rate of new user sign-ups, the completion rate of setting up profiles with dietary preferences and cooking skill levels, and the initial engagement with the "Discover Recipes" feature within the first session of app use.

**Hypothesis:**  
- Changing the app's font from Merriweather to Oswald is hypothesized to improve readability and the overall aesthetic of the app, leading to a more positive first impression. This enhancement is expected to increase new user sign-ups and encourage more complete interactions with setting up profiles and engaging with the "Discover Recipes" feature, as the content appears more accessible and inviting.

**Experiment:**  
- Setup: Implement a 50/50 split where half of the new users see the app's text in Merriweather (Control Group A) and the other half see the text in Oswald (Experiment Group B).
- Audience: All new users during the test period.
- Tracking: Using Firebase Analytics, track sign-up rates, the number of profiles fully set up with preferences, and engagement metrics with the "Discover Recipes" feature between the two groups.

**Variations:**  
- Control Variation (A): Use Merriweather font across the app. This variation will serve as the baseline for comparison.
- Experiment Variation (B): Use Oswald font across the app. The expectation is that this font will offer a cleaner and more modern look, potentially affecting user engagement positively.

**Design Mockups and Diagrams:**  
- Prepare mockups showing key user journey touchpoints (e.g., sign-up page, profile setup, "Discover Recipes" feature) in both Merriweather and Oswald fonts. Highlight how Oswald might improve the user experience in terms of readability and aesthetic appeal, encouraging longer engagement sessions and a higher rate of profile completions.



## A/B Test 4 (Sign up layout)
Linda Tran

**A/B Test Name:**
- Sign up layout User Experience Impact 
**User Story Number:**
- US4
**Metric (from the HEART grid)**:
- Download rate increasing, Sign up rate increasing

**Hypothesis:**
- Modifying the layout of the sign-up page to make it more intuitive and user-friendly by reducing clutter

**Experiment:**
- Setup: Implement a 50/50 split where half of the new users experience the current sign-up layout (Control Group A) and the other half experience the new, optimized layout (Experiment Group B).
- Audience: All new users who visit the sign-up page during the test period.
- Tracking: Utilize Google Analytics and in-app analytics tools to track sign-up rates, download rates, and activation rates. Additionally, conduct user satisfaction surveys for both groups after the sign-up process to measure perceived ease of use and satisfaction.

**Variations:**
- Control Variation (A): Current sign-up layout. This serves as the baseline for comparison, featuring the existing design and flow of the sign-up process.
- Experiment Variation (B): New sign-up layout. This variation includes a streamlined form, fewer fields, clearer instructions, and visual cues that guide the user through the sign-up process. The hypothesis is that these changes will lead to a more pleasant user experience, thereby increasing sign-up and download rates


## A/B Test 5
Jordan Woller <br>


**A/B Test Name:** Should we display like counts for posts

**User Story Number:**
US4

**Metric (from the HEART grid)**:  Number of likes per time frame

**Hypothesis:** 
- Displaying like counts for posts will create a sense of social validation and encourage users to engage more with the content. By providing visibility into the popularity of posts, users may feel more compelled to interact with them, leading to an increase in the number of likes per time frame.

**Experiment:**
- Setup: Implement a 50/50 split where half of the users see the like counts for posts (Experiment Group A) and the other half do not (Control Group B).
- Audience: All users during the test period.
- Tracking: Utilize platform analytics to measure the number of likes received by posts in both groups over the designated time frame.

**Variations:**
- Control Variation (B): Do not display like counts for posts. This serves as the baseline for comparison.
- Experiment Variation (A): Display like counts for posts. The expectation is that this feature will provide users with social cues and prompt higher engagement with posts.
