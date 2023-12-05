// document.addEventListener("DOMContentLoaded", function () {
//     const links = document.querySelectorAll("a");
//     const overlay = document.createElement("div");
//     overlay.classList.add("transition-overlay");
//     document.body.appendChild(overlay);

//     links.forEach((link) => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault();

//             const targetUrl = link.getAttribute("href");

//             // Add the animate class to trigger the overlay animation
//             overlay.classList.add("animate");

//             // Wait for the overlay animation to complete before redirecting
//             setTimeout(() => {
//                 // Redirect to the new page
//                 window.location.href = targetUrl;
//             }, 500); // Adjust the delay based on overlay animation duration
//         });
//     });

//     // Event listener to remove the animate class after overlay animation ends
//     overlay.addEventListener("animationend", () => {
//         overlay.classList.remove("animate");

//         // Add a class to the body to trigger the fade-in effect on the new page content
//         document.body.classList.add("fade-in");
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Get the body element
//     const body = document.querySelector(".body");

//     // Add a class to apply the shake animation
//     body.classList.add("shake-animation");

//     // Remove the class after the animation duration to avoid repeating the animation on subsequent loads
//     setTimeout(() => {
//         body.classList.remove("shake-animation");
//     }, 500); // Adjust the timeout to match the animation duration
// });