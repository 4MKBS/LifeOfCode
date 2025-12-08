// Web Audio API basics

// Create audio context
const ctx = new AudioContext();

// Create oscillator
const osc = ctx.createOscillator();
osc.type = 'sine'; // sine, square, sawtooth, triangle
osc.frequency.value = 440; // Hz (A4 note)

// Create gain node for volume control
const gain = ctx.createGain();
gain.gain.value = 0.3; // 30% volume

// Connect nodes
osc.connect(gain);
gain.connect(ctx.destination);

// Start and stop
osc.start(ctx.currentTime);
osc.stop(ctx.currentTime + 2); // Stop after 2 seconds

// Optional: Add frequency modulation
const lfo = ctx.createOscillator();
lfo.frequency.value = 5; // 5 Hz modulation rate
const lfoGain = ctx.createGain();
lfoGain.gain.value = 50; // 50 Hz variation
lfo.connect(lfoGain);
lfoGain.connect(osc.frequency);
lfo.start(ctx.currentTime);
lfo.stop(ctx.currentTime + 2);
