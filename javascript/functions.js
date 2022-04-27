var images = [];
images.push("https://drive.google.com/uc?export=view&id=1HmyRd1UBlxOt0S_LE5LWq7-W7bEMAkFA")
images.push("")
setTimeout("changeImage()", 30000);
var x = 0;

function changeImage() {
    document.getElementById("img").src=images[x];
    x++;
}