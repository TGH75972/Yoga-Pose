const poses = {
    beginner: [
        {
            name: "Mountain Pose",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_b-tuKm9s_2N8QJz8Y53i4EfuDp1O5pNb6g&s",
            description: "A fundamental pose that improves posture and balance."
        },
        {
            name: "Downward Dog",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Downward-Facing-Dog.JPG",
            description: "A common pose that stretches the whole body."
        }
    ],
    intermediate: [
        {
            name: "Warrior II",
            image: "https://cdn.prod.website-files.com/61384703bca2db472ca04cfa/648d7618416218e8f0198717_Learning-Yoga-How-to-Do-Warrior-2.jpg",
            description: "Strengthens the legs and core while improving balance."
        },
        {
            name: "Triangle Pose",
            image: "https://www.artofliving.org/sites/www.artofliving.org/files/styles/facebook_thumb/public/unity2/blog_image/triangle-pose.jpg?itok=MgtyIsGF",
            description: "Stretches and strengthens the legs and torso."
        }
    ],
    advanced: [
        {
            name: "Handstand",
            image: "https://images.ctfassets.net/p0sybd6jir6r/OInCUYTtDVmMlhxngCpUw/3a048a6f530a8b4b3722ce0a92311351/Handstand_Away_from_the_wall_1-6058c9aacf2d30e737f0ad5483d265d3.jpg?w=1600&fm=webp&q=70",
            description: "An advanced pose that builds upper body strength and balance."
        },
        {
            name: "Scorpion Pose",
            image: "https://assets.cntraveller.in/photos/60ba2172002baf698cc6765d/16:9/w_1024%2Cc_limit/Scorpion-pose-1366x768.jpg",
            description: "A challenging pose that requires flexibility and strength."
        }
    ]
};

document.getElementById('suggest-pose').addEventListener('click', function() {
    const difficulty = document.getElementById('difficulty').value;
    const poseList = poses[difficulty];
    const randomPose = poseList[Math.floor(Math.random() * poseList.length)];

    document.getElementById('pose-name').textContent = randomPose.name;
    document.getElementById('pose-image').src = randomPose.image;
    document.getElementById('pose-image').alt = randomPose.name;
    document.getElementById('pose-description').textContent = randomPose.description;
});
