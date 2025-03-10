document.addEventListener("DOMContentLoaded", function () {
    let likeCount = localStorage.getItem("likeCount") || 49;
    document.getElementById("likeCount").textContent = likeCount;

    document.getElementById("likeBtn").addEventListener("click", function (event) {
        event.preventDefault();
        likeCount++;
        document.getElementById("likeCount").textContent = likeCount;
        localStorage.setItem("likeCount", likeCount);
    });

    document.getElementById("shareBtn").addEventListener("click", function (event) {
        event.preventDefault();
        const currentURL = window.location.href;
        
        const socialLinks = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
            twitter: `https://twitter.com/intent/tweet?url=${currentURL}`,
            linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}`
        };

        const shareOptions = `
            <div id="share-options" style="position: absolute; background: white; padding: 10px; border: 1px solid #ddd;">
                <a href="${socialLinks.facebook}" target="_blank" style="margin-right: 10px;">
                    <i class="icon-facebook"></i>
                </a>
                <a href="${socialLinks.twitter}" target="_blank" style="margin-right: 10px;">
                    <i class="icon-twitter"></i>
                </a>
                <a href="${socialLinks.linkedin}" target="_blank">
                    <i class="icon-linkedin"></i>
                </a>
            </div>
        `;

        document.getElementById("shareBtn").insertAdjacentHTML("afterend", shareOptions);
    });
});



/* 
document.addEventListener("DOMContentLoaded", function () {
    let likeCount = localStorage.getItem("likeCount") || 49;
    document.getElementById("likeCount").textContent = likeCount;

    document.getElementById("likeBtn").addEventListener("click", function (event) {
        event.preventDefault();
        likeCount++;
        document.getElementById("likeCount").textContent = likeCount;
        localStorage.setItem("likeCount", likeCount);
    });

    document.getElementById("shareBtn").addEventListener("click", function (event) {
        event.preventDefault();
        const currentURL = window.location.href;
        const shareText = encodeURIComponent("Check this out!");
        
        const socialLinks = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
            twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${currentURL}`,
            linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}&title=${shareText}`
        };

        const shareOptions = `
            <div id="share-options" style="position: absolute; background: white; padding: 10px; border: 1px solid #ddd;">
                <a href="${socialLinks.facebook}" target="_blank">Facebook</a><br>
                <a href="${socialLinks.twitter}" target="_blank">Twitter</a><br>
                <a href="${socialLinks.linkedin}" target="_blank">LinkedIn</a>
            </div>
        `;

        document.getElementById("shareBtn").insertAdjacentHTML("afterend", shareOptions);
    });
});
*/