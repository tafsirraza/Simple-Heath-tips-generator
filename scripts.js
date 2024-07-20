const tips = [
    "Drink plenty of water.",
    "Get at least 8 hours of sleep.",
    "Exercise regularly.",
    "Eat more fruits and vegetables.",
    "Take breaks and avoid stress.",
    "Practice good hygiene.",
    "Maintain a balanced diet.",
    "Avoid smoking and excessive alcohol.",
    "Stay positive and meditate.",
    "Keep a regular schedule."
];

document.getElementById('generate-tip').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById('health-tip').textContent = tips[randomIndex];
});

