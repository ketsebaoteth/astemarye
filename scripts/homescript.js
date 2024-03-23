let circles = [];
let isZoomedIn = false;

function setZoomIn() {
    // Set the isZoomedIn property to true
    isZoomedIn = true;

    // Add event listeners to track mouse movement
    document.addEventListener("mousemove", zoomIn);
    document.addEventListener("touchmove", zoomIn);
}

function zoomIn(e) {
    if (isZoomedIn) {
        // Get the cursor position
        const x = e.clientX || e.touches[0].clientX;
        const y = e.clientY || e.touches[0].clientY;

        // Calculate the zoomed-in position based on your desired zoom level
        // For example, adjust the scale factor (e.g., 2 for 2x zoom)
        const zoomFactor = 2;
        const zoomedX = x * zoomFactor;
        const zoomedY = y * zoomFactor;

        // Apply the zoomed-in effect to your element (e.g., an image)
        // Update the position or style as needed
        // Example: myElement.style.transform = `scale(${zoomFactor}) translate(-${zoomedX}px, -${zoomedY}px)`;
    }
}

function unsetZoomIn() {
    // Set the isZoomedIn property to false
    isZoomedIn = false;

    // Remove the event listeners
    document.removeEventListener("mousemove", zoomIn);
    document.removeEventListener("touchmove", zoomIn);

    // Reset any styles or transformations applied during zoom
    // Example: myElement.style.transform = "none";
}


let circlecount = 50;

function focuscircle(){
    document.querySelector(".followfilter").style.width = 50 + "px";
    document.querySelector(".followfilter").style.height = 50 + "px";
}

function unfocuscircle(){
    document.querySelector(".followfilter").style.width = 100 + "px";
    document.querySelector(".followfilter").style.height = 100 + "px";
}
document.addEventListener("mousemove", function(){
    zoomIn(event)
    document.querySelector(".followfilter").style.left = event.clientX + window.scrollX+ "px";
    document.querySelector(".followfilter").style.top = event.clientY + window.scrollY+ "px";
})

document.addEventListener("mousedown",function(){
    document.querySelector(".blur").style.backdropFilter = "blur(20px)"
})
document.addEventListener("mouseup",function(){
    document.querySelector(".blur").style.backdropFilter = "blur(40px)"
})


document.querySelector(".welcometext").addEventListener("mouseenter",function(){
    document.querySelector(".followfilter").style.width = "200px";
    document.querySelector(".followfilter").style.height = "200px";

})
document.querySelector(".welcometext").addEventListener("mouseleave",function(){
    document.querySelector(".followfilter").style.width = "100px";
    document.querySelector(".followfilter").style.height = "100px";

})

let fadeinelements = document.querySelectorAll(".fadein")

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       if(entry.isIntersecting){
        entry.target.classList.add("animated")
       }else{
        entry.target.classList.remove("animated")
       }
    });
});

fadeinelements.forEach(element => {
    observer.observe(element)
});

let fadeleft = document.querySelectorAll(".fadeleft")

let leftobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       if(entry.isIntersecting){
        entry.target.classList.add("animateleft")
       }else{
        entry.target.classList.remove("animateleft")
       }
    });
});

fadeleft.forEach(element => {
    leftobserver.observe(element)
});
document.querySelectorAll(".important").forEach(element =>{
    element.addEventListener("mouseenter", function(){
        focuscircle()
        setZoomIn()
    })
    element.addEventListener("mouseleave", function(){
        unfocuscircle()
        unsetZoomIn()
    })
})

let upobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       if(entry.isIntersecting){
        entry.target.classList.add("bottomupnanimated")
       }else{
        entry.target.classList.remove("bottomupnanimated")
       }
    });
});

let fadeup = document.querySelectorAll(".testimony")
fadeup.forEach(element => {
    upobserver.observe(element)
})