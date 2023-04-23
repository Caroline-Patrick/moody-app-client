import React from 'react'

export const HowToWheel = () => {
  return (
    <div><Card sx={{ padding: '1rem', width: '50%', borderRadius: '1rem' }}>
    <Typography variant="h6" gutterBottom>
      How to use the Mood Wheel:
    </Typography>
    <Typography component="div">
      <ol>
        <li>Start at the inner wheel where Sadness, Surprise, Love, Joy, Fear, and Anger are located.</li>
        <li>Choose the option that feels most accurate.</li>
        <li>Move out to the second tier of emotions and identify the emotion that fits best.</li>
        <li>Finally, arrive at the third tier of emotions and select the emotion that resonates most.</li>
        <li>A box to the right appears with the name and definition of the emotion selected. Write any thoughts, feelings, sensations, etc. that might be coming up for you.</li>
        <li>Once you're finished, you can save your log!</li>
      </ol>
    </Typography>
    <Typography variant="h6" gutterBottom>
      Notes:
    </Typography>
    <Typography component="div">
      <ul>
        <li>When you click on a word from the outermost circle, you'll see a definition of the emotion appear in a box to the right</li>
        <li>You can view your log history by clicking on view log history</li>
        <li>The log history is displayed with the emotional color group, so at a glance, you can see what emotions you've been feeling over time</li>
      </ul>
    </Typography>
  </Card></div>
  )
}
