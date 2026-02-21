console.log("Anime Website Loaded Successfully!");

let isPlaying = false;
const music = document.getElementById("bgMusic");
const button = document.querySelector(".music-toggle");

music.volume = 0; // start silent

function fadeIn(audio) {
    let vol = 0;
    audio.volume = 0;
    const fade = setInterval(() => {
        if (vol < 0.4) {
            vol += 0.02;
            audio.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 100);
}

function fadeOut(audio) {
    let vol = audio.volume;
    const fade = setInterval(() => {
        if (vol > 0.02) {
            vol -= 0.02;
            audio.volume = vol;
        } else {
            audio.pause();
            clearInterval(fade);
        }
    }, 100);
}

function toggleMusic() {
    if (isPlaying) {
        fadeOut(music);
        button.classList.remove("playing");
    } else {
        music.play();
        fadeIn(music);
        button.classList.add("playing");
    }

    isPlaying = !isPlaying;
}

const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        
        // If this panel is already active → collapse it
        if (panel.classList.contains("active")) {
            panel.classList.remove("active");
        } else {
            // Remove active from all
            panels.forEach(p => p.classList.remove("active"));
            // Add active to clicked one
            panel.classList.add("active");
        }

    });
});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

