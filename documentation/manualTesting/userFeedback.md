# User Testing Feedback (from family and friends)
## Issue: When player gets sequence wrong - replay of sequence goes haywire - not playing in nice order 6/2/19
### Resolution
I tested this issue myself after receiving feedback that this was happening. When the player got a colour wrong in the middle 
of the sequence the replay would not proceed in a nice order, there was overlapping flashes etc.
When the player gets a colour wrong on the last one of the sequence there is no issue.
To see what was happening I added console.log(color) statements in the checkSequence function and used debugger in Chrome Dev Tools to go through the 
process step by step.