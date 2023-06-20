// object constructor for cards
function card(name, suit, rank, image) {
    this.name = name;
    this.suit = suit;
    this.rank = rank;
    this.image = image;
    this.interpretation = interpretation;
}

let deck = [
  {
    name: "The Fool",
    suit: "Major Arcana",
    rank: 0,
    imgSrc: "cardsRWS/0_theFool.jpeg",
    interpretation:
      "The Fool card of the day suggests that you may be star }ing a { name: ey or taking a ris } in a { name: tion. You may be feeling excited and optimistic about the possibilities ahead. However, be mindful of being too impulsive or naive. Take calculated risks and be open to learning from your experiences. Trust your instincts but also be willing to seek guidance from others.",
  },
  {
    name: "The Magician",
    suit: "Major Arcana",
    rank: 1,
    imgSrc: "cardsRWS/1_theMagician.jpeg",
    interpretation:
      "The Magician card of the day suggests that you have the power to manifest your desires and bring your ideas to fruition. You have the ability to communicate your needs and ideas effectively and to use your skills and resources to achieve your goals. However, be mindful of being too manipulative or deceitful in your actions. Use your power wisely and for the greater good. Focus on taking action and using your creativity to bring positive change in your life and the lives of others.",
  },
  {
    name: "The High Priestess",

    suit: "Major Arcana",
    rank: 2,
    imgSrc: "cardsRWS/2_theHighPriestess.jpeg",
    interpretation:
      "The High Priestess card of the day suggests that you may need to rely on your intuition and inner wisdom to navigate a situation. You may be called to listen to your inner voice and trust your instincts, even if they go against conventional wisdom. Be open to receiving insights and guidance from your dreams, meditation, or other spiritual practices. However, be mindful of being too passive or indecisive. Use your intuition to inform your actions and decisions, but also be willing to take practical steps towards your goals.",
  },
  {
    name: "The Empress",
    suit: "Major Arcana",
    rank: 3,
    imgSrc: "cardsRWS/3_theEmpress.jpeg",
    interpretation:
      "The Empress card of the day suggests that you may be experiencing abundance, creativity, and nurturing energy in your life. You may feel inspired to create or to nurture others, and your efforts may be fruitful. However, be mindful of being too passive or indulgent. Use your creativity and nurturing energy to bring positive change in your life and the lives of others. Focus on finding balance between giving and receiving, and on cultivating a sense of gratitude for the blessings in your life.",
  },
  {
    name: "The Emperor",
    suit: "Major Arcana",
    rank: 4,
    imgSrc: "cardsRWS/4_theEmperor.jpeg",
    interpretation:
      "The Emperor card of the day suggests that you may need to take charge of a situation and assert your authority. You may be called to be a leader and to take decisive action towards your goals. However, be mindful of being too controlling or rigid in your approach. Use your leadership skills to inspire and empower others, and to create a sense of structure and stability. Focus on taking practical steps towards your goals and on using your power and authority for the greater good.",
  },
  {
    name: "The Hierophant",
    suit: "Major Arcana",
    rank: 5,
    imgSrc: "cardsRWS/5_theHierophant.jpeg",
    interpretation:
      "The Hierophant card of the day suggests that you may be seeking guidance or wisdom from a spiritual or traditional source. You may be looking for a mentor or teacher to help you navigate a situation. However, be mindful of blindly following tradition or authority without questioning or examining it. Use your discernment to find a source of guidance that resonates with your values and beliefs. Focus on finding a balance between respecting tradition and finding your own path.",
  },
  {
    name: "The Lovers",
    suit: "Major Arcana",
    rank: 6,
    imgSrc: "cardsRWS/6_theLovers.jpeg",
    interpretation:
      "The Lovers card of the day suggests that you may be facing a choice or decision that involves matters of the heart. You may be called to make a commitment or to choose between two options. However, be mindful of being too impulsive or driven by passion alone. Use your heart and your head to make a decision that aligns with your values and brings long-term fulfillment. Focus on building strong relationships based on mutual respect, trust, and communication.",
  },
  {
    name: "The Chariot",
    suit: "Major Arcana",
    rank: 7,
    imgSrc: "cardsRWS/7_theChariot.jpeg",
    interpretation:
      "The Chariot card of the day suggests that you may be facing a challenge or obstacle that requires you to take decisive action and move forward with determination. You may need to overcome self-doubt or external resistance to achieve your goals. However, be mindful of being too aggressive or controlling in your approach. Use your willpower and focus to stay on track and to overcome obstacles, but also be open to adjusting your course if necessary. Focus on staying grounded and centered amidst the chaos, and on using your inner strength and resilience to achieve success.",
  },
  {
    name: "Strength",
    suit: "Major Arcana",
    rank: 8,
    imgSrc: "cardsRWS/8_Strength.jpeg",
    interpretation:
      "The Strength card of the day suggests that you may need to draw upon your inner strength and courage to face a challenge or difficult situation. You may need to find the courage to confront your fears or to stand up for what you believe in. However, be mindful of being too forceful or aggressive in your approach. Use your inner strength to stay calm and centered amidst the chaos, and to find creative solutions to problems. Focus on finding a balance between assertiveness and compassion, and on using your strength to bring positive change in your life and the lives of others.",
  },
  {
    name: "The Hermit",
    suit: "Major Arcana",
    rank: 9,
    imgSrc: "cardsRWS/9_theHermit.jpeg",
    interpretation:
      "The Hermit card of the day suggests that you may need to take some time for introspection and solitude. You may be called to withdraw from the world and to seek answers within yourself. However, be mindful of isolating yourself too much or becoming too withdrawn. Use your time alone to reflect, meditate, or engage in other spiritual practices, but also be open to connecting with others who can offer guidance or support. Focus on finding a balance between solitude and social interaction, and on using your inner wisdom to guide you towards your goals.",
  },
  {
    name: "Wheel of Fortune",
    suit: "Major Arcana",
    rank: 10,
    imgSrc: "cardsRWS/10_WheelOfFortune.jpeg",
    interpretation:
      "The Wheel of Fortune card of the day suggests that you may be experiencing a change or a shift in your life that is beyond your control. You may feel like you are on a rollercoaster ride of ups and downs, and that your fate is in the hands of the universe. However, be mindful of becoming too passive or fatalistic in your approach. Use your inner strength and resilience to adapt to the changes and to find opportunities amidst the challenges. Focus on staying grounded and centered amidst the chaos, and on trusting that everything happens for a reason.",
  },
  {
    name: "Justice",
    suit: "Major Arcana",
    rank: 11,
    imgSrc: "cardsRWS/11_Justice.jpeg",
    interpretation:
      "The Justice card of the day suggests that you may be seeking balance and fairness in a situation. You may be called to make a decision or to take action that is just and equitable. However, be mindful of being too rigid or judgmental in your approach. Use your sense of fairness and objectivity to find a solution that benefits all parties involved. Focus on finding a balance between logic and intuition, and on using your sense of justice to bring harmony and peace in your life and the lives of others.",
  },
  {
    name: "The Hanged Man",
    suit: "Major Arcana",
    rank: 12,
    imgSrc: "cardsRWS/12_theHangedMan.jpeg",
    interpretation:
      "The Hanged Man card of the day suggests that you may need to let go of control and surrender to the present moment. You may be called to shift your perspective or to release old patterns or beliefs that are holding you back. However, be mindful of being too passive or complacent in your approach. Use your time of suspension to reflect, meditate, or engage in other spiritual practices, but also be o }en to { name: hts and perspectives. Focus on finding a balance between surrender and action, and on using your time of suspension to  }ain a { name: ective or to  }ind a { name: tion in your life.",
  },
  {
    name: "Death",
    suit: "Major Arcana",
    rank: 13,
    imgSrc: "cardsRWS/13_Death.jpeg",
    interpretation:
      "The Death card of the day suggests that you may be experiencing a major transformation or change in your life. You may be called to release old patterns or beliefs that no longer serve you, and to e }brace { name: nings. However, be mindful of being too resistant or clinging to the past. Use your time of transition to reflect, let go, and e }brace { name: tunities. Focus on finding a balance between release and rebirth, and on using your transformation to bring positive change in your life and the lives of others.",
  },
  {
    name: "Temperance",
    suit: "Major Arcana",
    rank: 14,
    imgSrc: "cardsRWS/14_Temperance.jpeg",
    interpretation:
      "The Temperance card of the day suggests that you may need to find balance and harmony in a situation. You may be called to integrate different aspects of your life or to find a middle ground between opposing forces. However, be mindful of being too extreme or imbalanced in your approach. Use your sense of moderation and self-control to find a solution that benefits all parties involved. Focus on finding a balance between your inner and outer worlds, and on using your sense of harmony to bring peace and healing in your life and the lives of others.",
  },
  {
    name: "The Devil",
    suit: "Major Arcana",
    rank: 15,
    imgSrc: "cardsRWS/15_theDevil.jpeg",
    interpretation:
      "The Devil card of the day suggests that you may be facing temptation or addiction in a situation. You may be called to confront your fears or to break free from negative patterns or behaviors. However, be mindful of being too materialistic or focused on pleasure alone. Use your inner strength and willpower to overcome the negative influences and to find a sense of liberation. Focus on finding a balance between your desires and your values, and on using your experience to bring positive change in your life and the lives of others.",
  },
  {
    name: "The Tower",
    suit: "Major Arcana",
    rank: 16,
    imgSrc: "cardsRWS/16_theTower.jpeg",
    interpretation:
      "The Tower card of the day suggests that you may be experiencing a sudden upheaval or crisis in a situation. You may feel like your world is collapsing around you, and that everything you thought was stable is now falling apart. However, be mindful of being too resistant or clinging to the past. Use this time of change to release old patterns or beliefs that no longer serve you, and to e }brace { name: nings. Focus on finding a sense of liberation and freedom amidst the chaos, and on using your experience to bring positive change in your life and the lives of others.",
  },
  {
    name: "The Star",
    suit: "Major Arcana",
    rank: 17,
    imgSrc: "cardsRWS/17_theStar.jpeg",
    interpretation:
      "The Star card of the day suggests that you may be experiencing hope, inspiration, and healing in a situation. You may feel like you are on the right path, and that your dreams and aspirations are within reach. However, be mindful of being too passive or idealistic in your approach. Use your sense of inspiration and intuition to guide you towards your goals, but also be willing to take practical steps towards them. Focus on finding a balance between your inner and outer worlds, and on using your sense of hope and inspiration to bring positive change in your life and the lives of others.",
  },
  {
    name: "The Moon",
    suit: "Major Arcana",
    rank: 18,
    imgSrc: "cardsRWS/18_theMoon.jpeg",
    interpretation:
      "The Moon card of the day suggests that you may be facing uncertainty or confusion in a situation. You may feel like you are in the dark, and that the truth is hidden from you. However, be mindful of being too fearful or paranoid in your approach. Use your intuition and inner wisdom to navigate the unknown, and to find a sense of clarity and direction. Focus on finding a balance between your rational and intuitive selves, and on using your experience to bring positive change in your life and the lives of others.",
  },
  {
    name: "The Sun",
    suit: "Major Arcana",
    rank: 19,
    imgSrc: "cardsRWS/19_theSun.jpeg",
    interpretation:
      "The Sun card of the day suggests that you may be experiencing joy, vitality, and success in a situation. You may feel like you are in a state of abundance and positivity, and that your efforts are being rewarded. However, be mindful of being too optimistic or overconfident in your approach. Use your sense of joy and vitality to inspire and uplift others, and to bring positive change in your life and the lives of others. Focus on finding a balance between your inner and outer worlds, and on using your experience to spread positivity and light.",
  },
  {
    name: "Judgement",
    suit: "Major Arcana",
    rank: 20,
    imgSrc: "cardsRWS/20_Judgement.jpeg",
    interpretation:
      "The Judgement card of the day suggests that you may be facing a time of reckoning or evaluation in a situation. You may be called to take stock of your life and to make decisions that align with your values and beliefs. However, be mindful of being too judgmental or critical in your approach. Use your sense of self-awareness and reflection to make positive changes in your life, and to inspire and uplift others. Focus on finding a balance between your past and future selves, and on using your experience to bring positive change in your life and the lives of others.",
  },
  {
    name: "The World",
    suit: "Major Arcana",
    rank: 21,
    imgSrc: "cardsRWS/21_theWorld.jpeg",
    interpretation:
      "The World card of the day suggests that you may be experiencing a sense of completion, wholeness, and fulfillment in a situation. You may feel like you have achieved a major goal or milestone, and that you are ready for the next phase of your journey. However, be mindful of becoming too complacent or stagnant in your approach. Use your sense of completion and fulfillment to inspire and uplift others, and to continue growing and evolving. Focus on finding a balance between your inner and outer worlds, and on using your experience to bring positive change in your life and the lives of others.",
  },
  {
    name: "Ace of Wands",
    suit: "Wands",
    rank: 1,
    imgSrc: "cardsRWS/W_AceofWands.jpeg",
    interpretation:
      "The Ace of Wands as the card of the day suggests that you may experience a burst of creative energy or inspiration. This is a good time to }start { name: cts or take action towards your goals. Trust your intuition and take bold steps towards your passions.",
  },
  {
    name: "Two of Wands",
    suit: "Wands",
    rank: 2,
    imgSrc: "cardsRWS/W_2ofWands.jpeg",
    interpretation:
      "The 2 of Wands as the card of the day suggests that you may be at a crossroads and need to make a decision. Trust your instincts and consider your options carefully. This is a good time to plan for the future and take calculated risks. Be confident in your abilities and take action towards your goals.",
  },
  {
    name: "Three of Wands",
    suit: "Wands",
    rank: 3,
    imgSrc: "cardsRWS/W_3ofWands.jpeg",
    interpretation:
      "The 3 of Wands as the card of the day suggests that your plans and efforts are starting to pay off. You may experience progress or success in your endeavors. This is a good time to expand your horizons and explore opportunities. Trust in your abilities and continue to work towards your goals.",
  },
  {
    name: "Four of Wands",
    suit: "Wands",
    rank: 4,
    imgSrc: "cardsRWS/W_4ofWands.jpeg",
    interpretation:
      "The 4 of Wands as the card of the day suggests that you may experience a sense of celebration, harmony, and stability. This is a good time to enjoy the fruits of your labor and connect with loved ones. You may also experience a sense of accomplishment or completion. Enjoy the moment and appreciate the blessings in your life.",
  },
  {
    name: "Five of Wands",
    suit: "Wands",
    rank: 5,
    imgSrc: "cardsRWS/W_5ofWands.jpeg",
    interpretation:
      "The 5 of Wands as the card of the day suggests that you may experience conflict, competition, or challenges. This is a good time to stay focused on your goals and avoid getting caught up in drama or petty disputes. Be open to different perspectives and find ways to work collaboratively towards a common goal. Stay grounded and maintain your integrity.",
  },
  {
    name: "Six of Wands",
    suit: "Wands",
    rank: 6,
    imgSrc: "cardsRWS/W_6ofWands.jpeg",
    interpretation:
      "The 6 of Wands as the card of the day suggests that you may experience recognition, victory, or success. This is a good time to celebrate your achievements and feel proud of your accomplishments. You may also receive public recognition or support from others. Use this positive energy to fuel your confidence and continue to pursue your goals.",
  },
  {
    name: "Seven of Wands",
    suit: "Wands",
    rank: 7,
    imgSrc: "cardsRWS/W_7ofWands.jpeg",
    interpretation:
      "The 7 of Wands as the card of the day suggests that you may experience a sense of challenge, competition, or resistance. This is a good time to stand your ground and defend your beliefs or values. Be prepared to face opposition or criticism, and trust in your abilities to overcome obstacles. Stay focused on your goals and don't let others discourage you.",
  },
  {
    name: "Eight of Wands",
    suit: "Wands",
    rank: 8,
    imgSrc: "cardsRWS/W_8ofWands.jpeg",
    interpretation:
      "The 8 of Wands as the card of the day suggests that you may experience a sense of movement, progress, or acceleration. This is a good time to take action and pursue your goals with enthusiasm. You may also experience a sudden change or opportunity that requires quick decision-making. Stay focused and trust in the journey.",
  },
  {
    name: "Nine of Wands",
    suit: "Wands",
    rank: 9,
    imgSrc: "cardsRWS/W_9ofWands.jpeg",
    interpretation:
      "The 9 of Wands as the card of the day suggests that you may experience a sense of resilience, perseverance, or endurance. This is a good time to stay committed to your goals, even if you face obstacles or setbacks. You may also need to be cautious and protect your boundaries or resources. Trust in your strength and keep moving forward.",
  },
  {
    name: "Ten of Wands",
    suit: "Wands",
    rank: 10,
    imgSrc: "cardsRWS/W_10ofWands.jpeg",
    interpretation:
      "The 10 of Wands as the card of the day suggests that you may experience a sense of burden, responsibility, or overwhelm. This is a good time to prioritize your tasks and delegate responsibilities if necessary. You may also need to let go of certain obligations or commitments that no longer serve you. Remember to take care of yourself and avoid taking on too much.",
  },
  {
    name: "Page of Wands",
    suit: "Wands",
    rank: 11,
    imgSrc: "cardsRWS/W_PageofWands.jpeg",
    interpretation:
      "The Page of Wands as the card of the day suggests that you may experience a sense of enthusiasm, inspiration, or adventure. This is a good time to e }plore { name: , take risks, and pursue your passions. Be o }en to { name: tunities and trust in your creativity. You may also receive a message or invitation that sparks your curiosity. Stay curious and embrace the journey.",
  },
  {
    name: "Knight of Wands",
    suit: "Wands",
    rank: 12,
    imgSrc: "cardsRWS/W_KnightofWands.jpeg",
    interpretation:
      "The Knight of Wands as the card of the day suggests that you may experience a sense of action, passion, or adventure. This is a good time to take bold steps towards your goals and pursue your passions with determination. You may also experience a sudden change or opportunity that requires quick decision-making. Trust in your intuition and take calculated risks. Stay focused and keep moving forward.",
  },
  {
    name: "Queen of Wands",
    suit: "Wands",
    rank: 13,
    imgSrc: "cardsRWS/W_QueenofWands.jpeg",
    interpretation:
      "The Queen of Wands as the card of the day suggests that you may experience a sense of confidence, creativity, or leadership. This is a good time to trust in your intuition and take charge of your life. You may also inspire others with your passion and enthusiasm. Stay true to yourself and use your energy to create positive change in your life and the lives of those around you.",
  },
  {
    name: "King of Wands",
    suit: "Wands",
    rank: 14,
    imgSrc: "cardsRWS/W_KingofWands.jpeg",
    interpretation:
      "The King of Wands as the card of the day suggests that you may experience a sense of authority, leadership, or vision. This is a good time to take charge of your life and pursue your goals with confidence. You may also inspire others with your charisma and passion. Use your energy to create positive change and lead by example. Stay focused on your vision and trust in your abilities.",
  },
  {
    name: "Ace of Cups",
    suit: "Cups",
    rank: 1,
    imgSrc: "cardsRWS/C_AceofCups.jpeg",
    interpretation:
      "The Ace of Cups as the card of the day suggests that you may experience a sense of emotional fulfil }ment, { name: nings, or love. This is a good time to open your heart and connect with others on a deeper level. You may also experience a surge of creativity or inspiration. Trust in your intuition and allow yourself to feel the full range of emotions. Enjoy the blessings in your life and spread love wherever you go.",
  },
  {
    name: "Two of Cups",
    suit: "Cups",
    rank: 2,
    imgSrc: "cardsRWS/C_2ofCups.jpeg",
    interpretation:
      "The 2 of Cups as the card of the day suggests that you may experience a sense of connection, partnership, or harmony. This is a good time to deepen your relationships with others and create meaningful connections. You may also experience a sense of balance and mutual respect. Trust in the power of love and allow yourself to be vulnerable. Embrace the beauty of human connection and cherish the people in your life.",
  },
  {
    name: "Three of Cups",
    suit: "Cups",
    rank: 3,
    imgSrc: "cardsRWS/C_3ofCups.jpeg",
    interpretation:
      "The 3 of Cups as the card of the day suggests that you may experience a sense of celebration, joy, or friendship. This is a good time to connect with loved ones and enjoy the simple pleasures in life. You may also experience a sense of community and support. Embrace the positive energy and allow yourself to feel happy and grateful. Spread the love and enjoy the moment.",
  },
  {
    name: "Four of Cups",
    suit: "Cups",
    rank: 4,
    imgSrc: "cardsRWS/C_4ofCups.jpeg",
    interpretation:
      "The 4 of Cups as the card of the day suggests that you may experience a sense of apathy, boredom, or discontentment. This is a good time to reflect on your emotions and consider what you truly want. You may also need to let go of certain attachments or expectations that no longer serve you. Trust in the journey and be o }en to { name: tunities. Remember to take care of yourself and seek balance in your life.",
  },
  {
    name: "Five of Cups",
    suit: "Cups",
    rank: 5,
    imgSrc: "cardsRWS/C_5ofCups.jpeg",
    interpretation:
      "The 5 of Cups as the card of the day suggests that you may experience a sense of loss, disappointment, or grief. This is a good time to allow yourself to feel your emotions and process your feelings. You may also need to let go of certain attachments or relationships that no longer serve you. Remember to focus on the positive aspects of your life and seek support from loved ones. Trust in the healing process and allow yourself to move forward.",
  },
  {
    name: "Six of Cups",
    suit: "Cups",
    rank: 6,
    imgSrc: "cardsRWS/C_6ofCups.jpeg",
    interpretation:
      "The 6 of Cups as the card of the day suggests that you may experience a sense of nostalgia, innocence, or generosity. This is a good time to connect with your inner child and find joy in simple pleasures. You may also experience a sense of gratitude and appreciation for the people and memories in your life. Embrace the positive energy and spread kindness wherever you go. Trust in the power of love and allow yourself to feel happy and content.",
  },
  {
    name: "Seven of Cups",
    suit: "Cups",
    rank: 7,
    imgSrc: "cardsRWS/C_7ofCups.jpeg",
    interpretation:
      "The 7 of Cups as the card of the day suggests that you may experience a sense of confusion, illusion, or choices. This is a good time to clarify your goals and priorities. You may also need to discern between reality and fantasy. Trust in your intuition and avoid getting caught up in unrealistic expectations or distractions. Stay focused on what truly matters and make decisions that align with your values.",
  },
  {
    name: "Eight of Cups",
    suit: "Cups",
    rank: 8,
    imgSrc: "cardsRWS/C_8ofCups.jpeg",
    interpretation:
      "The 8 of Cups as the card of the day suggests that you may experience a sense of transition, detachment, or letting go. This is a good time to release attachments or situations that no longer serve you. You may also need to take a break and focus on your emotional well-being. Trust in the journey and be o }en to { name: tunities. Remember to take care of yourself and seek support from loved ones.",
  },
  {
    name: "Nine of Cups",
    suit: "Cups",
    rank: 9,
    imgSrc: "cardsRWS/C_9ofCups.jpeg",
    interpretation:
      "The 9 of Cups as the card of the day suggests that you may experience a sense of contentment, satisfaction, or happiness. This is a good time to celebrate your achievements and enjoy the blessings in your life. You may also experience a sense of emotional fulfillment or gratitude. Embrace the positive energy and spread joy wherever you go. Trust in the abundance of the universe and allow yourself to feel happy and blessed.",
  },
  {
    name: "Ten of Cups",
    suit: "Cups",
    rank: 10,
    imgSrc: "cardsRWS/C_10ofCups.jpeg",
    interpretation:
      "The 10 of Cups as the card of the day suggests that you may experience a sense of emotional fulfillment, harmony, or joy. This is a good time to connect with loved ones and enjoy the simple pleasures in life. You may also experience a sense of completion or wholeness. Embrace the positive energy and allow yourself to feel happy and content. Spread love and positivity wherever you go.",
  },
  {
    name: "Page of Cups",
    suit: "Cups",
    rank: 11,
    imgSrc: "cardsRWS/C_PageofCups.jpeg",
    interpretation:
      "The Page of Cups as the card of the day suggests that you may experience a sense of emotional openness, creativity, or intuition. This is a good time to explore your feelings and express your emotions. You may also receive a message or invitation that touches your heart. Trust in your intuition and allow yourself to be vulnerable. Stay curious and embrace the journey.",
  },
  {
    name: "Knight of Cups",
    suit: "Cups",
    rank: 12,
    imgSrc: "cardsRWS/C_KnightofCups.jpeg",
    interpretation:
      "The Knight of Cups as the card of the day suggests that you may experience a sense of passion, romance, or creativity. This is a good time to pursue your dreams and connect with others on a deeper level. You may also experience a sudden change or opportunity that ignites your emotions. Trust in your heart and take action towards your desires. Stay true to yourself and use your energy to create positive change in your life and the lives of those around you.",
  },
  {
    name: "Queen of Cups",
    suit: "Cups",
    rank: 13,
    imgSrc: "cardsRWS/C_QueenofCups.jpeg",
    interpretation:
      "The Queen of Cups as the card of the day suggests that you may experience a sense of emotional depth, intuition, or compassion. This is a good time to trust in your feelings and connect with others on a deeper level. You may also inspire others with your empathy and kindness. Use your energy to create a nurturing and supportive environment for yourself and those around you. Stay true to your heart and embrace the beauty of human connection.",
  },
  {
    name: "King of Cups",
    suit: "Cups",
    rank: 14,
    imgSrc: "cardsRWS/C_KingofCups.jpeg",
    interpretation:
      "The King of Cups as the card of the day suggests that you may experience a sense of emotional maturity, compassion, or wisdom. This is a good time to trust in your intuition and lead with empathy and kindness. You may also inspire others with your emotional intelligence and leadership. Use your energy to create a harmonious and supportive environment for yourself and those around you. Stay true to your values and allow your heart to guide you.",
  },
  {
    name: "Ace of Swords",
    suit: "Swords",
    rank: 1,
    imgSrc: "cardsRWS/S_AceofSwords.jpeg",
    interpretation:
      "The Ace of Swords as the card of the day suggests that you may experience a sense of mental clarity, tru }h, or { name: nings. This is a good time to analyze your thoughts and beliefs, and cut through any confusion or doubt. You may also experience a breakthrough or fresh perspective. Trust in your intellect and use your energy to pursue your goals with conviction. Stay focused on the truth and communicate with honesty and integrity.",
  },
  {
    name: "Two of Swords",
    suit: "Swords",
    rank: 2,
    imgSrc: "cardsRWS/S_2ofSwords.jpeg",
    interpretation:
      "The 2 of Swords as the card of the day suggests that you may experience a sense of indecision, confusion, or stalemate. This is a good time to take a step back and consider your options carefully. You may also need to let go of certain attachments or beliefs that are holding you back. Trust in your intuition and seek clarity before making any decisions. Stay balanced and avoid getting caught up in extremes.",
  },
  {
    name: "Three of Swords",
    suit: "Swords",
    rank: 3,
    imgSrc: "cardsRWS/S_3ofSwords.jpeg",
    interpretation:
      "The 3 of Swords as the card of the day suggests that you may experience a sense of heartbreak, pain, or betrayal. This is a good time to allow yourself to feel your emotions and process your feelings. You may also need to let go of certain attachments or relationships that no longer serve you. Trust in the healing process and seek support from loved ones. Remember to take care of yourself and stay o }en to { name: tunities for growth and healing.",
  },
  {
    name: "Four of Swords",
    suit: "Swords",
    rank: 4,
    imgSrc: "cardsRWS/S_4ofSwords.jpeg",
    interpretation:
      "The 4 of Swords as the card of the day suggests that you may experience a sense of rest, relaxation, or introspection. This is a good time to take a break and recharge your batteries. You may also need to reflect on your thoughts and emotions. Trust in the power of rest and allow yourself to recharge your energy. Use this time to gain clarity and perspective, and prepare for the next phase of your journey.",
  },
  {
    name: "Five of Swords",
    suit: "Swords",
    rank: 5,
    imgSrc: "cardsRWS/S_5ofSwords.jpeg",
    interpretation:
      "The 5 of Swords as the card of the day suggests that you may experience a sense of conflict, defeat, or loss. This is a good time to prioritize your own well-being and avoid getting caught up in drama or negative energy. You may also need to let go of certain attachments or relationships that are no longer serving you. Trust in your strength and avoid compromising your values or integrity. Stay focused on your goals and avoid unnecessary conflicts.",
  },
  {
    name: "Six of Swords",
    suit: "Swords",
    rank: 6,
    imgSrc: "cardsRWS/S_6ofSwords.jpeg",
    interpretation:
      "The 6 of Swords as the card of the day suggests that you may experience a sense of transition, change, or progress. This is a good time to move forward and leave behind the past. You may also need to  }eek a { name: ective or  }ind a { name: onment that supports your growth. Trust in the journey and be o }en to { name: tunities. Remember to take care of yourself and seek support from loved ones. Stay focused on your goals and trust in the process.",
  },
  {
    name: "Seven of Swords",
    suit: "Swords",
    rank: 7,
    imgSrc: "cardsRWS/S_7ofSwords.jpeg",
    interpretation:
      "The 7 of Swords as the card of the day suggests that you may experience a sense of deceit, trickery, or stealth. This is a good time to be cautious and avoid taking unnecessary risks. You may also need to protect your boundaries or resources. Trust in your intuition and avoid getting caught up in dishonesty or manipulation. Stay true to your values and avoid compromising your integrity.",
  },
  {
    name: "Eight of Swords",
    suit: "Swords",
    rank: 8,
    imgSrc: "cardsRWS/S_8ofSwords.jpeg",
    interpretation:
      "The 8 of Swords as the card of the day suggests that you may experience a sense of restriction, fear, or self-doubt. This is a good time to examine your thoughts and beliefs, and find ways to break free from limiting patterns. You may also need to let go of certain attachments or relationships that are holding you back. Trust in your ability to overcome obstacles and seek support from loved ones. Stay focused on your goals and avoid getting caught up in negative self-talk.",
  },
  {
    name: "Nine of Swords",
    suit: "Swords",
    rank: 9,
    imgSrc: "cardsRWS/S_9ofSwords.jpeg",
    interpretation:
      "The 9 of Swords as the card of the day suggests that you may experience a sense of anxiety, fear, or worry. This is a good time to examine your thoughts and find ways to manage your stress. You may also need to seek support from loved ones or a professional. Trust in your ability to overcome challenges and find solutions to your problems. Remember to take care of yourself and seek balance in your life. Stay focused on the positive aspects of your life and avoid getting caught up in negative self-talk.",
  },
  {
    name: "Ten of Swords",
    suit: "Swords",
    rank: 10,
    imgSrc: "cardsRWS/S_10ofSwords.jpeg",
    interpretation:
      "The 10 of Swords as the card of the day suggests that you may experience a sense of betrayal, pain, or endings. This is a good time to allow yourself to feel your emotions and process your feelings. You may also need to let go of certain attachments or relationships that are no longer serving you. Trust in the healing process and seek support from loved ones or a professional. Remember that endings often l }ad to { name: nings, and that you have the strength to move forward.",
  },
  {
    name: "Page of Swords",
    suit: "Swords",
    rank: 11,
    imgSrc: "cardsRWS/S_PageofSwords.jpeg",
    interpretation:
      "The Page of Swords as the card of the day suggests that you may need to be more o }en to { name:  and perspectives. It's a time to be curious, ask questions, and seek out information. However, be cautious of being too impulsive or jumping to conclusions without all the facts. Stay sharp and be prepared to face any challenges that come your way.",
  },
  {
    name: "Knight of Swords",
    suit: "Swords",
    rank: 12,
    imgSrc: "cardsRWS/S_KnightofSwords.jpeg",
    interpretation:
      "The Knight of Swords as the card of the day suggests that you may need to take swift and decisive action. It's a time to be assertive and confident in your decisions, but be careful not to become too aggressive or reckless. Stay focused on your goals and don't let distractions get in your way. Use your intellect and communication skills to your advantage.",
  },
  {
    name: "Queen of Swords",
    suit: "Swords",
    rank: 13,
    imgSrc: "cardsRWS/S_QueenofSwords.jpeg",
    interpretation:
      "The Queen of Swords as the card of the day suggests that you may need to be more objective and analytical in your thinking. It's a time to be honest and direct in your communication, but also to be compassionate and understanding. Trust your intuition and use your wisdom to make informed decisions. Be independent and self-reliant, but don't be afraid to seek support when you need it.",
  },
  {
    name: "King of Swords",
    suit: "Swords",
    rank: 14,
    imgSrc: "cardsRWS/S_KingofSwords.jpeg",
    interpretation:
      "The King of Swords as the card of the day suggests that you may need to take a logical and rational approach to any challenges or decisions you face. It's a time to be strategic and assertive in your communication, but also to remain fair and just. Use your intelligence and experience to make informed decisions and to lead with confidence. Be open to feedback and be willing to adjust your plans if necessary.",
  },
  {
    name: "Ace of Pentacles",
    suit: "Pentacles",
    rank: 1,
    imgSrc: "cardsRWS/P_AceofPentacles.jpeg",
    interpretation:
      "The Ace of Pentacles as the card of the day suggests that you may be presented  }ith a { name: tunity for material or financial growth. It's a time to focus on practical matters and to be grounded in your approach. Stay o }en to { name:  and be willing to take calculated risks. This is a good time to invest in yourself and your future. Trust in your abilities and take action towards your goals.",
  },
  {
    name: "Two of Pentacles",
    suit: "Pentacles",
    rank: 2,
    imgSrc: "cardsRWS/P_2ofPentacles.jpeg",
    interpretation:
      "The 2 of Pentacles as the card of the day suggests that you may need to find balance and adaptability in your life. It's a time to juggle multiple priorities and responsibilities, but also to remain flexible and open to change. Stay organized and prioritize your tasks, but don't be afraid to ask for help if you need it. This is a good time to be resourceful and creative in finding solutions to any challenges that arise.",
  },
  {
    name: "Three of Pentacles",
    suit: "Pentacles",
    rank: 3,
    imgSrc: "cardsRWS/P_3ofPentacles.jpeg",
    interpretation:
      "The 3 of Pentacles as the card of the day suggests that you may need to focus on collaboration and teamwork. It's a time to work with others towards a common goal, utilizing your unique skills and talents. Stay open to feedback and be willing to learn from others. This is a good time to establish strong partnerships and to build a solid foundation for future success. Trust in the process and celebrate your progress along the way.",
  },
  {
    name: "Four of Pentacles",
    suit: "Pentacles",
    rank: 4,
    imgSrc: "cardsRWS/P_4ofPentacles.jpeg",
    interpretation:
      "The 4 of Pentacles as the card of the day suggests that you may be holding onto something too tightly, whether it's material possessions or emotional attachments. It's a time to examine your relationship with security and stability, and to consider whether you may be limiting yourself by clinging to something that no longer serves you. Be open to change and let go of any fears or anxieties that may be holding you back. This is a good time to focus on abundance and generosity, rather than scarcity and hoarding.",
  },
  {
    name: "Five of Pentacles",
    suit: "Pentacles",
    rank: 5,
    imgSrc: "cardsRWS/P_5ofPentacles.jpeg",
    interpretation:
      "The 5 of Pentacles as the card of the day suggests that you may be experiencing a sense of lack or hardship, whether it's financial or emotional. It's a time to focus on finding support and seeking help from others. Don't be afraid to reach out and ask for assistance if you need it. This is a good time to practice gratitude and to focus on the abundance that is already present in your life. Stay hopeful and trust that better times are ahead.",
  },
  {
    name: "Six of Pentacles",
    suit: "Pentacles",
    rank: 6,
    imgSrc: "cardsRWS/P_6ofPentacles.jpeg",
    interpretation:
      "The 6 of Pentacles as the card of the day suggests that you may be in a position to give or receive generosity and support. It's a time to focus on balance and fairness in your relationships and interactions with others. Be open to both giving and receiving help, and to finding ways to support those in need. This is a good time to practice generosity and to give back to your community. Trust in the abundance of the universe and know that your actions will be rewarded in kind.",
  },
  {
    name: "Seven of Pentacles",
    suit: "Pentacles",
    rank: 7,
    imgSrc: "cardsRWS/P_7ofPentacles.jpeg",
    interpretation:
      "The 7 of Pentacles as the card of the day suggests that you may need to take a step back and assess your progress towards your goals. It's a time to focus on patience and perseverance, and to trust in the process of growth and development. Take stock of your resources and investments, and consider whether any adjustments need to be made. This is a good time to stay committed to your long-term vision, even if progress may seem slow. Trust that your hard work will pay off in the end.",
  },
  {
    name: "Eight of Pentacles",
    suit: "Pentacles",
    rank: 8,
    imgSrc: "cardsRWS/P_8ofPentacles.jpeg",
    interpretation:
      "The 8 of Pentacles as the card of the day suggests that you may need to focus on hard work and dedication towards your goals. It's a time to hone your skills and to commit yourself to your craft. Stay focused on the task at hand and be willing to put in the effort to achieve mastery. This is a good time to invest in your education or training, or to seek out mentorship from those with more experience. Trust that your hard work will pay off in the form of success and recognition.",
  },
  {
    name: "Nine of Pentacles",
    suit: "Pentacles",
    rank: 9,
    imgSrc: "cardsRWS/P_9ofPentacles.jpeg",
    interpretation:
      "The 9 of Pentacles as the card of the day suggests that you may be experiencing a sense of financial or material abundance and security. It's a time to enjoy the fruits of your labor and to appreciate the luxuries and comforts that come with it. Take time to indulge in self-care and to enjoy the pleasures of life. This is a good time to focus on gratitude and to share your abundance with others. Trust in your own abilities and know that you have created a stable foundation for yourself.",
  },
  {
    name: "Ten of Pentacles",
    suit: "Pentacles",
    rank: 10,
    imgSrc: "cardsRWS/P_10ofPentacles.jpeg",
    interpretation:
      "The 10 of Pentacles as the card of the day suggests that you may be experiencing a sense of financial or material prosperity and stability within your family or community. It's a time to celebrate the abundance that you have created together and to appreciate the legacy that has been passed down to you. This is a good time to focus on family values and traditions, and to create a solid foundation for future generations. Trust in the support and security that comes from your community and family ties.",
  },
  {
    name: "Page of Pentacles",
    suit: "Pentacles",
    rank: 11,
    imgSrc: "cardsRWS/P_PageofPentacles.jpeg",
    interpretation:
      "The Page of Pentacles as the card of the day suggests that you may be star }ing a { name: re or lear }ing a { name:  that has the potential to bring financial or material rewards. It's a time to be curious and open-minded, and to ap }roach { name: tunities with a sense of enthusiasm and determination. Stay grounded and practical in your approach, and be willing to put in the effort to achieve your goals. This is a good time to invest in your education or training, or to seek out mentorship from those with more experience. Trust in your own abilities and stay committed to your long-term vision.",
  },
  {
    name: "Knight of Pentacles",
    suit: "Pentacles",
    rank: 12,
    imgSrc: "cardsRWS/P_KnightofPentacles.jpeg",
    interpretation:
      "The Knight of Pentacles as the card of the day suggests that you may need to focus on practical matters and to take a slow and steady approach towards your goals. It's a time to be patient and methodical in your actions, and to stay committed to the task at hand. This is a good time to focus on building a solid foundation for your future, whether it's in your career, finances, or personal life. Stay grounded and practical in your approach, and be willing to put in the effort to achieve your goals. Trust in the process and know that your hard work will pay off in the end.",
  },
  {
    name: "Queen of Pentacles",
    suit: "Pentacles",
    rank: 13,
    imgSrc: "cardsRWS/P_QueenofPentacles.jpeg",
    interpretation:
      "The Queen of Pentacles as the card of the day suggests that you may need to focus on nurturing and providing for yourself and those around you. It's a time to create a stable and comfortable environment, whether it's in your home, career, or personal life. This is a good time to focus on self-care and to prioritize your physical and emotional well-being. Stay grounded and practical in your approach, and be willing to invest in the things that bring you joy and security. Trust in your own abilities and know that you have the resources and support to create a fulfilling and abundant life.",
  },
  {
    name: "King of Pentacles",
    suit: "Pentacles",
    rank: 14,
    imgSrc: "cardsRWS/P_KingofPentacles.jpeg",
    interpretation:
      "The King of Pentacles as the card of the day suggests that you may need to focus on stability and security in your finances and material possessions. It's a time to take a practical and grounded approach towards your goals, and to make wise investments that will bring long-term rewards. This is a good time to focus on building a solid foundation for your future, whether it's in your career or personal life. Stay confident and determined in your actions, and be willing to take calculated risks to achieve your goals. Trust in your own abilities and know that you have the resources and support to create a successful and abundant life.",
  },
];

function getRandom(num) {
  const randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("draw").onclick = function () {
  const index = getRandom(78);
  const currentCard = deck[index];

  document.getElementById("display").innerHTML =
    "<img src='cardsRWS/" +
    currentCard.image +
    ".jpeg'/><h3>" +
    currentCard.name +
    "</h3><p>" +
    currentCard.interpretation +
    "</p>";
};



// Cards from https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck
// Authorship: Arthur Edward Waite, Artist: Pamela Colman Smith.
// Waite was the copyright holder and he died in 1942. His renwed copyright lasted until 1966, at which point the deck became part of the public domain.